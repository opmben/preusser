"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { menuVariants } from "@/lib/animations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "bg-bg-secondary border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Hauptnavigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-tight group"
            aria-label="Preußer Bedachungen – Startseite"
          >
<<<<<<< HEAD
            <span className="font-display text-2xl text-text-primary tracking-wider group-hover:text-accent transition-colors duration-200">
=======
            <span className={cn(
              "font-display text-2xl tracking-wider group-hover:text-accent transition-colors duration-200",
              scrolled || menuOpen ? "text-text-primary" : "text-white"
            )}>
>>>>>>> c7647158 (Light design)
              PREUSSER
            </span>
            <span className="text-accent text-xs font-mono tracking-widest uppercase">
              Bedachungen
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-200 py-1",
                    pathname === link.href
                      ? "text-accent"
<<<<<<< HEAD
                      : "text-text-muted hover:text-text-primary"
=======
                      : scrolled || menuOpen
                        ? "text-text-muted hover:text-text-primary"
                        : "text-white/80 hover:text-white"
>>>>>>> c7647158 (Light design)
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/kontakt"
<<<<<<< HEAD
            className="hidden lg:inline-flex items-center bg-accent hover:bg-accent-hover text-bg-primary font-semibold text-sm px-5 py-2.5 rounded-sm transition-colors duration-200"
=======
            className="hidden lg:inline-flex items-center bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-5 py-2.5 rounded-sm transition-colors duration-200"
>>>>>>> c7647158 (Light design)
          >
            Angebot anfragen
          </Link>

          {/* Mobile hamburger */}
          <button
<<<<<<< HEAD
            className="lg:hidden p-2 text-text-primary hover:text-accent transition-colors"
=======
            className={cn(
              "lg:hidden p-2 hover:text-accent transition-colors",
              scrolled || menuOpen ? "text-text-primary" : "text-white"
            )}
>>>>>>> c7647158 (Light design)
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <ul className="py-4 flex flex-col gap-1" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 text-sm font-medium rounded transition-colors duration-200",
                        pathname === link.href
                          ? "text-accent bg-bg-surface"
                          : "text-text-muted hover:text-text-primary hover:bg-bg-surface"
                      )}
                      aria-current={pathname === link.href ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2 px-4">
                  <Link
                    href="/kontakt"
                    className="block w-full text-center bg-accent hover:bg-accent-hover text-bg-primary font-semibold text-sm px-5 py-3 rounded-sm transition-colors duration-200"
                  >
                    Angebot anfragen
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
