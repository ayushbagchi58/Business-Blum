import {
  FullWidthSection,
  FundingCarousel,
  HeroSection,
  HowItWorksSection,
  LoanHeroSection,
  SmartFundingFeatures,
  TestimonialsSection,
  WhyChooseSection,
  ReviewsSection,
  PlatformMetricsSection,
  MediaMentionsSection,
} from "./Components/home";
import { TrustBadges, PartnerLogos } from "./Components/shared/trust-badges";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </div>
      <PlatformMetricsSection />
      <HowItWorksSection />
      <FundingCarousel />
      <WhyChooseSection />
      <PartnerLogos />
      <MediaMentionsSection />
      <FullWidthSection />
      <SmartFundingFeatures />
      <ReviewsSection />
      <TestimonialsSection />
      <LoanHeroSection />
    </main>
  );
}
