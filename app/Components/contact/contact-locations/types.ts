export interface OfficeLocation {
  id: number;
  city: string;
  addressLine1: string;
  addressLine2: string;
  hours: string;
}

export interface ContactLocationsSectionData {
  heading: string;
  description: string;
  locations: OfficeLocation[];
}
