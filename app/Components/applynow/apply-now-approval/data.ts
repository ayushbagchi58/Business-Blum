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
  badge: "Platform Performance Metrics",
  heading: "What Helps You Get Approved Faster",
  subtitle:
    "87% approval rate • $125K average funding • AI-powered matching analyzing 200+ data points",

  successMetrics: [
    {
      id: 1,
      label: "87%",
      value: "Approval Rate",
      description: "Industry-leading success ratio",
    },
    {
      id: 2,
      label: "$125K",
      value: "Average Funding",
      description: "Across all approved applications",
    },
    {
      id: 3,
      label: "<24hrs",
      value: "Platform Response",
      description: "Real-time AI-powered processing",
    },
  ],

  approvalItems: [
    {
      id: 1,
      title: "Consistent Cash Flow",
      description: "Regular revenue demonstrating stable operations",
      icon: Wallet,
    },

    {
      id: 2,
      title: "Strong Monthly Revenue",
      description: "$10K-$20K+ monthly preferred for optimal matching",
      icon: BadgeCheck,
    },

    {
      id: 3,
      title: "Financial Discipline",
      description: "Minimal NSF fees demonstrate operational excellence",
      icon: CreditCard,
    },

    {
      id: 4,
      title: "Business Formation",
      description: "Registered LLC or Corporation enhances eligibility",
      icon: Building2,
    },

    {
      id: 5,
      title: "Complete Documentation",
      description: "Ready documents accelerate AI processing",
      icon: CheckCircle2,
    },

    {
      id: 6,
      title: "Digital Presence",
      description: "Professional website and verified business accounts",
      icon: Globe,
    },
  ],
};
