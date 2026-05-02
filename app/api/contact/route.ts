import { NextResponse } from 'next/server';

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  town?: string;
  service?: string;
  message?: string;
  website?: string;
};

const required = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0;

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (body.website && body.website.trim() !== '') {
    // Honeypot — pretend success.
    return NextResponse.json({ ok: true });
  }

  if (!required(body.name) || !required(body.email) || !required(body.phone)) {
    return NextResponse.json(
      { error: 'Name, email and phone are required' },
      { status: 400 },
    );
  }

  const lead = {
    name: body.name!.trim(),
    email: body.email!.trim(),
    phone: body.phone!.trim(),
    address: body.address?.trim() ?? '',
    town: body.town?.trim() ?? '',
    service: body.service?.trim() ?? '',
    message: body.message?.trim() ?? '',
    receivedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'info@letitglowholidaylighting.com';
  const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

  if (apiKey) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(apiKey);
      const subject = `New quote request — ${lead.name}${lead.town ? `, ${lead.town}` : ''}`;
      const text = [
        `Name:    ${lead.name}`,
        `Phone:   ${lead.phone}`,
        `Email:   ${lead.email}`,
        `Address: ${lead.address}${lead.town ? `, ${lead.town}` : ''}`,
        `Service: ${lead.service || '(not specified)'}`,
        '',
        'Message:',
        lead.message || '(none)',
        '',
        `Received: ${lead.receivedAt}`,
      ].join('\n');
      const html = `
        <div style="font-family:system-ui,sans-serif;max-width:560px">
          <h2 style="font-family:Georgia,serif;color:#b01c2e;margin:0 0 16px">New quote request</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tbody>
              <tr><td style="padding:6px 0;color:#7a6050;width:120px">Name</td><td><strong>${escapeHtml(lead.name)}</strong></td></tr>
              <tr><td style="padding:6px 0;color:#7a6050">Phone</td><td><a href="tel:${escapeHtml(lead.phone)}">${escapeHtml(lead.phone)}</a></td></tr>
              <tr><td style="padding:6px 0;color:#7a6050">Email</td><td><a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a></td></tr>
              <tr><td style="padding:6px 0;color:#7a6050">Address</td><td>${escapeHtml(lead.address)}${lead.town ? ', ' + escapeHtml(lead.town) : ''}</td></tr>
              <tr><td style="padding:6px 0;color:#7a6050">Service</td><td>${escapeHtml(lead.service) || '<em>not specified</em>'}</td></tr>
            </tbody>
          </table>
          <h3 style="font-family:Georgia,serif;margin:20px 0 8px">Message</h3>
          <p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(lead.message) || '<em>none</em>'}</p>
          <p style="font-size:12px;color:#7a6050;margin-top:24px">Received ${lead.receivedAt}</p>
        </div>
      `;

      const result = await resend.emails.send({
        from,
        to,
        replyTo: lead.email,
        subject,
        text,
        html,
      });

      if (result.error) {
        console.error('[contact] resend error:', result.error);
        return NextResponse.json(
          { error: 'Email service error' },
          { status: 502 },
        );
      }
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error('[contact] send failed:', err);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 502 },
      );
    }
  }

  // No API key configured — log the lead and return success so dev works
  // without a Resend account. In prod, set RESEND_API_KEY.
  console.log('[contact] new lead (no email service configured):', lead);
  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
