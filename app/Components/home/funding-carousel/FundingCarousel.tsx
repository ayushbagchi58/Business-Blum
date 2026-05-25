"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { fundingSlides } from "./data";

export default function FundingCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === fundingSlides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === fundingSlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? fundingSlides.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full overflow-hidden bg-[#f8fafc] py-10">
      <div className="mx-auto max-w-[1250px] px-3 sm:px-4 md:px-5">
        <div className="mb-8 text-center">
          <h2 className="text-[24px] font-extrabold leading-tight text-[#0f172a] sm:text-[32px] md:text-[42px]">
            Business Funding Categories
          </h2>

          <p className="mt-2 text-[12px] text-slate-600 sm:text-[14px] md:text-[17px]">
            We connect you with lenders across all types of business financing
          </p>
        </div>

        <div className="relative w-full">
          <button
            onClick={prevSlide}
            className="absolute -left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition hover:scale-105 md:-left-4 md:h-9 md:w-9"
          >
            <ChevronLeft className="h-4 w-4 text-slate-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition hover:scale-105 md:-right-4 md:h-9 md:w-9"
          >
            <ChevronRight className="h-4 w-4 text-slate-700" />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.45 }}
                className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4"
              >
                {fundingSlides[activeSlide].map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: fundingSlides[activeSlide].indexOf(item) * 0.08,
                        duration: 0.35,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="group relative min-h-[170px] overflow-hidden rounded-[16px] border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-lg sm:min-h-[190px] sm:p-4 md:p-5"
                    >
                      <div className="absolute left-0 top-0 h-[3px] w-full bg-emerald-500"></div>

                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 transition group-hover:scale-105 sm:h-11 sm:w-11">
                        <Icon className="h-5 w-5 text-emerald-600" />
                      </div>

                      <h3 className="mb-2 text-[13px] font-bold leading-snug text-slate-900 sm:text-[15px] md:text-[18px]">
                        {item.title}
                      </h3>

                      <p className="text-[10px] leading-5 text-slate-600 sm:text-[12px] md:text-[14px]">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {fundingSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-[6px] rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-5 bg-slate-900"
                    : "w-[6px] bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
