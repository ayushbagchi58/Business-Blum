import {
  AboutCoreValuesSection,
  AboutCTASection,
  AboutDifferentSection,
  AboutHeroSection,
  AboutJourneySection,
  AboutLeadershipSection,
  AboutStatsSection,
  AboutStorySection,
} from "../Components/about";

export default function Page() {
  return (
    <>
      <AboutHeroSection />
      <AboutStatsSection />
      <AboutStorySection />
      <AboutJourneySection />
      <AboutLeadershipSection />
      <AboutCoreValuesSection />
      <AboutDifferentSection />
      <AboutCTASection />
    </>
  );
}
