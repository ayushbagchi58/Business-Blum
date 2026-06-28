import { ApplicationsData } from "./types";

export const applicationsData: ApplicationsData = {
  applications: [
    {
      id: "APP-001",
      businessName: "Fuego Kitchen Group",
      loanType: "Working Capital",
      amount: 100000,
      submittedDate: "Jun 18, 2024",
      status: "In Review",
      progressPercentage: 75,
      timeline: [
        {
          id: 1,
          title: "Application submitted",
          date: "Jun 18, 2024",
          status: "completed",
        },
        {
          id: 2,
          title: "Identity verified",
          date: "Jun 18, 2024",
          status: "completed",
        },
        {
          id: 3,
          title: "Bank statements reviewed",
          date: "Jun 19, 2024",
          status: "completed",
        },
        {
          id: 4,
          title: "Lender underwriting",
          date: "In progress",
          status: "in-progress",
        },
        {
          id: 5,
          title: "Funding decision",
          date: "Expected Jun 24",
          status: "pending",
        },
      ],
    },
  ],
};
