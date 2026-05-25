import { LucideIcon } from "lucide-react";

export interface LoanFactor {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface LoanGuideSectionData {
  heading: string;
  description: string;
  factors: LoanFactor[];
}
