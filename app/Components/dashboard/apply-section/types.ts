export interface ApplicationStatus {
  hasActiveApplication: boolean;
  canReapply: boolean;
  lastApplicationDate?: string;
  applicationId?: string;
}

export interface ApplySectionData {
  newApplication: {
    title: string;
    subtitle: string;
    buttonText: string;
    features: Feature[];
  };
  reapplication: {
    title: string;
    subtitle: string;
    buttonText: string;
    benefits: Feature[];
    lastApplicationInfo?: string;
  };
}

export interface Feature {
  id: number;
  icon: string;
  text: string;
}

export interface ApplySectionProps {
  status: ApplicationStatus;
  onApplyClick: () => void;
}
