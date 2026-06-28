export interface TimelineStep {
  id: number;
  title: string;
  date: string;
  status: "completed" | "in-progress" | "pending";
}

export interface Application {
  id: string;
  businessName: string;
  loanType: string;
  amount: number;
  submittedDate: string;
  status: "In Review" | "Approved" | "Pending" | "Rejected";
  progressPercentage: number;
  timeline: TimelineStep[];
}

export interface ApplicationsData {
  applications: Application[];
}
