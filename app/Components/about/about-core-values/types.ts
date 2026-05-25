export interface CoreValueItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface CoreValuesSectionData {
  badge: string;
  title: string;
  subtitle: string;
  values: CoreValueItem[];
}
