import type { Metadata } from "next";
import { BUSINESS, SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.datenschutz.title,
  description: SEO.datenschutz.description,
};

export default function DatenschutzPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="font-display text-6xl text-text-primary uppercase mb-10"
          style={{ letterSpacing: "0.02em" }}
        >
          Datenschutz
        </h1>

        <div className="space-y-10 text-text-muted text-sm leading-relaxed">
          <section aria-label="Verantwortlicher">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Verantwortlicher
            </h2>
            <p>
              {BUSINESS.name}
              <br />
              {BUSINESS.address.street}
              <br />
              {BUSINESS.address.city}
              <br />
              Telefon: {BUSINESS.phone}
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

          <section aria-label="Erhebung und Verarbeitung personenbezogener Daten">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p className="mb-3">
              Wir erheben und verarbeiten personenbezogene Daten nur, soweit
              dies zur Bereitstellung einer funktionsfähigen Website sowie
              unserer Inhalte und Leistungen erforderlich ist.
            </p>
            <p className="mb-3">
              <strong className="text-text-primary">Kontaktformular:</strong>{" "}
              Wenn Sie uns über das Kontaktformular kontaktieren, speichern wir
              Ihren Namen, Ihre Telefonnummer, Ihre E-Mail-Adresse, die gewählte
              Leistungskategorie und Ihre Nachricht, um Ihre Anfrage zu
              bearbeiten.
            </p>
            <p>
              <strong className="text-text-primary">Server-Logs:</strong> Beim
              Besuch der Website werden automatisch Informationen übermittelt
              (IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, Browsertyp). Diese
              Daten sind nicht einer bestimmten Person zuordenbar und werden
              nicht mit anderen Datenquellen zusammengeführt.
            </p>
          </section>

          <section aria-label="Zweck und Rechtsgrundlage der Verarbeitung">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Zweck und Rechtsgrundlage der Verarbeitung
            </h2>
            <p>
              Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher Maßnahmen
              (Bearbeitung Ihrer Anfrage) sowie auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO (berechtigtes Interesse an der sicheren und
              fehlerfreien Bereitstellung der Website).
            </p>
          </section>

          <section aria-label="Speicherdauer">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Speicherdauer
            </h2>
            <p>
              Kontaktanfragen werden nach abschließender Bearbeitung gelöscht,
              sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              Server-Logs werden nach spätestens 30 Tagen gelöscht.
            </p>
          </section>

          <section aria-label="Weitergabe an Dritte">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Weitergabe an Dritte
            </h2>
            <p>
              Eine Übermittlung Ihrer personenbezogenen Daten an Dritte findet
              nicht statt. Ausnahmen gelten nur, sofern wir dazu gesetzlich
              verpflichtet sind.
            </p>
          </section>

          <section aria-label="Google Maps">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Google Maps
            </h2>
            <p>
              Auf der Kontaktseite wird eine Karte von Google Maps (Google
              Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland)
              eingebunden. Durch den Aufruf der Seite werden Daten an Google
              übertragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Nähere
              Informationen finden Sie in der{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover underline underline-offset-2"
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>
          </section>

          <section aria-label="Ihre Rechte">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Ihre Rechte als betroffene Person
            </h2>
            <p className="mb-3">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
              betreffenden personenbezogenen Daten:
            </p>
            <ul className="space-y-2 list-none">
              {[
                "Recht auf Auskunft (Art. 15 DSGVO)",
                "Recht auf Berichtigung (Art. 16 DSGVO)",
                "Recht auf Löschung (Art. 17 DSGVO)",
                "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
                "Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
              ].map((right) => (
                <li
                  key={right}
                  className="flex items-start gap-2 before:content-['–'] before:text-accent before:shrink-0"
                >
                  {right}
                </li>
              ))}
            </ul>
          </section>

          <section aria-label="Beschwerderecht">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde
              über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
              Zuständig ist der Landesbeauftragte für den Datenschutz und die
              Informationsfreiheit Rheinland-Pfalz.
            </p>
          </section>

          <section aria-label="Kontakt Datenschutz">
            <h2 className="text-text-primary font-semibold text-base mb-3 uppercase tracking-wider">
              Kontakt
            </h2>
            <p>
              Bei Fragen zum Datenschutz wenden Sie sich bitte an:{" "}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-accent hover:text-accent-hover"
              >
                {BUSINESS.email}
              </a>
            </p>
            <p className="mt-4 text-text-muted/60 text-xs">
              Stand: April 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
