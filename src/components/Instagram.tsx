import Image from "next/image";
import instagram from "@/data/instagram.json";

export function Instagram() {
  return (
    <section
      id="instagram"
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32"
    >
      <div className="blob pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(240,160,40,0.28),transparent_70%)] blur-3xl" />
      <div className="blob-delay pointer-events-none absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(224,78,50,0.2),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="reveal mb-10 flex flex-col gap-8 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="flex items-start gap-4 md:items-center">
            <div className="relative h-[4.25rem] w-[4.25rem] shrink-0 overflow-hidden rounded-full ring-2 ring-coral/50 ring-offset-4 ring-offset-bg">
              <Image
                src={instagram.profileImage}
                alt={instagram.name}
                fill
                sizes="68px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="mb-2 text-[0.7rem] tracking-[0.28em] text-coral uppercase">
                Social
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,3.8rem)] leading-none tracking-[-0.02em] text-ink">
                @{instagram.handle}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                {instagram.followers}+ последователи · свежи кадри, задкулисие и
                реални емоции.
              </p>
            </div>
          </div>
          <a href={instagram.url} target="_blank" rel="noreferrer" className="btn-accent self-start">
            Последвай в IG
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="ig-rail">
          {instagram.posts.map((post, index) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="ig-item reveal group relative aspect-[4/5] overflow-hidden md:aspect-square"
              style={{ transitionDelay: `${Math.min(index * 55, 320)}ms` }}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                sizes="(max-width: 900px) 70vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-0 transition duration-400 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-[0.68rem] tracking-[0.16em] text-cream uppercase opacity-0 transition duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                Отвори в Instagram
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
