"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQItemType } from "./types";

interface FAQItemProps {
  faq: FAQItemType;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export default function FAQitem({
  faq,
  isOpen,
  onToggle,
  index,
}: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -2,
      }}
      className="
        overflow-hidden rounded-2xl border border-gray-200
        bg-white shadow-sm transition-all duration-300
        hover:shadow-md
      "
    >
      <button
        onClick={onToggle}
        className="
          flex w-full items-center justify-between gap-3
          px-5 py-5 text-left sm:px-6
        "
      >
        <h3
          className="
            text-[15px] font-semibold leading-6
            text-[#0f172a] sm:text-[17px]
          "
        >
          {faq.question}
        </h3>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="
            flex h-8 w-8 flex-shrink-0 items-center
            justify-center rounded-full bg-emerald-50
          "
        >
          <Plus size={16} className="text-emerald-600" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 sm:px-6">
          <div className="h-px w-full bg-gray-100" />

          <p
            className="
              pt-4 text-sm leading-6
              text-gray-600
            "
          >
            {faq.answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
