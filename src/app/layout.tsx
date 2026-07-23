import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { RevealObserver } from "@/components/RevealObserver";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "M&M Photography — портфолио",
  description:
    "Мартин и Мария — сватбена, семейна и персонална фотография. Топли кадри с характер.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
