"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ctaData } from "./data";

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#06122b] py-12 sm:py-14 lg:py-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c3f] via-[#06122b] to-[#052b24]" />

        <div className="absolute bottom-[-80px] left-1/2 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />

        <div className="absolute right-0 top-0 h-[220px] w-[220px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            max-w-3xl text-3xl font-extrabold tracking-tight
            text-white sm:text-4xl lg:text-5xl
          "
        >
          {ctaData.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="
            mt-4 max-w-2xl text-sm leading-7
            text-gray-200 sm:text-base lg:text-lg
          "
        >
          {ctaData.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 25px 50px rgba(14, 167, 114, 0.4)",
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group relative overflow-hidden inline-flex items-center gap-2.5
              rounded-xl bg-gradient-to-r from-[#0ea472] to-[#00b377]
              px-6 py-3.5 text-sm font-semibold
              text-white shadow-lg shadow-emerald-500/10
              transition-all duration-300
              sm:px-7 sm:py-4 sm:text-base
            "
          >
            <span className="relative z-10 flex items-center gap-2.5">
              {ctaData.buttonText}
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
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
