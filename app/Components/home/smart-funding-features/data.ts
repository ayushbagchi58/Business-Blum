import { Target, Heart, Zap, Shield } from "lucide-react";

import { FeatureCardType } from "./types";

export const features: FeatureCardType[] = [
  {
    id: "precision-matching",
    title: "AI-Powered Precision Matching",
    description:
      "Proprietary machine learning algorithms analyze 200+ data points to connect you with optimal institutional lending partners. Our technology processes applications in real-time, evaluating compatibility across multiple dimensions.",
    icon: Target,
  },
  {
    id: "customer-first",
    title: "Enterprise-Grade Platform",
    description:
      "Built on scalable cloud infrastructure designed for high-volume transactions. Every feature reflects institutional standards: security, reliability, and performance at enterprise scale.",
    icon: Heart,
  },
  {
    id: "lightning-fast",
    title: "Real-Time Processing",
    description:
      "Advanced automation delivers institutional-grade matching in minutes. Our distributed architecture handles thousands of concurrent applications with sub-second response times.",
    icon: Zap,
  },
  {
    id: "bank-security",
    title: "Bank-Level Security & Compliance",
    description:
      "SOC 2 Type II certified infrastructure with 256-bit encryption, multi-factor authentication, and continuous security monitoring. Your data is protected by enterprise-grade protocols.",
    icon: Shield,
  },
];
