import Link from "next/link";
import { Phone, Mail, MapPin, Printer } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-bg-secondary border-t border-border" role="contentinfo">
=======
    <footer className="bg-[#1a1d27] border-t border-[#2e3347]" role="contentinfo">
>>>>>>> c7647158 (Light design)
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
<<<<<<< HEAD
              <span className="font-display text-3xl text-text-primary tracking-wider block">
=======
              <span className="font-display text-3xl text-[#f0f0f0] tracking-wider block">
>>>>>>> c7647158 (Light design)
                PREUSSER
              </span>
              <span className="text-accent text-xs font-mono tracking-widest uppercase">
                Bedachungen
              </span>
            </div>
<<<<<<< HEAD
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
=======
            <p className="text-[#8a8fa8] text-sm leading-relaxed max-w-xs">
>>>>>>> c7647158 (Light design)
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
<<<<<<< HEAD
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">
=======
            <h3 className="text-[#f0f0f0] font-semibold text-sm uppercase tracking-wider mb-4">
>>>>>>> c7647158 (Light design)
              Navigation
            </h3>
            <ul className="space-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
<<<<<<< HEAD
                    className="text-text-muted hover:text-accent text-sm transition-colors duration-200"
=======
                    className="text-[#8a8fa8] hover:text-accent text-sm transition-colors duration-200"
>>>>>>> c7647158 (Light design)
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
<<<<<<< HEAD
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">
=======
            <h3 className="text-[#f0f0f0] font-semibold text-sm uppercase tracking-wider mb-4">
>>>>>>> c7647158 (Light design)
              Kontakt
            </h3>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
<<<<<<< HEAD
                <span className="text-text-muted text-sm">
=======
                <span className="text-[#8a8fa8] text-sm">
>>>>>>> c7647158 (Light design)
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
<<<<<<< HEAD
                  className="text-text-muted hover:text-accent text-sm transition-colors duration-200"
=======
                  className="text-[#8a8fa8] hover:text-accent text-sm transition-colors duration-200"
>>>>>>> c7647158 (Light design)
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Printer size={16} className="text-accent shrink-0" />
<<<<<<< HEAD
                <span className="text-text-muted text-sm">Fax: {BUSINESS.fax}</span>
=======
                <span className="text-[#8a8fa8] text-sm">Fax: {BUSINESS.fax}</span>
>>>>>>> c7647158 (Light design)
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <a
                  href={`mailto:${BUSINESS.email}`}
<<<<<<< HEAD
                  className="text-text-muted hover:text-accent text-sm transition-colors duration-200"
=======
                  className="text-[#8a8fa8] hover:text-accent text-sm transition-colors duration-200"
>>>>>>> c7647158 (Light design)
                >
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
<<<<<<< HEAD
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
=======
        <div className="mt-12 pt-8 border-t border-[#2e3347] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8a8fa8] text-xs">
>>>>>>> c7647158 (Light design)
            © 2026 {BUSINESS.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
<<<<<<< HEAD
              className="text-text-muted hover:text-accent text-xs transition-colors duration-200"
=======
              className="text-[#8a8fa8] hover:text-accent text-xs transition-colors duration-200"
>>>>>>> c7647158 (Light design)
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
<<<<<<< HEAD
              className="text-text-muted hover:text-accent text-xs transition-colors duration-200"
=======
              className="text-[#8a8fa8] hover:text-accent text-xs transition-colors duration-200"
>>>>>>> c7647158 (Light design)
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
