"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { DashboardData } from "./types";
import { ApplySection } from "./apply-section";

interface OverviewTabProps {
  data: DashboardData;
}

export default function OverviewTab({ data }: OverviewTabProps) {
  const router = useRouter();

  const handleApplyClick = () => {
    // Navigate to apply now page and scroll to form
    router.push("/applynow#application-form");
  };

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{data.greeting}</h1>
        <p className="mt-1 text-sm text-gray-600">{data.statusMessage}</p>
      </div>

      {/* Apply/Reapply Section */}
      <ApplySection
        status={data.applicationStatus}
        onApplyClick={handleApplyClick}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl bg-white p-6 shadow-sm"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Application Progress
          </h2>
        </div>

        <div className="space-y-4">
          {data.applicationProgress.map((step, index) => (
            <div key={step.id} className="flex items-start gap-4">
              <div className="relative">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step.status === "completed"
                      ? "bg-[#0EA56B] text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {step.status === "completed" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <span className="text-xs font-semibold">{index + 1}</span>
                  )}
                </div>

                {index < data.applicationProgress.length - 1 && (
                  <div
                    className={`absolute left-1/2 top-8 h-8 w-0.5 -translate-x-1/2 ${
                      step.status === "completed"
                        ? "bg-[#0EA56B]"
                        : "bg-gray-200"
                    }`}
                  />
                )}
              </div>

              <div className="flex flex-1 items-center justify-between pb-2">
                <span
                  className={`text-sm font-medium ${
                    step.status === "completed"
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
                  {step.title}
                </span>
                <span
                  className={`text-xs ${
                    step.status === "completed"
                      ? "text-gray-500"
                      : "text-gray-400"
                  }`}
                >
                  {step.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-xl bg-white p-6 shadow-sm"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Available Offers
          </h2>
          <span className="rounded-full bg-[#0EA56B] px-2 py-0.5 text-xs font-semibold text-white">
            {data.newOffersCount} new
          </span>
        </div>

        <div className="space-y-3">
          {data.availableOffers.map((offer) => (
            <div
              key={offer.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {offer.title}
                  </h3>
                  {offer.badge && (
                    <span className="rounded bg-[#0EA56B] px-2 py-0.5 text-xs font-semibold text-white">
                      {offer.badge}
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs text-gray-500">
                  {offer.provider} · {offer.details}
                </p>
              </div>
              <p className="text-lg font-bold text-gray-900">
                ${offer.amount.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {data.advisorMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl bg-[#e8f5f0] p-6 shadow-sm"
        >
          <div className="flex gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0EA56B] text-lg font-semibold text-white">
              {data.advisorMessage.advisorName.charAt(0)}
            </div>

            <div className="flex-1">
              <div className="mb-2">
                <h3 className="text-sm font-semibold text-gray-900">
                  {data.advisorMessage.advisorName} ·{" "}
                  {data.advisorMessage.advisorTitle}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                {data.advisorMessage.message}
              </p>
              <button className="mt-3 flex items-center gap-1 text-sm font-semibold text-[#0EA56B] transition-colors hover:text-[#0c9461]">
                Reply
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
