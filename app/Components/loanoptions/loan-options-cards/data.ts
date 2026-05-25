import {
  Rocket,
  Landmark,
  FileText,
  Wallet,
  Building2,
  BadgeDollarSign,
  CreditCard,
  Briefcase,
  CircleDollarSign,
  HandCoins,
  PiggyBank,
  TrendingUp,
} from "lucide-react";

import { LoanSectionData } from "./types";

export const loanSectionData: LoanSectionData = {
  heading: "Business Loan Solutions",

  description:
    "Explore flexible financing options designed to help businesses launch, grow, and scale confidently.",

  loans: [
    {
      id: 1,
      title: "Startup Loans",
      description:
        "Launch your business with funding tailored for new ventures.",
      range: "$10K - $250K",
      term: "1-5 years",
      icon: Rocket,
      features: ["Flexible terms", "Business plan support", "Quick approval"],
    },

    {
      id: 2,
      title: "SBA Loans",
      description: "Government-backed loans with competitive rates and terms.",
      range: "$50K - $5M",
      term: "5-25 years",
      icon: Landmark,
      features: [
        "Low interest rates",
        "Long repayment terms",
        "Government backed",
      ],
    },

    {
      id: 3,
      title: "Term Loans",
      description: "Fixed-rate financing with predictable monthly payments.",
      range: "$25K - $500K",
      term: "1-7 years",
      icon: FileText,
      features: ["Fixed rates", "Predictable payments", "Fast funding"],
    },

    {
      id: 4,
      title: "Working Capital Loans",
      description: "Cover day-to-day operational expenses and cash flow needs.",
      range: "$10K - $250K",
      term: "3 months - 3 years",
      icon: Wallet,
      features: ["Fast access", "Flexible use", "Short-term options"],
    },

    {
      id: 5,
      title: "Commercial Real Estate",
      description:
        "Finance office spaces, retail locations, and business properties.",
      range: "$100K - $10M",
      term: "10-30 years",
      icon: Building2,
      features: ["Property financing", "Long terms", "Competitive rates"],
    },

    {
      id: 6,
      title: "Equipment Financing",
      description:
        "Purchase machinery, tools, and essential business equipment.",
      range: "$5K - $2M",
      term: "2-10 years",
      icon: BadgeDollarSign,
      features: ["Low upfront cost", "Quick approval", "Tax advantages"],
    },

    {
      id: 7,
      title: "Business Line of Credit",
      description:
        "Flexible revolving credit access whenever your business needs it.",
      range: "$10K - $500K",
      term: "Renewable",
      icon: CreditCard,
      features: ["Reusable funds", "Pay as you use", "Fast withdrawals"],
    },

    {
      id: 8,
      title: "Franchise Financing",
      description: "Secure funding to open or expand franchise businesses.",
      range: "$20K - $2M",
      term: "3-15 years",
      icon: Briefcase,
      features: ["Brand support", "Expansion funding", "Flexible options"],
    },

    {
      id: 9,
      title: "Invoice Financing",
      description: "Unlock cash flow using unpaid customer invoices.",
      range: "$5K - $1M",
      term: "Short-term",
      icon: CircleDollarSign,
      features: ["Fast liquidity", "Invoice-based", "Improved cash flow"],
    },

    {
      id: 10,
      title: "Merchant Cash Advance",
      description: "Receive funding based on future business sales revenue.",
      range: "$5K - $500K",
      term: "Flexible repayment",
      icon: HandCoins,
      features: ["Daily repayments", "Quick access", "Revenue based"],
    },

    {
      id: 11,
      title: "Microloans",
      description:
        "Small business loans for startups and growing entrepreneurs.",
      range: "$1K - $50K",
      term: "6 months - 6 years",
      icon: PiggyBank,
      features: ["Small funding", "Startup friendly", "Simple process"],
    },

    {
      id: 12,
      title: "Expansion Financing",
      description: "Scale operations, hire staff, and expand into new markets.",
      range: "$50K - $5M",
      term: "2-15 years",
      icon: TrendingUp,
      features: ["Growth capital", "Flexible use", "Business expansion"],
    },
  ],
};
