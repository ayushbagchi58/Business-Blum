export interface ProgressStep {
  id: number;
  title: string;
  subtitle: string;
  status: "completed" | "active" | "pending";
  action?: string;
}

export interface ApplicationProgressProps {
  steps: ProgressStep[];
  onStepAction?: (stepId: number) => void;
}
