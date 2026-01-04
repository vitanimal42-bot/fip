import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_TO"];

const buildEmailBody = (payload) => {
  return Object.entries(payload)
    .map(([key, value]) => `${key}: ${String(value).trim()}`)
    .join("\n");
};

export async function POST(request) {
  let payload = {};

  try {
    payload = await request.json();
  } catch (error) {
    return Response.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const missing = requiredEnv.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Eksik SMTP ayarı: ${missing.join(", ")}` },
      { status: 500 }
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const secure = port === 465;
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  const to = process.env.SMTP_TO;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const subject = `FIPGL23 Form: ${payload.formType || "Yeni Mesaj"}`;
  const body = buildEmailBody(payload);

  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      text: body,
      replyTo: payload.email || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "E-posta gönderilemedi." }, { status: 500 });
  }
}
