export interface JourneyItem {
  id: number;
  year: string;
  title: string;
  description: string;
}

export interface JourneySectionData {
  badge: string;
  title: string;
  subtitle: string;
  timeline: JourneyItem[];
}
