"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { journeySectionData } from "./data";

export default function AboutJourneySection() {
  const { badge, title, subtitle, timeline } = journeySectionData;

  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f5] py-10 sm:py-12 md:py-14 lg:py-16">
      {/* Animated background gradient */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-emerald-500/10 to-transparent blur-3xl"
      />
      
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#12A56B] sm:text-[11px]"
          >
            {badge}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true }}
            className="mt-2 text-2xl font-black tracking-tight text-[#071133] sm:text-3xl md:text-[34px]"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-2 text-xs text-[#475569] sm:text-sm"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="relative mt-10 sm:mt-12">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#12A56B]/40 via-[#12A56B]/20 to-[#12A56B]/40 md:hidden" />

          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#12A56B]/40 via-[#12A56B]/20 to-[#12A56B]/40 md:block" />

          <div className="space-y-6 sm:space-y-7 md:space-y-10">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex w-full md:px-0 ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    className="absolute left-4 top-5 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-[4px] border-[#f5f5f5] bg-gradient-to-br from-[#12A56B] to-[#0ea76b] shadow-md md:hidden"
                  >
                    <CalendarDays className="h-3.5 w-3.5 text-white" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    className="absolute left-1/2 top-6 z-20 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-[#f5f5f5] bg-gradient-to-br from-[#12A56B] to-[#0ea76b] shadow-lg md:flex"
                  >
                    <CalendarDays className="h-4 w-4 text-white" />
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -20 : 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02, boxShadow: "0 15px 35px rgba(0,0,0,0.08)" }}
                    className={`relative ml-10 w-[calc(100%-2.5rem)] rounded-xl border border-black/5 bg-gradient-to-br from-white to-gray-50 p-4 shadow-[0_5px_18px_rgba(0,0,0,0.05)] transition-all duration-300 sm:ml-12 sm:w-[calc(100%-3rem)] sm:p-5 md:ml-0 md:w-[43%] ${
                      isLeft ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/0 to-emerald-500/0"
                      whileHover={{ 
                        background: "linear-gradient(to bottom right, rgba(18, 165, 107, 0.03), rgba(18, 165, 107, 0.08))"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      <h3 className="mt-1 text-[15px] font-black leading-tight text-[#071133] sm:text-base md:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[11px] leading-relaxed text-[#475569] sm:text-xs md:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
