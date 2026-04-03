"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportSettings } from "@/lib/animations";

export default function ContactCTA() {
  return (
    <section
      className="relative py-24 md:py-32 bg-bg-secondary border-y border-border overflow-hidden"
      aria-label="Kontakt aufnehmen"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #e8a020 0, #e8a020 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" aria-hidden="true" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <motion.div variants={fadeUp} className="text-center lg:text-left">
            <span className="inline-block font-mono text-accent text-xs tracking-widest uppercase mb-4">
              Bereit für Ihr Projekt?
            </span>
            <h2
              className="font-display text-5xl sm:text-6xl lg:text-7xl text-text-primary uppercase leading-none"
              style={{ letterSpacing: "0.02em" }}
            >
              JETZT
              <br />
              <span className="text-accent">ANFRAGEN</span>
            </h2>
            <p className="mt-4 text-text-muted text-base max-w-md">
              Schildern Sie uns Ihr Projekt — wir melden uns schnell und
              unverbindlich zurück.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Phone */}
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="p-4 rounded-sm bg-bg-surface border border-border">
                <Phone size={28} className="text-accent" />
              </div>
              <span className="text-text-muted text-xs">Direkt anrufen</span>
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                className="font-display text-3xl text-text-primary hover:text-accent transition-colors duration-200 tracking-wide"
              >
                {BUSINESS.phone}
              </a>
            </div>

            <div className="hidden sm:block w-px h-16 bg-border" aria-hidden="true" />

            {/* Form CTA */}
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-base whitespace-nowrap"
            >
              Formular ausfüllen
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
