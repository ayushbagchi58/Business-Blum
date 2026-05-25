export interface FeatureItem {
  id: number;
  title: string;
  icon?: string;
}

export interface FundingSectionData {
  heading: string;
  description: string;
  features: FeatureItem[];
}
