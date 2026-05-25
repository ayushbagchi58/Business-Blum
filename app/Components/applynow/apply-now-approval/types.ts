import { LucideIcon } from "lucide-react";

export interface ApprovalItem {
  id: number;

  title: string;

  description: string;

  icon: LucideIcon;
}

export interface ApplyNowApprovalSectionData {
  heading: string;

  approvalItems: ApprovalItem[];
}
