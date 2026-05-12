'use strict';

const { app } = require('@azure/functions');
const https   = require('https');

const ENQUIRY_LABELS = {
  'institutional-partnership': 'Institutional Partnership',
  'international-deployment' : 'International Deployment',
  'investment'               : 'Investment',
  'research-collaboration'   : 'Research Collaboration',
  'media'                    : 'Media',
  'other'                    : 'Other',
};

function post(url, payload) {
  return new Promise((resolve, reject) => {
    const bodyStr = JSON.stringify(payload);
    const parsed  = new URL(url);
    const opts = {
      hostname: parsed.hostname,
      port    : 443,
      path    : parsed.pathname,
      method  : 'POST',
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
    req.on('error', reject);
    req.write(bodyStr);
    req.end();
  });
}

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

    const { name, email, organisation, role, enquiryType, message } = body || {};

    if (!name || !email || !organisation || !role || !enquiryType || !message) {
      return { status: 400, jsonBody: { error: 'All fields are required.' } };
    }

    const subject = `[PrioraOS] ${ENQUIRY_LABELS[enquiryType] || enquiryType} — ${name}`;

    try {
      const result = await post('https://api.locumstation.co.uk/api/contact', {
        name, email, organisation, role, subject, message,
      });
      context.log(`Proxied contact form: status=${result.status}`);
    } catch (err) {
      context.log.error('Proxy error:', err && err.message ? err.message : String(err));
    }

    return { status: 200, jsonBody: { success: true } };
  },
});
