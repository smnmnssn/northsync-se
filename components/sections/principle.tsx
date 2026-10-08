export function Principle() {
  return (
    <section aria-labelledby="principle-heading" className="border-y border-line bg-surface">
      <div className="container-ns section-y">
        <div className="grid-ns gap-y-8" data-reveal>
          <h2 id="principle-heading" className="text-h2 col-span-4 md:col-span-6 lg:col-span-6">
            Rätt lösning behöver inte vara den största lösningen.
          </h2>
          <p className="text-lead col-span-4 self-end text-muted md:col-span-5 lg:col-span-5 lg:col-start-8">
            Northsync utgår från verksamheten först och tekniken därefter. Om en befintlig lösning går att förbättra
            finns ingen anledning att bygga om allt. Om något nytt behöver byggas görs det med en grund som går att
            vidareutveckla.
          </p>
        </div>

        <div className="mt-16 border-t border-line pt-10 lg:mt-24 lg:pt-16" data-reveal>
          <p className="text-statement flex gap-4 md:gap-6">
            <span aria-hidden className="mt-[0.4em] size-2.5 shrink-0 rounded-full bg-accent md:size-3" />
            <span className="max-w-[24ch]">
              <span className="text-muted">Målet är inte mer teknik.</span> Målet är att skapa något som fungerar
              bättre.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
