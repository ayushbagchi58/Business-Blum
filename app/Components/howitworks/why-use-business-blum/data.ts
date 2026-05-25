import {
  Clock3,
  ShieldCheck,
  Users,
  FileText,
  BadgeCheck,
  Banknote,
} from "lucide-react";

import { FeatureCardType, ProcessCardType } from "./types";

export const featureCards: FeatureCardType[] = [
  {
    icon: Clock3,
    title: "Save Time",
    description:
      "One application connects you with multiple lenders instead of applying to each one individually.",
  },
  {
    icon: ShieldCheck,
    title: "Stay Secure",
    description:
      "Your data is protected with bank-level encryption and never sold to third parties.",
  },
  {
    icon: Users,
    title: "Get Expert Help",
    description:
      "Our team is available to guide you through the process and answer any questions.",
  },
];

export const processCards: ProcessCardType[] = [
  {
    number: "01",
    icon: FileText,
    title: "Complete Application",
    description:
      "Fill out one simple application with your business and funding details.",
  },
  {
    number: "02",
    icon: BadgeCheck,
    title: "Get Matched",
    description:
      "We compare your profile with trusted lenders to find the best loan options.",
  },
  {
    number: "03",
    icon: Banknote,
    title: "Receive Funding",
    description:
      "Choose your preferred offer and receive funding quickly for your business.",
  },
];
