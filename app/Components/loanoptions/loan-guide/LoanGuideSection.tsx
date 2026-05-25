"use client";

import { motion } from "framer-motion";

import { loanGuideSectionData } from "./data";

export default function LoanGuideSection() {
  const { heading, description, factors } = loanGuideSectionData;

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f8fa] py-10 md:py-12">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.03),transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-[980px] px-4 sm:px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-xl text-center"
        >
          <h2
            className="
              text-[26px]
              font-extrabold
              leading-tight
              tracking-tight
              text-[#0f172a]
              sm:text-[32px]
              md:text-[38px]
            "
          >
            {heading}
          </h2>

          <p
            className="
              mt-2.5
              text-[12px]
              leading-6
              text-slate-600
              sm:text-[13px]
              md:text-[14px]
            "
          >
            {description}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-3">
          {factors.map((factor, index) => {
            const Icon = factor.icon;

            return (
              <motion.div
                key={factor.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -2,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-4
                  shadow-[0_3px_14px_rgba(15,23,42,0.04)]
                  transition-all
                  duration-300
                  hover:border-emerald-100
                  hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]
                  sm:px-5
                  sm:py-4.5
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(16,185,129,0.04),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-start gap-3">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-emerald-50
                      transition-all
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <Icon className="h-4.5 w-4.5 text-emerald-600" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="
                        text-[15px]
                        font-bold
                        tracking-tight
                        text-[#0f172a]
                        sm:text-[16px]
                      "
                    >
                      {factor.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        text-[12px]
                        leading-5
                        text-slate-600
                        sm:text-[13px]
                      "
                    >
                      {factor.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
