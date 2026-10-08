import { Logo } from "@/components/brand/logo";
import { MetaList } from "@/components/ui";
import { CONTACT } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-night text-white">
      <div className="container-ns">
        <div className="flex flex-col gap-10 border-t border-night-line py-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo inverted />
            <MetaList items={["Webbutveckling", "E-handel", "Digitala system"]} className="mt-5 text-night-muted" />
          </div>

          <div className="flex flex-col gap-1 text-[0.9375rem] md:items-end">
            <a href={`mailto:${CONTACT.email}`} className="py-1.5 hover:text-night-muted">
              {CONTACT.email}
            </a>
            <a href="https://northsync.se" className="py-1.5 text-night-muted hover:text-white">
              northsync.se
            </a>
            <p className="text-label mt-3 text-night-muted">© 2026 Northsync</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
