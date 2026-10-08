import { Arrow, ButtonLink } from "@/components/ui";
import { CONTACT } from "@/lib/site";

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="contact-heading" className="on-dark bg-night text-white">
      <div className="container-ns section-y">
        <div className="grid-ns gap-y-12" data-reveal>
          <h2 id="contact-heading" className="text-h2 col-span-4 max-w-[18ch] md:col-span-6 lg:col-span-8">
            Har ni något som borde fungera bättre digitalt?
          </h2>

          <div className="col-span-4 md:col-span-5 lg:col-span-6">
            <p className="text-lead text-night-muted">
              Oavsett om det gäller en ny webbplats, en befintlig webshop eller en idé till ett digitalt verktyg
              börjar det gärna med ett kort samtal om behovet.
            </p>
            <p className="text-body mt-6 text-white">
              Skicka ett mail eller ring så tar vi ett första samtal om vad ni behöver.
            </p>
            <ButtonLink href={`mailto:${CONTACT.email}`} arrow="right" className="mt-10">
              Berätta om ert projekt
            </ButtonLink>
          </div>

          <address className="col-span-4 not-italic md:col-span-5 lg:col-span-5 lg:col-start-8">
            <div className="rounded-panel border border-night-line bg-night-surface p-6 md:p-8">
              <p className="text-label text-night-muted">Kontakt</p>
              <p className="text-h3 mt-3">{CONTACT.name}</p>

              <dl className="mt-8 divide-y divide-night-line border-t border-night-line">
                <div className="py-4">
                  <dt className="text-label text-night-muted">E-post</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="group inline-flex items-center gap-2 py-1 text-[1.25rem] font-medium tracking-[-0.01em] underline decoration-white/25 underline-offset-[6px] transition-colors hover:decoration-white md:text-[1.375rem]"
                    >
                      {CONTACT.email}
                      <Arrow className="text-[#6E97F2]" />
                    </a>
                  </dd>
                </div>
                <div className="pt-4">
                  <dt className="text-label text-night-muted">Telefon</dt>
                  <dd className="mt-1">
                    <a
                      href={CONTACT.phoneHref}
                      className="group inline-flex items-center gap-2 py-1 text-[1.25rem] font-medium tracking-[-0.01em] underline decoration-white/25 underline-offset-[6px] transition-colors hover:decoration-white md:text-[1.375rem]"
                    >
                      {CONTACT.phone}
                      <Arrow className="text-[#6E97F2]" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
