"use client";

import { BackToHome } from "../Components/shared/back-to-home";
import { MultiStepForm } from "../Components/applynow/multi-step-form";

export default function ApplicationPage() {
  return (
    <>
      <BackToHome href="/dashboard" label="Back to Home" />

      <div className="min-h-screen bg-gray-50 py-8">
        <MultiStepForm />
      </div>
    </>
  );
}
