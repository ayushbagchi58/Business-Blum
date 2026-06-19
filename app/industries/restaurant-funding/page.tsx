import { Metadata } from "next";
import IndustryLandingPage from "../../Components/industries/IndustryLandingPage";
import { restaurantFundingData } from "../../Components/industries/data/restaurant-funding";

export const metadata: Metadata = {
  title: "Restaurant Funding & Working Capital Loans | Business Blum",
  description:
    "Quick restaurant financing from $5K to $5M. Fund renovations, equipment, inventory, and payroll. Fast approval for cafes, bars, and food service businesses.",
  keywords:
    "restaurant loans, cafe financing, bar funding, food service loans, restaurant working capital",
};

export default function RestaurantFundingPage() {
  return <IndustryLandingPage data={restaurantFundingData} />;
}
