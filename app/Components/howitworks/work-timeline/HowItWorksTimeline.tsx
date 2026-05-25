"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { howItWorksSteps } from "./data";

export default function HowItWorksTimeline() {
  return (
    <section className="w-full bg-[#f8f8f8] py-8 lg:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative">
          <div
            className="
              absolute top-0 h-full w-[1.5px] bg-[#36d39a]/50
              left-[18px]
              lg:left-1/2 lg:-translate-x-1/2
            "
          />

          {howItWorksSteps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`
                  relative mb-[14px] flex w-full items-center
                 
                  justify-start
                
                  lg:${isLeft ? "justify-start" : "justify-end"}
                `}
              >
                <div
                  className="
                    absolute z-20 flex h-9 w-9 flex-shrink-0
                    items-center justify-center rounded-full
                    bg-[#10b981] text-xs font-bold text-white shadow-md
                 
                    left-[18px] -translate-x-1/2
                    
                    lg:left-1/2
                  "
                >
                  {step.id}
                </div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className={`
                    rounded-xl bg-white p-5 shadow-lg transition

                    
                    ml-12 w-[calc(100%-3rem)]

                    
                    sm:ml-14 sm:w-[calc(100%-3.5rem)]

                  
                    lg:ml-0 lg:w-[calc(50%-28px)]
                    ${isLeft ? "lg:mr-auto" : "lg:ml-auto"}

                    ${index === 0 ? "-translate-y-20 lg:-translate-y-20" : ""}
                  `}
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#dff7ec]">
                    <Icon className="text-[#10b981]" size={18} />
                  </div>

                  <h3 className="mb-2 text-base font-bold text-[#111827] sm:text-lg">
                    {step.title}
                  </h3>

                  <p className="mb-3 text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>

                  <div className="space-y-1">
                    {step.points.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle
                          size={13}
                          className="flex-shrink-0 text-[#10b981]"
                        />
                        <span className="text-xs text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
