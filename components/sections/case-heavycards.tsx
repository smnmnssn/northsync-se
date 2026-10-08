import Image from "next/image";
import { Eyebrow } from "@/components/ui";

/**
 * Add a real HeavyCards screenshot to /public/case/ and reference it here.
 * Until then the frame shows a clearly schematic layout sketch — never a
 * fabricated screenshot.
 */
const SCREENSHOT: { src: string; alt: string } | null = null;

const FEATURES = ["Produktkatalog", "Lagerhantering", "Administration", "Orderflöden", "Mobilupplevelse", "SEO"];

export function CaseHeavyCards() {
  return (
    <section id="case" aria-labelledby="case-heading" className="on-dark bg-night text-white">
      <div className="container-ns section-y">
        <div className="grid-ns gap-y-6" data-reveal>
          <div className="col-span-4 md:col-span-6 lg:col-span-6">
            <Eyebrow className="text-night-muted">Utvalt projekt</Eyebrow>
            <h2 id="case-heading" className="text-h2 mt-5">
              HeavyCards
            </h2>
          </div>
          <p className="text-lead col-span-4 self-end text-night-muted md:col-span-5 lg:col-span-5 lg:col-start-8">
            En specialbyggd e-handelsplattform för Pokémon TCG med kundupplevelse, produktkatalog, lager, orderflöden
            och administration samlade i en lösning.
          </p>
        </div>

        <figure className="mt-12 lg:mt-16" data-reveal>
          <div className="overflow-hidden rounded-[12px] border border-night-line bg-night-surface shadow-[0_48px_96px_-48px_rgba(0,0,0,0.75)] md:rounded-media">
            <div className="flex h-9 items-center gap-3 border-b border-night-line px-4 md:h-11" aria-hidden>
              <span className="flex gap-1.5">
                <span className="size-2.5 rounded-full border border-white/20" />
                <span className="size-2.5 rounded-full border border-white/20" />
                <span className="size-2.5 rounded-full border border-white/20" />
              </span>
              <span className="mx-auto h-5 w-2/5 max-w-72 rounded-md bg-white/[0.05] md:h-6" />
              <span className="w-[42px]" />
            </div>
            <div className="relative aspect-[16/10]">
              {SCREENSHOT ? (
                <Image
                  src={SCREENSHOT.src}
                  alt={SCREENSHOT.alt}
                  fill
                  sizes="(min-width: 1368px) 1240px, calc(100vw - 40px)"
                  className="object-cover object-top"
                />
              ) : (
                <StorefrontSketch />
              )}
            </div>
          </div>
        </figure>

        <div className="grid-ns mt-16 gap-y-12 lg:mt-24" data-reveal>
          <div className="col-span-4 md:col-span-3 lg:col-span-5">
            <h3 className="text-h3">Utmaningen</h3>
            <p className="text-body mt-4 text-night-muted">
              HeavyCards behövde en modern digital grund som kunde kombinera en tydlig shoppingupplevelse med
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

/** Wireframe of a storefront layout. Deliberately abstract; not a screenshot. */
function StorefrontSketch() {
  const cols = [300, 541, 782, 1023];
  const rows = [190, 500];
  const bar = "#2A3036";
  const edge = "#2E343A";

  return (
    <svg
      viewBox="0 0 1280 800"
      className="absolute inset-0 size-full"
      role="img"
      aria-label="Schematisk skiss av en butiksvy med produktfilter och produktkort"
    >
      <rect width="1280" height="800" fill="#14181C" />

      {/* top navigation */}
      <rect x="40" y="30" width="132" height="20" rx="4" fill={bar} />
      {[480, 570, 660, 750].map((x) => (
        <rect key={x} x={x} y="36" width="60" height="8" rx="4" fill={bar} />
      ))}
      <circle cx="1226" cy="40" r="12" fill="none" stroke={edge} strokeWidth="2" />
      <circle cx="1236" cy="30" r="5" fill="#2563EB" />
      <line x1="0" y1="80" x2="1280" y2="80" stroke={edge} strokeWidth="2" />

      {/* page title */}
      <rect x="40" y="112" width="300" height="26" rx="5" fill="#3A4148" />
      <rect x="40" y="150" width="200" height="10" rx="5" fill={bar} />

      {/* filters */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect x="40" y={200 + i * 40} width="14" height="14" rx="3" fill="none" stroke={edge} strokeWidth="2" />
          <rect x="68" y={203 + i * 40} width={[130, 96, 150, 110, 84, 120][i]} height="8" rx="4" fill={bar} />
        </g>
      ))}

      {/* product grid */}
      {rows.map((y, r) =>
        cols.map((x, c) => (
          <g key={`${x}-${y}`}>
            <rect x={x} y={y} width="217" height="210" rx="10" fill="#1A1F24" stroke={edge} strokeWidth="2" />
            <rect x={x + 63} y={y + 21} width="91" height="127" rx="6" fill="#232930" stroke="#353C43" strokeWidth="2" />
            <rect x={x + 75} y={y + 33} width="67" height="50" rx="3" fill="#2B3239" />
            <rect x={x} y={y + 226} width={[150, 120, 170, 135][c]} height="10" rx="5" fill="#3A4148" />
            <rect x={x} y={y + 248} width="64" height="10" rx="5" fill={bar} />
            {r === 0 && c === 1 && <rect x={x + 141} y={y + 238} width="76" height="28" rx="6" fill="#2563EB" />}
          </g>
        )),
      )}
    </svg>
  );
}
