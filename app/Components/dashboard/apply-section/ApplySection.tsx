"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ApplySectionProps } from "./types";

export default function ApplySection({
  status: _status,
  onApplyClick,
  userName = "there",
}: ApplySectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a2820] via-[#0d3329] to-[#0a2820] p-8 shadow-xl"
    >
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#0EA56B] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#0EA56B] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-5">
        {/* Welcome Text */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0EA56B]">
            WELCOME TO BUSINESS BLUM
          </p>
        </div>

        {/* Main Heading */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            Let's get you funded, {userName}.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-gray-300">
            You're one step away from accessing up to $10M in business funding.
            Complete the steps below to see your matched offers.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-1">
          <button
            onClick={onApplyClick}
            className="group inline-flex items-center gap-2 rounded-xl bg-[#0EA56B] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#0c9461] hover:shadow-xl active:scale-95"
          >
            Start My Application
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
