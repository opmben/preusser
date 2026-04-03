# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

You are building a modern, production-grade German-language website for **Preußer Bedachungen GmbH & Co. KG**, a family-run master roofing company (Meisterbetrieb) based in Boppard-Buchholz, Rheinland-Pfalz, Germany. The business is led by Geschäftsführer **Michael Preußer** and has been operating as a qualified member of the Dachdecker-Innung.

**Existing website**: http://www.preusserdach.de (severely outdated — replace entirely)
**Google Maps listing**: https://maps.app.goo.gl/QfwEZteRbcvt5vEs8

---

## Development Commands

```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Production build — must complete without errors before done
npm run lint       # ESLint check
npx tsc --noEmit  # TypeScript type check (strict mode)
```

**Component installation:**
```bash
npx shadcn@latest init                                      # Bootstrap shadcn/ui
npx shadcn@latest add [component]                           # Add shadcn component
npx shadcn@latest add "https://21st.dev/r/[component]"     # Add 21st.dev component
```

---

## Skill Stack

You must use all three of these tools throughout the build:

### 1. 21st.dev Magic
- Use the `npx shadcn@latest add "https://21st.dev/r/[component]"` CLI to pull production-ready components.
- Prefer 21st.dev components for: navbars, hero sections, service cards, contact forms, testimonial blocks, footers, and CTA sections.
- Always check 21st.dev for a matching component before writing one from scratch.

### 2. UI/UX Pro Max
- Apply advanced UX patterns: progressive disclosure, visual hierarchy, F-pattern scanning, Fitts's law for CTAs.
- Every page must have a clear primary CTA above the fold.
- Mobile-first responsive design. Test every breakpoint: 375px, 768px, 1024px, 1440px.
- Accessibility: semantic HTML, ARIA labels on interactive elements, min contrast ratio 4.5:1, keyboard navigable.

### 3. Framer Motion
- Use `framer-motion` for all meaningful animations.
- Page load: staggered reveal of hero elements (heading → subheading → CTA → image).
- Scroll-triggered animations: fade-up on service cards, stats counters, gallery images.
- Navigation: smooth page transitions using `AnimatePresence`.
- Micro-interactions: button hover states, card lifts, mobile menu open/close.
- **Never animate for the sake of it** — every animation must reinforce the industrial, confident brand feel.

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Components**: shadcn/ui + 21st.dev Magic
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Fonts**: Load via `next/font` (see Design System below)

---

## Design System

### Visual Direction
**Bold & Industrial** — This is a skilled trades company with 40+ years of craft. The site must feel like serious, confident expertise. Dark steel backgrounds, razor-sharp typography, high-contrast accents. Not soft. Not playful. Not generic SaaS.

### Color Palette
```css
--color-bg-primary:    #0f1117;   /* near-black, main background */
--color-bg-secondary:  #1a1d27;   /* dark navy-grey, card backgrounds */
--color-bg-surface:    #252836;   /* elevated surfaces */
--color-accent:        #e8a020;   /* amber/construction-orange — primary accent */
--color-accent-hover:  #f0b040;   /* lighter amber on hover */
--color-text-primary:  #f0f0f0;   /* near-white body text */
--color-text-muted:    #8a8fa8;   /* secondary text */
--color-border:        #2e3347;   /* subtle borders */
--color-danger:        #e84040;   /* form errors */
```

### Typography
- **Display / Headings**: `Bebas Neue` — bold, industrial, memorable
- **Body**: `DM Sans` — clean, readable at all sizes
- **Accent / Labels**: `JetBrains Mono` — used sparingly for stats, labels, badge text

Load all fonts via `next/font/google`.

### Spacing & Layout
- Max content width: `1280px`
- Section padding: `py-20 md:py-32`
- Consistent 8px grid system via Tailwind spacing
- Use CSS Grid for complex layouts, Flexbox for alignment

### Component Style Rules
- All cards: dark background (`--color-bg-secondary`), `1px` border (`--color-border`), `8px` border-radius
- Primary buttons: amber background, dark text, no border-radius softness — `rounded-sm` (2px)
- Secondary buttons: transparent with amber border, amber text
- Section headings: Bebas Neue, uppercase, large (clamp between 40px–80px)
- Amber horizontal rule dividers between major sections

---

## Site Structure

```
/                    → Home (Startseite)
/leistungen          → Services (Leistungen)
/ueber-uns           → About (Über uns)
/projekte            → Gallery / Projects (Projekte)
/kontakt             → Contact (Kontakt)
/impressum           → Legal notice (Impressum)
/datenschutz         → Privacy policy (Datenschutz)
```

---

## Page-by-Page Requirements

### Home (`/`)
1. **Hero**: Full-viewport, dark background with subtle noise texture overlay. Large Bebas Neue headline: `"IHR DACH IN MEISTERHÄNDEN"`. Subheadline in DM Sans. Two CTAs: primary "Angebot anfragen" → `/kontakt`, secondary "Leistungen entdecken" → `/leistungen`. Hero image: rooftop/craftsman photo (use placeholder if no real image).
2. **Trust Bar**: Animated counter row — years in business, completed projects, service radius (km), Meisterbetrieb badge. Scroll-triggered count-up animation.
3. **Services Preview**: 5 service cards (icon + title + short description). Links to `/leistungen`. Framer Motion stagger on scroll.
4. **About Teaser**: Split layout — left text block about family business, right a strong image. CTA to `/ueber-uns`.
5. **Projects Teaser**: 3–4 featured project thumbnails in a grid. CTA to `/projekte`.
6. **Contact CTA Band**: Full-width dark section. Headline + phone number large + "Jetzt anfragen" button.
7. **Footer**: Logo, nav links, contact details, legal links, copyright.

### Services (`/leistungen`)
Five service sections, each with:
- Icon (Lucide or custom SVG)
- Heading + detailed description paragraph
- Bullet-point list of sub-services
- A relevant image placeholder

Services:
1. **Dachdeckerarbeiten** — General roofing work, new builds and repairs
2. **Steildach** — Pitched roof construction and renovation
3. **Flachdach** — Flat roof systems, EPDM, bitumen, gravel
4. **Solaranlagen** — PV system installation on rooftops (Suntech, Mitsubishi, Sharp noted as past suppliers)
5. **Klempnerarbeiten** — Sheet metal work, gutters, flashings, downpipes

### About (`/ueber-uns`)
- Company story: family-run Meisterbetrieb, Boppard region
- Geschäftsführer: Michael Preußer
- Values: Fachgerechtes Arbeiten, Zuverlässigkeit, Sicherheit, persönliche Beratung
- Qualifications: Dachdeckermeister, Mitglied der Dachdecker-Innung
- Team photo placeholder

### Gallery / Projects (`/projekte`)
- Masonry or grid photo gallery
- Filterable by category (Steildach / Flachdach / Solar / Klempner)
- Lightbox on image click (use a 21st.dev or shadcn component if available, otherwise build with Framer Motion)
- Placeholder images with realistic labels

### Contact (`/kontakt`)
- **Left column**: Contact details
  - Phone: `0 67 42 / 3151`
  - Fax: `0 67 42 / 5201`
  - Email: `info@preusserdach.de`
  - Address: `Heidestraße 39b, 56154 Boppard-Buchholz`
  - Google Maps embed (iframe, no JS API key needed)
- **Right column**: Contact form with fields:
  - Name (required)
  - Telefonnummer (required)
  - E-Mail (required)
  - Leistung (dropdown: the 5 service categories)
  - Nachricht (textarea, required)
  - Datenschutz checkbox (required, links to `/datenschutz`)
  - Submit button: "Anfrage senden"
- Form validation: React Hook Form + Zod
- On submit: show success state (no backend needed — log to console or use a mailto fallback)

### Impressum (`/impressum`)
Full German Impressum with all legally required fields:
- Firmenname, Adresse, Telefon, Fax, E-Mail
- Geschäftsführer: Michael Preußer
- Handelsregister: Amtsgericht Koblenz HRB 7011, HRA Nr. 4842
- Zuständige Kammer: Handwerkskammer Koblenz
- Berufsbezeichnung: Dachdeckermeister
- USt-IdNr: auf Anfrage

### Datenschutz (`/datenschutz`)
DSGVO-compliant privacy policy covering:
- Verantwortlicher (controller details)
- Welche Daten werden erhoben (contact form, server logs)
- Zweck der Verarbeitung
- Rechte der betroffenen Personen (Auskunft, Löschung, Widerspruch)
- Keine Weitergabe an Dritte
- Kontakt des Verantwortlichen

---

## Navigation

- Sticky top navbar with logo (left) + nav links (center/right) + CTA button "Angebot anfragen"
- Mobile: hamburger menu with Framer Motion slide-down panel
- Active link state with amber underline indicator
- Navbar background: transparent on hero, transitions to `--color-bg-secondary` on scroll (use `useScroll` or scroll listener)

---

## Performance & SEO

- All pages must have unique `<title>` and `<meta name="description">` tags in German
- Use Next.js `metadata` export per page
- Images: use `next/image` with proper `alt` attributes in German
- No render-blocking resources
- Lazy load gallery images
- Sitemap: generate with `next-sitemap` or manually in `/app/sitemap.ts`

---

## Key Business Information (do not hallucinate — use exactly)

```
Firmenname:     Preußer Bedachungen GmbH & Co. KG
Geschäftsführer: Michael Preußer
Adresse:        Heidestraße 39b, 56154 Boppard-Buchholz
Telefon:        0 67 42 / 3151
Telefax:        0 67 42 / 5201
E-Mail:         info@preusserdach.de
Website:        www.preusserdach.de
HRB:            Amtsgericht Koblenz HRB 7011
HRA:            Amtsgericht Koblenz HRA Nr. 4842
Kammer:         Handwerkskammer Koblenz, Friedrich-Ebert-Ring 33, 56068 Koblenz
Berufsbezeichnung: Dachdeckermeister (verliehen in der Bundesrepublik Deutschland)
```

---

## File & Folder Structure

```
/app
  /layout.tsx              ← Root layout, fonts, global metadata
  /page.tsx                ← Home
  /leistungen/page.tsx
  /ueber-uns/page.tsx
  /projekte/page.tsx
  /kontakt/page.tsx
  /impressum/page.tsx
  /datenschutz/page.tsx
/components
  /layout
    Navbar.tsx
    Footer.tsx
  /home
    Hero.tsx
    TrustBar.tsx
    ServicesPreview.tsx
    AboutTeaser.tsx
    ProjectsTeaser.tsx
    ContactCTA.tsx
  /shared
    ServiceCard.tsx
    ProjectCard.tsx
    SectionHeading.tsx
    AnimatedCounter.tsx
    ContactForm.tsx
/lib
  /constants.ts            ← Business info, nav links, service data
  /animations.ts           ← Reusable Framer Motion variants
/public
  /images                  ← Placeholder images
```

---

## Coding Standards

- TypeScript strict mode — no `any` types
- All components are functional with proper prop types
- Extract all copy/content into `constants.ts` — no hardcoded strings scattered in JSX
- Use `cn()` utility (clsx + tailwind-merge) for conditional class names
- Framer Motion variants defined in `/lib/animations.ts`, imported where used
- No inline styles — Tailwind classes only
- All form labels must have `htmlFor` matching input `id`
- Run `next build` successfully before considering anything done

---

## Image Strategy

Real photography is not yet available. Use structured placeholders during development:

```
https://placehold.co/[width]x[height]/252836/e8a020?text=[Label]
```

Label slots meaningfully (e.g., `Steildach+Referenz`, `Team+Preusser`). Add a comment at each `<Image>` slot documenting what real photo the client should supply. All `next/image` components must have `width`, `height`, and German `alt` text.

---

## Handoff Checklist

Before marking the project complete:

- [ ] `next build` completes without errors or TypeScript warnings
- [ ] All 7 pages render correctly at 375px and 1440px
- [ ] Contact form validates and shows success/error states
- [ ] All Framer Motion animations trigger correctly on scroll
- [ ] Navbar scroll behavior works (transparent → solid `#1a1d27`)
- [ ] Mobile hamburger menu opens and closes smoothly
- [ ] Gallery filter works with `AnimatePresence` transitions
- [ ] All meta tags present and unique per page
- [ ] Impressum contains all legally required fields
- [ ] Datenschutz is DSGVO-compliant
- [ ] No hardcoded business data outside `constants.ts`
- [ ] No TypeScript `any` types
- [ ] All images use `next/image` with German alt text
- [ ] Lighthouse accessibility score ≥ 90

---

## Language

All user-facing text is in **German**. Use natural, professional German appropriate for a skilled trades Mittelstand company. Tone: confident, direct, trustworthy. Not overly formal, not casual.

Example tone: *"Wir sind Ihr zuverlässiger Partner rund ums Dach — vom Neubau bis zur Sanierung, von Steildach bis Solaranlage."*

Tagline: *"Damit Sie sich unter Ihrem Dach wohlfühlen können."*
