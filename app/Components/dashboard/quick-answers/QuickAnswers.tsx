"use client";

import { motion } from "framer-motion";
import { QuickAnswersProps } from "./types";

export default function QuickAnswers({ answers }: QuickAnswersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="rounded-xl bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Quick Answers
        </h2>
      </div>

      {/* Questions and Answers */}
      <div className="space-y-6">
        {answers.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="border-b border-gray-100 pb-6 last:border-0 last:pb-0"
          >
            {/* Question */}
            <h3 className="mb-3 text-base font-semibold text-gray-900">
              {item.question}
            </h3>

            {/* Answer */}
            <p className="text-sm leading-relaxed text-gray-600">
              {item.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
