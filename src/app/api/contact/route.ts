import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const { name, email, message } = body;

		const data = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "your@email.com",
			subject: `New Contact from ${name}`,
			html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
		});

		return NextResponse.json(data);
	} catch (error) {
		console.error(error);

		return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
	}
}
