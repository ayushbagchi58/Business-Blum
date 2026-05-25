"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { loanSectionData } from "./data";

export default function LoanOptionsSection() {
  const { heading, description, loans } = loanSectionData;

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 md:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.035),transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-[1220px] px-4 sm:px-5 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-2xl text-center"
        >
          <h2
            className="
              text-[26px]
              font-extrabold
              tracking-tight
              text-[#0f172a]
              sm:text-[30px]
              md:text-[34px]
              lg:text-[38px]
            "
          >
            {heading}
          </h2>

          <p
            className="
              mt-3
              text-[13px]
              leading-6
              text-slate-600
              sm:text-[14px]
              md:text-[15px]
            "
          >
            {description}
          </p>
        </motion.div>

        <div
          className="
            grid
            grid-cols-2
            gap-3
            md:grid-cols-3
            xl:grid-cols-4
          "
        >
          {loans.map((loan, index) => {
            const Icon = loan.icon;

            return (
              <motion.div
                key={loan.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-slate-200
                  bg-white
                  shadow-[0_3px_14px_rgba(15,23,42,0.05)]
                  transition-all
                  duration-300
                  hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)]
                "
              >
                <div className="h-[4px] w-full bg-gradient-to-r from-emerald-500 to-emerald-600" />

                <div className="p-3.5 sm:p-4">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-emerald-50
                      transition-all
                      duration-300
                      group-hover:scale-105
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <Icon className="h-5 w-5 text-emerald-600 sm:h-5.5 sm:w-5.5" />
                  </div>

                  <h3
                    className="
                      mt-3
                      text-[16px]
                      font-extrabold
                      tracking-tight
                      text-[#0f172a]
                      sm:text-[18px]
                      md:text-[19px]
                    "
                  >
                    {loan.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[12px]
                      leading-5
                      text-slate-600
                      sm:text-[13px]
                    "
                  >
                    {loan.description}
                  </p>

                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] text-slate-600 sm:text-[12px]">
                        Loan Range:
                      </span>

                      <span className="text-[11px] font-bold text-emerald-600 sm:text-[12px]">
                        {loan.range}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] text-slate-600 sm:text-[12px]">
                        Term:
                      </span>

                      <span className="text-[11px] font-bold text-[#0f172a] sm:text-[12px]">
                        {loan.term}
                      </span>
                    </div>
                  </div>

                  <div className="my-3 h-px w-full bg-slate-200" />

                  <div className="space-y-2">
                    {loan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />

                        <span className="text-[11px] text-slate-700 sm:text-[12px]">
                          {feature}
                        </span>
                      </div>
                    ))}
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
