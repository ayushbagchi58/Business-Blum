import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  CreditCard,
  Globe,
  Wallet,
} from "lucide-react";

import { ApplyNowApprovalSectionData } from "./types";

export const applyNowApprovalSectionData: ApplyNowApprovalSectionData = {
  heading: "What Helps You Get Approved Faster",

  approvalItems: [
    {
      id: 1,
      title: "Consistent Deposits",
      description: "Regular revenue showing stable cash flow",
      icon: Wallet,
    },

    {
      id: 2,
      title: "Strong Monthly Revenue",
      description: "$10K-$20K+ monthly preferred",
      icon: BadgeCheck,
    },

    {
      id: 3,
      title: "Low Overdrafts",
      description: "Minimal NSF fees demonstrate good management",
      icon: CreditCard,
    },

    {
      id: 4,
      title: "Business Formation",
      description: "Registered LLC or Corporation improves eligibility",
      icon: Building2,
    },

    {
      id: 5,
      title: "Complete Paperwork",
      description: "Having documents ready speeds up approval",
      icon: CheckCircle2,
    },

    {
      id: 6,
      title: "Professional Presence",
      description: "Website, business email, and active accounts",
      icon: Globe,
    },
  ],
};
