import { Target, Heart, Zap, Shield } from "lucide-react";

import { FeatureCardType } from "./types";

export const features: FeatureCardType[] = [
  {
    id: "precision-matching",
    title: "Precision Matching",
    description:
      "We use advanced algorithms to connect you with lenders that truly fit your unique financial profile and needs.",
    icon: Target,
  },
  {
    id: "customer-first",
    title: "Customer-First Approach",
    description:
      "Every feature we build is designed with one goal: making your loan search easier, faster, and more transparent.",
    icon: Heart,
  },
  {
    id: "lightning-fast",
    title: "Lightning Fast",
    description:
      "Our streamlined platform delivers lender matches in minutes, not days. Speed matters when you need funding.",
    icon: Zap,
  },
  {
    id: "bank-security",
    title: "Bank-Level Security",
    description:
      "Your financial data is protected with the same encryption standards used by major financial institutions.",
    icon: Shield,
  },
];
