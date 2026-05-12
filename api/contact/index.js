/**
 * PrioraOS contact form handler.
 * Zero npm dependencies — calls Azure Communication Services Email REST API
 * directly with HMAC-SHA256 signing (Node.js built-in crypto + https).
 */
'use strict';
const https  = require('https');
const crypto = require('crypto');

/* ── ACS HMAC-SHA256 signed request ─────────────────────────────────────── */
function acsRequest({ endpoint, accessKey, from, to, subject, html }) {
  const base     = endpoint.replace(/\/$/, '');
  const url      = new URL(base);
  const hostname = url.hostname;
  const apiPath  = '/emails:send?api-version=2023-03-31';

  const bodyStr     = JSON.stringify({
    senderAddress: from,
    recipients: { to: [{ address: to }] },
    content: { subject, html },
  });

  const utcDate     = new Date().toUTCString();
  const contentHash = crypto.createHash('sha256').update(bodyStr, 'utf8').digest('base64');

  // ACS signed headers order: x-ms-date;host;x-ms-content-sha256
  const stringToSign = ['POST', apiPath, `${utcDate};${hostname};${contentHash}`].join('\n');
  const keyBytes     = Buffer.from(accessKey, 'base64');
  const signature    = crypto.createHmac('sha256', keyBytes).update(stringToSign, 'utf8').digest('base64');

  const reqHeaders = {
    'Content-Type'          : 'application/json',
    'Content-Length'        : Buffer.byteLength(bodyStr),
    'host'                  : hostname,
    'x-ms-date'             : utcDate,
    'x-ms-content-sha256'   : contentHash,
    'Authorization'         : `HMAC-SHA256 SignedHeaders=x-ms-date;host;x-ms-content-sha256&Signature=${signature}`,
    'Repeatability-Request-ID'   : crypto.randomUUID(),
    'Repeatability-First-Sent'   : utcDate,
  };

  return new Promise((resolve, reject) => {
    const req = https.request(
      { hostname, port: 443, path: apiPath, method: 'POST', headers: reqHeaders },
      (res) => {
        let data = '';
        res.on('data', (d) => { data += d; });
        res.on('end', () => {
          if (res.statusCode === 202) {
            resolve({ ok: true });
          } else {
            reject(new Error(`ACS HTTP ${res.statusCode}: ${data.slice(0, 300)}`));
          }
        });
      },
    );
    req.on('error', reject);
    req.write(bodyStr);
    req.end();
  });
}

/* ── HTML escaping ───────────────────────────────────────────────────────── */
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* ── Main handler ────────────────────────────────────────────────────────── */
module.exports = async function (context, req) {
  const { name, email, organisation, role, enquiryType, message } = req.body || {};

  if (!name || !email || !organisation || !role || !enquiryType || !message) {
    context.res = {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'All fields are required.' }),
    };
    return;
  }

  const connStr = process.env.AZURE_COMMUNICATION_CONNECTION_STRING || '';
  const inbox   = process.env.CONTACT_EMAIL || 'contact@prioraos.com';
  const from    = process.env.SMTP_FROM     || 'DoNotReply@prioraos.com';

  const enquiryLabels = {
    'institutional-partnership': 'Institutional Partnership',
    'international-deployment' : 'International Deployment',
    'investment'               : 'Investment',
    'research-collaboration'   : 'Research Collaboration',
    'media'                    : 'Media',
    'other'                    : 'Other',
  };
  const enquiryLabel = enquiryLabels[enquiryType] || enquiryType;

  if (connStr) {
    const epMatch  = connStr.match(/endpoint=([^;]+)/i);
    const keyMatch = connStr.match(/accesskey=([^;]+)/i);

    if (epMatch && keyMatch) {
      const endpoint  = epMatch[1];
      const accessKey = keyMatch[1];

      const teamHtml = `
<div style="font-family:Arial,sans-serif;max-width:620px;color:#1a1a1a">
  <div style="background:#003087;padding:24px 28px;border-radius:8px 8px 0 0">
    <h2 style="color:#fff;margin:0;font-size:18px">New Enquiry — prioraos.com</h2>
  </div>
  <div style="background:#f8f9fc;padding:28px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px">
    <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
      <tr><td style="padding:8px 12px;font-weight:600;width:130px;border:1px solid #e5e7eb">Name</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${esc(name)}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;background:#f3f4f6;border:1px solid #e5e7eb">Email</td><td style="padding:8px 12px;background:#f3f4f6;border:1px solid #e5e7eb">${esc(email)}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;border:1px solid #e5e7eb">Organisation</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${esc(organisation)}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;background:#f3f4f6;border:1px solid #e5e7eb">Role</td><td style="padding:8px 12px;background:#f3f4f6;border:1px solid #e5e7eb">${esc(role)}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;border:1px solid #e5e7eb">Enquiry Type</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${esc(enquiryLabel)}</td></tr>
    </table>
    <div style="background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:16px">
      <p style="font-weight:600;margin:0 0 8px;color:#003087">Message</p>
      <p style="margin:0;line-height:1.7;white-space:pre-wrap">${esc(message)}</p>
    </div>
    <p style="margin:16px 0 0;font-size:11px;color:#9ca3af">via prioraos.com/contact</p>
  </div>
</div>`;

      const confirmHtml = `
<div style="font-family:Arial,sans-serif;max-width:620px;color:#1a1a1a">
  <div style="background:#003087;padding:24px 28px;border-radius:8px 8px 0 0">
    <h2 style="color:#fff;margin:0;font-size:18px">Enquiry Received — PrioraOS</h2>
  </div>
  <div style="background:#f8f9fc;padding:28px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px">
    <p>Hi ${esc(name)},</p>
    <p>Thank you for getting in touch with PrioraOS. We have received your enquiry and will respond as soon as possible.</p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
    <p style="font-size:12px;color:#9ca3af">PrioraOS · contact@prioraos.com</p>
  </div>
</div>`;

      try {
        await Promise.all([
          acsRequest({ endpoint, accessKey, from, to: inbox, subject: `[PrioraOS] ${enquiryLabel} — ${name}`, html: teamHtml }),
          acsRequest({ endpoint, accessKey, from, to: email, subject: 'Enquiry received — PrioraOS', html: confirmHtml }),
        ]);
        context.log(`Contact form emails sent: ${email}`);
      } catch (err) {
        context.log.error('ACS error:', err && err.message ? err.message : String(err));
        // Non-fatal — still return success
      }
    }
  } else {
    context.log.warn('AZURE_COMMUNICATION_CONNECTION_STRING not configured');
  }

  context.res = {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true }),
  };
};


/* ── ACS REST helper ─────────────────────────────────────────────────────── */
function acsRequest({ endpoint, accessKey, from, to, subject, html }) {
  // Parse endpoint (strip trailing slash)
  const base     = endpoint.replace(/\/$/, '');
  const apiPath  = '/emails:send?api-version=2023-03-31';
  const hostname = new URL(base).hostname;

  const body = JSON.stringify({
    senderAddress: from,
    recipients: { to: [{ address: to }] },
    content: { subject, html },
  });

  const date        = new Date().toUTCString();
  const contentHash = crypto.createHash('sha256').update(body, 'utf8').digest('base64');
  const stringToSign = `POST\n${apiPath}\n${date};${hostname};${contentHash}`;
  const key         = Buffer.from(accessKey, 'base64');
  const signature   = crypto.createHmac('sha256', key).update(stringToSign, 'utf8').digest('base64');

  const headers = {
    'Content-Type'          : 'application/json',
    'Content-Length'        : Buffer.byteLength(body),
    'x-ms-date'             : date,
    'x-ms-content-sha256'   : contentHash,
    'Authorization'         : `HMAC-SHA256 SignedHeaders=x-ms-date;host;x-ms-content-sha256&Signature=${signature}`,
  };

  return new Promise((resolve, reject) => {
    const req = https.request({ hostname, path: apiPath, method: 'POST', headers }, (res) => {
      let data = '';
      res.on('data', (d) => { data += d; });
      res.on('end', () => {
        // 202 Accepted = email queued successfully
        if (res.statusCode === 202) resolve({ status: res.statusCode });
        else reject(new Error(`ACS HTTP ${res.statusCode}: ${data}`));
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

/* ── HTML escape ─────────────────────────────────────────────────────────── */
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* ── Main handler ────────────────────────────────────────────────────────── */
module.exports = async function (context, req) {
  const { name, email, organisation, role, enquiryType, message } = req.body || {};

  if (!name || !email || !organisation || !role || !enquiryType || !message) {
    context.res = {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'All fields are required.' }),
    };
    return;
  }

  const connStr = process.env.AZURE_COMMUNICATION_CONNECTION_STRING;
  const inbox   = process.env.CONTACT_EMAIL  || 'contact@prioraos.com';
  const from    = process.env.SMTP_FROM      || 'DoNotReply@prioraos.com';

  if (connStr) {
    // Parse connection string
    const endpointMatch  = connStr.match(/endpoint=([^;]+)/i);
    const accessKeyMatch = connStr.match(/accesskey=([^;]+)/i);

    if (endpointMatch && accessKeyMatch) {
      const endpoint  = endpointMatch[1];
      const accessKey = accessKeyMatch[1];

      const enquiryLabels = {
        'institutional-partnership': 'Institutional Partnership',
        'international-deployment' : 'International Deployment',
        'investment'               : 'Investment',
        'research-collaboration'   : 'Research Collaboration',
        'media'                    : 'Media',
        'other'                    : 'Other',
      };
      const enquiryLabel = enquiryLabels[enquiryType] || enquiryType;

      const teamHtml = `
        <div style="font-family:Arial,sans-serif;max-width:620px;color:#1a1a1a">
          <div style="background:#003087;padding:24px 28px;border-radius:8px 8px 0 0">
            <h2 style="color:#fff;margin:0">New Enquiry — prioraos.com</h2>
          </div>
          <div style="background:#f8f9fc;padding:28px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
              <tr><td style="padding:8px;font-weight:600;width:140px;border:1px solid #e5e7eb">Name</td><td style="padding:8px;border:1px solid #e5e7eb">${esc(name)}</td></tr>
              <tr><td style="padding:8px;font-weight:600;border:1px solid #e5e7eb;background:#f3f4f6">Email</td><td style="padding:8px;border:1px solid #e5e7eb;background:#f3f4f6">${esc(email)}</td></tr>
              <tr><td style="padding:8px;font-weight:600;border:1px solid #e5e7eb">Organisation</td><td style="padding:8px;border:1px solid #e5e7eb">${esc(organisation)}</td></tr>
              <tr><td style="padding:8px;font-weight:600;border:1px solid #e5e7eb;background:#f3f4f6">Role</td><td style="padding:8px;border:1px solid #e5e7eb;background:#f3f4f6">${esc(role)}</td></tr>
              <tr><td style="padding:8px;font-weight:600;border:1px solid #e5e7eb">Enquiry Type</td><td style="padding:8px;border:1px solid #e5e7eb">${esc(enquiryLabel)}</td></tr>
            </table>
            <div style="background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:16px">
              <p style="font-weight:600;margin:0 0 8px;color:#003087">Message</p>
              <p style="margin:0;line-height:1.7;white-space:pre-wrap">${esc(message)}</p>
            </div>
            <p style="margin:20px 0 0;font-size:12px;color:#9ca3af">Submitted via prioraos.com/contact</p>
          </div>
        </div>`;

      const confirmHtml = `
        <div style="font-family:Arial,sans-serif;max-width:620px;color:#1a1a1a">
          <div style="background:#003087;padding:24px 28px;border-radius:8px 8px 0 0">
            <h2 style="color:#fff;margin:0">Enquiry Received — PrioraOS</h2>
          </div>
          <div style="background:#f8f9fc;padding:28px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px">
            <p>Hi ${esc(name)},</p>
            <p>Thank you for getting in touch with PrioraOS. We have received your enquiry and will respond as soon as possible.</p>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
            <p style="font-size:12px;color:#9ca3af">PrioraOS · contact@prioraos.com</p>
          </div>
        </div>`;

      // Fire both emails — errors are non-fatal (log only)
      const sends = [
        acsRequest({ endpoint, accessKey, from, to: inbox,        subject: `[PrioraOS Enquiry] ${enquiryLabel} — ${name}`,   html: teamHtml }),
        acsRequest({ endpoint, accessKey, from, to: email,        subject: 'Enquiry received — PrioraOS',                    html: confirmHtml }),
      ];
      await Promise.all(sends).catch((err) => {
        context.log.error('ACS email error:', err && err.message ? err.message : String(err));
      });
    }
  } else {
    context.log.warn('AZURE_COMMUNICATION_CONNECTION_STRING not set — email skipped');
  }

  context.res = {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true }),
  };
};


module.exports = async function (context, req) {
  const { name, email, organisation, role, enquiryType, message } = req.body || {};

  if (!name || !email || !organisation || !role || !enquiryType || !message) {
    context.res = {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'All fields are required.' }),
    };
    return;
  }

  const connStr = process.env.AZURE_COMMUNICATION_CONNECTION_STRING;
  if (!connStr) {
    context.log.warn('AZURE_COMMUNICATION_CONNECTION_STRING not set — skipping email send');
    context.res = {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true }),
    };
    return;
  }

  const enquiryLabels = {
    'institutional-partnership': 'Institutional Partnership',
    'international-deployment': 'International Deployment',
    'investment': 'Investment',
    'research-collaboration': 'Research Collaboration',
    'media': 'Media',
    'other': 'Other',
  };
  const enquiryLabel = enquiryLabels[enquiryType] || enquiryType;

  const inbox    = process.env.CONTACT_EMAIL || 'contact@prioraos.com';
  const fromAddr = process.env.SMTP_FROM || 'DoNotReply@prioraos.com';

  // Escape HTML to prevent injection in email body
  const esc = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  const teamHtml = `
    <div style="font-family:Arial,sans-serif;max-width:620px;color:#1a1a1a">
      <div style="background:#003087;padding:24px 28px;border-radius:8px 8px 0 0">
        <h2 style="color:#ffffff;margin:0;font-size:20px">New Enquiry — prioraos.com</h2>
      </div>
      <div style="background:#f8f9fc;padding:28px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px">
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
          <tr>
            <td style="padding:10px 12px;font-weight:600;width:150px;background:#fff;border:1px solid #e5e7eb">Name</td>
            <td style="padding:10px 12px;background:#fff;border:1px solid #e5e7eb">${esc(name)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;font-weight:600;background:#f3f4f6;border:1px solid #e5e7eb">Email</td>
            <td style="padding:10px 12px;background:#f3f4f6;border:1px solid #e5e7eb">${esc(email)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;font-weight:600;background:#fff;border:1px solid #e5e7eb">Organisation</td>
            <td style="padding:10px 12px;background:#fff;border:1px solid #e5e7eb">${esc(organisation)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;font-weight:600;background:#f3f4f6;border:1px solid #e5e7eb">Role</td>
            <td style="padding:10px 12px;background:#f3f4f6;border:1px solid #e5e7eb">${esc(role)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;font-weight:600;background:#fff;border:1px solid #e5e7eb">Enquiry Type</td>
            <td style="padding:10px 12px;background:#fff;border:1px solid #e5e7eb">${esc(enquiryLabel)}</td>
          </tr>
        </table>
        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:16px">
          <p style="font-weight:600;margin:0 0 8px 0;color:#003087">Message</p>
          <p style="margin:0;line-height:1.7;white-space:pre-wrap">${esc(message)}</p>
        </div>
        <p style="margin:20px 0 0 0;font-size:12px;color:#9ca3af">Submitted via prioraos.com/contact</p>
      </div>
    </div>`;

  const confirmHtml = `
    <div style="font-family:Arial,sans-serif;max-width:620px;color:#1a1a1a">
      <div style="background:#003087;padding:24px 28px;border-radius:8px 8px 0 0">
        <h2 style="color:#ffffff;margin:0;font-size:20px">Enquiry Received — PrioraOS</h2>
      </div>
      <div style="background:#f8f9fc;padding:28px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px">
        <p>Hi ${esc(name)},</p>
        <p>Thank you for getting in touch. We have received your enquiry and will respond as soon as possible.</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
        <p style="font-size:12px;color:#9ca3af">PrioraOS · contact@prioraos.com</p>
      </div>
    </div>`;

  try {
    const client = new EmailClient(connStr);

    // 1. Notify the team
    const teamPoller = await client.beginSend({
      senderAddress: fromAddr,
      recipients: { to: [{ address: inbox }] },
      content: { subject: `[PrioraOS Enquiry] ${enquiryLabel} — ${name}`, html: teamHtml },
    });
    await teamPoller.pollUntilDone();

    // 2. Confirmation to sender
    const confirmPoller = await client.beginSend({
      senderAddress: fromAddr,
      recipients: { to: [{ address: email }] },
      content: { subject: 'Enquiry received — PrioraOS', html: confirmHtml },
    });
    await confirmPoller.pollUntilDone();

    context.log('Contact form emails sent successfully for:', email);
  } catch (err) {
    context.log.error('Email send failed:', err.message);
    // Still return success — email is best-effort, enquiry is logged
  }

  context.res = {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true }),
  };
};


module.exports = async function (context, req) {
  const { name, organisation, role, enquiryType, message } = req.body || {};

  if (!name || !organisation || !role || !enquiryType || !message) {
    context.res = {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'All fields are required.' }),
    };
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const enquiryLabels = {
    'institutional-partnership': 'Institutional Partnership',
    'international-deployment': 'International Deployment',
    'investment': 'Investment',
    'research-collaboration': 'Research Collaboration',
    'media': 'Media',
    'other': 'Other',
  };

  const enquiryLabel = enquiryLabels[enquiryType] || enquiryType;

  try {
    await transporter.sendMail({
      from: `"PrioraOS Contact Form" <${process.env.SMTP_USER}>`,
      to: 'contact@prioraos.com',
      subject: `Enquiry — ${enquiryLabel} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; color: #1a1a1a;">
          <div style="background: #003087; padding: 24px 28px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Enquiry — prioraos.com</h2>
          </div>
          <div style="background: #f8f9fc; padding: 28px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 12px; font-weight: 600; width: 150px; background: #fff; border: 1px solid #e5e7eb;">Name</td>
                <td style="padding: 10px 12px; background: #fff; border: 1px solid #e5e7eb;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: 600; background: #f3f4f6; border: 1px solid #e5e7eb;">Organisation</td>
                <td style="padding: 10px 12px; background: #f3f4f6; border: 1px solid #e5e7eb;">${organisation}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: 600; background: #fff; border: 1px solid #e5e7eb;">Role</td>
                <td style="padding: 10px 12px; background: #fff; border: 1px solid #e5e7eb;">${role}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: 600; background: #f3f4f6; border: 1px solid #e5e7eb;">Enquiry Type</td>
                <td style="padding: 10px 12px; background: #f3f4f6; border: 1px solid #e5e7eb;">${enquiryLabel}</td>
              </tr>
            </table>
            <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px;">
              <p style="font-weight: 600; margin: 0 0 8px 0; color: #003087;">Message</p>
              <p style="margin: 0; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin: 20px 0 0 0; font-size: 12px; color: #9ca3af;">
              Submitted via prioraos.com/contact
            </p>
          </div>
        </div>
      `,
    });

    context.res = {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    context.log.error('Email send failed:', err.message);
    context.res = {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to send email. Please try again or contact us directly.' }),
    };
  }
};
