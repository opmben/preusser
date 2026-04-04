"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportSettings } from "@/lib/animations";

export default function ContactCTA() {
  return (
    <section
<<<<<<< HEAD
      className="relative py-24 md:py-32 bg-bg-secondary border-y border-border overflow-hidden"
=======
      className="relative py-24 md:py-32 bg-[#1a1d27] overflow-hidden"
>>>>>>> c7647158 (Light design)
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
<<<<<<< HEAD
              className="font-display text-5xl sm:text-6xl lg:text-7xl text-text-primary uppercase leading-none"
=======
              className="font-display text-5xl sm:text-6xl lg:text-7xl text-white uppercase leading-none"
>>>>>>> c7647158 (Light design)
              style={{ letterSpacing: "0.02em" }}
            >
              JETZT
              <br />
              <span className="text-accent">ANFRAGEN</span>
            </h2>
<<<<<<< HEAD
            <p className="mt-4 text-text-muted text-base max-w-md">
=======
            <p className="mt-4 text-[#8a8fa8] text-base max-w-md">
>>>>>>> c7647158 (Light design)
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
<<<<<<< HEAD
              <div className="p-4 rounded-sm bg-bg-surface border border-border">
                <Phone size={28} className="text-accent" />
              </div>
              <span className="text-text-muted text-xs">Direkt anrufen</span>
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                className="font-display text-3xl text-text-primary hover:text-accent transition-colors duration-200 tracking-wide"
=======
              <div className="p-4 rounded-sm bg-[#252836] border border-[#2e3347]">
                <Phone size={28} className="text-accent" />
              </div>
              <span className="text-[#8a8fa8] text-xs">Direkt anrufen</span>
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                className="font-display text-3xl text-white hover:text-accent transition-colors duration-200 tracking-wide"
>>>>>>> c7647158 (Light design)
              >
                {BUSINESS.phone}
              </a>
            </div>

<<<<<<< HEAD
            <div className="hidden sm:block w-px h-16 bg-border" aria-hidden="true" />
=======
            <div className="hidden sm:block w-px h-16 bg-[#2e3347]" aria-hidden="true" />
>>>>>>> c7647158 (Light design)

            {/* Form CTA */}
            <Link
              href="/kontakt"
<<<<<<< HEAD
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-base whitespace-nowrap"
=======
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-[#111117] font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-base whitespace-nowrap"
>>>>>>> c7647158 (Light design)
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
