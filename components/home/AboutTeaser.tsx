"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { fadeUp, viewportSettings } from "@/lib/animations";

const VALUES = [
  "Fachgerechtes Arbeiten",
  "Zuverlässigkeit",
  "Sicherheit",
  "Persönliche Beratung",
];

export default function AboutTeaser() {
  return (
    <section
      className="py-20 md:py-32 bg-bg-secondary border-y border-border"
      aria-label="Über uns"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="inline-block font-mono text-accent text-xs tracking-widest uppercase mb-4">
              Wer wir sind
            </span>
            <h2
              className="font-display text-5xl sm:text-6xl text-text-primary uppercase leading-none mb-6"
              style={{ letterSpacing: "0.02em" }}
            >
              EIN FAMILIEN
              <br />
              <span className="text-accent">BETRIEB.</span>
              <br />
              IHR PARTNER.
            </h2>
            <p className="text-text-muted text-base leading-relaxed mb-6">
              Seit über 40 Jahren steht Preußer Bedachungen für handwerkliche
              Exzellenz im Raum Boppard. Als Familienbetrieb unter der Leitung
              von Geschäftsführer{" "}
              <strong className="text-text-primary">{BUSINESS.owner}</strong>{" "}
              verbinden wir Meisterpräzision mit persönlichem Engagement.
            </p>
            <p className="text-text-muted text-base leading-relaxed mb-8">
              Als Mitglied der Dachdecker-Innung Boppard garantieren wir
              fachgerechte Ausführung nach den gültigen Normen — und stehen
              persönlich für das Ergebnis.
            </p>

            {/* Values */}
            <ul className="grid grid-cols-2 gap-3 mb-10" role="list">
              {VALUES.map((value) => (
                <li key={value} className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    className="text-accent shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-text-primary text-sm">{value}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-6 py-3 rounded-sm transition-colors duration-200"
            >
              Mehr über uns
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ ...viewportSettings, margin: "-40px" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded overflow-hidden border border-border">
              {/* TODO: Replace with real team/craftsman photo */}
              <Image
                src="https://placehold.co/640x800/1a1d27/e8a020?text=Team+Preusser"
                alt="Team Preußer Bedachungen — Ihr Dachdeckermeister in Boppard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent badge */}
            <div className="absolute -bottom-5 -left-5 bg-accent text-bg-primary px-6 py-4 rounded-sm">
              <span className="font-display text-4xl leading-none block">40+</span>
              <span className="text-xs font-semibold tracking-wider uppercase">
                Jahre Erfahrung
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
