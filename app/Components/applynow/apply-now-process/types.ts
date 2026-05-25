import { LucideIcon } from "lucide-react";

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: LucideIcon;
}

export interface ApplyNowProcessSectionData {
  badge: string;
  heading: string;
  description: string;
  buttonText: string;
  steps: ProcessStep[];
}
