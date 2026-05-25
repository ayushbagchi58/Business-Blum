import {
  CTASection,
  FAQSection,
  HowItWorksHeroSection,
  HowItWorksTimeline,
  WhyChooseAndHowItWorks,
} from "../Components/howitworks";

export default function Page() {
  return (
    <>
      <HowItWorksHeroSection />
      <HowItWorksTimeline />
      <WhyChooseAndHowItWorks />
      <FAQSection />
      <CTASection />
    </>
  );
}
