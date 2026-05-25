"use client";

import { motion } from "framer-motion";
import { aboutSectionData } from "./data";

export default function AboutHeroSection() {
  const { glowOrbs, content } = aboutSectionData;

  return (
    <section className="relative w-full overflow-hidden bg-[#020617] py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 overflow-hidden">
        {glowOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            animate={orb.animate}
            transition={orb.transition}
            className={orb.className}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {content.title}
        </motion.h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "72px", opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-5 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400"
        />

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-white/80 sm:text-lg md:text-xl lg:text-2xl lg:leading-[1.5]"
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{
            duration: 0.4,
            delay: 0.25,
          }}
          viewport={{ once: true }}
          className="mt-8 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300 bg-clip-text text-[10px] font-semibold uppercase tracking-[0.2em] text-transparent sm:text-xs">
            {content.badge}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
