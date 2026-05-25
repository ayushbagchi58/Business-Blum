"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { fundingSectionData } from "./data";

export default function BusinessFundingSection() {
  const { heading, description, features } = fundingSectionData;

  return (
    <section className="relative w-full overflow-hidden bg-[#020817]">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06),transparent_60%)]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      <div className="relative mx-auto flex min-h-[360px] w-full max-w-[1100px] items-center justify-center px-4 py-14 sm:px-6 md:px-8">
        <div className="w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="
              mx-auto
              max-w-4xl
              text-[38px]
              font-extrabold
              tracking-tight
              text-white
              sm:text-[48px]
              md:text-[58px]
              lg:text-[64px]
              leading-[1.05]
            "
          >
            {heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.65,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-[14px]
              leading-relaxed
              text-gray-300
              sm:text-[15px]
              md:text-[16px]
              lg:text-[17px]
            "
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.65,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="
              mt-9
              grid
              grid-cols-3
              gap-2
              sm:gap-3
              md:gap-4
              lg:flex
              lg:justify-center
              lg:gap-6
            "
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.35 + index * 0.1,
                  duration: 0.4,
                }}
                whileHover={{
                  scale: 1.02,
                }}
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-white/5
                  bg-white/[0.025]
                  px-2.5
                  py-2.5
                  backdrop-blur-sm
                  sm:px-3
                  md:px-4
                "
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 transition-all duration-300 group-hover:shadow-[0_0_14px_rgba(16,185,129,0.28)]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                </div>

                <span
                  className="
                    text-center
                    text-[10px]
                    font-semibold
                    text-white
                    sm:text-[11px]
                    md:text-[13px]
                    lg:text-[14px]
                  "
                >
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-[#020817] to-transparent" />
    </section>
  );
}
