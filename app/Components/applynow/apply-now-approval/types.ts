import { LucideIcon } from "lucide-react";

export interface ApprovalItem {
  id: number;

  title: string;

  description: string;

  icon: LucideIcon;
}

export interface SuccessMetric {
  id: number;
  label: string;
  value: string;
  description: string;
}

export interface ApplyNowApprovalSectionData {
  badge?: string;
  heading: string;
  subtitle?: string;
  successMetrics?: SuccessMetric[];
  approvalItems: ApprovalItem[];
}
