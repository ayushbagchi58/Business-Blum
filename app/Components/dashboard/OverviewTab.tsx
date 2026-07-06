"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { DashboardData } from "./types";
import { ApplySection } from "./apply-section";
import {
  ApplicationProgress,
  applicationProgressSteps,
} from "./application-progress";
import { StatsSection, statsData } from "./stats-section";
import { AfterApplySection, afterApplyFeatures } from "./after-apply-section";
import { QuickAnswers, quickAnswersData } from "./quick-answers";

interface OverviewTabProps {
  data: DashboardData;
}

export default function OverviewTab({ data }: OverviewTabProps) {
  const router = useRouter();

  const handleApplyClick = () => {
    // Navigate to application page
    router.push("/application");
  };

  const handleStepAction = (stepId: number) => {
    // Handle step action based on step ID
    console.log("Step action clicked:", stepId);
    // You can navigate to different pages or sections based on stepId
    if (stepId === 1) {
      // Navigate to register page or profile setup
      router.push("/register");
    } else if (stepId === 2) {
      // Navigate to application page
      router.push("/application");
    }
  };

  // Remove the Start button from "Create your account" step since user is already logged in
  const stepsForDashboard = applicationProgressSteps.map((step) =>
    step.id === 1 ? { ...step, action: undefined } : step
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{data.greeting}</h1>
        <p className="mt-1 text-sm text-gray-600">{data.statusMessage}</p>
      </div>

      <ApplySection
        status={data.applicationStatus}
        onApplyClick={handleApplyClick}
        userName={data.user.name.split(" ")[0]}
      />

      <ApplicationProgress
        steps={stepsForDashboard}
        onStepAction={handleStepAction}
      />

      <StatsSection stats={statsData} />

      <AfterApplySection features={afterApplyFeatures} />

      {data.advisorMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
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

      <QuickAnswers answers={quickAnswersData} />
    </div>
  );
}
