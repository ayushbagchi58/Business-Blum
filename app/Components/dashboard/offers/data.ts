import { OffersData } from "./types";

export const offersData: OffersData = {
  offers: [
    {
      id: "OFFER-001",
      offerType: "Working Capital",
      provider: "Clearfield Capital",
      amount: 100000,
      matchPercentage: 98,
      term: "12 months",
      rate: "1.25× factor",
      isBestMatch: true,
    },
    {
      id: "OFFER-002",
      offerType: "Business Loan",
      provider: "Meridian Bank",
      amount: 75000,
      matchPercentage: 92,
      term: "24 months",
      rate: "8.9% APR",
    },
    {
      id: "OFFER-003",
      offerType: "Line of Credit",
      provider: "Nova Lending",
      amount: 85000,
      matchPercentage: 88,
      term: "Revolving",
      rate: "9.5% APR",
    },
  ],
  totalOffers: 3,
};
