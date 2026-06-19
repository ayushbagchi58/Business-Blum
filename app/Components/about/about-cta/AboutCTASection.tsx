"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { aboutCTASectionData } from "./data";

export default function AboutCTASection() {
  const { content } = aboutCTASectionData;

  return (
    <section className="relative w-full overflow-hidden bg-[#06122b] py-9 sm:py-11 md:py-12 lg:py-14">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c3f] via-[#06122b] to-[#052b24]" />

        <div className="absolute bottom-[-70px] left-1/2 h-[150px] w-[150px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />

        <div className="absolute right-0 top-0 h-[180px] w-[180px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            max-w-3xl
            text-[30px]
            font-black
            leading-[1.05]
            tracking-tight
            text-white
            sm:text-[40px]
            md:text-[52px]
          "
        >
          {content.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="
            mt-4
            max-w-2xl
            text-[13px]
            leading-[1.8]
            text-white/80
            sm:text-sm
            md:text-[15px]
          "
        >
          {content.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.18,
          }}
          viewport={{ once: true }}
          className="mt-7 sm:mt-8"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 40px rgba(14, 167, 114, 0.3)",
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0ea472] to-[#00b377] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/10 transition-all duration-300 sm:px-6 sm:py-3.5"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              {content.button.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
