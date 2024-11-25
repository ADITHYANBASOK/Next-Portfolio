import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  console.log("hello",name,email,message)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  console.log(transporter)

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_RECIEVE,
    subject: `New contact form submission from ${email}`,
    text: message,
  };
  console.log(mailOptions)

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error while sending mail:", error);  // Log the actual error
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
  }
}