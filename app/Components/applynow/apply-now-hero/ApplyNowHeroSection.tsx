"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

import { applyNowHeroSectionData } from "./data";

export default function ApplyNowHeroSection() {
  const { badge, heading, description, image } = applyNowHeroSectionData;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[240px] w-full sm:h-[280px] md:h-[340px] lg:h-[400px]">
        <Image
          src={image}
          alt={heading}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#071133]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071133]/90 via-[#071133]/70 to-[#071133]/40" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center justify-center px-4 sm:px-5 lg:px-6">
          <div className="max-w-[760px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(44, 230, 161, 0.3)",
              }}
              className="
                inline-flex items-center gap-2
                rounded-lg border border-white/15
                bg-white/10 px-3 py-1.5
                backdrop-blur-md shadow-lg
              "
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Shield className="h-3.5 w-3.5 text-[#2CE6A1]" />
              </motion.div>

              <span
                className="
                  text-[10px] font-bold
                  tracking-wide text-white
                  sm:text-[11px]
                "
              >
                {badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="
                mx-auto mt-4 max-w-[680px]
                text-[30px] font-black
                leading-[1]
                tracking-[-0.03em] text-white
                sm:text-[42px]
                md:text-[56px]
                lg:text-[68px]
              "
            >
              {heading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="
                mx-auto mt-4 max-w-[560px]
                text-[12px] font-medium
                leading-6 text-white/90
                sm:text-[14px]
                md:text-[16px]
              "
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
