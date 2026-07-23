import Image from "next/image";
import { aboutImage } from "@/data/works";

const services = ["Сватба", "Кръщене", "Рожден ден", "Бал", "Персонални"] as const;

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,#ffe9d6_0%,#fff6ee_45%,#ffd4b5_100%)]" />
      <div className="pointer-events-none absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(239,125,100,0.3),transparent_68%)] blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
        <div className="reveal relative mb-8 lg:mb-0">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={aboutImage}
              alt="Мартин и Мария — M&M Photography"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-coral/25 via-transparent to-honey/15" />
          </div>
          <p className="absolute -bottom-5 left-5 max-w-[14rem] bg-ink px-5 py-4 font-[family-name:var(--font-display)] text-lg leading-snug text-cream md:left-8 md:text-xl">
            Партньори в работата и в живота.
          </p>
        </div>

        <div className="reveal lg:pt-6">
          <p className="mb-3 text-[0.7rem] tracking-[0.28em] text-coral uppercase">
            За нас
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.2rem)] leading-[0.95] tracking-[-0.03em] text-ink">
            Мартин &amp; Мария
          </h2>
          <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-ink-soft">
            Ние сме Мартин и Мария. Обичаме да улавяме уникални моменти и емоции
            в спомени, които остават завинаги.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            Подходът ни е индивидуален за всеки човек — топъл, цветен и с
            внимание към детайла.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-line pt-8 text-[0.72rem] tracking-[0.16em] text-ink-soft uppercase">
            {services.map((service) => (
              <span key={service} className="inline-flex items-center gap-2">
                <span className="text-coral" aria-hidden="true">
                  ●
                </span>
                {service}
              </span>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <dt className="text-[0.68rem] tracking-[0.18em] text-muted uppercase">
                Мартин
              </dt>
              <dd className="mt-2 font-[family-name:var(--font-display)] text-2xl text-ink">
                Митков
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.18em] text-muted uppercase">
                Мария
              </dt>
              <dd className="mt-2 font-[family-name:var(--font-display)] text-2xl text-ink">
                Славова
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
