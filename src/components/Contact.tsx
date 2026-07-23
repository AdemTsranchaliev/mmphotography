import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal relative overflow-hidden bg-[linear-gradient(135deg,#2c1810_0%,#5a2a1c_45%,#c4452d_100%)] px-6 py-12 text-cream sm:px-10 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(240,160,40,0.4),transparent_70%)] blur-2xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(239,125,100,0.3),transparent_70%)] blur-2xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="mb-4 text-[0.7rem] tracking-[0.28em] text-honey uppercase">
                Контакти
              </p>
              <h2 className="max-w-xl font-[family-name:var(--font-display)] text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.95] tracking-[-0.03em]">
                Да създадем спомени заедно
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
                Попълнете формата или ни пишете в Instagram. Отговаряме лично.
              </p>

              <div className="mt-10 space-y-6 border-t border-cream/15 pt-8">
                <a
                  href="https://instagram.com/_mmartography_"
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <p className="text-[0.68rem] tracking-[0.18em] text-cream/55 uppercase">
                    Instagram
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-display)] text-2xl transition group-hover:text-honey">
                    @_mmartography_
                  </p>
                </a>
                <div>
                  <p className="text-[0.68rem] tracking-[0.18em] text-cream/55 uppercase">
                    Екип
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-display)] text-xl md:text-2xl">
                    <a
                      href="https://instagram.com/mmitkov_"
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-honey"
                    >
                      @mmitkov_
                    </a>
                    <span className="mx-3 text-cream/30">·</span>
                    <a
                      href="https://instagram.com/_mariaslavova_"
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-honey"
                    >
                      @_mariaslavova_
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
