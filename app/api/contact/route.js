import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, projectType, message } =
      await req.json();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !projectType ||
      !message
    ) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "asadrafi1221@gmail.com",
        pass: "qwew ilis yqbz eyzg",
      },
    });

    const fullName = `${firstName} ${lastName}`;

    await transporter.sendMail({
      from: `"GMB Contact" <asadrafi1221@gmail.com>`,
      to: "mike.gmbrankup@gmail.com",
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #0A0A0A;">
          <div style="max-width: 600px; margin: auto; background: #111; padding: 30px; border-radius: 12px; color: #fff;">
            <h2 style="color: #c084fc;">New Contact Request</h2>

            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>

            <p><strong>Message:</strong></p>
            <div style="background: #0A0A0A; padding: 15px; border-left: 4px solid #c084fc;">
              ${message}
            </div>

            <p style="font-size: 12px; color: #888; margin-top: 20px;">
              ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}
