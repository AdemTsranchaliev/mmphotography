"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Variant = "hero" | "solid";

const links = [
  { href: "/#works", label: "Работи" },
  { href: "/galeria", label: "Галерия" },
  { href: "/#instagram", label: "Instagram" },
  { href: "/#about", label: "За нас" },
  { href: "/#contact", label: "Контакти" },
] as const;

export function SiteHeader({ variant = "hero" }: { variant?: Variant }) {
  const [scrolled, setScrolled] = useState(variant === "solid");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (variant === "solid") {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-40 ${
        scrolled || variant === "solid" || open ? "is-scrolled py-4" : "py-6"
      } ${open ? "is-open" : ""}`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="header-brand font-[family-name:var(--font-display)] text-lg tracking-[0.01em] text-cream drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-xl"
          onClick={() => setOpen(false)}
        >
          M&amp;M Photography
        </Link>

        <nav className="header-nav hidden items-center gap-8 text-[0.72rem] tracking-[0.16em] text-cream/95 uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle relative z-50 flex h-10 w-10 items-center justify-center text-cream md:hidden"
          aria-expanded={open}
          aria-label={open ? "Затвори меню" : "Отвори меню"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Меню</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px w-full bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-full bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-full bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-bg/95 px-6 py-8 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-5 text-sm tracking-[0.16em] text-ink uppercase">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link w-fit"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
