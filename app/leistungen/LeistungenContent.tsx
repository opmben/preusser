"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Triangle, Minus, Sun, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactCTA from "@/components/home/ContactCTA";
import { fadeUp, staggerContainer, viewportSettings } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  triangle: Triangle,
  minus: Minus,
  sun: Sun,
  wrench: Wrench,
};

export default function LeistungenContent() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-bg-secondary border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Was wir anbieten"
            title="Unsere Leistungen"
            subtitle="Fünf Kernbereiche — ein Ansprechpartner. Als Meisterbetrieb decken wir alles ab, was Ihr Dach braucht."
          />
        </div>
      </section>

      {/* Services */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon] ?? Home;
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className="py-20 md:py-28 border-b border-border last:border-b-0"
              aria-label={service.title}
            >
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Text */}
                <motion.div variants={fadeUp} className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-sm bg-bg-secondary border border-border flex items-center justify-center">
                      <Icon size={22} className="text-accent" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-accent text-xs tracking-widest uppercase">
                      Leistung 0{index + 1}
                    </span>
                  </div>

                  <h2
                    className="font-display text-5xl sm:text-6xl text-text-primary uppercase leading-none"
                    style={{ letterSpacing: "0.02em" }}
                  >
                    {service.title}
                  </h2>

                  <p className="text-text-muted text-base leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                    {service.subServices.map((sub) => (
                      <li key={sub} className="flex items-center gap-2.5">
                        <CheckCircle
                          size={16}
                          className="text-accent shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-text-primary text-sm">{sub}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-6 py-3 rounded-sm transition-colors duration-200 w-fit"
                  >
                    Angebot anfragen
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>

                {/* Image */}
                <motion.div
                  variants={fadeUp}
                  className="relative aspect-[4/3] rounded overflow-hidden border border-border"
                >
                  {/* TODO: Replace with real project photo for {service.title} */}
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </motion.div>
              </motion.div>
            </section>
          );
        })}
      </div>

      <ContactCTA />
    </>
  );
}
