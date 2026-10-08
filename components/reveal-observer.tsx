"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement for [data-reveal] elements: content is visible
 * without JS and with reduced motion; otherwise it fades in on first view.
 */
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reveal = (el: Element) => el.setAttribute("data-revealed", "");

    // Anything already on screen stays visible to avoid a flash.
    for (const el of elements) {
      if (el.getBoundingClientRect().top < window.innerHeight) reveal(el);
    }
    document.documentElement.setAttribute("data-reveal-ready", "");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    for (const el of elements) if (!el.hasAttribute("data-revealed")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return null;
}
