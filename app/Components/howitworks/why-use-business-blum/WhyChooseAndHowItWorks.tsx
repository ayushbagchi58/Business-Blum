"use client";

import { motion } from "framer-motion";
import { featureCards } from "./data";

export default function WhyChooseAndHowItWorks() {
  return (
    <section className="w-full overflow-hidden bg-[#f5f5f5]">
      <div className="w-full px-4 py-14 sm:px-5 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[28px] font-extrabold leading-tight text-[#081228] sm:text-[34px] md:text-[42px] lg:text-[52px]">
            Why Use Business Blum?
          </h2>

          <p className="mt-3 text-[15px] font-medium text-[#2c4565] sm:text-[17px] md:text-[20px]">
            Experience the difference of smart loan matching
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {featureCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25 },
                }}
                className="rounded-[18px] bg-white px-3 py-5 text-center shadow-[0_6px_20px_rgba(0,0,0,0.05)] sm:px-4 sm:py-6 md:px-5 md:py-7 lg:px-6 lg:py-8"
              >
                <div className="mx-auto flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#dff5e8] sm:h-[60px] sm:w-[60px] md:h-[68px] md:w-[68px]">
                  <Icon
                    className="h-5 w-5 text-[#0d9b68] sm:h-6 sm:w-6 md:h-7 md:w-7"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="mt-4 text-[13px] font-extrabold leading-tight text-[#081228] sm:text-[16px] md:text-[20px] lg:text-[24px]">
                  {item.title}
                </h3>

                <p className="mx-auto mt-3 text-[10px] leading-5 text-[#3e5573] sm:text-[12px] sm:leading-6 md:text-[14px] md:leading-7 lg:text-[16px]">
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
