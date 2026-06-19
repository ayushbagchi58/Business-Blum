import { Metadata } from "next";
import IndustryLandingPage from "../../Components/industries/IndustryLandingPage";
import { equipmentFinancingData } from "../../Components/industries/data/equipment-financing";

export const metadata: Metadata = {
  title: "Equipment Financing & Leasing for Businesses | Business Blum",
  description:
    "Finance any business equipment from $5K to $5M. Manufacturing, medical, construction, restaurant equipment and more. Fast approvals and competitive rates.",
  keywords:
    "equipment financing, equipment leasing, machinery loans, business equipment funding, equipment purchase",
};

export default function EquipmentFinancingPage() {
  return <IndustryLandingPage data={equipmentFinancingData} />;
}
