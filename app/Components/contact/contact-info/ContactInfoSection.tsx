"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

import { contactInfoSectionData } from "./data";

const iconMap = {
  phone: Phone,
  mail: Mail,
  message: MessageCircle,
};

export default function ContactInfoSection() {
  const { cards } = contactInfoSectionData;

  return (
    <section className="relative w-full overflow-hidden bg-white pb-8 sm:pb-10 md:pb-12">
      <div className="absolute inset-x-0 top-0 h-[70px] bg-[#06122b]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-2 sm:px-3 md:px-4 lg:px-6">
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {cards.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -2,
                }}
                className="
                  min-w-0 rounded-[14px]
                  border border-black/5
                  bg-[#f8f8f8] p-3
                  shadow-[0_6px_18px_rgba(0,0,0,0.06)]
                  transition-all duration-300
                  hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]
                  sm:p-4 md:p-5
                "
              >
                <div
                  className="
                    flex h-10 w-10 items-center
                    justify-center rounded-xl
                    bg-[#dff3ea]
                    sm:h-12 sm:w-12
                  "
                >
                  <Icon className="h-4 w-4 text-[#0EA56B] sm:h-5 sm:w-5" />
                </div>

                <div className="mt-4 min-w-0">
                  <h3
                    className="
                      break-words text-[13px]
                      font-black tracking-tight
                      text-[#071133]
                      sm:text-[16px]
                      md:text-[18px]
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      mt-1.5 break-words
                      text-[10px] font-bold
                      leading-4 text-[#071133]
                      sm:text-[12px]
                      md:text-[15px]
                    "
                  >
                    {card.value}
                  </p>

                  <p
                    className="
                      mt-1 break-words
                      text-[9px] leading-4
                      text-[#5b6475]
                      sm:text-[10px]
                      md:text-xs md:leading-5
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
