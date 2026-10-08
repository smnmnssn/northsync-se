import { SpruceNetwork } from "@/components/brand/spruce-network";
import { ButtonLink, MetaList } from "@/components/ui";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="container-ns">
      <div className="grid-ns items-center gap-y-16 pt-14 pb-20 md:pt-20 lg:min-h-[calc(100svh-72px)] lg:max-h-[1000px] lg:py-20">
        <div className="col-span-4 md:col-span-6 lg:col-span-7">
          <h1 id="hero-heading" className="text-h1 hero-enter max-w-[13ch]">
            Digitala lösningar byggda för verksamheten.
          </h1>
          <p className="text-lead hero-enter-delay mt-6 max-w-[36rem] text-muted md:mt-8">
            Northsync bygger nya och vidareutvecklar befintliga webbplatser, webbshoppar och digitala system för
            företag som vill arbeta smartare och presentera sig bättre digitalt.
          </p>

          <div className="hero-enter-delay mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#kontakt" arrow="right">
              Berätta om ert projekt
            </ButtonLink>
            <ButtonLink href="#tjanster" variant="secondary" arrow="down">
              Se vad Northsync gör
            </ButtonLink>
          </div>

          <MetaList
            items={["Webbplatser", "E-handel", "Digitala system"]}
            className="hero-enter-delay mt-12 border-t border-line pt-5 text-muted md:mt-16"
          />
        </div>

        <div className="col-span-4 md:col-span-4 md:col-start-2 lg:col-span-5 lg:col-start-8">
          <SpruceNetwork className="mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[460px]" />
        </div>
      </div>
    </section>
  );
}
