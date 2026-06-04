"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import FAQItem from "./FAQitem";
import { faqs } from "./data";

export default function FAQsection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq-section"
      className="relative scroll-mt-24 w-full overflow-hidden bg-white py-12 lg:py-16"
    >
      <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-emerald-200/20 blur-3xl" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-200/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2
            className="
              text-3xl font-extrabold tracking-tight
              text-[#0f172a]
              sm:text-4xl lg:text-5xl
            "
          >
            Frequently Asked Questions
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-2xl
              text-sm leading-6 text-gray-600
              sm:text-base
            "
          >
            Everything you need to know about our loan matching process.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
