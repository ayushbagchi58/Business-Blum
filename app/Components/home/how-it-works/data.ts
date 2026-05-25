import { FileText, Search, BadgeCheck } from "lucide-react";

import { StepType } from "./types";

export const stepsData: StepType[] = [
  {
    id: 1,
    title: "Complete the Application",
    description:
      "Fill out our simple online form with your financial information and loan needs.",
    icon: FileText,
  },
  {
    id: 2,
    title: "Get Matched",
    description:
      "Our system reviews your profile and matches you with suitable lenders based on your eligibility.",
    icon: Search,
  },
  {
    id: 3,
    title: "Choose Your Best Option",
    description:
      "Review loan offers from matched lenders and proceed with your preferred option.",
    icon: BadgeCheck,
  },
];
