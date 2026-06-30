"use client";

import { useEffect } from "react";
import {
  ApplyNowApprovalSection,
  ApplyNowHeroSection,
  ApplyNowProcessSection,
} from "../Components/applynow";
import { MultiStepForm } from "../Components/applynow/multi-step-form";
import { TrustBadges } from "../Components/shared/trust-badges";

export default function Page() {
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to it
    if (window.location.hash === "#application-form") {
      setTimeout(() => {
        const element = document.getElementById("application-form");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <ApplyNowHeroSection />

      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </div>

      <div id="application-form">
        <MultiStepForm />
      </div>

      <ApplyNowProcessSection />

      <ApplyNowApprovalSection />
    </>
  );
}
