"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Application } from "./types";

interface ApplicationsTabProps {
  applications: Application[];
}

export default function ApplicationsTab({
  applications,
}: ApplicationsTabProps) {
  const [expandedId, setExpandedId] = useState<string | null>(
    applications.length > 0 ? applications[0].id : null
  );

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getStatusColor = (status: Application["status"]) => {
    switch (status) {
      case "In Review":
        return "bg-[#0EA56B] text-white";
      case "Approved":
        return "bg-green-500 text-white";
      case "Pending":
        return "bg-yellow-500 text-white";
      case "Rejected":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Applications</h1>
        <p className="mt-1 text-sm text-gray-600">
          Track the status of your funding applications.
        </p>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {applications.map((application) => {
          const isExpanded = expandedId === application.id;

          return (
            <motion.div
              key={application.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
            >
              {/* Application Header */}
              <button
                onClick={() => toggleExpand(application.id)}
                className="w-full px-6 py-4 text-left transition-colors hover:bg-gray-50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-semibold text-gray-900">
                        {application.businessName}
                      </h3>
                      <span
                        className={`rounded px-2 py-0.5 text-xs font-semibold ${getStatusColor(
                          application.status
                        )}`}
                      >
                        {application.status}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      {application.loanType} · $
                      {application.amount.toLocaleString()} · Submitted{" "}
                      {application.submittedDate}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>{application.progressPercentage}% complete</span>
                      </div>
                      <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: `${application.progressPercentage}%`,
                          }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-[#0EA56B]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expand/Collapse Icon */}
                  <div className="ml-4 flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expandable Timeline */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-gray-100"
                  >
                    <div className="px-6 py-5">
                      <h4 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Timeline
                      </h4>

                      <div className="space-y-4">
                        {application.timeline.map((step, index) => (
                          <div key={step.id} className="flex items-start gap-4">
                            {/* Icon */}
                            <div className="relative">
                              <div
                                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                                  step.status === "completed"
                                    ? "bg-[#0EA56B] text-white"
                                    : step.status === "in-progress"
                                      ? "bg-yellow-500 text-white"
                                      : "bg-gray-200 text-gray-400"
                                }`}
                              >
                                {step.status === "completed" ? (
                                  <Check className="h-4 w-4" />
                                ) : (
                                  <span className="text-xs font-semibold">
                                    {index + 1}
                                  </span>
                                )}
                              </div>

                              {/* Connecting Line */}
                              {index < application.timeline.length - 1 && (
                                <div
                                  className={`absolute left-1/2 top-8 h-8 w-0.5 -translate-x-1/2 ${
                                    step.status === "completed"
                                      ? "bg-[#0EA56B]"
                                      : "bg-gray-200"
                                  }`}
                                />
                              )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 items-center justify-between pb-2">
                              <div>
                                <p
                                  className={`text-sm font-medium ${
                                    step.status === "pending"
                                      ? "text-gray-400"
                                      : "text-gray-900"
                                  }`}
                                >
                                  {step.title}
                                </p>
                                {step.status === "in-progress" && (
                                  <p className="mt-0.5 text-xs text-yellow-600">
                                    In progress
                                  </p>
                                )}
                              </div>
                              <span
                                className={`text-xs ${
                                  step.status === "pending"
                                    ? "text-gray-400"
                                    : "text-gray-500"
                                }`}
                              >
                                {step.date}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Empty State */}
      {applications.length === 0 && (
        <div className="rounded-xl bg-white p-12 text-center shadow-sm">
          <p className="text-gray-600">No applications found.</p>
          <p className="mt-2 text-sm text-gray-500">
            Your funding applications will appear here once submitted.
          </p>
        </div>
      )}
    </div>
  );
}
