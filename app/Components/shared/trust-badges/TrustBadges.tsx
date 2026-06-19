"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  CheckCircle,
  Clock,
  Award,
  FileCheck,
} from "lucide-react";
import { trustBadgesData } from "./data";

interface IconMapType {
  [key: number]: React.ComponentType<{ className?: string }>;
}

const iconMap: IconMapType = {
  1: Award,
  2: Lock,
  3: Shield,
  4: FileCheck,
  5: CheckCircle,
  6: Clock,
};

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
      {trustBadgesData.badges.map((badge, index) => {
        const Icon = iconMap[badge.id];
        return (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-3 text-center shadow-sm transition-all hover:shadow-md sm:p-4"
          >
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#009966] to-[#00b377] sm:h-12 sm:w-12">
              <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
            </div>
            <p className="text-[10px] font-bold text-[#08122E] sm:text-[11px]">
              {badge.name}
            </p>
            <p className="mt-1 text-[8px] text-gray-600 sm:text-[9px]">
              {badge.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
