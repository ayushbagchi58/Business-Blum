import { Metadata } from "next";
import IndustryLandingPage from "../../Components/industries/IndustryLandingPage";
import { truckingFundingData } from "../../Components/industries/data/trucking-funding";

export const metadata: Metadata = {
  title: "Trucking Company Funding & Equipment Financing | Business Blum",
  description: "Fast trucking business loans from $5K to $10M. Finance trucks, trailers, and working capital for owner-operators and fleet owners. Approvals in 24 hours.",
  keywords: "trucking loans, semi truck financing, fleet funding, owner operator loans, commercial truck financing",
};

export default function TruckingFundingPage() {
  return <IndustryLandingPage data={truckingFundingData} />;
}
