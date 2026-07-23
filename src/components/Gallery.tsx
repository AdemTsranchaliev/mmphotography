import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";

export function Gallery() {
  return (
    <section id="works" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-14 grid gap-6 md:mb-20 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-3 text-[0.7rem] tracking-[0.28em] text-coral uppercase">
              Portfolio
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.95] tracking-[-0.03em] text-ink">
              Избрани кадри
            </h2>
          </div>
          <div className="justify-self-start md:justify-self-end md:text-right">
            <p className="max-w-sm text-[0.98rem] leading-relaxed text-muted">
              Сватби, кръщенета, балове, рождени дни и персонални сесии — топли
              моменти с характер.
            </p>
            <Link
              href="/galeria"
              className="nav-link mt-4 inline-flex text-[0.78rem] tracking-[0.14em] text-coral uppercase"
            >
              Виж още снимки →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:auto-rows-[300px] md:grid-cols-12 md:gap-4">
          {works.map((work, index) => (
            <article
              key={work.id}
              className={`gallery-item reveal group relative overflow-hidden ${work.span}`}
              style={{ transitionDelay: `${Math.min(index * 70, 350)}ms` }}
            >
              <Link
                href={`/galeria?cat=${encodeURIComponent(work.title)}`}
                className="relative block h-full min-h-[340px] md:min-h-0 md:h-full"
              >
                <Image
                  src={work.src}
                  alt={work.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-95 transition duration-500 md:opacity-70 md:group-hover:opacity-95" />
                <div className="caption absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-2xl text-cream md:text-[1.7rem]">
                      {work.title}
                    </p>
                    <p className="mt-1 text-[0.68rem] tracking-[0.18em] text-cream/70 uppercase">
                      {work.place}
                    </p>
                  </div>
                  <span className="mb-1 text-cream/80 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center md:mt-14">
          <Link href="/galeria" className="btn-primary">
            Отвори галерията
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
