"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactCTA from "@/components/home/ContactCTA";
import { filterItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

type Project = (typeof PROJECTS)[number];

export default function ProjekteContent() {
  const [activeFilter, setActiveFilter] = useState<string>("alle");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const filtered =
    activeFilter === "alle"
      ? [...PROJECTS]
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-bg-secondary border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Referenzen"
            title="Projekte"
            subtitle="Einblicke in unsere abgeschlossenen Arbeiten — von Steildach bis Solar."
          />
        </div>
      </section>

      <section className="py-16 md:py-24" aria-label="Projektgalerie">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter buttons */}
          <div
            className="flex flex-wrap gap-3 mb-12"
            role="group"
            aria-label="Kategoriefilter"
          >
            {PROJECT_FILTERS.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-sm border transition-all duration-200",
                  activeFilter === filter.value
                    ? "bg-accent text-bg-primary border-accent"
                    : "bg-transparent text-text-muted border-border hover:border-accent/50 hover:text-text-primary"
                )}
                aria-pressed={activeFilter === filter.value}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  variants={filterItem}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <button
                    className="group relative w-full aspect-[4/3] rounded overflow-hidden border border-border cursor-zoom-in"
                    onClick={() => setLightbox(project)}
                    aria-label={`${project.title} vergrößern`}
                  >
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111117]/90 via-[#111117]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-left">
                        <h3 className="text-white font-semibold text-sm">
                          {project.title}
                        </h3>
                        <p className="text-neutral-300 text-xs mt-0.5">
                          {project.location}
                        </p>
                      </div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#111117]/70 backdrop-blur-sm border border-white/10 text-white/80 text-xs px-2 py-1 rounded capitalize">
                        {project.category}
                      </span>
                    </div>
                    {/* Zoom icon */}
                    <div className="absolute top-3 right-3 p-1.5 bg-[#111117]/60 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <ZoomIn size={16} className="text-accent" />
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-text-muted py-20">
              Keine Projekte in dieser Kategorie.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#0f1117]/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
          >
            <button
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Schließen"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl aspect-[4/3] rounded overflow-hidden border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.image}
                alt={lightbox.alt}
                fill
                className="object-cover"
                sizes="90vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f1117]/80 to-transparent p-6">
                <h2 className="text-white font-semibold text-lg">
                  {lightbox.title}
                </h2>
                <p className="text-neutral-300 text-sm mt-1">
                  {lightbox.location} · {lightbox.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactCTA />
    </>
  );
}
