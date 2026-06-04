import { HeroDataType } from "./types";

export const heroData: HeroDataType = {
  badge: "Trusted by 50,000+ Businesses Nationwide • $2.4B+ Capital Facilitated",

  title: {
    first: "AI-Powered Capital Solutions for",
    highlight: "High-Growth Enterprises",
  },

  description:
    "Access $5K to $10M in institutional-grade financing through our advanced matching platform. Connect with 200+ vetted lending partners instantly—powered by proprietary AI technology processing applications in real-time. Enterprise-level approvals in as little as 24 hours.",

  buttons: [
    {
      id: 1,
      title: "Access Platform",
      primary: true,
      icon: true,
    },
    {
      id: 2,
      title: "Platform Demo",
      primary: false,
      icon: false,
    },
  ],

  features: [
    {
      id: 1,
      title: "AI-Powered Matching",
      subtitle: "200+ data points analyzed",
    },
    {
      id: 2,
      title: "<24-Hour Processing",
      subtitle: "Real-time decisions",
    },
    {
      id: 3,
      title: "Soft Inquiry Only",
      subtitle: "No credit impact",
    },
    {
      id: 4,
      title: "$5K-$10M Range",
      subtitle: "Scalable capital solutions",
    },
  ],
};
