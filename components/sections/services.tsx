import { ServiceGlyph } from "@/components/brand/service-glyph";
import { Eyebrow, MetaList } from "@/components/ui";

const SERVICES = [
  {
    title: "Webbplatser",
    glyph: "web",
    text: "Nya webbplatser och modernisering av befintliga lösningar med fokus på design, användarupplevelse, mobil, prestanda och tydlig kommunikation.",
    meta: ["Design", "Utveckling", "SEO", "Prestanda"],
  },
  {
    title: "E-handel",
    glyph: "commerce",
    text: "Nya webbshoppar och vidareutveckling av befintliga e-handelslösningar med fokus på produktupplevelse, köpresa, administration och försäljning.",
    meta: ["Produkter", "Kundresa", "Administration", "Integrationer"],
  },
  {
    title: "System & automation",
    glyph: "systems",
    text: "Skräddarsydda funktioner, interna verktyg och integrationer som minskar manuellt arbete och gör verksamhetens digitala flöden enklare.",
    meta: ["System", "API:er", "Automation", "Integrationer"],
  },
] as const;

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

      <ol className="mt-12 flex flex-col gap-4 lg:mt-16">
        {SERVICES.map((service, i) => (
          <li key={service.title} data-reveal>
            <article className="grid-ns gap-y-6 rounded-panel border border-line bg-surface px-5 py-7 md:p-10 lg:p-12">
              <div className="col-span-4 flex items-start justify-between gap-6 md:col-span-6 lg:col-span-4 lg:flex-col">
                <div>
                  <p className="text-label text-muted" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-h3 mt-3">{service.title}</h3>
                </div>
                <ServiceGlyph kind={service.glyph} className="w-24 shrink-0 lg:mt-auto lg:w-28" />
              </div>

              <div className="col-span-4 flex flex-col md:col-span-6 lg:col-span-7 lg:col-start-6">
                <p className="text-lead lg:flex-1">{service.text}</p>
                <MetaList items={service.meta} className="mt-8 border-t border-line pt-5 text-muted lg:mt-12" />
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
