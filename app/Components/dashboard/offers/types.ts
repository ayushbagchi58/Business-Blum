export interface OfferDetails {
  id: string;
  offerType: string;
  provider: string;
  amount: number;
  matchPercentage: number;
  term: string;
  rate: string;
  isBestMatch?: boolean;
}

export interface OffersData {
  offers: OfferDetails[];
  totalOffers: number;
}
