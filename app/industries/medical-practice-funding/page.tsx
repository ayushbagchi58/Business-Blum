import { Metadata } from "next";
import IndustryLandingPage from "../../Components/industries/IndustryLandingPage";
import { medicalPracticeFundingData } from "../../Components/industries/data/medical-practice-funding";

export const metadata: Metadata = {
  title: "Medical Practice Funding & Healthcare Business Loans | Business Blum",
  description:
    "Healthcare financing from $10K to $5M for doctors, dentists, and medical practices. Fund equipment, expansion, working capital, and practice acquisitions.",
  keywords:
    "medical practice loans, healthcare financing, doctor loans, dental practice funding, medical equipment financing",
};

export default function MedicalPracticeFundingPage() {
  return <IndustryLandingPage data={medicalPracticeFundingData} />;
}
