import { LucideIcon } from "lucide-react";

export interface LoanOption {
  id: number;
  title: string;
  description: string;
  range: string;
  term: string;
  icon: LucideIcon;
  features: string[];
}

export interface LoanSectionData {
  heading: string;
  description: string;
  loans: LoanOption[];
}
