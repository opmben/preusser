"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { heroStagger, heroItem } from "@/lib/animations";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero-Bereich"
    >
      {/* Background image placeholder */}
      {/* TODO: Replace with real rooftop/craftsman photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080/0f1117/252836?text=."
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-bg-primary/60 to-bg-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/70 via-transparent to-transparent" />
      </div>

      {/* Amber accent line */}
      <div className="absolute left-0 top-1/4 w-1 h-48 bg-gradient-to-b from-transparent via-accent to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={heroItem} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-sm px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-accent text-xs tracking-widest uppercase">
                Meisterbetrieb · Boppard-Buchholz
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={heroItem}
            className="font-display text-7xl sm:text-8xl lg:text-[110px] xl:text-[130px] text-text-primary uppercase leading-none mb-6"
            style={{ letterSpacing: "0.01em" }}
          >
            IHR DACH
            <br />
            <span className="text-accent">IN MEISTER</span>
            <br />
            HÄNDEN
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={heroItem}
            className="text-text-muted text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          >
            Wir sind Ihr zuverlässiger Partner rund ums Dach — vom Neubau bis
            zur Sanierung, von Steildach bis Solaranlage. Familienbetrieb mit
            über 40 Jahren Erfahrung.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroItem}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-base"
            >
              Angebot anfragen
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center gap-2 border border-accent/50 hover:border-accent text-accent hover:bg-accent/5 font-semibold px-8 py-4 rounded-sm transition-all duration-200 text-base"
            >
              Leistungen entdecken
            </Link>
          </motion.div>

          {/* Phone */}
          <motion.div variants={heroItem} className="mt-10 flex items-center gap-3">
            <div className="p-2 rounded-sm bg-bg-secondary border border-border">
              <Phone size={16} className="text-accent" />
            </div>
            <div>
              <p className="text-text-muted text-xs">Jetzt anrufen</p>
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                className="text-text-primary font-semibold hover:text-accent transition-colors duration-200"
              >
                {BUSINESS.phone}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-text-muted text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
