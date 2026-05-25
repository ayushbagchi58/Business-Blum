"use client";

import { motion } from "framer-motion";

import { features } from "./data";

export default function SmartFundingFeatures() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f5] py-14 sm:py-16 lg:py-20">
      <div className="absolute left-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 rotate-45 border border-slate-200 lg:block" />

      <div className="absolute right-8 top-16 hidden h-16 w-16 rounded-full border border-slate-200 lg:block" />

      <div className="mx-auto w-full max-w-[1280px] px-4  sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: features.indexOf(item) * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-5 lg:p-6"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 transition-all duration-300 group-hover:bg-emerald-500 sm:h-16 sm:w-16">
                  <Icon className="h-7 w-7 text-emerald-600 transition-all duration-300 group-hover:text-white sm:h-8 sm:w-8" />
                </div>

                <h3 className="mb-3 text-base font-bold leading-snug text-slate-900 sm:text-lg lg:text-xl">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
