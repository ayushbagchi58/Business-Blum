import {
  Building2,
  Rocket,
  Landmark,
  FileText,
  Briefcase,
  CreditCard,
  Factory,
  Banknote,
  Home,
  TrendingUp,
  BadgeDollarSign,
  Wallet,
  HandCoins,
  ShieldCheck,
  PiggyBank,
  LineChart,
} from "lucide-react";

import { FundingSlidesType } from "./types";

export const fundingSlides: FundingSlidesType = [
  [
    {
      id: "construction-loans",
      title: "Construction Loans",
      desc: "Fund new construction or renovation projects with flexible financing.",
      icon: Building2,
    },
    {
      id: "startup-loans",
      title: "Startup Loans",
      desc: "Launch your business with funding tailored for new entrepreneurs.",
      icon: Rocket,
    },
    {
      id: "sba-loans",
      title: "SBA Loans",
      desc: "Government-backed loans with competitive rates and terms.",
      icon: Landmark,
    },
    {
      id: "term-loans",
      title: "Term Loans",
      desc: "Fixed-rate financing with predictable monthly payments.",
      icon: FileText,
    },
  ],

  [
    {
      id: "business-credit",
      title: "Business Credit",
      desc: "Access revolving credit lines for operational expenses.",
      icon: CreditCard,
    },
    {
      id: "equipment-financing",
      title: "Equipment Financing",
      desc: "Purchase or lease business equipment with ease.",
      icon: Factory,
    },
    {
      id: "working-capital",
      title: "Working Capital",
      desc: "Keep your cash flow healthy and business running smoothly.",
      icon: Wallet,
    },
    {
      id: "merchant-cash-advance",
      title: "Merchant Cash Advance",
      desc: "Fast funding based on your future sales revenue.",
      icon: HandCoins,
    },
  ],

  [
    {
      id: "commercial-real-estate",
      title: "Commercial Real Estate",
      desc: "Finance office spaces, warehouses, and commercial properties.",
      icon: Home,
    },
    {
      id: "invoice-financing",
      title: "Invoice Financing",
      desc: "Unlock cash from unpaid invoices instantly.",
      icon: Banknote,
    },
    {
      id: "growth-capital",
      title: "Growth Capital",
      desc: "Expand operations and scale confidently.",
      icon: TrendingUp,
    },
    {
      id: "payroll-funding",
      title: "Payroll Funding",
      desc: "Ensure timely employee payments during cash crunches.",
      icon: BadgeDollarSign,
    },
  ],

  [
    {
      id: "business-insurance",
      title: "Business Insurance",
      desc: "Protect your company from unexpected risks and losses.",
      icon: ShieldCheck,
    },
    {
      id: "savings-solutions",
      title: "Savings Solutions",
      desc: "Smart savings plans for your financial future.",
      icon: PiggyBank,
    },
    {
      id: "investment-funding",
      title: "Investment Funding",
      desc: "Access capital for long-term opportunities.",
      icon: LineChart,
    },
    {
      id: "corporate-financing",
      title: "Corporate Financing",
      desc: "Tailored funding solutions for enterprises.",
      icon: Briefcase,
    },
  ],
];
