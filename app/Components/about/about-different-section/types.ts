export interface DifferentiatorItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface AboutDifferentSectionData {
  title: string;
  items: DifferentiatorItem[];
}
