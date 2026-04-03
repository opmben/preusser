import type { Metadata } from "next";
import { Phone, Printer, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS, SEO } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: SEO.kontakt.title,
  description: SEO.kontakt.description,
};

export default function KontaktPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-bg-secondary border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Sprechen Sie uns an"
            title="Kontakt"
            subtitle="Wir antworten schnell und unverbindlich — rufen Sie an oder schreiben Sie uns."
          />
        </div>
      </section>

      <section className="py-20 md:py-32" aria-label="Kontaktinformationen und Formular">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-display text-4xl text-text-primary uppercase mb-6" style={{ letterSpacing: "0.02em" }}>
                  SO ERREICHEN SIE UNS
                </h2>

                <ul className="space-y-5" role="list">
                  <li className="flex items-start gap-4">
                    <div className="p-2.5 rounded-sm bg-bg-secondary border border-border shrink-0">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                        Adresse
                      </p>
                      <address className="not-italic text-text-primary text-sm leading-relaxed">
                        {BUSINESS.address.street}
                        <br />
                        {BUSINESS.address.city}
                      </address>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="p-2.5 rounded-sm bg-bg-secondary border border-border shrink-0">
                      <Phone size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                        Telefon
                      </p>
                      <a
                        href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                        className="text-text-primary text-sm hover:text-accent transition-colors duration-200"
                      >
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="p-2.5 rounded-sm bg-bg-secondary border border-border shrink-0">
                      <Printer size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                        Telefax
                      </p>
                      <span className="text-text-primary text-sm">{BUSINESS.fax}</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="p-2.5 rounded-sm bg-bg-secondary border border-border shrink-0">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                        E-Mail
                      </p>
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="text-text-primary text-sm hover:text-accent transition-colors duration-200"
                      >
                        {BUSINESS.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="p-2.5 rounded-sm bg-bg-secondary border border-border shrink-0">
                      <Clock size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                        Öffnungszeiten
                      </p>
                      <span className="text-text-primary text-sm">
                        {BUSINESS.hours}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Google Maps embed — iframe, no API key */}
              <div className="rounded overflow-hidden border border-border aspect-[16/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.4!2d7.5726!3d50.2287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUHJlw59lciBCZWRhY2h1bmdlbg!5e0!3m2!1sde!2sde!4v1680000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Preußer Bedachungen, Heidestraße 39b, 56154 Boppard-Buchholz"
                  aria-label="Google Maps Karte — Standort Preußer Bedachungen"
                />
              </div>

              <p className="text-text-muted text-xs">
                Mit dem Laden der Karte akzeptieren Sie die Datenschutzbestimmungen
                von Google.{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover underline underline-offset-2"
                >
                  Mehr erfahren
                </a>
              </p>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-display text-4xl text-text-primary uppercase mb-6" style={{ letterSpacing: "0.02em" }}>
                ANGEBOT ANFRAGEN
              </h2>
              <p className="text-text-muted text-sm mb-8">
                Beschreiben Sie Ihr Projekt. Wir melden uns innerhalb von einem
                Werktag bei Ihnen zurück.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
