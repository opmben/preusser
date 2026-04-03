"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { TRUST_STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { staggerContainer, fadeUp, viewportSettings } from "@/lib/animations";

export default function TrustBar() {
  return (
    <section
      className="bg-bg-secondary border-y border-border py-16"
      aria-label="Statistiken und Auszeichnungen"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-border"
        >
          {TRUST_STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex flex-col items-center text-center lg:px-8"
            >
              {index === 3 ? (
                // Special badge for Meisterbetrieb
                <div className="flex flex-col items-center gap-2">
                  <Shield size={32} className="text-accent" />
                  <span className="font-display text-5xl lg:text-6xl text-text-primary">
                    MEISTER
                  </span>
                  <span className="font-mono text-accent text-xs tracking-widest uppercase">
                    Betrieb
                  </span>
                </div>
              ) : (
                <>
                  <span className="font-display text-6xl lg:text-7xl text-accent leading-none">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="mt-2 text-text-muted text-sm font-medium">
                    {stat.label}
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
