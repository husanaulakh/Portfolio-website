import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address").max(100, "Email is too long"),
  subject: z.string().min(1, "Subject is required").max(150, "Subject is too long"),
  message: z.string().min(1, "Message is required").max(2000, "Message is too long"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Honeypot check (if it was passed from client, even though it shouldn't be if client-side check works)
    if (body.honeypot) {
      console.log('Honeypot triggered on server for email:', body.email);
      // Return a generic success to not alert bots, but don't process
      return NextResponse.json({ message: 'Message received.' }, { status: 200 });
    }

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: 'Invalid input', errors: parsed.error.flatten().fieldErrors }, { status: 400 });
    }

    const { name, email, subject, message } = parsed.data;

    // --- SIMULATE SENDING EMAIL ---
    console.log('--- New Contact Form Submission ---');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
    console.log('--- End of Submission ---');
    // --------------------------------

    // Simulate network delay for email sending
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real app, integrate with an email service like SendGrid, Resend, AWS SES, etc.
    // Example (conceptual):
    // const emailSent = await sendEmailService.send({
    //   to: process.env.CONTACT_EMAIL_RECIPIENT,
    //   from: process.env.CONTACT_EMAIL_SENDER,
    //   subject: `New Contact: ${subject}`,
    //   textBody: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    //   htmlBody: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message.replace(/\n/g, "<br>")}</p>`
    // });
    // if (!emailSent) throw new Error("Failed to send email via service.");
    
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Contact API Error:', error);
    // Avoid exposing detailed error messages to the client
    if (error instanceof z.ZodError) { // Should be caught by safeParse, but as a fallback
        return NextResponse.json({ message: 'Invalid data provided.', errors: error.flatten().fieldErrors }, { status: 400 });
    }
    return NextResponse.json({ message: 'An unexpected error occurred on the server.' }, { status: 500 });
  }
}
