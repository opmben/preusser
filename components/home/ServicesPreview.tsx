"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Triangle,
  Minus,
  Sun,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";
import { staggerContainer, fadeUp, viewportSettings } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  triangle: Triangle,
  minus: Minus,
  sun: Sun,
  wrench: Wrench,
};

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-32" aria-label="Leistungsübersicht">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Was wir tun"
          title="Unsere Leistungen"
          subtitle="Von der Eindeckung bis zur Klempnerarbeit — alles aus einer Hand, alles in Meisterqualität."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] ?? Home;
            return (
              <motion.div key={service.id} variants={fadeUp}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group h-full bg-bg-secondary border border-border rounded p-6 flex flex-col gap-4 cursor-default"
                >
                  <div className="w-12 h-12 rounded-sm bg-bg-surface border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors duration-200">
                    <Icon size={22} className="text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary text-lg mb-1">
                      {service.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                  <Link
                    href={`/leistungen#${service.id}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:gap-3 transition-all duration-200"
                    aria-label={`Mehr über ${service.title}`}
                  >
                    Mehr erfahren
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div variants={fadeUp}>
            <Link
              href="/leistungen"
              className="group h-full bg-accent/5 border border-accent/30 hover:border-accent hover:bg-accent/10 rounded p-6 flex flex-col items-center justify-center gap-3 text-center transition-all duration-200 min-h-[180px]"
            >
              <span className="font-display text-3xl text-accent">
                ALLE LEISTUNGEN
              </span>
              <span className="text-text-muted text-sm">
                Vollständige Übersicht ansehen
              </span>
              <ArrowRight
                size={20}
                className="text-accent group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
