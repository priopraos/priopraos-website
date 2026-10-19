'use strict';

const { app } = require('@azure/functions');
const https   = require('https');
const net     = require('net');

const ENQUIRY_LABELS = {
  'institutional-partnership': 'Institutional Partnership',
  'international-deployment' : 'International Deployment',
  'investment'               : 'Investment',
  'research-collaboration'   : 'Research Collaboration',
  'media'                    : 'Media',
  'other'                    : 'Other',
};

// Field limits. The API applies its own as well; these stop an oversized body
// being forwarded at all.
const LIMITS = { name: 200, email: 254, organisation: 200, role: 100, message: 5000 };

// Per-visitor limit, held in this instance's memory (19 Oct 2026). Every
// message reaches the API from this function's address, so the API's own
// per-address limit counts all prioraos.com visitors together; this one counts
// each visitor. An instance that restarts forgets, which is acceptable: the
// API's limits still apply behind it.
const PER_VISITOR = 5;
const WINDOW_MS   = 60 * 60 * 1000;
const seen = new Map();

function isPublic(ip) {
  if (!net.isIP(ip)) return false;
  if (net.isIPv4(ip)) {
    const [a, b] = ip.split('.').map(Number);
    return !(a === 10 || a === 127 || a === 0 || (a === 169 && b === 254) ||
             (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) ||
             (a === 100 && b >= 64 && b <= 127));
  }
  const l = ip.toLowerCase();
  return !(l === '::1' || l.startsWith('fc') || l.startsWith('fd') || l.startsWith('fe80'));
}

// The front end APPENDS the address it saw to any X-Forwarded-For the visitor
// sent, so read from the right and take the first public address. The leftmost
// entries are whatever the visitor typed.
function visitorIp(request) {
  const parts = (request.headers.get('x-forwarded-for') || '').split(',')
    .map((p) => p.trim())
    .map((p) => (p.startsWith('[') ? p.slice(1, p.indexOf(']')) : (p.split(':').length === 2 ? p.split(':')[0] : p)))
    .filter(Boolean);
  for (let i = parts.length - 1; i >= 0; i--) {
    if (isPublic(parts[i])) return parts[i];
  }
  return parts[parts.length - 1] || 'unknown';
}

function allow(ip) {
  const now = Date.now();
  const recent = (seen.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= PER_VISITOR) { seen.set(ip, recent); return false; }
  recent.push(now);
  seen.set(ip, recent);
  if (seen.size > 5000) seen.clear();   // bounded memory under a flood
  return true;
}

function post(url, payload) {
  return new Promise((resolve, reject) => {
    const bodyStr = JSON.stringify(payload);
    const parsed  = new URL(url);
    const opts = {
      hostname: parsed.hostname,
      port    : 443,
      path    : parsed.pathname,
      method  : 'POST',
      timeout : 15000,
      headers : {
        'Content-Type'  : 'application/json',
        'Content-Length': Buffer.byteLength(bodyStr),
      },
    };
    const req = https.request(opts, (res) => {
      let data = '';
      res.on('data', (d) => { data += d; });
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', reject);
    req.write(bodyStr);
    req.end();
  });
}

const FALLBACK = 'Your enquiry could not be sent. Please email us at contact@prioraos.com';

app.http('contact', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    let body;
    try {
      body = await request.json();
    } catch {
      return { status: 400, jsonBody: { error: 'Invalid JSON' } };
    }

    const { name, email, organisation, role, enquiryType, message, website } = body || {};

    // Honeypot: a hidden field people never fill. Thank the bot and drop it.
    if (typeof website === 'string' && website.trim()) {
      return { status: 200, jsonBody: { success: true } };
    }

    const fields = { name, email, organisation, role, message };
    for (const [key, value] of Object.entries(fields)) {
      if (typeof value !== 'string' || !value.trim()) {
        return { status: 400, jsonBody: { error: 'All fields are required.' } };
      }
      if (value.length > LIMITS[key]) {
        return { status: 400, jsonBody: { error: `Please shorten the ${key} field.` } };
      }
    }
    if (!Object.prototype.hasOwnProperty.call(ENQUIRY_LABELS, enquiryType)) {
      return { status: 400, jsonBody: { error: 'Please choose an enquiry type.' } };
    }

    if (!allow(visitorIp(request))) {
      return { status: 429, jsonBody: { error: 'Too many enquiries from this connection. Please try again later, or email us at contact@prioraos.com' } };
    }

    const subject = `[PrioraOS] ${ENQUIRY_LABELS[enquiryType]} - ${name.replace(/\s+/g, ' ').trim()}`;

    try {
      // brand: this form lives on prioraos.com, so the acknowledgement the
      // enquirer receives must be PrioraOS-branded. Without it they were sent a
      // Locum Station email about a locum marketplace they never asked about.
      const result = await post('https://api.locumstation.co.uk/api/contact', {
        name, email, organisation, role, subject, message, brand: 'prioraos',
      });
      context.log(`Proxied contact form: status=${result.status}`);
      // Report what actually happened. This used to answer "success" whatever
      // the API said, so a message that was never delivered was thanked.
      if (result.status === 422) {
        return { status: 400, jsonBody: { error: 'Please check your email address.' } };
      }
      if (result.status === 429) {
        return { status: 429, jsonBody: { error: 'Too many enquiries at the moment. Please try again later, or email us at contact@prioraos.com' } };
      }
      if (result.status < 200 || result.status >= 300) {
        return { status: 502, jsonBody: { error: FALLBACK } };
      }
    } catch (err) {
      context.error('Proxy error:', err && err.message ? err.message : String(err));
      return { status: 502, jsonBody: { error: FALLBACK } };
    }

    return { status: 200, jsonBody: { success: true } };
  },
});
