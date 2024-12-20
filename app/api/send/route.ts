import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/Email/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', 
      to: ['dndyd4924@gmail.com'], 
      subject: subject, 
      react: EmailTemplate({ 
        name,
        email,
        subject,
        message,
      }),
    });

    return NextResponse.json({
      message: "Email sent",
      id: data.data?.id,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({
      message: "Failed to send email",
      error: error,
    });
  }
}
