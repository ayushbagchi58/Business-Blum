import { DashboardData } from "./types";
import { applicationsData } from "./applications";

export const dashboardData: DashboardData = {
  user: {
    name: "Maria Gonzalez",
    businessName: "Fuego Kitchen",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces",
  },
  greeting: "Good morning, Maria.",
  statusMessage: "Your application is in review. 3 offers are ready.",
  applicationProgress: [
    {
      id: 1,
      title: "Application submitted",
      date: "Jun 18",
      status: "completed",
    },
    {
      id: 2,
      title: "Documents reviewed",
      date: "Jun 19",
      status: "completed",
    },
    {
      id: 3,
      title: "Offers generated",
      date: "Jun 21",
      status: "completed",
    },
    {
      id: 4,
      title: "Funding selected",
      date: "Pending",
      status: "pending",
    },
  ],
  availableOffers: [
    {
      id: 1,
      title: "Working Capital",
      provider: "Clearfield Capital",
      details: "1.25×",
      amount: 100000,
      badge: "BEST",
    },
    {
      id: 2,
      title: "Business Loan",
      provider: "Meridian Bank",
      details: "8.9% APR",
      amount: 75000,
    },
  ],
  advisorMessage: {
    id: 1,
    advisorName: "James Okafor",
    advisorTitle: "Your Advisor",
    advisorImage: "/avatars/advisor-avatar.jpg",
    message:
      "Your documents look great. Clearfield Capital has pre-approved you for $100k. Want to review the terms together?",
  },
  newOffersCount: 3,
  applicationStatus: {
    hasActiveApplication: true,
    canReapply: true,
    lastApplicationDate: "June 18, 2024",
    applicationId: "APP-2024-001",
  },
};

export { applicationsData };
