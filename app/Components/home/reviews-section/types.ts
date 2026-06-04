export interface ReviewSourceType {
  id: number;
  source: "Google" | "Trustpilot" | "BBB";
  rating: number;
  totalReviews: number;
  logo?: string;
}

export interface DetailedReviewType {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  rating: 5 | 4 | 3;
  review: string;
  date: string;
  fundingAmount?: string;
  source: "Google" | "Trustpilot" | "BBB";
  verified: boolean;
}

export interface ReviewsSectionData {
  badge: string;
  title: string;
  subtitle: string;
  reviewSources: ReviewSourceType[];
  detailedReviews: DetailedReviewType[];
}
