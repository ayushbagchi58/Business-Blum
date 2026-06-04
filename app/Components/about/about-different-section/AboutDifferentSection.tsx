"use client";

import { motion } from "framer-motion";
import {
  Globe,
  BriefcaseBusiness,
  ArrowUpRight,
  Target,
  Shield,
} from "lucide-react";

import { aboutDifferentSectionData } from "./data";

const iconMap = {
  globe: Globe,
  briefcase: BriefcaseBusiness,
  arrow: ArrowUpRight,
  target: Target,
  shield: Shield,
};

export default function AboutDifferentSection() {
  const { title, items } = aboutDifferentSectionData;

  return (
    <section className="w-full overflow-hidden bg-white py-7 sm:py-8 md:py-10">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-5 lg:px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="text-[24px] font-black tracking-tight text-[#071133] sm:text-[30px] md:text-[36px]"
          >
            {title}
          </motion.h2>
        </div>

        <div className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: "0 15px 35px rgba(0,0,0,0.08)", scale: 1.01 }}
                className="flex items-start gap-3 rounded-[16px] border border-black/5 bg-gradient-to-br from-white to-gray-50 p-4 shadow-[0_5px_18px_rgba(0,0,0,0.04)] sm:gap-4 sm:p-5"
              >
                <motion.div 
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0EA56B] to-[#00b377] shadow-md sm:h-11 sm:w-11"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </motion.div>

                <div className="min-w-0">
                  <h3 className="text-[16px] font-black leading-tight text-[#071133] sm:text-[18px]">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[11px] leading-[1.8] text-[#475569] sm:text-[13px] md:text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
