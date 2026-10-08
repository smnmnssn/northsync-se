"use client";

import Image, { getImageProps } from "next/image";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Arrow } from "@/components/ui";

const SLIDES = [
  {
    title: "Storefront",
    caption: "Responsiv butik och produktpresentation",
    src: "/case/heavycards-storefront-desktop.png",
    width: 1691,
    height: 1302,
    // Portrait variant for narrow screens (below the stage's 560px breakpoint).
    narrow: { src: "/case/heavycards-storefront-desktop-mobile.png", width: 1872, height: 2372 },
    alt: "Skärmbild av HeavyCards startsida med sidhuvud, introduktion och utvalda produkter.",
  },
  {
    title: "Produktkatalog",
    caption: "Kategorier, filtrering och produktsortiment",
    src: "/case/heavycards-sortiment-desktop.png",
    width: 1787,
    height: 1301,
    narrow: { src: "/case/heavycards-sortiment-desktop-mobile.png", width: 2099, height: 2736 },
    alt: "Skärmbild av HeavyCards produktkatalog med kategorier, filter och produktkort.",
  },
  {
    title: "Administration",
    caption: "Order, lager, recensioner och butiksadministration",
    src: "/case/heavycards-admin-overview.png",
    width: 1609,
    height: 1236,
    narrow: { src: "/case/heavycards-admin-overview-mobile.png", width: 1438, height: 1308 },
    alt: "Skärmbild av HeavyCards administrationsöversikt med nya beställningar, försäljning, senaste order och lågt lager.",
  },
  {
    title: "Mobil handel",
    caption: "Produktvy och köpupplevelse anpassad för mobil",
    src: "/case/heavycards-mobile-product-page.png",
    width: 440,
    height: 1610,
    alt: "Skärmbild av en produktsida i HeavyCards mobilvy med pris, lagerstatus och knapp för kundvagn.",
    mobile: true,
  },
] as const;

const subscribeNone = () => () => {};
const shotClass = "h-auto max-h-full w-auto max-w-full rounded-[10px] md:rounded-[14px]";
const SHOT_SIZES = "(min-width: 1368px) 1176px, (min-width: 768px) calc(100vw - 128px), calc(100vw - 72px)";

/** Native <picture>: portrait image below 560px (the stage's own breakpoint), landscape above. */
function ResponsiveShot({
  slide,
  priority,
}: {
  priority: boolean;
  slide: { src: string; width: number; height: number; alt: string; narrow: { src: string; width: number; height: number } };
}) {
  const common = { alt: slide.alt, quality: 90, sizes: SHOT_SIZES };
  const wide = getImageProps({ ...common, src: slide.src, width: slide.width, height: slide.height, priority });
  const narrow = getImageProps({
    ...common,
    src: slide.narrow.src,
    width: slide.narrow.width,
    height: slide.narrow.height,
    priority,
  });
  return (
    <picture className="contents">
      <source media="(min-width: 560px)" srcSet={wide.props.srcSet} sizes={SHOT_SIZES} />
      <img {...narrow.props} alt={slide.alt} className={shotClass} />
    </picture>
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

export function HeavyCardsCarousel() {
  const scroller = useRef<HTMLUListElement>(null);
  const frame = useRef(0);
  const [active, setActive] = useState(0);
  // False on the server and during hydration, so controls only appear once they work.
  const ready = useSyncExternalStore(subscribeNone, () => true, () => false);
  // Only announce position changes the user triggered with buttons/keys,
  // never while they are swiping or scrolling.
  const [announce, setAnnounce] = useState(false);

  const onScroll = useCallback(() => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = scroller.current;
      if (el) setActive(Math.round(el.scrollLeft / el.clientWidth));
    });
  }, []);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const goTo = (index: number) => {
    const el = scroller.current;
    if (!el) return;
    const i = Math.min(Math.max(index, 0), SLIDES.length - 1);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setAnnounce(true);
    el.scrollTo({ left: i * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.target !== e.currentTarget) return;
    const keys: Record<string, number> = { ArrowLeft: active - 1, ArrowRight: active + 1, Home: 0, End: SLIDES.length - 1 };
    if (e.key in keys) {
      e.preventDefault();
      goTo(keys[e.key]);
    }
  };

  const current = SLIDES[active] ?? SLIDES[0];

  return (
    <figure className="mt-12 lg:mt-16" data-reveal>
      <p className="mb-3 text-sm text-night-muted">*Endast testdata visas i bilderna.</p>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Skärmbilder från HeavyCards"
        className="overflow-hidden rounded-[12px] border border-night-line bg-night-surface shadow-[0_48px_96px_-48px_rgba(0,0,0,0.75)] md:rounded-media"
      >
        <ul
          ref={scroller}
          tabIndex={0}
          aria-label="Skärmbilder, bläddra med piltangenterna"
          onScroll={onScroll}
          onKeyDown={onKeyDown}
          onPointerDown={() => setAnnounce(false)}
          onWheel={() => setAnnounce(false)}
          className="flex snap-x snap-mandatory overflow-x-auto focus-visible:outline-offset-[-3px] overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SLIDES.map((slide, i) => {
          const isMobile = "mobile" in slide;
          const image = (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              quality={90}
              priority={i === 0}
              sizes={
                isMobile
                  ? "(min-width: 1024px) 320px, 240px"
                  : "(min-width: 1368px) 1176px, (min-width: 768px) calc(100vw - 128px), calc(100vw - 72px)"
              }
              className="object-contain"
            />
          );
          return (
            <li
              key={slide.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} av ${SLIDES.length}: ${slide.title}`}
              className="w-full shrink-0 snap-center"
            >
              <div className="relative aspect-[4/5] p-4 min-[560px]:aspect-[4/3] md:p-8">
                {isMobile ? (
                  <div className="flex size-full justify-center">
                    <div className="h-full max-w-full rounded-[1.75rem] border border-white/20 p-1.5 md:p-2">
                      <div className="relative aspect-[440/1610] h-full overflow-hidden rounded-[1.25rem]">{image}</div>
                    </div>
                  </div>
                ) : (
                  <div className="flex size-full items-center justify-center">
                    <ResponsiveShot slide={slide} priority={i === 0} />
                  </div>
                )}
              </div>
            </li>
          );
        })}
        </ul>
      </div>

      <figcaption className="mt-5 flex flex-col gap-6 md:mt-6">
        <div className="flex items-start justify-between gap-6">
          <div aria-live={announce ? "polite" : "off"} aria-atomic="true" className="min-w-0">
            <p className="text-label text-night-muted">
              {pad(active + 1)} / {pad(SLIDES.length)}
            </p>
            <p className="text-h3 mt-2">{current.title}</p>
            <p className="text-body mt-1 text-night-muted">{current.caption}</p>
          </div>

          <div className={`flex shrink-0 items-center gap-2 ${ready ? "" : "invisible"}`} inert={!ready}>
            <ArrowButton direction="prev" disabled={active === 0} onClick={() => goTo(active - 1)} />
            <ArrowButton direction="next" disabled={active === SLIDES.length - 1} onClick={() => goTo(active + 1)} />
          </div>
        </div>

        <div className={`flex items-center ${ready ? "" : "invisible"}`} inert={!ready}>
          {SLIDES.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Visa skärmbild ${i + 1}: ${slide.title}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => goTo(i)}
              className="group flex h-11 w-12 items-center justify-center first:-ml-0 md:w-14"
            >
              <span
                className={`h-0.5 w-full transition-colors duration-200 ${
                  i === active ? "bg-white" : "bg-night-line group-hover:bg-night-muted"
                }`}
              />
            </button>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

function ArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Föregående skärmbild" : "Nästa skärmbild"}
      className="group inline-flex size-11 items-center justify-center rounded-button border border-white/30 text-white transition-colors duration-200 hover:border-white hover:bg-white/[0.06] disabled:pointer-events-none disabled:opacity-35"
    >
      <Arrow className={`${direction === "prev" ? "rotate-180 group-hover:-translate-x-[3px]!" : ""}`} />
    </button>
  );
}
