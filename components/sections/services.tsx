import type { ReactNode } from "react";
import { ServiceGlyph } from "@/components/brand/service-glyph";
import { Eyebrow, MetaList } from "@/components/ui";

const SERVICES: { title: string; glyph: "web" | "commerce" | "systems"; text: ReactNode; meta: string[] }[] = [
  {
    title: "Webbplatser",
    glyph: "web",
    text: "Nya webbplatser och modernisering av befintliga lösningar med fokus på design, användarupplevelse, mobil, prestanda och tydlig kommunikation.",
    meta: ["Design", "Utveckling", "SEO", "Prestanda"],
  },
  {
    title: "E-handel",
    glyph: "commerce",
    text: (
      <>
        Nya webbshoppar och vidareutveckling av befintliga{" "}
        <span className="whitespace-nowrap">e-handelslösningar</span> med fokus på produktupplevelse, köpresa,
        administration och försäljning.
      </>
    ),
    meta: ["Produkter", "Kundresa", "Administration", "Integrationer"],
  },
  {
    title: "System & automation",
    glyph: "systems",
    text: "Skräddarsydda funktioner, interna verktyg och integrationer som minskar manuellt arbete och gör verksamhetens digitala flöden enklare.",
    meta: ["System", "API:er", "Automation", "Integrationer"],
  },
];

export function Services() {
  return (
    <section id="tjanster" aria-labelledby="services-heading" className="container-ns section-y">
      <div className="grid-ns gap-y-6" data-reveal>
        <div className="col-span-4 md:col-span-6 lg:col-span-7">
          <Eyebrow className="text-muted">Vad Northsync gör</Eyebrow>
          <h2 id="services-heading" className="text-h2 mt-5">
            Digital utveckling från webb till verksamhets{"­"}system.
          </h2>
        </div>
        <p className="text-lead col-span-4 self-end text-muted md:col-span-5 lg:col-span-5 lg:col-start-8">
          Från publika webbplatser till interna verktyg och integrationer. Lösningen anpassas efter verksamheten och
          det faktiska behovet.
        </p>
      </div>

      <ol className="mt-12 flex flex-col gap-5 lg:mt-16 lg:gap-6">
        {SERVICES.map((service, i) => (
          <li key={service.title} data-reveal>
            <article className="grid-ns gap-y-6 rounded-panel border border-line bg-surface px-6 pt-8 pb-9 md:px-10 md:py-12 lg:px-14 lg:py-16 xl:px-16">
              <div className="col-span-4 flex flex-col md:col-span-6 lg:col-span-5">
                <div className="flex items-start justify-between gap-6">
                  <p className="text-label text-muted" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <ServiceGlyph kind={service.glyph} className="-mt-1 w-28 shrink-0 md:w-32 lg:hidden" />
                </div>
                <h3 className="text-title mt-4 lg:mt-5">{service.title}</h3>
                <ServiceGlyph kind={service.glyph} className="mt-auto hidden w-44 pt-14 lg:block" />
              </div>

              <div className="col-span-4 flex flex-col md:col-span-6 lg:col-span-6 lg:col-start-7 lg:pt-[2.6rem]">
                <p className="text-lead">{service.text}</p>
                <MetaList
                  items={service.meta}
                  size="meta"
                  className="mt-8 border-t border-line pt-5 text-ink/70 lg:mt-auto"
                />
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
