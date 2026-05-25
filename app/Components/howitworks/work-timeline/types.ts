import { LucideIcon } from "lucide-react";

export interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
}
