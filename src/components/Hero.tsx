import Image from "next/image";
import Link from "next/link";
import { heroImage } from "@/data/works";
import { SiteHeader } from "@/components/SiteHeader";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Сватбена фотография от M&M Photography"
          fill
          priority
          sizes="100vw"
          className="hero-media object-cover object-[center_26%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,24,16,0.42)_0%,rgba(44,24,16,0.12)_34%,rgba(224,78,50,0.12)_60%,rgba(255,246,238,0.78)_86%,rgba(255,246,238,1)_100%)]" />
        <div className="blob absolute -left-24 top-[18%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(240,160,40,0.28),transparent_70%)] blur-3xl" />
        <div className="blob-delay absolute -right-16 top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(239,125,100,0.25),transparent_70%)] blur-3xl" />
      </div>

      <SiteHeader />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 md:px-10 md:pb-28">
        <p className="animate-rise mb-4 text-[0.7rem] tracking-[0.32em] text-coral uppercase">
          Мартин &amp; Мария
        </p>
        <h1 className="animate-rise-delay-1 max-w-[11ch] font-[family-name:var(--font-display)] text-[clamp(3.4rem,12vw,7.4rem)] leading-[0.9] tracking-[-0.035em] text-ink">
          M&amp;M Photography
        </h1>
        <p className="animate-rise-delay-2 mt-7 max-w-md text-[1.05rem] leading-relaxed text-ink-soft md:text-lg">
          Всяка снимка разказва история — топли моменти, живи цветове, истински
          емоции.
        </p>
        <div className="animate-rise-delay-3 mt-10 flex flex-wrap items-center gap-5">
          <Link href="#works" className="btn-primary">
            Виж портфолиото
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/galeria"
            className="nav-link text-[0.78rem] tracking-[0.14em] text-ink-soft uppercase"
          >
            Галерия
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="scroll-cue h-9 w-px bg-ink/40" />
      </div>
    </section>
  );
}
