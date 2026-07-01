"use client";

import { motion } from "framer-motion";
import { DollarSign, Users, Clock, Shield } from "lucide-react";
import { StatsSectionProps } from "./types";

const iconMap = {
  dollar: DollarSign,
  users: Users,
  clock: Clock,
  shield: Shield,
};

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon as keyof typeof iconMap];

        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="rounded-xl bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-4">
              {/* Icon Circle */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#e8f5f0]">
                <Icon className="h-6 w-6 text-[#0EA56B]" />
              </div>

              {/* Value and Label */}
              <div>
                <div className="text-xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
