import { RevealObserver } from "@/components/reveal-observer";
import { About } from "@/components/sections/about";
import { CaseHeavyCards } from "@/components/sections/case-heavycards";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Positioning } from "@/components/sections/positioning";
import { Principle } from "@/components/sections/principle";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <a
        href="#innehall"
        className="sr-only z-[60] rounded-button bg-ink px-4 py-3 text-sm text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Hoppa till innehållet
      </a>
      <div id="top" />
      <SiteHeader />
      <main id="innehall" tabIndex={-1} className="outline-none">
        <Hero />
        <Positioning />
        <Services />
        <CaseHeavyCards />
        <Process />
        <Principle />
        <About />
        <Contact />
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
