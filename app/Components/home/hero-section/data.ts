import { HeroDataType } from "./types";

export const heroData: HeroDataType = {
  badge: "Trusted by 50,000+ Businesses",

  title: {
    first: "Get Business Funding",
    highlight: "In 24 Hours",
  },

  description:
    "Connect with 200+ lenders instantly. No obligation. Quick approval.",

  buttons: [
    {
      id: 1,
      title: "Get Started Now",
      primary: true,
      icon: true,
    },
    {
      id: 2,
      title: "See How It Works",
      primary: false,
      icon: false,
    },
  ],

  features: [
    {
      id: 1,
      title: "No Obligation",
      subtitle: "Free to apply",
    },
    {
      id: 2,
      title: "3-Min Application",
      subtitle: "Quick & easy",
    },
    {
      id: 3,
      title: "100% Secure",
      subtitle: "Bank-level encryption",
    },
  ],
};
