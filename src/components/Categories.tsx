import Link from "next/link";

const categories = [
  { label: "Сватба", href: "/galeria?cat=%D0%A1%D0%B2%D0%B0%D1%82%D0%B1%D0%B0" },
  { label: "Рожден ден", href: "/galeria?cat=%D0%A0%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%20%D0%B4%D0%B5%D0%BD" },
  { label: "Кръщене", href: "/galeria?cat=%D0%9A%D1%80%D1%8A%D1%89%D0%B5%D0%BD%D0%B5" },
  { label: "Бал", href: "/galeria?cat=%D0%91%D0%B0%D0%BB" },
  { label: "Персонални", href: "/galeria?cat=%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D0%BD%D0%B8" },
] as const;

export function Categories() {
  const loop = [...categories, ...categories, ...categories, ...categories];

  return (
    <section
      aria-label="Категории"
      className="relative overflow-hidden border-y border-line bg-gradient-to-r from-bg-soft/80 via-cream/70 to-bg-deep/50 py-5"
    >
      <div className="marquee text-[0.78rem] tracking-[0.22em] text-ink-soft uppercase">
        {loop.map((item, i) => (
          <span key={`${item.label}-${i}`} className="inline-flex items-center gap-10">
            <Link href={item.href} className="transition hover:text-coral">
              {item.label}
            </Link>
            <span className="text-coral" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
