import { LucideIcon } from "lucide-react";

export type FundingCardType = {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

export type FundingSlidesType = FundingCardType[][];
