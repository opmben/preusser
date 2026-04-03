"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Award, Users, Shield } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactCTA from "@/components/home/ContactCTA";
import { fadeUp, staggerContainer, viewportSettings } from "@/lib/animations";

const VALUES = [
  {
    icon: CheckCircle,
    title: "Fachgerechtes Arbeiten",
    desc: "Jedes Projekt wird nach den gültigen Normen und dem aktuellen Stand der Technik ausgeführt.",
  },
  {
    icon: Shield,
    title: "Zuverlässigkeit & Sicherheit",
    desc: "Termingerechte Ausführung und höchste Sicherheitsstandards auf jeder Baustelle.",
  },
  {
    icon: Users,
    title: "Persönliche Beratung",
    desc: "Kein Callcenter — Sie sprechen immer direkt mit erfahrenen Fachleuten.",
  },
  {
    icon: Award,
    title: "Meisterbetrieb",
    desc: "Mitglied der Dachdecker-Innung Boppard. Ihre Garantie für geprüfte Qualität.",
  },
];

export default function UeberUnsContent() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-bg-secondary border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Wer wir sind"
            title="Über uns"
            subtitle="Familienbetrieb, Meisterpräzision, persönlicher Kontakt — das ist Preußer Bedachungen."
          />
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 md:py-32" aria-label="Unternehmensgeschichte">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Image */}
            <motion.div variants={fadeUp} className="relative">
              <div className="aspect-[4/5] rounded overflow-hidden border border-border">
                {/* TODO: Replace with real portrait/team photo */}
                <Image
                  src="https://placehold.co/640x800/1a1d27/e8a020?text=Michael+Preusser"
                  alt="Michael Preußer — Geschäftsführer Preußer Bedachungen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-bg-secondary border border-border rounded p-5 max-w-xs">
                <p className="text-text-muted text-sm italic leading-relaxed">
                  &ldquo;{BUSINESS.tagline}&rdquo;
                </p>
                <p className="mt-2 text-accent text-xs font-mono">
                  — {BUSINESS.owner}
                </p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <h2
                className="font-display text-5xl sm:text-6xl text-text-primary uppercase leading-none"
                style={{ letterSpacing: "0.02em" }}
              >
                FAMILIEN
                <br />
                <span className="text-accent">BETRIEB</span>
                <br />
                MIT TRADITION
              </h2>

              <p className="text-text-muted text-base leading-relaxed">
                Preußer Bedachungen GmbH & Co. KG ist ein familiär geführter
                Meisterbetrieb mit Sitz in Boppard-Buchholz, Rheinland-Pfalz.
                Seit über vier Jahrzehnten stehen wir für handwerkliche Exzellenz
                im Dachdeckerhandwerk.
              </p>

              <p className="text-text-muted text-base leading-relaxed">
                Unter der Leitung von Geschäftsführer{" "}
                <strong className="text-text-primary">{BUSINESS.owner}</strong> verbinden
                wir traditionelles Handwerksgeschick mit modernen Materialien und
                Technologien. Ob Steildach, Flachdach, Solaranlage oder
                Klempnerarbeiten — wir haben die Antwort für jede Dachaufgabe.
              </p>

              <p className="text-text-muted text-base leading-relaxed">
                Als Mitglied der{" "}
                <strong className="text-text-primary">Dachdecker-Innung Boppard</strong>{" "}
                und eingetragener Dachdeckermeister garantieren wir Ihnen
                fachgerechte Ausführung nach geltendem Standard — und persönlichen
                Einsatz vom ersten Gespräch bis zur Fertigstellung.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-6 py-3 rounded-sm transition-colors duration-200"
                >
                  Kontakt aufnehmen
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/leistungen"
                  className="inline-flex items-center justify-center gap-2 border border-border hover:border-accent text-text-muted hover:text-accent px-6 py-3 rounded-sm transition-colors duration-200"
                >
                  Unsere Leistungen
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20 md:py-32 bg-bg-secondary border-y border-border"
        aria-label="Unsere Werte"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Was uns antreibt"
            title="Unsere Werte"
            center
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="bg-bg-primary border border-border rounded p-6 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-sm bg-bg-surface border border-border flex items-center justify-center">
                    <Icon size={22} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-text-primary font-semibold text-base">
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 md:py-28" aria-label="Qualifikationen">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeUp}>
              <SectionHeading label="Nachweise" title="Qualifikationen" />
              <ul className="mt-8 space-y-4" role="list">
                {[
                  "Dachdeckermeister (Bundesrepublik Deutschland)",
                  "Mitglied der Dachdecker-Innung Boppard",
                  "Eingetragen beim Amtsgericht Koblenz (HRB 7011)",
                  "Handwerkskammer Koblenz — zuständige Kammer",
                  "Erfahrung mit Suntech, Mitsubishi Electric, Sharp (PV-Anlagen)",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-accent shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-text-muted text-sm leading-relaxed">{q}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Team photo */}
            <motion.div
              variants={fadeUp}
              className="aspect-[16/9] rounded overflow-hidden border border-border"
            >
              {/* TODO: Replace with real team photo */}
              <Image
                src="https://placehold.co/800x450/1a1d27/e8a020?text=Team+Foto"
                alt="Das Team von Preußer Bedachungen"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
