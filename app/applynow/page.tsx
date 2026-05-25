import {
  ApplyNowApprovalSection,
  ApplyNowFormSection,
  ApplyNowHeroSection,
  ApplyNowProcessSection,
} from "../Components/applynow";

export default function Page() {
  return (
    <>
      <ApplyNowHeroSection />

      <ApplyNowFormSection />

      <ApplyNowProcessSection />

      <ApplyNowApprovalSection />
    </>
  );
}
