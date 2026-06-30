import { ApplySectionData } from "./types";

export const applySectionData: ApplySectionData = {
  newApplication: {
    title: "Ready to Get Funded?",
    subtitle:
      "Start your application now and get matched with the best funding options tailored to your business needs.",
    buttonText: "Start Application",
    features: [
      {
        id: 1,
        icon: "clock",
        text: "Get approved in as little as 24 hours",
      },
      {
        id: 2,
        icon: "shield",
        text: "No impact on your credit score",
      },
      {
        id: 3,
        icon: "dollar",
        text: "Funding amounts from $5K to $5M",
      },
      {
        id: 4,
        icon: "check",
        text: "Free consultation with funding advisors",
      },
    ],
  },
  reapplication: {
    title: "Need More Funding?",
    subtitle:
      "Your business is growing! Apply again to access additional funding opportunities and better rates.",
    buttonText: "Apply Again",
    benefits: [
      {
        id: 1,
        icon: "star",
        text: "Faster approval as a returning client",
      },
      {
        id: 2,
        icon: "trending",
        text: "Access to higher funding amounts",
      },
      {
        id: 3,
        icon: "gift",
        text: "Exclusive rates for repeat customers",
      },
      {
        id: 4,
        icon: "support",
        text: "Priority support from your advisor",
      },
    ],
  },
};
