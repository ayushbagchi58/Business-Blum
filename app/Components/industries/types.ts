export interface HeroData {
  industry: string;
  icon: string;
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  highlights: string[];
}

export interface BenefitData {
  icon: string;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CTAData {
  title: string;
  description: string;
  buttonText: string;
}

export interface IndustryPageData {
  hero: HeroData;
  benefits: BenefitData[];
  howItWorks: HowItWorksStep[];
  requirements: string[];
  faqs: FAQ[];
  cta: CTAData;
}
