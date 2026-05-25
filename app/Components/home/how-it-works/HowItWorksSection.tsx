"use client";

import { motion } from "framer-motion";

import { stepsData } from "./data";

const HowItWorksSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7faf9] py-12 sm:py-16 lg:py-20">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, #dbe4e1 1px, transparent 1px), linear-gradient(to bottom, #dbe4e1 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Decorative Dot */}
      <div className="absolute left-[15%] top-[25%] h-2.5 w-2.5 rounded-full bg-[#b8f1da]" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-3 sm:px-4 lg:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[24px] font-extrabold leading-tight text-[#08122E] sm:text-[32px] md:text-[40px] lg:text-[54px]">
            How It Works
          </h2>

          <p className="mt-2 text-[12px] text-[#334155] sm:text-[14px] md:text-[16px]">
            Get matched with lenders in three simple steps
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative mt-8 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {/* Connection Line */}
          <div className="absolute left-0 top-[70px] hidden h-[2px] w-full bg-[#99e8c7] xl:block" />

          {stepsData.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative z-10 rounded-xl border border-gray-100 bg-[#f8f8f8] p-3 shadow-[0_4px_12px_rgba(0,0,0,0.07)] transition hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.10)] sm:p-4 md:p-5"
              >
                {/* Top Border */}
                <div className="absolute left-0 top-0 h-[4px] w-full rounded-t-xl bg-[#0ea76b]" />

                {/* Step Number */}
                <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#0ea76b] text-[12px] font-bold text-white shadow-sm sm:h-8 sm:w-8 sm:text-[14px]">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#dff5ea] text-[#0ea76b] sm:h-12 sm:w-12">
                  <Icon size={20} strokeWidth={2.2} />
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-[11px] font-bold leading-snug text-[#08122E] sm:text-[14px] md:text-[18px] lg:text-[20px]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[9px] leading-relaxed text-[#475569] sm:text-[11px] md:text-[13px] lg:text-[15px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
