"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cards } from "./data";

export default function FullWidthSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-4 md:py-6">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-4">
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="group relative h-[140px] overflow-hidden rounded-xl sm:h-[180px] md:h-[240px] lg:h-[300px]"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute bottom-3 left-3 z-10 text-white sm:bottom-4 sm:left-4 md:bottom-6 md:left-6">
                <motion.h2
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="text-xs font-semibold leading-tight sm:text-lg md:text-2xl lg:text-3xl"
                >
                  {card.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="mt-1 text-[10px] text-gray-200 sm:text-sm md:text-base"
                >
                  {card.subtitle}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
