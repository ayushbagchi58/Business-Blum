"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { testimonials } from "./data";

export default function TestimonialsSection() {
  return (
    <section
      id="success-stories"
      className="relative mt-[-30px] w-full overflow-hidden bg-white py-14 md:py-20"
    >
      <div className="absolute left-0 top-10 h-28 w-28 rounded-full border border-emerald-100 opacity-70" />

      <div className="absolute bottom-10 right-10 h-16 w-16 rotate-12 border border-slate-200 opacity-80" />

      <div className="absolute right-1/4 top-32 h-3 w-3 rounded-full bg-emerald-200" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-black tracking-tight text-[#08142e] sm:text-4xl md:text-5xl">
            Success Stories
          </h2>

          <p className="mt-3 text-sm text-slate-600 sm:text-base md:text-lg">
            Hear from people we&apos;ve helped
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                scale: 1.02,
              }}
              className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition-all duration-300 hover:border-emerald-200"
            >
              <div className="mb-5 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.15 + i * 0.05,
                      duration: 0.3,
                    }}
                    viewport={{ once: true }}
                  >
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              <p className="min-h-[120px] text-sm italic leading-7 text-slate-700 sm:text-[15px]">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="my-5 h-px w-full bg-slate-200" />

              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-emerald-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#08142e]">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-600">{item.role}</p>

                  <span className="text-xs text-slate-500">
                    {item.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
