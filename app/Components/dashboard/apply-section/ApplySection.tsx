"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Shield,
  DollarSign,
  CheckCircle2,
  Star,
  TrendingUp,
  Gift,
  Headphones,
} from "lucide-react";
import { ApplySectionProps } from "./types";
import { applySectionData } from "./data";

export default function ApplySection({
  status,
  onApplyClick,
}: ApplySectionProps) {
  const isReapplication = status.hasActiveApplication && status.canReapply;

  const data = isReapplication
    ? applySectionData.reapplication
    : applySectionData.newApplication;

  const features = isReapplication
    ? applySectionData.reapplication.benefits
    : applySectionData.newApplication.features;

  const getIcon = (iconName: string) => {
    const iconClass = "h-5 w-5";
    switch (iconName) {
      case "clock":
        return <Clock className={iconClass} />;
      case "shield":
        return <Shield className={iconClass} />;
      case "dollar":
        return <DollarSign className={iconClass} />;
      case "check":
        return <CheckCircle2 className={iconClass} />;
      case "star":
        return <Star className={iconClass} />;
      case "trending":
        return <TrendingUp className={iconClass} />;
      case "gift":
        return <Gift className={iconClass} />;
      case "support":
        return <Headphones className={iconClass} />;
      default:
        return <CheckCircle2 className={iconClass} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="overflow-hidden rounded-xl bg-gradient-to-br from-[#0EA56B] to-[#0c9461] p-6 shadow-lg"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Content */}
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-white">{data.title}</h2>
            <p className="mt-2 text-sm text-white/90">{data.subtitle}</p>
          </div>

          {/* Features/Benefits Grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex items-start gap-2 text-white"
              >
                <div className="mt-0.5 rounded-full bg-white/20 p-1">
                  {getIcon(feature.icon)}
                </div>
                <span className="text-sm font-medium leading-tight">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Reapplication Info */}
          {isReapplication && status.lastApplicationDate && (
            <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
              <p className="text-xs text-white/80">
                Last application:{" "}
                <span className="font-semibold text-white">
                  {status.lastApplicationDate}
                </span>
              </p>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={onApplyClick}
            className="group flex h-14 items-center gap-2 rounded-xl bg-white px-8 text-base font-semibold text-[#0EA56B] shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            {data.buttonText}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-xs text-white/80">
            {isReapplication
              ? "Quick & easy reapplication process"
              : "Takes only 5-10 minutes"}
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
    </motion.div>
  );
}
