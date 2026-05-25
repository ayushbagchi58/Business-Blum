export interface ContactInfoCard {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface ContactInfoSectionData {
  cards: ContactInfoCard[];
}
