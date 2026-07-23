import { NextResponse } from "next/server";

const SERVICES = new Set([
  "Сватба",
  "Рожден ден",
  "Кръщене",
  "Бал",
  "Персонални",
  "Друго",
]);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const service = String(body.service ?? "").trim();
    const message = String(body.message ?? "").trim();
    const honeypot = String(body.company ?? "").trim();

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Моля, въведете име." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Моля, въведете валиден имейл." },
        { status: 400 },
      );
    }

    if (!SERVICES.has(service)) {
      return NextResponse.json(
        { ok: false, error: "Моля, изберете тип сесия." },
        { status: 400 },
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Съобщението е твърде кратко." },
        { status: 400 },
      );
    }

    const payload = {
      name,
      email,
      phone,
      service,
      message,
      receivedAt: new Date().toISOString(),
    };

    console.info("[contact]", payload);

    const to = process.env.CONTACT_TO_EMAIL;
    const resendKey = process.env.RESEND_API_KEY;

    if (to && resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "M&M Photography <onboarding@resend.dev>",
          to: [to],
          reply_to: email,
          subject: `Нова заявка: ${service} — ${name}`,
          text: [
            `Име: ${name}`,
            `Имейл: ${email}`,
            `Телефон: ${phone || "—"}`,
            `Услуга: ${service}`,
            "",
            message,
          ].join("\n"),
        }),
      });

      if (!res.ok) {
        const detail = await res.text();
        console.error("[contact] resend failed", detail);
        return NextResponse.json(
          { ok: false, error: "Неуспешно изпращане. Опитайте отново." },
          { status: 502 },
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Нещо се обърка. Опитайте отново." },
      { status: 500 },
    );
  }
}
