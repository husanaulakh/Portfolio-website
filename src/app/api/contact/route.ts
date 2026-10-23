import { Resend } from 'resend';
import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().trim().email('Invalid email address').max(100, 'Email is too long'),
  subject: z.string().trim().min(5, 'Subject must be at least 5 characters').max(150, 'Subject is too long'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message is too long'),
  honeypot: z.string().optional(),
  previewOnly: z.boolean().optional(),
});

const recipient = process.env.CONTACT_EMAIL_RECIPIENT ?? 'husanaulakh5@gmail.com';
const sender = process.env.CONTACT_EMAIL_SENDER ?? 'Portfolio Contact <onboarding@resend.dev>';

// Best-effort per-process protection. Use edge/provider rate limiting for multi-instance deployments.
const attemptWindowMs = 10 * 60 * 1000;
const attemptsPerWindow = 5;
const attempts = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: NextRequest) {
  try {
    const contentLength = Number(request.headers.get('content-length') ?? '0');
    if (contentLength > 16_384) {
      return NextResponse.json({ message: 'Request is too large.' }, { status: 413 });
    }
    const clientAddress = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    const now = Date.now();
    const entry = attempts.get(clientAddress);
    if (entry && entry.resetAt > now && entry.count >= attemptsPerWindow) {
      return NextResponse.json({ message: 'Too many messages. Please try again later.' }, { status: 429, headers: { 'Retry-After': String(Math.ceil((entry.resetAt - now) / 1000)) } });
    }
    const body: unknown = await request.json();

    if (typeof body === 'object' && body !== null && 'honeypot' in body && body.honeypot) {
      return NextResponse.json({ message: 'Message received.' });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Please check the form and try again.', errors: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const { name, email, subject, message, previewOnly } = parsed.data;
    if (previewOnly) {
      if (process.env.CONTACT_DEV_MODE !== 'true') {
        return NextResponse.json({ message: 'Preview mode is unavailable.' }, { status: 403 });
      }
      return NextResponse.json({ message: 'Preview mode: email was not sent.', preview: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Contact email is not configured: RESEND_API_KEY is missing.');
      return NextResponse.json(
        { message: 'Contact service is temporarily unavailable. Please try again later.' },
        { status: 503 },
      );
    }

    const escapeHtml = (value: string) =>
      value.replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      })[character] ?? character);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');
    const safeSubject = escapeHtml(subject);
    const current = attempts.get(clientAddress);
    attempts.set(clientAddress, current && current.resetAt > now
      ? { count: current.count + 1, resetAt: current.resetAt }
      : { count: 1, resetAt: now + attemptWindowMs });
    if (attempts.size > 2000) {
      for (const [ip, record] of attempts) if (record.resetAt <= now) attempts.delete(ip);
    }
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: 'Portfolio: ' + subject.replace(/[\r\n]/g, ' '),
      text: 'Name: ' + name + '\nEmail: ' + email + '\nSubject: ' + subject + '\nMessage: ' + message,
      html: '<div style="margin:0;background:#f4efe8;padding:32px 16px;font-family:Arial,sans-serif;color:#332b26"><div style="max-width:640px;margin:0 auto;background:#fffdf9;border:1px solid #ded4ca;border-radius:18px;overflow:hidden"><div style="background:#332b26;padding:28px 32px;color:#fffdf9"><div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#d8bda5">Portfolio contact</div><h1 style="margin:10px 0 0;font-size:28px;line-height:1.2">New message from ' + safeName + '</h1></div><div style="padding:28px 32px"><div style="margin-bottom:24px;padding:16px 18px;background:#f4efe8;border-radius:12px"><div style="font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#806b5b;margin-bottom:6px">Reply directly to</div><a href="mailto:' + safeEmail + '" style="color:#8b5e3c;font-weight:bold">' + safeEmail + '</a></div><p style="font-weight:bold">Subject: ' + safeSubject + '</p><div style="font-size:16px;line-height:1.7">' + safeMessage + '</div></div><div style="border-top:1px solid #ded4ca;padding:16px 32px;color:#806b5b;font-size:12px">Sent from the portfolio contact form.</div></div></div>',
    });

    if (result.error) {
      console.error('Resend contact email failed:', result.error);
      return NextResponse.json(
        { message: 'We could not send your message right now. Please try again later.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { message: 'We could not send your message right now. Please try again later.' },
      { status: 500 },
    );
  }
}
