"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { ApplicationProgressProps } from "./types";

export default function ApplicationProgress({
  steps,
  onStepAction,
}: ApplicationProgressProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Getting Started
        </h2>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
          >
            {/* Left: Number/Check + Content */}
            <div className="flex items-center gap-4">
              {/* Step Number or Checkmark */}
              <div
                className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${
                  step.status === "completed"
                    ? "bg-[#0EA56B] text-white"
                    : "border-2 border-gray-300 bg-white text-gray-400"
                }`}
              >
                {step.status === "completed" ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span className="text-base font-semibold">{step.id}</span>
                )}
              </div>

              {/* Title and Subtitle */}
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-0.5 text-sm text-gray-500">{step.subtitle}</p>
              </div>
            </div>

            {/* Right: Action Button or Pending Badge */}
            <div className="flex-shrink-0">
              {step.action ? (
                <button
                  onClick={() => onStepAction && onStepAction(step.id)}
                  className="group flex items-center gap-2 rounded-lg bg-[#0EA56B] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#0c9461] active:scale-95"
                >
                  {step.action}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              ) : (
                <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500">
                  Pending
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
