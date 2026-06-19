"use client";

import { motion } from "framer-motion";
import { storySectionData } from "./data";

export default function AboutStorySection() {
  const { content } = storySectionData;

  return (
    <section className="mt-[-16px] w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="px-1"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "72px" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="h-[4px] rounded-full bg-gradient-to-r from-[#0EA56B] via-[#00d084] to-[#0EA56B] bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite] shadow-md"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0EA56B] sm:text-xs"
          >
            {content.sectionTag}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-black tracking-tight text-[#071133] sm:text-4xl md:text-[44px]"
          >
            {content.title}
          </motion.h2>

          <div className="mt-6 space-y-6">
            {content.paragraphs.slice(0, 2).map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08 + 0.25,
                }}
                viewport={{ once: true }}
                className="text-[14px] leading-[1.9] text-[#27324A] sm:text-[15px] md:text-[16px]"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.65,
                delay: 0.4,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 15px 35px rgba(14, 165, 107, 0.15)",
              }}
              className="relative overflow-hidden rounded-xl border border-[#0EA56B]/10 bg-gradient-to-br from-[#0EA56B]/5 to-[#0EA56B]/10 p-4 shadow-md transition-all duration-300 sm:p-5"
            >
              <motion.div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <p className="relative z-10 text-lg font-black leading-relaxed text-[#071133] sm:text-xl md:text-[26px]">
                {content.quote}
              </p>
            </motion.div>

            {content.paragraphs.slice(2).map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08 + 0.45,
                }}
                viewport={{ once: true }}
                className="text-[14px] leading-[1.9] text-[#27324A] sm:text-[15px] md:text-[16px]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
