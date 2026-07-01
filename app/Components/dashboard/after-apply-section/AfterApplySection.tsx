"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp, User } from "lucide-react";
import { AfterApplySectionProps } from "./types";

const iconMap = {
  briefcase: Briefcase,
  chart: TrendingUp,
  user: User,
};

export default function AfterApplySection({
  features,
}: AfterApplySectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="rounded-xl bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          What Happens After You Apply
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap];

          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex flex-col"
            >
              {/* Icon Circle */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5f0]">
                <Icon className="h-6 w-6 text-[#0EA56B]" />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
