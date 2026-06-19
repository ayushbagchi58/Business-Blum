import { Metadata } from "next";
import IndustryLandingPage from "../../Components/industries/IndustryLandingPage";
import { autoShopFundingData } from "../../Components/industries/data/auto-shop-funding";

export const metadata: Metadata = {
  title: "Auto Shop Funding & Repair Shop Business Loans | Business Blum",
  description:
    "Auto repair shop financing from $5K to $2M. Fund equipment, tools, inventory, and expansion. Fast approval for mechanics and automotive service businesses.",
  keywords:
    "auto shop loans, auto repair financing, mechanic shop funding, automotive business loans, body shop financing",
};

export default function AutoShopFundingPage() {
  return <IndustryLandingPage data={autoShopFundingData} />;
}
