export const SITE_URL = "https://northsync.se";

export const NAV = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#case", label: "Case" },
  { href: "#arbetssatt", label: "Arbetssätt" },
  { href: "#om", label: "Om" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export const CONTACT = {
  name: "Simon Månsson",
  email: "simon@northsync.se",
  phone: "0707 72 79 54",
  phoneHref: "tel:+46707727954",
} as const;
