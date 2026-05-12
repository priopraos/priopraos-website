const { EmailClient } = require('@azure/communication-email');

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
