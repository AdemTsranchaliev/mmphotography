import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SiteHeader } from "@/components/SiteHeader";
import { galleryPhotos, parseGalleryCategory } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Галерия — M&M Photography",
  description:
    "Още снимки от сватби, кръщенета, балове, рождени дни и персонални сесии.",
};

export default async function GaleriaPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const params = await searchParams;
  const initialCategory = parseGalleryCategory(params.cat);
  const cover = galleryPhotos[0];

  return (
    <main id="top" className="min-h-full">
      <SiteHeader variant="solid" />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,24,16,0.45)_0%,rgba(255,246,238,0.55)_55%,rgba(255,246,238,1)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-32 md:px-10 md:pb-20 md:pt-40">
          <p className="mb-3 text-[0.7rem] tracking-[0.28em] text-coral uppercase">
            Gallery
          </p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1 className="max-w-2xl font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,5.4rem)] leading-[0.95] tracking-[-0.03em] text-ink">
              Още кадри
            </h1>
            <p className="max-w-sm text-base leading-relaxed text-ink-soft">
              {galleryPhotos.length} снимки по категории. Ако харесате нещо —{" "}
              <Link href="/#contact" className="nav-link text-coral">
                пишете ни
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <GalleryGrid initialCategory={initialCategory} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
