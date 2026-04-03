"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportSettings } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  center = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(center ? "text-center" : "", className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
    >
      {label && (
        <span className="inline-block font-mono text-accent text-xs tracking-widest uppercase mb-3">
          {label}
        </span>
      )}
      <h2
        className="font-display text-5xl sm:text-6xl lg:text-7xl text-text-primary uppercase leading-none"
        style={{ letterSpacing: "0.02em" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-5 h-px bg-gradient-to-r from-accent to-transparent",
          center ? "mx-auto max-w-24" : "max-w-24"
        )}
      />
    </motion.div>
  );
}
