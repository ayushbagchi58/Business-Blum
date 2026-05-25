"use client";

import { motion, useInView, animate } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { stats } from "./data";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-[#f8fafc] py-8 md:py-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="h-[3px] bg-emerald-500 rounded-full mb-4"
        />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[28px] md:text-[56px] leading-none font-extrabold text-[#0f172a] tracking-tight">
            Why Choose Business Blum?
          </h2>

          <p className="mt-3 text-[14px] md:text-[18px] text-slate-600">
            We&apos;re not a lender — we&apos;re your advocate in finding the
            right one
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-[980px] mx-auto mt-8 md:mt-10 bg-white border border-slate-200 rounded-[18px] shadow-sm p-5 md:p-8"
        >
          <div className="grid grid-cols-3 gap-3 md:gap-6 text-center">
            {stats.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: stats.indexOf(item) * 0.12,
                  duration: 0.4,
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center gap-[2px]">
                  <h3 className="text-[24px] sm:text-[30px] md:text-[44px] font-extrabold text-emerald-600 leading-none">
                    {item.number === "50K+" && <CountUp to={50} suffix="K+" />}

                    {item.number === "200+" && <CountUp to={200} suffix="+" />}

                    {item.number === "4.8" && <CountUp to={4} suffix=".8" />}
                  </h3>

                  {item.icon && (
                    <Star
                      className="fill-emerald-600 text-emerald-600 mt-[2px]"
                      size={18}
                    />
                  )}
                </div>

                <p className="mt-1 text-[11px] sm:text-[13px] md:text-[14px] text-slate-600 leading-snug">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="w-full h-px bg-slate-200 my-6 md:my-8"></div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-[14px] md:text-[16px] leading-7 text-slate-700">
              Founded in 2023, Business Blum was created to solve a simple
              problem: finding the right business loan shouldn&apos;t be
              overwhelming. We&apos;ve built a platform that cuts through the
              noise and connects you directly with lenders who want to work with
              businesses like yours.
            </p>

            <p className="text-[14px] md:text-[16px] leading-7 text-slate-700">
              Unlike traditional banks or direct lenders, we&apos;re a neutral
              marketplace. We don&apos;t profit from steering you toward one
              lender over another — we succeed when you find the perfect match
              for your needs.
            </p>

            <p className="text-[14px] md:text-[16px] leading-7 text-slate-700">
              Our founding team has been in your shoes. We&apos;ve navigated the
              confusing world of business loans and experienced the anxiety of
              not knowing if we&apos;d qualify. That&apos;s why we built
              Business Blum with transparency and simplicity at its core.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
