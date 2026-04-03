import Link from "next/link";
import { Phone, Mail, MapPin, Printer } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-display text-3xl text-text-primary tracking-wider block">
                PREUSSER
              </span>
              <span className="text-accent text-xs font-mono tracking-widest uppercase">
                Bedachungen
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              {BUSINESS.tagline}
            </p>
            <div className="mt-4 inline-block bg-accent/10 border border-accent/30 rounded px-3 py-1.5">
              <span className="text-accent text-xs font-mono tracking-wider">
                MEISTERBETRIEB
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer-Navigation">
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-text-muted text-sm">
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                  className="text-text-muted hover:text-accent text-sm transition-colors duration-200"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Printer size={16} className="text-accent shrink-0" />
                <span className="text-text-muted text-sm">Fax: {BUSINESS.fax}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-text-muted hover:text-accent text-sm transition-colors duration-200"
                >
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © 2026 {BUSINESS.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="text-text-muted hover:text-accent text-xs transition-colors duration-200"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-text-muted hover:text-accent text-xs transition-colors duration-200"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
