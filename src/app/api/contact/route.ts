import { NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      company,
      message,
    } = body;

    await resend.emails.send({
      from:
        "WebApp Innovators <onboarding@resend.dev>",

      to:
        process.env.CONTACT_EMAIL || "",

      subject:
        `New Inquiry from ${name}`,

      html: `
        <div style="font-family:Arial;padding:24px">
          <h2>New Project Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Company:</strong> ${company}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
