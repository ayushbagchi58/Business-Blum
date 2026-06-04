export interface TrustBadgeType {
  id: number;
  name: string;
  icon?: string;
  description?: string;
}

export interface TrustBadgesData {
  badges: TrustBadgeType[];
}

export interface PartnerLogoType {
  id: number;
  name: string;
  logo: string;
}

export interface PartnerLogosData {
  title?: string;
  subtitle?: string;
  partners: PartnerLogoType[];
}
