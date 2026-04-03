export const BUSINESS = {
  name: "Preußer Bedachungen GmbH & Co. KG",
  shortName: "Preußer Bedachungen",
  owner: "Michael Preußer",
  phone: "0 67 42 / 3151",
  fax: "0 67 42 / 5201",
  email: "info@preusserdach.de",
  website: "www.preusserdach.de",
  address: {
    street: "Heidestraße 39b",
    city: "56154 Boppard-Buchholz",
    full: "Heidestraße 39b, 56154 Boppard-Buchholz",
  },
  register: {
    hrb: "Amtsgericht Koblenz HRB 7011",
    hra: "Amtsgericht Koblenz HRA Nr. 4842",
  },
  chamber: {
    name: "Handwerkskammer Koblenz",
    address: "Friedrich-Ebert-Ring 33, 56068 Koblenz",
  },
  profession: "Dachdeckermeister (verliehen in der Bundesrepublik Deutschland)",
  tagline: "Damit Sie sich unter Ihrem Dach wohlfühlen können.",
  hours: "Montag–Freitag, 07:00–17:00 Uhr",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/projekte", label: "Projekte" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const TRUST_STATS = [
  { value: 40, suffix: "+", label: "Jahre Erfahrung" },
  { value: 500, suffix: "+", label: "Projekte abgeschlossen" },
  { value: 80, suffix: " km", label: "Einsatzradius" },
  { value: 1, suffix: "", label: "Meisterbetrieb" },
] as const;

export const SERVICES = [
  {
    id: "dachdeckerarbeiten",
    title: "Dachdeckerarbeiten",
    shortDesc: "Neubau und Bestand — alles aus einer Hand",
    description:
      "Von der Ersteindeckung im Neubau bis zur fachgerechten Sanierung im Bestand übernehmen wir alle allgemeinen Dachdeckerarbeiten. Mit Meisterpräzision und modernsten Materialien.",
    subServices: [
      "Dacheindeckung",
      "Dachstuhlarbeiten",
      "Dachsanierung",
      "Sturmschadenreparatur",
    ],
    icon: "home",
    image: "https://placehold.co/800x500/252836/e8a020?text=Dachdeckerarbeiten",
    imageAlt: "Dachdeckerarbeiten — Preußer Bedachungen Boppard",
  },
  {
    id: "steildach",
    title: "Steildach",
    shortDesc: "Geneigte Dächer — traditionell und langlebig",
    description:
      "Steildächer sind unser Kerngeschäft. Wir planen und führen geneigte Dächer in allen Eindeckvarianten aus — von klassischem Tonziegel bis zu modernen Metalleindeckungen.",
    subServices: [
      "Ziegeleindeckung",
      "Schieferdeckung",
      "Metalleindeckung",
      "Gaupenbau",
      "Dachgauben",
    ],
    icon: "triangle",
    image: "https://placehold.co/800x500/252836/e8a020?text=Steildach+Referenz",
    imageAlt: "Steildach Referenz — Preußer Bedachungen Boppard",
  },
  {
    id: "flachdach",
    title: "Flachdach",
    shortDesc: "Moderne Flachdachsysteme für jeden Anspruch",
    description:
      "Flachdächer erfordern höchste Präzision bei Abdichtung und Entwässerung. Wir setzen auf bewährte und moderne Systeme für Wohn- und Gewerbebau — dauerhaft dicht, langlebig.",
    subServices: [
      "EPDM-Abdichtung",
      "Bitumenbahnen",
      "Bekiesung",
      "Dachbegrünung",
      "Lichtkuppeln",
    ],
    icon: "minus",
    image: "https://placehold.co/800x500/252836/e8a020?text=Flachdach+System",
    imageAlt: "Flachdach System — Preußer Bedachungen Boppard",
  },
  {
    id: "solaranlagen",
    title: "Solaranlagen",
    shortDesc: "PV-Anlagen — Ihre Energie vom eigenen Dach",
    description:
      "Als Dachexperten kennen wir die perfekte Schnittstelle zwischen Dach und Photovoltaik. Wir installieren PV-Anlagen fachgerecht auf bestehenden und neuen Dächern.",
    subServices: [
      "Aufdachmontage",
      "Planung & Beratung",
      "Systemintegration",
      "Wartung",
    ],
    icon: "sun",
    image: "https://placehold.co/800x500/252836/e8a020?text=Solaranlage+Dach",
    imageAlt: "Solaranlage auf Dach — Preußer Bedachungen Boppard",
  },
  {
    id: "klempnerarbeiten",
    title: "Klempnerarbeiten",
    shortDesc: "Blecharbeiten — präzise und dauerhaft",
    description:
      "Rinnen, Fallrohre, Bleche — die Details machen ein Dach erst komplett. Unsere Klempnerarbeiten werden mit höchster Sorgfalt ausgeführt und schützen Ihr Gebäude langfristig.",
    subServices: [
      "Dachrinnen",
      "Fallrohre",
      "Ortgangbleche",
      "Wandanschlüsse",
      "Kehlen",
    ],
    icon: "wrench",
    image: "https://placehold.co/800x500/252836/e8a020?text=Klempnerarbeiten",
    imageAlt: "Klempnerarbeiten — Preußer Bedachungen Boppard",
  },
] as const;

export const SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.id,
  label: s.title,
}));

export const PROJECTS = [
  {
    id: 1,
    title: "Steildach Sanierung",
    category: "steildach",
    location: "Boppard",
    image: "https://placehold.co/600x400/252836/e8a020?text=Steildach+Sanierung",
    alt: "Steildach Sanierung in Boppard",
  },
  {
    id: 2,
    title: "Flachdach EPDM",
    category: "flachdach",
    location: "Bad Salzig",
    image: "https://placehold.co/600x400/1a1d27/e8a020?text=Flachdach+EPDM",
    alt: "Flachdach EPDM Abdichtung in Bad Salzig",
  },
  {
    id: 3,
    title: "PV-Anlage Aufdachmontage",
    category: "solar",
    location: "Rhens",
    image: "https://placehold.co/600x400/252836/e8a020?text=Solar+Aufdach",
    alt: "PV-Anlage Aufdachmontage in Rhens",
  },
  {
    id: 4,
    title: "Ziegeleindeckung Neubau",
    category: "steildach",
    location: "Koblenz Umland",
    image: "https://placehold.co/600x400/1a1d27/e8a020?text=Ziegeleindeckung",
    alt: "Ziegeleindeckung Neubau Koblenz Umland",
  },
  {
    id: 5,
    title: "Dachrinnen & Fallrohre",
    category: "klempner",
    location: "Boppard-Buchholz",
    image: "https://placehold.co/600x400/252836/e8a020?text=Klempner+Rinnen",
    alt: "Dachrinnen und Fallrohre in Boppard-Buchholz",
  },
  {
    id: 6,
    title: "Schieferdeckung Altbau",
    category: "steildach",
    location: "Boppard",
    image: "https://placehold.co/600x400/1a1d27/e8a020?text=Schieferdeckung",
    alt: "Schieferdeckung Altbausanierung in Boppard",
  },
  {
    id: 7,
    title: "Dachbegrünung Flachdach",
    category: "flachdach",
    location: "Koblenz",
    image: "https://placehold.co/600x400/252836/e8a020?text=Dachbegrunung",
    alt: "Dachbegrünung Flachdach in Koblenz",
  },
  {
    id: 8,
    title: "Solarmontage Bestand",
    category: "solar",
    location: "Bad Salzig",
    image: "https://placehold.co/600x400/1a1d27/e8a020?text=Solar+Bestand",
    alt: "Solarmontage auf Bestandsdach in Bad Salzig",
  },
  {
    id: 9,
    title: "Gauben & Dachfenster",
    category: "steildach",
    location: "Rhens",
    image: "https://placehold.co/600x400/252836/e8a020?text=Gauben+Dachfenster",
    alt: "Gauben und Dachfenster in Rhens",
  },
  {
    id: 10,
    title: "Wandanschlüsse Blech",
    category: "klempner",
    location: "Boppard",
    image: "https://placehold.co/600x400/1a1d27/e8a020?text=Wandanschlusse",
    alt: "Wandanschlüsse Blecharbeiten in Boppard",
  },
  {
    id: 11,
    title: "Bitumendach Gewerbe",
    category: "flachdach",
    location: "Koblenz Umland",
    image: "https://placehold.co/600x400/252836/e8a020?text=Bitumendach",
    alt: "Bitumendach Gewerbebau Koblenz Umland",
  },
  {
    id: 12,
    title: "Komplettsanierung Dach",
    category: "steildach",
    location: "Boppard",
    image: "https://placehold.co/600x400/1a1d27/e8a020?text=Komplettsanierung",
    alt: "Komplettsanierung Dach in Boppard",
  },
] as const;

export const PROJECT_FILTERS = [
  { value: "alle", label: "Alle" },
  { value: "steildach", label: "Steildach" },
  { value: "flachdach", label: "Flachdach" },
  { value: "solar", label: "Solar" },
  { value: "klempner", label: "Klempner" },
] as const;

export const SEO = {
  home: {
    title: "Preußer Bedachungen – Ihr Dachdecker in Boppard",
    description:
      "Meisterbetrieb für Steildach, Flachdach, Solaranlagen und Klempnerarbeiten in Boppard und Umgebung.",
  },
  leistungen: {
    title: "Leistungen – Preußer Bedachungen Boppard",
    description:
      "Dachdeckerarbeiten, Steildach, Flachdach, Solar und Klempnerarbeiten vom Meisterbetrieb.",
  },
  ueberUns: {
    title: "Über uns – Familiärer Meisterbetrieb",
    description:
      "Lernen Sie Preußer Bedachungen kennen – Ihr zuverlässiger Dachdeckermeister in Boppard-Buchholz.",
  },
  projekte: {
    title: "Projekte & Referenzen – Preußer Bedachungen",
    description:
      "Einblicke in unsere abgeschlossenen Dacharbeiten: Steildach, Flachdach, Solar und mehr.",
  },
  kontakt: {
    title: "Kontakt – Preußer Bedachungen",
    description:
      "Nehmen Sie Kontakt auf oder fordern Sie ein Angebot an. Wir melden uns schnell zurück.",
  },
  impressum: {
    title: "Impressum – Preußer Bedachungen",
    description: "Impressum und rechtliche Informationen zu Preußer Bedachungen GmbH & Co. KG.",
  },
  datenschutz: {
    title: "Datenschutz – Preußer Bedachungen",
    description: "Datenschutzerklärung gemäß DSGVO für die Website von Preußer Bedachungen.",
  },
} as const;
