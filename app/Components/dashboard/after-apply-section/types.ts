export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface AfterApplySectionProps {
  features: Feature[];
}
