"use client";

import { motion } from "framer-motion";

import { applyNowApprovalSectionData } from "./data";

export default function ApplyNowApprovalSection() {
  const { badge, heading, subtitle, successMetrics, approvalItems } =
    applyNowApprovalSectionData;

  return (
    <section className="w-full bg-[#f3f5f7] py-6 sm:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1080px] px-3 sm:px-4 lg:px-5">
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            relative overflow-hidden
            rounded-[20px]
            border border-black/5
            bg-white
            px-4 py-6
            shadow-[0_8px_24px_rgba(15,23,42,0.06)]
            sm:px-5 sm:py-7
            lg:px-6 lg:py-8
          "
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                x: [0, 28, 0],
                y: [0, -16, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute -left-10 top-0
                h-36 w-36 rounded-full
                bg-[#0EA56B]/10 blur-3xl
              "
            />

            <motion.div
              animate={{
                x: [0, -24, 0],
                y: [0, 18, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute right-0 top-0
                h-44 w-44 rounded-full
                bg-[#14b87a]/10 blur-3xl
              "
            />
          </div>

          <div className="relative z-10">
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-center"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#009966] to-[#00b377] px-4 py-2 text-xs font-semibold text-white">
                  {badge}
                </span>
              </motion.div>
            )}

            <motion.h2
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
              }}
              viewport={{ once: true }}
              className="
                text-center text-[20px]
                font-black tracking-[-0.04em]
                text-[#071133]
                sm:text-[28px]
                md:text-[34px]
              "
            >
              {heading}
            </motion.h2>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-3 text-center text-sm text-gray-600 sm:text-base"
              >
                {subtitle}
              </motion.p>
            )}

            {successMetrics && successMetrics.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
              >
                {successMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="rounded-xl border border-[#0EA56B]/20 bg-gradient-to-br from-[#ecfdf3] to-white p-4 text-center"
                  >
                    <p className="text-3xl font-black text-[#0EA56B] sm:text-4xl">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-sm font-bold text-[#071133]">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs text-gray-600">
                      {metric.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            <div
              className="
                mt-8 grid grid-cols-1
                gap-x-6 gap-y-5
                md:grid-cols-2
              "
            >
              {approvalItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      x: 3,
                    }}
                    className="group flex items-start gap-3"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        rotate: 2,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 240,
                      }}
                      className="
                          flex h-[30px] w-[30px]
                          shrink-0 items-center
                          justify-center rounded-full
                          border border-[#0EA56B]
                          bg-[#ecfdf3]
                        "
                    >
                      <Icon className="h-3.5 w-3.5 text-[#0EA56B]" />
                    </motion.div>

                    <div>
                      <h3
                        className="
                            text-[14px] font-extrabold
                            tracking-[-0.02em]
                            text-[#071133]
                            sm:text-[15px]
                          "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                            mt-1 text-[12px]
                            leading-5 text-[#475467]
                            sm:text-[13px]
                          "
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
