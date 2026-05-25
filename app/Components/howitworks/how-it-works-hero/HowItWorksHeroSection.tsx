"use client";

import { motion } from "framer-motion";
import { howItWorksHeroData } from "./data";

export default function HowItWorksHero() {
  const { title, subtitle } = howItWorksHeroData;

  return (
    <section className="relative flex min-h-[240px] w-full items-center justify-center overflow-hidden bg-[#020b22] px-4 py-10 sm:min-h-[280px] sm:px-6 lg:min-h-[320px] lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_55%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          viewport={{ once: true }}
          className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg"
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
}
