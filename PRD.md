# Product Requirements Document
## Preußer Bedachungen GmbH & Co. KG — New Website

**Version**: 1.0  
**Date**: April 2026  
**Status**: Ready for Development  
**Built with**: Claude Code + 21st.dev Magic + UI/UX Pro Max + Framer Motion

---

## 1. Executive Summary

Preußer Bedachungen GmbH & Co. KG is a master roofing company (Meisterbetrieb) based in Boppard-Buchholz, Rheinland-Pfalz. Their existing website (preusserdach.de) is severely outdated — static HTML with no mobile support, no SEO, and no conversion mechanisms.

This project delivers a complete replacement: a modern, production-grade Next.js website that positions Preußer Bedachungen as the premium roofing specialist in the Boppard/Mittelrhein region, drives inbound quote requests, and showcases their portfolio of work.

---

## 2. Business Goals

| Priority | Goal | Metric |
|----------|------|--------|
| P0 | Generate qualified quote requests | Contact form submissions |
| P0 | Showcase project portfolio to build credibility | Time on site, gallery views |
| P1 | Rank locally for roofing search terms | Google ranking for "Dachdecker Boppard" |
| P1 | Communicate Meisterbetrieb quality & trustworthiness | Bounce rate reduction |
| P2 | Establish digital presence for solar installation services | Solar page traffic |

---

## 3. Target Audience

**Primary**: Homeowners in the Boppard, Bad Salzig, Rhens, Koblenz Umland region planning:
- Roof renovation or new build
- Storm damage repairs
- Solar panel installation
- Gutter/sheet metal work

**Secondary**: Property managers, construction companies, architects seeking a reliable subcontractor.

**User intent**: High purchase intent — they are actively searching for a roofer and comparing 2–3 options. The website must quickly answer: *Can I trust them? Do they do what I need? How do I contact them?*

---

## 4. Scope

### In Scope
- 7 pages: Home, Leistungen, Über uns, Projekte, Kontakt, Impressum, Datenschutz
- Responsive design (mobile-first)
- Framer Motion animations throughout
- Contact form with validation
- Google Maps embed on Kontakt page
- DSGVO-compliant legal pages
- Basic on-page SEO (meta tags, semantic HTML, structured data)
- Image placeholders for all photo slots

### Out of Scope
- CMS / content management backend
- Blog or news section
- Online payment
- Customer portal or login
- Backend form processing (form logs to console / mailto fallback only)
- Real photography (client to supply later)

---

## 5. Pages & Features

### 5.1 Home (`/`)

**Goal**: Establish immediate trust and drive users toward contact or services.

**Sections**:

| Section | Description | Key Elements |
|---------|-------------|--------------|
| Hero | Full-viewport dark hero | Headline, subline, 2 CTAs, background image |
| Trust Bar | Animated key statistics | Years active, projects completed, km Einsatzradius, Meisterbetrieb badge |
| Services Preview | 5 service category cards | Icon, title, 1-line description, link to /leistungen |
| About Teaser | Split layout company intro | Text left, image right, link to /ueber-uns |
| Projects Teaser | 3–4 featured project images | Grid layout, link to /projekte |
| Contact CTA | Full-width conversion band | Phone number large, "Angebot anfragen" button |
| Footer | Site-wide footer | Nav, contact details, legal links |

**Primary CTA**: "Angebot anfragen" → `/kontakt`  
**Secondary CTA**: "Leistungen entdecken" → `/leistungen`

---

### 5.2 Services (`/leistungen`)

**Goal**: Convince visitors that Preußer Bedachungen handles their specific need.

**Services to feature**:

1. **Dachdeckerarbeiten**
   - Allgemeine Dachdeckerarbeiten für Neubau und Bestand
   - Sub-services: Dacheindeckung, Dachstuhlarbeiten, Dachsanierung, Sturmschadenreparatur

2. **Steildach**
   - Planung und Ausführung von geneigten Dächern
   - Sub-services: Ziegeleindeckung, Schieferdeckung, Metalleindeckung, Gaupenbau, Dachgauben

3. **Flachdach**
   - Moderne Flachdachsysteme für Wohn- und Gewerbebau
   - Sub-services: EPDM-Abdichtung, Bitumenbahnen, Bekiesung, Dachbegrünung, Lichtkuppeln

4. **Solaranlagen**
   - PV-Anlageninstallation auf bestehenden und neuen Dächern
   - Sub-services: Aufdachmontage, Planung & Beratung, Systemintegration, Wartung
   - Note: Experience with Suntech, Mitsubishi Electric, Sharp modules

5. **Klempnerarbeiten**
   - Fachgerechte Blecharbeiten rund ums Dach
   - Sub-services: Dachrinnen, Fallrohre, Ortgangbleche, Wandanschlüsse, Kehlen

**Layout**: Each service gets a full-width section with image (left or right alternating), heading, description, bullet list of sub-services.

---

### 5.3 About (`/ueber-uns`)

**Goal**: Build personal trust through the family business story.

**Content blocks**:
- Company introduction: familiärer Meisterbetrieb, founded in the Boppard region
- Geschäftsführer Michael Preußer — brief personal profile
- Core values: Fachgerechtes Arbeiten · Zuverlässigkeit · Sicherheit · Persönliche Beratung
- Qualifications: Dachdeckermeister, Mitglied der Dachdecker-Innung Boppard
- Team photo placeholder
- Quote/pull quote from the company philosophy: *"...damit Sie sich unter Ihrem Dach wohlfühlen können."*

---

### 5.4 Gallery / Projects (`/projekte`)

**Goal**: Demonstrate quality and range of work through visual evidence.

**Features**:
- Photo grid (masonry or uniform) with 12+ placeholder images
- Category filter buttons: Alle / Steildach / Flachdach / Solar / Klempner
- Click-to-expand lightbox (Framer Motion powered)
- Each project card: thumbnail + category label + optional location tag

**Filter behavior**: Smooth Framer Motion `AnimatePresence` transition when switching categories — items fade out/in, grid reflows.

---

### 5.5 Contact (`/kontakt`)

**Goal**: Make it as easy as possible to submit a quote request.

**Layout**: Two-column (stacks on mobile)

**Left column — Contact info**:
```
Telefon:   0 67 42 / 3151
Telefax:   0 67 42 / 5201
E-Mail:    info@preusserdach.de
Adresse:   Heidestraße 39b
           56154 Boppard-Buchholz
```
- Google Maps iframe embed (no API key needed)
- Opening hours placeholder (Montag–Freitag, 07:00–17:00 Uhr)

**Right column — Contact form**:

| Field | Type | Validation |
|-------|------|-----------|
| Vor- und Nachname | text | required, min 2 chars |
| Telefonnummer | tel | required |
| E-Mail-Adresse | email | required, valid email |
| Gewünschte Leistung | select | required; options: the 5 service categories |
| Ihre Nachricht | textarea | required, min 20 chars |
| Datenschutz-Zustimmung | checkbox | required |

- Submit button: "Anfrage senden"
- Success state: amber confirmation message, form resets
- Error state: inline field errors in red
- Tech: React Hook Form + Zod schema

---

### 5.6 Impressum (`/impressum`)

Legally required German Impressum. Static content page.

```
Preußer Bedachungen GmbH & Co. KG
Heidestraße 39b
56154 Boppard-Buchholz

Telefon:  0 67 42 / 3151
Telefax:  0 67 42 / 5201
E-Mail:   info@preusserdach.de

Geschäftsführer: Michael Preußer

Handelsregister:
  Amtsgericht Koblenz HRB 7011
  Amtsgericht Koblenz HRA Nr. 4842

Zuständige Kammer:
  Handwerkskammer Koblenz
  Friedrich-Ebert-Ring 33
  56068 Koblenz

Berufsbezeichnung:
  Dachdeckermeister (verliehen in der Bundesrepublik Deutschland)
  Fachleiter des Dachdeckerhandwerks

Berufsrechtliche Regelungen:
  Handwerksordnung

USt-IdNr.: auf Anfrage
```

---

### 5.7 Datenschutz (`/datenschutz`)

DSGVO-compliant German privacy policy covering:
- Verantwortlicher (name, address, contact)
- Erhebung und Verarbeitung personenbezogener Daten (Kontaktformular, Server-Logs)
- Zweck und Rechtsgrundlage der Verarbeitung (Art. 6 Abs. 1 lit. b DSGVO)
- Speicherdauer
- Weitergabe an Dritte (keine)
- Betroffenenrechte: Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch
- Beschwerderecht bei der Aufsichtsbehörde
- Kontakt des Verantwortlichen

---

## 6. Navigation

**Desktop navbar** (sticky):
- Left: Logo / Firmenname
- Center/Right: Startseite · Leistungen · Über uns · Projekte · Kontakt
- Right: CTA button "Angebot anfragen" (amber)
- Behavior: transparent over hero → solid `#1a1d27` background on scroll

**Mobile navbar**:
- Hamburger icon (right)
- Framer Motion slide-down full-width menu panel
- All nav links + CTA

**Footer**:
- Logo + tagline
- Nav links
- Contact details
- Legal links: Impressum · Datenschutz
- Copyright: © 2026 Preußer Bedachungen GmbH & Co. KG

---

## 7. Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | `#0f1117` | Page background |
| `bg-secondary` | `#1a1d27` | Cards, navbar |
| `bg-surface` | `#252836` | Elevated elements |
| `accent` | `#e8a020` | CTAs, highlights, active states |
| `accent-hover` | `#f0b040` | Hover state of accent |
| `text-primary` | `#f0f0f0` | Body text |
| `text-muted` | `#8a8fa8` | Secondary text, labels |
| `border` | `#2e3347` | Card borders, dividers |
| `danger` | `#e84040` | Form errors |

### Typography
| Role | Font | Weight |
|------|------|--------|
| Display / H1–H2 | Bebas Neue | 400 (inherently bold) |
| Body / H3–H6 | DM Sans | 400 / 500 / 600 |
| Labels / Stats | JetBrains Mono | 400 (sparingly) |

### Motion Principles
- **Page transitions**: `AnimatePresence` fade between routes
- **Hero entrance**: staggered reveal (0ms → 200ms → 400ms delays)
- **Scroll reveals**: `whileInView` with `once: true`, `y: 30 → 0`, `opacity: 0 → 1`
- **Counter animation**: count-up on scroll entry (Trust Bar)
- **Gallery filter**: `AnimatePresence` with layout animation
- **Hover states**: subtle scale `1.02`, shadow lift on cards
- **Duration standard**: 0.4s ease-out for reveals, 0.2s for micro-interactions

---

## 8. Technical Requirements

### Stack
- Next.js 14+ (App Router)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion
- shadcn/ui + 21st.dev components
- React Hook Form + Zod
- next/font (Google Fonts)
- next/image (all images)

### Performance Targets
| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 85 |
| Lighthouse Accessibility | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Mobile usability | 100% |

### SEO — Meta Tags per Page

| Page | Title | Description |
|------|-------|-------------|
| Home | Preußer Bedachungen – Ihr Dachdecker in Boppard | Meisterbetrieb für Steildach, Flachdach, Solaranlagen und Klempnerarbeiten in Boppard und Umgebung. |
| Leistungen | Leistungen – Preußer Bedachungen Boppard | Dachdeckerarbeiten, Steildach, Flachdach, Solar und Klempnerarbeiten vom Meisterbetrieb. |
| Über uns | Über uns – Familiärer Meisterbetrieb | Lernen Sie Preußer Bedachungen kennen – Ihr zuverlässiger Dachdeckermeister in Boppard-Buchholz. |
| Projekte | Projekte & Referenzen – Preußer Bedachungen | Einblicke in unsere abgeschlossenen Dacharbeiten: Steildach, Flachdach, Solar und mehr. |
| Kontakt | Kontakt – Preußer Bedachungen | Nehmen Sie Kontakt auf oder fordern Sie ein Angebot an. Wir melden uns schnell zurück. |

### Accessibility
- All images: meaningful `alt` text in German
- All form inputs: `<label>` with `htmlFor`
- Navigation: keyboard navigable, focus-visible outlines
- Color contrast: ≥ 4.5:1 for all body text
- Skip-to-content link at top of document

### DSGVO / Legal
- Datenschutz checkbox required before form submission
- No third-party cookies or trackers in initial build
- Google Maps embed: use iframe (no JS API), add DSGVO notice if required
- No Google Analytics (omit unless client requests later)

---

## 9. Content Strategy

All copy is in **German**. Tone: professional, direct, confident — the voice of an established skilled trades master, not a startup.

**Key messages to reinforce on every page**:
1. Meisterbetrieb — certified quality, not a discount provider
2. Familienbetrieb — personal, reliable, long-term relationship
3. Regional — Boppard and surrounding area (named explicitly)
4. Full-service — from new build to solar to gutters

**Tagline**: *"Damit Sie sich unter Ihrem Dach wohlfühlen können."*

---

## 10. Image Strategy

As real photography is not yet available, use structured placeholder images:
- Use `https://placehold.co/[width]x[height]/252836/e8a020?text=[Label]` for development
- Label placeholders meaningfully: e.g., `Steildach+Referenz`, `Team+Preusser`
- All `next/image` components: set `width`, `height`, and `alt` correctly
- Document all image slots in comments so the client knows what photos to supply

---

## 11. Handoff Checklist

Before marking the project complete, verify:

- [ ] `next build` completes without errors or TypeScript warnings
- [ ] All 7 pages render correctly on mobile (375px) and desktop (1440px)
- [ ] Contact form validates and shows success/error states
- [ ] All Framer Motion animations trigger correctly on scroll
- [ ] Navbar scroll behavior works (transparent → solid)
- [ ] Mobile hamburger menu opens and closes smoothly
- [ ] Gallery filter works with AnimatePresence transitions
- [ ] All meta tags present and unique per page
- [ ] Impressum contains all legally required fields
- [ ] Datenschutz is DSGVO-compliant
- [ ] No hardcoded business data outside `constants.ts`
- [ ] No TypeScript `any` types
- [ ] All images use `next/image` with alt text
- [ ] Lighthouse accessibility score ≥ 90

---

*Document prepared for Claude Code. All business data verified against existing company records.*
