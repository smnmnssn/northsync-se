"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui";
import { CONTACT, NAV } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    root.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = () => desktop.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  const close = () => setOpen(false);
  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        open
          ? "border-line bg-paper"
          : solid
            ? "border-line bg-paper/85 backdrop-blur-md"
            : "border-transparent bg-paper/0"
      }`}
      onBlur={(e) => {
        if (open && !e.currentTarget.contains(e.relatedTarget as Node | null)) close();
      }}
    >
      <div className="container-ns flex h-16 items-center justify-between gap-6 lg:h-18">
        <a href="#top" className="-m-2 rounded-md p-2" aria-label="Northsync, till sidans början">
          <Logo />
        </a>

        <nav aria-label="Huvudmeny" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-[0.9375rem] text-ink/75 transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ButtonLink href="#kontakt" arrow="right" className="min-h-11!">
              Berätta om ert projekt
            </ButtonLink>
          </div>

          <button
            ref={buttonRef}
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-md lg:hidden"
            aria-expanded={open}
            aria-controls="mobilmeny"
            aria-label="Meny"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 8.5h16M4 15.5h16" strokeLinecap="round" />
                  <circle cx="20" cy="8.5" r="1.75" fill="currentColor" stroke="none" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobilmeny"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-paper lg:hidden"
      >
        <nav aria-label="Mobilmeny" className="container-ns flex min-h-full flex-col pt-6 pb-10">
          <ul>
            {NAV.map((item, i) => (
              <li key={item.href} className="border-b border-line">
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={close}
                  className="flex items-baseline gap-4 py-4 text-[1.75rem] leading-tight font-semibold tracking-[-0.025em]"
                >
                  <span aria-hidden className="text-label w-6 text-muted">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-6 pt-10">
            <ButtonLink href="#kontakt" arrow="right" onClick={close} className="w-full sm:w-auto sm:self-start">
              Berätta om ert projekt
            </ButtonLink>
            <a href={`mailto:${CONTACT.email}`} className="text-label self-start py-2 text-muted hover:text-ink">
              {CONTACT.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
