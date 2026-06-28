export interface ApplicationProgress {
  id: number;
  title: string;
  date: string;
  status: "completed" | "pending";
}

export interface Offer {
  id: number;
  title: string;
  provider: string;
  details: string;
  amount: number;
  badge?: string;
}

export interface AdvisorMessage {
  id: number;
  advisorName: string;
  advisorTitle: string;
  advisorImage: string;
  message: string;
}

export interface UserProfile {
  name: string;
  businessName: string;
  avatar: string;
}

export interface DashboardData {
  user: UserProfile;
  greeting: string;
  statusMessage: string;
  applicationProgress: ApplicationProgress[];
  availableOffers: Offer[];
  advisorMessage: AdvisorMessage | null;
  newOffersCount: number;
}
