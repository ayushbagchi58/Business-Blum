"use client";

import { motion } from "framer-motion";
import { Clock3, CircleHelp, ChevronRight } from "lucide-react";
import Link from "next/link";

import { BusinessHour, ContactSidebarCard } from "./types";

interface ContactSidebarCardProps {
  card: ContactSidebarCard;
  businessHours: BusinessHour[];
  index: number;
}

const iconMap = {
  clock: Clock3,
  help: CircleHelp,
};

export default function ContactSidebarCardComponent({
  card,
  businessHours,
  index,
}: ContactSidebarCardProps) {
  const Icon = iconMap[card.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      whileHover={{ y: -1.5 }}
      className={`
        rounded-2xl border p-3.5
        shadow-[0_4px_14px_rgba(0,0,0,0.04)]
        transition-all duration-300
        sm:p-4
        ${
          card.icon === "clock"
            ? "border-[#cfeedd] bg-[#f1faf5]"
            : "border-black/5 bg-white"
        }
      `}
    >
      <div
        className="
          flex h-10 w-10 items-center
          justify-center rounded-xl
          bg-white/90
        "
      >
        <Icon className="h-4.5 w-4.5 text-[#0EA56B]" />
      </div>

      <h3
        className="
          mt-3 text-[17px]
          font-black tracking-tight
          text-[#071133]
          sm:text-[18px]
        "
      >
        {card.title}
      </h3>

      {card.icon === "clock" ? (
        <div className="mt-3 space-y-2.5">
          {businessHours.map((item) => (
            <div key={item.id}>
              <p
                className="
                  text-[11px] font-semibold
                  text-[#071133]
                  sm:text-[12px]
                "
              >
                {item.day}
              </p>

              <p
                className="
                  mt-0.5 text-[11px]
                  text-[#475467]
                  sm:text-[12px]
                "
              >
                {item.time}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <p
            className="
              mt-2.5 text-[11px]
              leading-5 text-[#475467]
              sm:text-[12px]
            "
          >
            {card.description}
          </p>

          {card.buttonLabel && card.buttonHref && (
            <Link
              href={card.buttonHref}
              className="
                  mt-3 inline-flex items-center
                  gap-1 text-[11px]
                  font-bold text-[#0EA56B]
                  sm:text-[12px]
                "
            >
              {card.buttonLabel}

              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </>
      )}
    </motion.div>
  );
}
