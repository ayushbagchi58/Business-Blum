import {
  ApplyNowApprovalSection,
  ApplyNowHeroSection,
  ApplyNowProcessSection,
} from "../Components/applynow";
import { MultiStepForm } from "../Components/applynow/multi-step-form";
import { TrustBadges } from "../Components/shared/trust-badges";

export default function Page() {
  return (
    <>
      <ApplyNowHeroSection />

      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </div>

      <MultiStepForm />

      <ApplyNowProcessSection />

      <ApplyNowApprovalSection />
    </>
  );
}
