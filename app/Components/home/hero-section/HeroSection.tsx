"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Shield } from "lucide-react";

import { heroData } from "./data";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#f5f5f5] via-[#f8f8f8] to-[#f0f4f3] px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-14">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#009966]/10 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-[#08122E]/5 to-transparent blur-3xl"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
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
            <motion.button
              key={button.id}
              whileHover={{ 
                scale: 1.03,
                y: -2,
                boxShadow: button.primary 
                  ? "0 20px 40px rgba(0, 153, 102, 0.3)" 
                  : "0 20px 40px rgba(8, 18, 46, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`group relative flex h-[52px] w-[48%] items-center justify-center gap-2 overflow-hidden rounded-xl px-4 text-[13px] font-semibold shadow-md sm:h-[54px] sm:text-[15px] ${
                button.primary
                  ? "bg-gradient-to-r from-[#009966] to-[#00b377] text-white"
                  : "bg-gradient-to-r from-[#08122E] to-[#0f1a3d] text-white"
              }`}
            >
              <span className="relative z-10">{button.title}</span>
              {button.icon && <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-8 w-full border-t border-gray-300 pt-5 sm:mt-10"
        >
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-8 lg:gap-12">
            {heroData.features.map((feature, idx) => (
              <motion.div 
                key={feature.id} 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <motion.div 
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#009966] to-[#00b377] text-white shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <BadgeCheck size={20} />
                </motion.div>

                <div className="text-left">
                  <h3 className="text-[15px] font-bold text-[#08122E] sm:text-[16px]">
                    {feature.title}
                  </h3>

                  <p className="text-[12px] text-gray-500 sm:text-[13px]">
                    {feature.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
