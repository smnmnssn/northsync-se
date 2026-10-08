import { Eyebrow } from "@/components/ui";

export function About() {
  return (
    <section id="om" aria-labelledby="about-heading" className="container-ns section-y">
      <div className="grid-ns gap-y-10" data-reveal>
        <div className="col-span-4 md:col-span-6 lg:col-span-5">
          <Eyebrow className="text-muted">Om Northsync</Eyebrow>
          <h2 id="about-heading" className="text-h2 mt-5 max-w-[16ch]">
            Teknik med verksamheten som utgångspunkt.
          </h2>
        </div>

        <div className="col-span-4 md:col-span-5 lg:col-span-6 lg:col-start-7 lg:pt-12">
          <p className="text-lead">
            Northsync drivs av Simon Månsson och arbetar med webbutveckling, e-handel och digitala system.
          </p>
          <p className="text-body mt-6 text-muted">
            Jag startade Northsync med en enkel idé: digitala lösningar ska utgå från hur verksamheten faktiskt
            fungerar. Ibland innebär det att bygga något nytt från grunden. Ibland handlar det om att förbättra det
            som redan finns.
          </p>
          <p className="text-body mt-4 text-muted">
            Jag arbetar nära kunden genom hela projektet, från första idé till färdig lösning.
          </p>
        </div>
      </div>
    </section>
  );
}
