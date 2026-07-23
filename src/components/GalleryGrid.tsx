"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  galleryCategories,
  galleryPhotos,
  parseGalleryCategory,
  type GalleryCategory,
} from "@/data/gallery";

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>("Всички");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const cat = new URLSearchParams(window.location.search).get("cat");
    setActive(parseGalleryCategory(cat ?? undefined));
  }, []);

  const photos = useMemo(() => {
    if (active === "Всички") return [...galleryPhotos];
    return galleryPhotos.filter((photo) => photo.category === active);
  }, [active]);

  const lightbox = lightboxIndex === null ? null : photos[lightboxIndex];

  useEffect(() => {
    setLightboxIndex(null);
  }, [active]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") {
        setLightboxIndex((index) =>
          index === null ? null : (index + 1) % photos.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setLightboxIndex((index) =>
          index === null
            ? null
            : (index - 1 + photos.length) % photos.length,
        );
      }
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, photos.length]);

  function selectCategory(category: GalleryCategory) {
    setActive(category);
    const url = new URL(window.location.href);
    if (category === "Всички") url.searchParams.delete("cat");
    else url.searchParams.set("cat", category);
    window.history.replaceState({}, "", url);
  }

  return (
    <div>
      <div className="sticky top-[4.5rem] z-20 -mx-6 mb-10 border-y border-line bg-bg/90 px-6 py-4 backdrop-blur-md md:-mx-10 md:mb-14 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                className={`filter-chip ${active === category ? "is-active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="text-sm text-muted">{photos.length} снимки</p>
        </div>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, index) => (
          <button
            key={`${photo.id}-${photo.src}`}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className="gallery-item group relative mb-4 block w-full break-inside-avoid overflow-hidden text-left"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1200}
              height={1600}
              className="h-auto w-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent opacity-0 transition duration-400 group-hover:opacity-100" />
            <span className="pointer-events-none absolute bottom-4 left-4 text-[0.68rem] tracking-[0.16em] text-cream uppercase opacity-0 transition duration-400 group-hover:opacity-100">
              {photo.category}
            </span>
          </button>
        ))}
      </div>

      {photos.length === 0 && (
        <p className="text-muted">Няма снимки в тази категория засега.</p>
      )}

      {lightbox && lightboxIndex !== null && (
        <div
          className="lightbox-enter fixed inset-0 z-50 flex items-center justify-center bg-ink/88 p-4 backdrop-blur-sm md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 text-sm tracking-[0.16em] text-cream uppercase"
            onClick={() => setLightboxIndex(null)}
          >
            Затвори
          </button>

          <button
            type="button"
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 px-3 py-6 text-2xl text-cream/80 transition hover:text-cream md:block"
            aria-label="Предишна"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + photos.length) % photos.length,
              );
            }}
          >
            ←
          </button>

          <button
            type="button"
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 px-3 py-6 text-2xl text-cream/80 transition hover:text-cream md:block"
            aria-label="Следваща"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % photos.length);
            }}
          >
            →
          </button>

          <div
            className="relative max-h-[85vh] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1600}
              height={2000}
              className="max-h-[85vh] w-auto object-contain"
              sizes="90vw"
              priority
            />
            <div className="mt-4 flex items-center justify-between gap-4 text-sm tracking-[0.14em] text-cream/80 uppercase">
              <span>{lightbox.category}</span>
              <span>
                {lightboxIndex + 1} / {photos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
