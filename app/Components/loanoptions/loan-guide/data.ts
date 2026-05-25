import {
  Target,
  BadgeDollarSign,
  CalendarClock,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";

import { LoanGuideSectionData } from "./types";

export const loanGuideSectionData: LoanGuideSectionData = {
  heading: "How to Choose the Right Loan",

  description: "Consider these factors when selecting your business financing",

  factors: [
    {
      id: 1,
      title: "Purpose",
      description:
        "What will you use the funds for? Equipment, expansion, working capital, or real estate?",
      icon: Target,
    },

    {
      id: 2,
      title: "Amount Needed",
      description:
        "How much capital do you need? Consider both immediate needs and potential future expenses.",
      icon: BadgeDollarSign,
    },

    {
      id: 3,
      title: "Repayment Timeline",
      description:
        "How quickly can you repay? Short-term loans have higher payments but less total interest.",
      icon: CalendarClock,
    },

    {
      id: 4,
      title: "Collateral Available",
      description:
        "Do you have assets to secure the loan? Secured loans typically offer better rates.",
      icon: ShieldCheck,
    },

    {
      id: 5,
      title: "Business Stage",
      description:
        "Are you a startup, growing business, or established company? This affects your options.",
      icon: BriefcaseBusiness,
    },
  ],
};
