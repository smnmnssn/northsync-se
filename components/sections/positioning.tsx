export function Positioning() {
  return (
    <section aria-labelledby="positioning-heading" className="container-ns">
      <div className="grid-ns section-y gap-y-10 border-t border-line" data-reveal>
        <h2 id="positioning-heading" className="text-statement col-span-4 md:col-span-6 lg:col-span-7">
          <span className="block">Bygga nytt.</span>{" "}
          <span className="block">Förbättra befintligt.</span>{" "}
          <span className="block text-muted">Förenkla digitalt.</span>
        </h2>
        <p className="text-lead col-span-4 self-end md:col-span-5 lg:col-span-5 lg:col-start-8">
          Alla företag behöver inte samma lösning. Ibland behövs en helt ny webbplats. Ibland finns redan en bra
          grund som behöver utvecklas. Och ibland ligger den största förbättringen i att förenkla ett manuellt
          arbetsflöde eller koppla ihop system som redan används.
        </p>
      </div>
    </section>
  );
}
