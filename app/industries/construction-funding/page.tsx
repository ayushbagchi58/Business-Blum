import { Metadata } from "next";
import IndustryLandingPage from "../../Components/industries/IndustryLandingPage";
import { constructionFundingData } from "../../Components/industries/data/construction-funding";

export const metadata: Metadata = {
  title: "Construction Business Funding & Contractor Loans | Business Blum",
  description:
    "Construction financing from $10K to $10M for contractors, builders, and construction companies. Fund equipment, materials, payroll, and project costs.",
  keywords:
    "construction loans, contractor financing, builder funding, construction equipment loans, project funding",
};

export default function ConstructionFundingPage() {
  return <IndustryLandingPage data={constructionFundingData} />;
}
