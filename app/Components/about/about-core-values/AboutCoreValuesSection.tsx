"use client";

import { motion } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Zap,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";

import { coreValuesSectionData } from "./data";

const iconMap = {
  target: Target,
  heart: Heart,
  bulb: Lightbulb,
  shield: ShieldCheck,
  users: Users,
  zap: Zap,
};

export default function AboutCoreValuesSection() {
  const { badge, title, subtitle, values } = coreValuesSectionData;

  return (
    <section className="w-full overflow-hidden bg-[#f5f5f5] py-8 sm:py-10 md:py-12">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-5 lg:px-6">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#12A56B]"
          >
            {badge}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="mt-2 text-[26px] font-black tracking-tight text-[#071133] sm:text-[32px] md:text-[38px]"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-2 text-[11px] text-[#475569] sm:text-xs md:text-sm"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-8 lg:grid-cols-3 lg:gap-5">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -3,
                }}
                className="rounded-[16px] border border-black/5 bg-white p-3 shadow-[0_6px_20px_rgba(0,0,0,0.04)] transition-all duration-300 sm:p-4 md:p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#12A56B]/10 sm:h-11 sm:w-11 md:h-12 md:w-12">
                  <Icon className="h-4 w-4 text-[#12A56B] sm:h-5 sm:w-5" />
                </div>

                <h3 className="mt-3 text-sm font-black leading-tight text-[#071133] sm:text-[16px] md:text-[18px]">
                  {value.title}
                </h3>

                <p className="mt-2 text-[11px] leading-[1.7] text-[#475569] sm:text-xs md:text-sm">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
