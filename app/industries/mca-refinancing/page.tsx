import { Metadata } from "next";
import IndustryLandingPage from "../../Components/industries/IndustryLandingPage";
import { mcaRefinancingData } from "../../Components/industries/data/mca-refinancing";

export const metadata: Metadata = {
  title:
    "MCA Refinancing & Merchant Cash Advance Consolidation | Business Blum",
  description:
    "Refinance your merchant cash advance with better terms. Lower payments, extended terms, and relief from MCA debt stacking. Get approved in 24 hours.",
  keywords:
    "MCA refinancing, merchant cash advance consolidation, MCA debt relief, refinance business loan, consolidate business debt",
};

export default function MCARefinancingPage() {
  return <IndustryLandingPage data={mcaRefinancingData} />;
}
