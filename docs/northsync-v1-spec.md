# Northsync V1 Website Specification

Status: Approved V1 design specification

Production domain:

https://northsync.se

---

## 1. Purpose

Northsync.se is the official company website for Northsync.

The primary purpose is to establish credibility when prospective clients visit the site through outreach, referrals or search.

The site should clearly communicate that Northsync:

- builds new websites and digital solutions
- modernizes and develops existing solutions
- works with websites, e-commerce and digital systems
- adapts solutions to the actual needs of the business

Northsync must not be positioned only as a company that modernizes existing websites.

Core principle:

**Bygga nytt. Förbättra befintligt. Förenkla digitalt.**

The site should feel professional enough that a business owner receiving a cold outreach email can visit northsync.se and immediately see Northsync as a serious potential supplier.

---

## 2. Brand direction

Northsync should feel:

- modern
- Scandinavian
- technical
- restrained
- professional
- personal
- premium without appearing expensive or corporate

It should NOT feel like:

- an AI startup
- a generic SaaS template
- a traditional advertising agency
- a flashy developer portfolio
- a forestry company
- a sustainability brand

Avoid:

- stock photography
- gradient blobs
- excessive glassmorphism
- excessive rounded cards
- random icon sets
- large decorative animations
- buzzword-heavy copy
- unnecessary visual effects

Whitespace, typography, structure and subtle technical details should create the visual identity.

---

## 3. Northsync brand mark

The Northsync mark is a **Geometric N with a North Marker**.

Reference: `docs/references/northsync-geometric-n-reference.png`

Construction:

- a solid geometric N in the dark structure color: left stem plus a heavy diagonal that ends in a vertical right foot
- a blue triangular north marker in the upper-right corner, pointing up and to the left, separated from the N by a small gap
- filled flat shapes only; no strokes, circles, gradients or ornament
- approximately square overall proportions

The intended reading is a geometric N first, with a north/upward marker integrated into the upper-right corner.

It must NOT include trees, branches, network nodes, compass rings, mountains or generic arrow icons.

### Shared geometry

One canonical source, `components/brand/north-mark.tsx`, defines the geometry. The header, footer, hero graphic, favicon, app icon and Open Graph image all derive from it. No separate hand-drawn copies.

### Variants

- Light backgrounds: N in `#111315`, marker in `#2563EB`
- Dark backgrounds: N in the light foreground `#F6F7F4`, marker in `#2563EB`
- Identical geometry in both

### Lockup

Header and footer lockup:

`[N mark] NORTHSYNC`

NORTHSYNC uses uppercase lettering with restrained letter spacing. The mark must stay recognizable at 32–40px.

### Favicon and app icon

Dark tile, light N, blue marker, no text. Derived from the same geometry.

### Hero graphic

A larger composition built from the same N and marker polygons: the primary mark with a hairline outline echo of the N and subtle construction lines taken from the mark's own edges. It must not look like the logo simply enlarged. Static; no animation.

---

## 4. Color system

Primary background:

`#F6F7F4`

Surface:

`#FFFFFF`

Primary text / ink:

`#111315`

Muted text:

`#646A6F`

Borders:

`#DDE1DD`

Accent:

`#2563EB`

Accent hover:

`#1D4ED8`

Dark background:

`#0E1114`

Dark surface:

`#171B1F`

Muted text on dark:

`#A7ADB4`

Use blue sparingly.

Blue should primarily attract attention to:

- calls to action
- links
- the north marker
- small interactive details

Avoid large areas of bright blue.

---

## 5. Typography

Use:

Geist Sans — primary typography

Geist Mono — labels, section eyebrows and small technical metadata only

### Approximate type scale

Hero H1:

Desktop: 72px
Laptop: around 64px
Mobile: around 42–46px
Line height: approximately 1.03–1.06
Weight: 600

H2:

Desktop: approximately 48px
Mobile: approximately 34–36px
Weight: 600

H3:

Approximately 24–28px
Weight: 600

Large body copy:

Approximately 19px
Generous line height

Standard body copy:

Approximately 16–17px
Generous line height

Labels:

Geist Mono
Approximately 12px
Uppercase
Increased letter spacing

Avoid excessively heavy 800–900 font weights.

---

## 6. Layout system

Maximum main content width:

Approximately 1240px

Desktop:

12-column grid
24px approximate grid gap
48–64px page gutters

Tablet:

6-column grid
Approximately 32px gutters

Mobile:

4-column grid
Approximately 20px gutters

Large desktop section spacing:

Approximately 120px

Mobile section spacing:

Approximately 72–80px

Use a consistent spacing scale rather than arbitrary values.

Prefer values around:

16
24
32
48
64
80
120

---

## 7. Component styling

Buttons:

Approximately 10px radius

Cards/panels:

Approximately 14px radius

Large media/browser panels:

Approximately 18px radius

Borders:

Primarily 1px using the standard border color.

Avoid strong drop shadows.

Service panels should rely mostly on:

- spacing
- typography
- subtle borders
- layout

Use shadows only where they materially help depth, for example the HeavyCards browser presentation.

---

## 8. Buttons and links

### Primary button

Blue background.

White text.

Example:

**Berätta om ert projekt →**

Hover:

- darker blue
- arrow may move 2–3px horizontally

### Secondary button

Transparent background.

Dark border.

Example:

**Se vad Northsync gör ↓**

### Text links

Simple text + arrow.

Subtle underline or arrow motion on hover.

Avoid overly animated buttons.

---

## 9. Header

Approximately 72px desktop height.

Sticky.

Left:

Northsync N mark + NORTHSYNC

Desktop navigation:

Tjänster
Case
Arbetssätt
Om
Kontakt

Primary CTA:

**Berätta om ert projekt**

After scrolling, the header may gain:

- slightly opaque background
- subtle backdrop blur
- thin bottom border

Mobile:

- logo left
- accessible menu button right
- clean mobile navigation

---

## 10. Hero

Desktop composition:

Approximately 58% copy / 42% visual.

The hero should feel spacious.

Do not overcrowd it.

### H1

**Digitala lösningar byggda för verksamheten.**

### Body

**Northsync bygger nya och vidareutvecklar befintliga webbplatser, webbshoppar och digitala system för företag som vill arbeta smartare och presentera sig bättre digitalt.**

### Primary CTA

**Berätta om ert projekt**

### Secondary CTA

**Se vad Northsync gör**

### Metadata

**WEBBPLATSER · E-HANDEL · DIGITALA SYSTEM**

### Hero graphic

Use the large Geometric N graphic described in the brand mark section.

It should feel integrated with the design rather than being a decorative stock illustration.

The hero graphic is static in V1.

No particles. No constant distracting motion.

Mobile layout:

copy
→ CTAs
→ N graphic

---

## 11. Positioning section

Use generous whitespace and large typography.

### Heading

**Bygga nytt. Förbättra befintligt. Förenkla digitalt.**

### Copy

**Alla företag behöver inte samma lösning. Ibland behövs en helt ny webbplats. Ibland finns redan en bra grund som behöver utvecklas. Och ibland ligger den största förbättringen i att förenkla ett manuellt arbetsflöde eller koppla ihop system som redan används.**

On desktop, the heading and text can use an asymmetric multi-column composition.

---

## 12. Services

Eyebrow:

**VAD NORTHSYNC GÖR**

Heading:

**Digital utveckling från webb till verksamhetssystem.**

Intro:

**Från publika webbplatser till interna verktyg och integrationer. Lösningen anpassas efter verksamheten och det faktiska behovet.**

Use three large editorial-style panels.

Do not make them look like generic SaaS icon cards.

### Webbplatser

**Nya webbplatser och modernisering av befintliga lösningar med fokus på design, användarupplevelse, mobil, prestanda och tydlig kommunikation.**

Metadata:

`DESIGN · UTVECKLING · SEO · PRESTANDA`

### E-handel

**Nya webbshoppar och vidareutveckling av befintliga e-handelslösningar med fokus på produktupplevelse, köpresa, administration och försäljning.**

Metadata:

`PRODUKTER · KUNDRESA · ADMINISTRATION · INTEGRATIONER`

### System & automation

**Skräddarsydda funktioner, interna verktyg och integrationer som minskar manuellt arbete och gör verksamhetens digitala flöden enklare.**

Metadata:

`SYSTEM · API:ER · AUTOMATION · INTEGRATIONER`

Small abstract line graphics in the Northsync visual language can be used as supporting decoration.

---

## 13. HeavyCards case

Use a dark background.

Eyebrow:

**UTVALT PROJEKT**

Heading:

**HeavyCards**

Intro:

**En specialbyggd e-handelsplattform för Pokémon TCG med kundupplevelse, produktkatalog, lager, orderflöden och administration samlade i en lösning.**

Create a polished presentation area for a real HeavyCards screenshot.

Do not invent screenshots.

Do not falsely claim that HeavyCards is currently live.

### Utmaningen

**HeavyCards behövde en modern digital grund som kunde kombinera en tydlig shoppingupplevelse med effektiv hantering av produkter, lager och order.**

### Lösningen

**Plattformen utvecklas som en sammanhängande lösning med responsiv storefront, produkt- och kategorihantering, kundvagn, orderflöden och separat administrationsgränssnitt.**

Feature labels:

Produktkatalog
Lagerhantering
Administration
Orderflöden
Mobilupplevelse
SEO

Do not market the case using a long technology stack.

Focus on the business solution.

---

## 14. Process

Eyebrow:

**ARBETSSÄTT**

Heading:

**Från behov till färdig lösning.**

Intro:

**Ett bra projekt börjar inte med valet av teknik. Det börjar med att förstå vad verksamheten faktiskt behöver.**

### 01 Förstå

**Verksamheten, nuläget och målet kartläggs.**

### 02 Planera

**Lösning, omfattning och prioriteringar definieras innan utvecklingen börjar.**

### 03 Bygga

**Design och utveckling sker stegvis med tydliga avstämningar.**

### 04 Lansera

**Lösningen testas, lanseras och byggs så att den går att vidareutveckla.**

Desktop:

Connect the stages using a subtle horizontal line-and-marker motif in the Northsync visual language.

Mobile:

Convert to a vertical progression.

---

## 15. Northsync principle

Use strong typography and significant whitespace.

### Heading

**Rätt lösning behöver inte vara den största lösningen.**

### Body

**Northsync utgår från verksamheten först och tekniken därefter. Om en befintlig lösning går att förbättra finns ingen anledning att bygga om allt. Om något nytt behöver byggas görs det med en grund som går att vidareutveckla.**

### Highlight

**Målet är inte mer teknik. Målet är att skapa något som fungerar bättre.**

This is one of the key brand statements and should have strong visual emphasis.

---

## 16. About

Eyebrow:

**OM NORTHSYNC**

Heading:

**Teknik med verksamheten som utgångspunkt.**

Copy:

**Northsync drivs av Simon Månsson och arbetar med webbutveckling, e-handel och digitala system.**

**Jag startade Northsync med en enkel idé: digitala lösningar ska utgå från hur verksamheten faktiskt fungerar. Ibland innebär det att bygga något nytt från grunden. Ibland handlar det om att förbättra det som redan finns.**

**Jag arbetar nära kunden genom hela projektet, från första idé till färdig lösning.**

Do not use stock photography.

A real portrait may be added in a future iteration.

---

## 17. Contact section

Use a dark final CTA section.

Heading:

**Har ni något som borde fungera bättre digitalt?**

Copy:

**Oavsett om det gäller en ny webbplats, en befintlig webshop eller en idé till ett digitalt verktyg börjar det gärna med ett kort samtal om behovet.**

Follow-up:

**Skicka ett mail eller ring så tar vi ett första samtal om vad ni behöver.**

Contact:

Simon Månsson

simon@northsync.se

0707 72 79 54

Email must use a working `mailto:` link.

Phone should use a working `tel:` link.

V1 does not need a contact form.

---

## 18. Footer

Northsync symbol + NORTHSYNC

**Webbutveckling · E-handel · Digitala system**

simon@northsync.se

northsync.se

© 2026 Northsync

Keep the footer minimal.

---

## 19. Motion

Motion must remain restrained.

Desired feeling:

"The site feels alive."

Not:

"The site is animated."

Allowed:

- subtle fade/translate entrances
- small hover transitions
- subtle arrow movement

Typical section reveal:

Approximately 16px translate
Approximately 500–700ms

Avoid:

- cursor followers
- particles
- large parallax
- bouncing elements
- excessive stagger effects
- animation for decoration alone

Respect reduced motion.

Prefer CSS/browser APIs before adding animation libraries.

---

## 20. Responsive behavior

The mobile site must be intentionally composed rather than simply shrinking desktop.

Hero:

copy
→ CTA
→ graphic

Services:

stack vertically.

HeavyCards:

media uses almost full available width.

Process:

vertical.

Header:

accessible mobile menu.

Maintain comfortable touch targets.

Avoid very small typography.

Required review widths:

320px
390px
768px
1024px
1440px

No horizontal overflow.

---

## 21. Technical scope

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Geist
- Geist Mono
- custom SVG/React components for Northsync graphics

V1 is essentially static.

Do not add:

- database
- CMS
- auth
- admin dashboard
- chatbot
- booking system
- analytics unless explicitly requested
- cookie tooling unless actually needed
- automated test framework
- unnecessary libraries

No Vitest, Cypress or Playwright setup is required for V1.

If meaningful interactive/business-critical functionality is introduced later, reconsider testing at that point.

---

## 22. SEO and platform basics

Implement from V1:

- semantic HTML
- correct heading hierarchy
- title
- description
- canonical URL
- Open Graph metadata
- favicon
- app icons based on the Northsync mark
- sitemap
- robots.txt

Production domain:

https://northsync.se

Avoid keyword stuffing.

SEO copy should still read naturally for humans.

---

## 23. Accessibility

Provide:

- keyboard navigation
- visible focus states
- semantic controls
- appropriate labels
- reasonable color contrast
- reduced-motion support
- accessible mobile navigation

Do not sacrifice accessibility for animation or visual styling.

---

## 24. Validation

V1 does not require an automated test suite.

Before considering an implementation complete:

Run:

- lint
- typecheck
- production build

Manually review:

- 320px
- 390px
- 768px
- 1024px
- 1440px

Verify:

- no overflow
- header navigation
- mobile menu
- anchor links
- mailto link
- tel link
- keyboard navigation
- focus states
- reduced motion
- dark/light section transitions
- basic visual consistency

---

## 25. Quality bar

The final result should look like the real website of a professional Swedish digital development company.

It must not look like an AI-generated landing-page template.

When choosing between:

more decoration

and

better typography, spacing and hierarchy

choose the latter.

Do not change approved Swedish copy without a clear reason.

If a copy improvement is identified, report the suggestion rather than silently rewriting significant messaging.

---

## 26. V1 exclusions

Do not expand V1 unnecessarily.

No:

- blog
- customer portal
- CMS
- admin
- newsletter
- chatbot
- booking calendar
- large portfolio system
- elaborate analytics setup
- unnecessary pages

The goal is a small, polished and credible first version.