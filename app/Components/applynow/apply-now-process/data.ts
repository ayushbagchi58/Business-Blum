import { CheckCircle2, Clock3, Wallet } from "lucide-react";

import { ApplyNowProcessSectionData } from "./types";

export const applyNowProcessSectionData: ApplyNowProcessSectionData = {
  badge: "Fast & Simple Process",

  heading: "What Happens Next?",

  description: "Get matched with lenders and funded in as little as 48 hours",

  buttonText: "Continue Application",

  steps: [
    {
      id: 1,
      title: "Instant Matching",
      description:
        "Our algorithm matches you with qualified lenders from our network of 200+ partners",
      time: "Within minutes",
      icon: CheckCircle2,
    },

    {
      id: 2,
      title: "Receive Offers",
      description:
        "Get personalized loan offers via email and phone from matched lenders",
      time: "Within 24 hours",
      icon: Clock3,
    },

    {
      id: 3,
      title: "Get Funded",
      description:
        "Choose your best offer, complete verification, and receive your funds",
      time: "Under 48 hours",
      icon: Wallet,
    },
  ],
};
