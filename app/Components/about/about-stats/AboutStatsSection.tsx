"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { statsSectionData } from "./data";

function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplayValue(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function AboutStatsSection() {
  const { stats } = statsSectionData;

  return (
    <section className="w-full bg-white py-6 sm:py-8 md:py-10">
      <div className="mx-auto w-full max-w-[1567px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[22px] border border-black/5 bg-gradient-to-br from-white via-white to-gray-50 px-4 py-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] -translate-y-25 sm:px-6 md:px-8 md:py-7">
          {/* Animated gradient overlay */}
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-500/20 to-transparent blur-2xl"
          />
          
          <div className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6 md:gap-y-0">
            {stats.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group flex min-w-0 flex-col items-center text-center"
              >
                <motion.h2 
                  className="whitespace-nowrap text-[28px] font-black tracking-tight text-[#00A36C] transition-all duration-300 group-hover:text-[#00d084] sm:text-[34px] md:text-[38px] lg:text-[44px]"
                  whileHover={{ scale: 1.1 }}
                >
                  <CountUp
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    decimals={item.decimals}
                  />
                </motion.h2>

                <h3 className="mt-1 text-sm font-extrabold leading-tight text-[#0b1324] sm:text-[15px] md:text-base">
                  {item.title}
                </h3>

                <p className="mt-1 text-[11px] font-medium leading-relaxed text-[#64748b] sm:text-xs md:text-sm">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
