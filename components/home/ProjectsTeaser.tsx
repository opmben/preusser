"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";
import { staggerContainer, fadeUp, viewportSettings } from "@/lib/animations";

const FEATURED = PROJECTS.slice(0, 4);

export default function ProjectsTeaser() {
  return (
    <section className="py-20 md:py-32" aria-label="Ausgewählte Projekte">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <SectionHeading
            label="Referenzen"
            title="Unsere Projekte"
            subtitle="Einblicke in abgeschlossene Arbeiten — Qualität, die man sieht."
          />
          <Link
            href="/projekte"
            className="shrink-0 inline-flex items-center gap-2 border border-accent/50 hover:border-accent text-accent hover:bg-accent/5 font-medium px-5 py-2.5 rounded-sm text-sm transition-all duration-200"
          >
            Alle Projekte
            <ArrowRight size={14} />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {FEATURED.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative aspect-[4/3] rounded overflow-hidden border border-border cursor-default"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-text-primary font-semibold text-sm">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-xs mt-0.5">
                    {project.location}
                  </p>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-bg-primary/80 backdrop-blur-sm border border-border text-text-muted text-xs px-2 py-1 rounded capitalize">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
