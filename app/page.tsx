import {
  FullWidthSection,
  FundingCarousel,
  HeroSection,
  HowItWorksSection,
  LoanHeroSection,
  SmartFundingFeatures,
  TestimonialsSection,
  WhyChooseSection,
} from "./Components/home";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <FundingCarousel />
      <WhyChooseSection />
      <FullWidthSection />
      <SmartFundingFeatures />
      <TestimonialsSection />
      <LoanHeroSection />
    </main>
  );
}
