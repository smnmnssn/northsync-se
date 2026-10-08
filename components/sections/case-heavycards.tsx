import { Eyebrow } from "@/components/ui";
import { HeavyCardsCarousel } from "./heavycards-carousel";

const FEATURES = ["Produktkatalog", "Lagerhantering", "Administration", "Orderflöden", "Mobilupplevelse", "SEO"];

export function CaseHeavyCards() {
  return (
    <section id="case" aria-labelledby="case-heading" className="on-dark bg-night text-white">
      <div className="container-ns section-y">
        <div className="grid-ns gap-y-6" data-reveal>
          <div className="col-span-4 md:col-span-6 lg:col-span-6">
            <Eyebrow className="text-night-muted">Utvalt projekt</Eyebrow>
            <h2 id="case-heading" className="text-h2 mt-5">
              HEAVYCARDS AB
            </h2>
          </div>
          <p className="text-lead col-span-4 self-end text-night-muted md:col-span-5 lg:col-span-5 lg:col-start-8">
            En specialbyggd e-handelsplattform för Pokémon TCG med kundupplevelse, produktkatalog, lager, orderflöden
            och administration samlade i en lösning.
          </p>
        </div>

        <HeavyCardsCarousel />

        <div className="grid-ns mt-16 gap-y-12 lg:mt-24" data-reveal>
          <div className="col-span-4 md:col-span-3 lg:col-span-5">
            <h3 className="text-h3">Utmaningen</h3>
            <p className="text-body mt-4 text-night-muted">
              HEAVYCARDS AB behövde en modern digital grund som kunde kombinera en tydlig shoppingupplevelse med
              effektiv hantering av produkter, lager och order.
            </p>
          </div>
          <div className="col-span-4 md:col-span-3 lg:col-span-5 lg:col-start-7">
            <h3 className="text-h3">Lösningen</h3>
            <p className="text-body mt-4 text-night-muted">
              Plattformen utvecklas som en sammanhängande lösning med responsiv storefront, produkt- och
              kategorihantering, kundvagn, orderflöden och separat administrationsgränssnitt.
            </p>
          </div>
        </div>

        <ul
          className="mt-14 grid grid-cols-1 border-t border-night-line min-[400px]:grid-cols-2 md:grid-cols-3"
          aria-label="Funktioner i HeavyCards"
          data-reveal
        >
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-center gap-3 border-b border-night-line py-4 md:py-5">
              <span aria-hidden className="size-2 rounded-full border border-night-muted" />
              <span className="text-base md:text-[1.0625rem]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
