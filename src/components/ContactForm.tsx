"use client";

import { FormEvent, useState } from "react";

const services = [
  "Сватба",
  "Рожден ден",
  "Кръщене",
  "Бал",
  "Персонални",
  "Друго",
] as const;

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [service, setService] = useState<(typeof services)[number] | "">("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const phone = String(data.phone ?? "").trim();
    const message = String(data.message ?? "").trim();
    const honeypot = String(data.company ?? "").trim();

    if (honeypot) {
      setStatus("success");
      return;
    }

    if (name.length < 2) {
      setStatus("error");
      setError("Моля, въведете име.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Моля, въведете валиден имейл.");
      return;
    }

    if (!service) {
      setStatus("error");
      setError("Моля, изберете тип сесия.");
      return;
    }

    if (message.length < 10) {
      setStatus("error");
      setError("Съобщението е твърде кратко.");
      return;
    }

    const body = [
      `Име: ${name}`,
      `Имейл: ${email}`,
      `Телефон: ${phone || "—"}`,
      `Услуга: ${service}`,
      "",
      message,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(body);
    } catch {
      /* clipboard may be blocked */
    }

    window.open(
      "https://instagram.com/_mmartography_",
      "_blank",
      "noopener,noreferrer",
    );

    form.reset();
    setService("");
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[360px] flex-col justify-center border border-cream/15 bg-cream/5 p-8 text-center md:p-10">
        <p className="text-[0.7rem] tracking-[0.28em] text-honey uppercase">
          Изпратено
        </p>
        <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-cream md:text-4xl">
          Благодарим!
        </h3>
        <p className="mx-auto mt-4 max-w-sm text-cream/75">
          Съобщението е копирано. Изпратете го като DM на @_mmartography_ в
          Instagram.
        </p>
        <button
          type="button"
          className="btn-accent mx-auto mt-8"
          onClick={() => setStatus("idle")}
        >
          Ново съобщение
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative grid gap-5 border border-cream/15 bg-cream/5 p-5 backdrop-blur-sm md:p-8"
      noValidate
    >
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[0.68rem] tracking-[0.18em] text-cream/55 uppercase">
            Име *
          </span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Вашето име"
            className="field-dark"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-[0.68rem] tracking-[0.18em] text-cream/55 uppercase">
            Имейл *
          </span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@email.com"
            className="field-dark"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-[0.68rem] tracking-[0.18em] text-cream/55 uppercase">
          Телефон
        </span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+359 ..."
          className="field-dark"
        />
      </label>

      <fieldset>
        <legend className="mb-3 text-[0.68rem] tracking-[0.18em] text-cream/55 uppercase">
          Тип сесия *
        </legend>
        <input type="hidden" name="service" value={service} required />
        <div className="flex flex-wrap gap-2">
          {services.map((item) => {
            const active = service === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setService(item)}
                className={`px-3.5 py-2 text-[0.7rem] tracking-[0.12em] uppercase transition ${
                  active
                    ? "bg-honey text-ink"
                    : "border border-cream/20 text-cream/80 hover:border-honey hover:text-honey"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-2 block text-[0.68rem] tracking-[0.18em] text-cream/55 uppercase">
          Съобщение *
        </span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Дата, локация, идея за сесията..."
          className="field-dark min-h-[140px] resize-y"
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading" || !service}
          className="btn-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Изпращане..." : "Изпрати запитване"}
          <span aria-hidden="true">→</span>
        </button>

        {status === "error" && (
          <p className="text-sm text-rose" role="alert">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
