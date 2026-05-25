"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Shield } from "lucide-react";

import { heroData } from "./data";

const HeroSection = () => {
  return (
    <section className="w-full overflow-hidden bg-[#f5f5f5] px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-14">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-[12px] font-semibold text-white shadow-sm sm:text-[13px]"
        >
          <Shield size={14} />

          {heroData.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[900px] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#08122E] sm:text-[48px] md:text-[58px] lg:text-[82px]"
        >
          {heroData.title.first}

          <br />

          <span className="text-[#009966]">{heroData.title.highlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-4 max-w-[680px] px-2 text-[15px] leading-relaxed text-[#374151] sm:mt-5 sm:text-[17px] md:text-[18px]"
        >
          {heroData.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-7 flex w-full max-w-[540px] flex-row items-center justify-center gap-3 sm:mt-8"
        >
          {heroData.buttons.map((button) => (
            <button
              key={button.id}
              className={`flex h-[52px] w-[48%] items-center justify-center gap-2 rounded-xl px-4 text-[13px] font-semibold shadow-md transition hover:scale-[1.02] sm:h-[54px] sm:text-[15px] ${
                button.primary
                  ? "bg-[#009966] text-white hover:bg-[#007a52]"
                  : "bg-[#08122E] text-white"
              }`}
            >
              {button.title}

              {button.icon && <ArrowRight size={18} />}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-8 w-full border-t border-gray-300 pt-5 sm:mt-10"
        >
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-8 lg:gap-12">
            {heroData.features.map((feature) => (
              <div key={feature.id} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#009966] text-white">
                  <BadgeCheck size={20} />
                </div>

                <div className="text-left">
                  <h3 className="text-[15px] font-bold text-[#08122E] sm:text-[16px]">
                    {feature.title}
                  </h3>

                  <p className="text-[12px] text-gray-500 sm:text-[13px]">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
