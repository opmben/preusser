import type { Metadata } from "next";
import { BUSINESS, SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.impressum.title,
  description: SEO.impressum.description,
};

export default function ImpressumPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="font-display text-6xl text-text-primary uppercase mb-10"
          style={{ letterSpacing: "0.02em" }}
        >
          Impressum
        </h1>

        <div className="space-y-10 text-text-muted text-sm leading-relaxed">
          <section aria-label="Angaben gemäß § 5 TMG">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              {BUSINESS.name}
              <br />
              {BUSINESS.address.street}
              <br />
              {BUSINESS.address.city}
            </p>
          </section>

          <section aria-label="Kontakt">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Kontakt
            </h2>
            <p>
              Telefon: {BUSINESS.phone}
              <br />
              Telefax: {BUSINESS.fax}
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-accent hover:text-accent-hover"
              >
                {BUSINESS.email}
              </a>
            </p>
          </section>

          <section aria-label="Vertretungsberechtigte Person">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Vertretungsberechtigte Person
            </h2>
            <p>Geschäftsführer: {BUSINESS.owner}</p>
          </section>

          <section aria-label="Handelsregister">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Handelsregister
            </h2>
            <p>
              {BUSINESS.register.hrb}
              <br />
              {BUSINESS.register.hra}
            </p>
          </section>

          <section aria-label="Zuständige Kammer">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Zuständige Kammer
            </h2>
            <p>
              {BUSINESS.chamber.name}
              <br />
              {BUSINESS.chamber.address}
            </p>
          </section>

          <section aria-label="Berufsbezeichnung und berufsrechtliche Regelungen">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p>
              Berufsbezeichnung: {BUSINESS.profession}
              <br />
              Fachleiter des Dachdeckerhandwerks
              <br />
              Berufsrechtliche Regelungen: Handwerksordnung
            </p>
          </section>

          <section aria-label="Umsatzsteuer-Identifikationsnummer">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>USt-IdNr.: auf Anfrage</p>
          </section>

          <section aria-label="EU-Streitschlichtung">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover underline underline-offset-2"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section aria-label="Verbraucherstreitbeilegung">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
