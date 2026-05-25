"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { applyNowProcessSectionData } from "./data";

export default function ApplyNowProcessSection() {
  const { badge, heading, description, steps } = applyNowProcessSectionData;

  return (
    <section className="relative w-full overflow-hidden bg-[#f3f5f7] py-8 sm:py-10 lg:py-12">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -24, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 top-10 h-52 w-52 rounded-full bg-[#14b87a]/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#0EA56B]/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              inline-flex items-center gap-2
              rounded-full border border-[#14b87a]/20
              bg-white px-3 py-1.5
              shadow-[0_8px_20px_rgba(0,0,0,0.04)]
            "
          >
            <Sparkles className="h-3 w-3 text-[#0EA56B]" />

            <span
              className="
                text-[9px] font-bold uppercase
                tracking-[0.18em] text-[#0EA56B]
              "
            >
              {badge}
            </span>
          </div>

          <h2
            className="
              mt-3 text-[24px]
              font-black leading-[1.05]
              tracking-[-0.04em] text-[#071133]
              sm:text-[34px]
              md:text-[42px]
            "
          >
            {heading}
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-2xl
              text-[12px] leading-6
              text-[#475467]
              sm:text-[14px]
            "
          >
            {description}
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                }}
                className="
                  group relative overflow-hidden
                  rounded-[18px]
                  border border-black/5
                  bg-white
                  p-3 sm:p-4 lg:p-5
                  shadow-[0_12px_32px_rgba(15,23,42,0.06)]
                "
              >
                <div
                  className="
                    absolute inset-0 opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,107,0.05),transparent)]" />
                </div>

                <motion.div
                  whileHover={{
                    scale: 1.04,
                    rotate: 2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                  }}
                  className="
                    relative mx-auto flex
                    h-[44px] w-[44px]
                    sm:h-[52px] sm:w-[52px]
                    md:h-[58px] md:w-[58px]
                    items-center justify-center
                    rounded-[14px]
                    bg-gradient-to-br
                    from-[#19c37d] to-[#0EA56B]
                    shadow-[0_12px_24px_rgba(14,165,107,0.22)]
                  "
                >
                  <span className="text-[18px] font-black text-white sm:text-[20px]">
                    {step.id}
                  </span>
                </motion.div>

                <div className="relative mt-4 text-center">
                  <h3
                    className="
                      text-[13px] font-black
                      tracking-[-0.03em]
                      text-[#071133]
                      sm:text-[16px]
                      md:text-[18px]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mx-auto mt-2
                      max-w-[240px]
                      text-[10px] leading-5
                      text-[#475467]
                      sm:text-[11px]
                      md:text-[13px]
                    "
                  >
                    {step.description}
                  </p>

                  <div
                    className="
                      mt-4 inline-flex items-center
                      gap-1 rounded-full
                      bg-[#ecfdf3]
                      px-2.5 py-1
                      sm:px-3 sm:py-1.5
                    "
                  >
                    <Icon className="h-3 w-3 text-[#0EA56B]" />

                    <span className="text-[10px] font-bold text-[#0EA56B] sm:text-[11px]">
                      {step.time}
                    </span>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="
                    absolute bottom-0 left-0
                    h-1 w-full
                    bg-gradient-to-r
                    from-[#19c37d] to-[#0EA56B]
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
