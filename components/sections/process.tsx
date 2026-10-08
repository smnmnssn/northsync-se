import { Eyebrow } from "@/components/ui";

const STEPS = [
  { title: "Förstå", text: "Verksamheten, nuläget och målet kartläggs." },
  { title: "Planera", text: "Lösning, omfattning och prioriteringar definieras innan utvecklingen börjar." },
  { title: "Bygga", text: "Design och utveckling sker stegvis med tydliga avstämningar." },
  { title: "Lansera", text: "Lösningen testas, lanseras och byggs så att den går att vidareutveckla." },
];

export function Process() {
  return (
    <section id="arbetssatt" aria-labelledby="process-heading" className="container-ns section-y">
      <div className="grid-ns gap-y-6" data-reveal>
        <div className="col-span-4 md:col-span-6 lg:col-span-7">
          <Eyebrow className="text-muted">Arbetssätt</Eyebrow>
          <h2 id="process-heading" className="text-h2 mt-5">
            Från behov till färdig lösning.
          </h2>
        </div>
        <p className="text-lead col-span-4 self-end text-muted md:col-span-5 lg:col-span-5 lg:col-start-8">
          Ett bra projekt börjar inte med valet av teknik. Det börjar med att förstå vad verksamheten faktiskt
          behöver.
        </p>
      </div>

      <ol className="mt-14 grid gap-x-6 lg:mt-20 lg:grid-cols-4" data-reveal>
        {STEPS.map((step, i) => {
          const last = i === STEPS.length - 1;
          return (
            <li key={step.title} className="relative pb-12 pl-10 last:pb-0 md:pl-14 lg:pb-0 lg:pl-0 lg:pt-14">
              {!last && (
                <span
                  aria-hidden
                  className="absolute top-4 -bottom-1 left-[5.5px] w-px bg-line lg:top-[5.5px] lg:right-[-24px] lg:bottom-auto lg:left-3 lg:h-px lg:w-auto"
                />
              )}
              <span
                aria-hidden
                className={`absolute top-1 left-0 size-3 rounded-full border-[1.5px] lg:top-0 ${
                  last ? "border-accent bg-accent" : "border-ink bg-paper"
                }`}
              />
              <p className="text-label text-muted">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="text-h3 mt-2">{step.title}</h3>
              <p className="text-body mt-3 max-w-[32ch] text-ink/75 lg:pr-4">{step.text}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
