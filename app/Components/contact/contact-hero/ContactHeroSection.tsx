"use client";

import { motion } from "framer-motion";

import { contactHeroSectionData } from "./data";

export default function ContactHeroSection() {
  const { content } = contactHeroSectionData;

  return (
    <section className="relative w-full overflow-hidden bg-[#06122b] py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#071938] via-[#06122b] to-[#052b24]" />

        <div className="absolute left-[-90px] top-1/2 h-[180px] w-[180px] -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />

        <div className="absolute bottom-[-70px] left-1/2 h-[160px] w-[160px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />

        <div className="absolute right-[-70px] top-0 h-[170px] w-[170px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            text-[34px] font-black leading-[1]
            tracking-tight text-white
            sm:text-[44px]
            md:text-[56px]
            lg:text-[64px]
          "
        >
          {content.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.12,
          }}
          viewport={{ once: true }}
          className="
            mt-4 max-w-3xl
            text-sm font-medium leading-[1.7]
            text-white/85
            sm:text-base
            md:text-[18px]
            md:leading-[1.6]
          "
        >
          {content.description}
        </motion.p>
      </div>
    </section>
  );
}
