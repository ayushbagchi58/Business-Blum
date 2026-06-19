"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Step1BusinessBasics from "./steps/Step1BusinessBasics";
import Step2ContactInfo from "./steps/Step2ContactInfo";
import Step3BusinessDetails from "./steps/Step3BusinessDetails";
import Step4Documentation from "./steps/Step4Documentation";
import { FormData } from "./types";

const steps = [
  { id: 1, name: "Business Basics", description: "Tell us about your needs" },
  { id: 2, name: "Contact Info", description: "How can we reach you?" },
  { id: 3, name: "Business Details", description: "A few more details" },
  { id: 4, name: "Documentation", description: "Upload documents" },
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fundingAmount: "",
    monthlyRevenue: "",
    industry: "",
    timeInBusiness: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    businessName: "",
    ein: "",
    businessAddress: "",
    businessEntityType: "",
    estimatedCreditScore: "",
    creditAuthorization: false,
    contactConsent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    // Clear errors for updated fields
    const updatedFields = Object.keys(data);
    setErrors((prev) => {
      const newErrors = { ...prev };
      updatedFields.forEach((field) => delete newErrors[field]);
      return newErrors;
    });
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fundingAmount) newErrors.fundingAmount = "Required";
      if (!formData.monthlyRevenue) newErrors.monthlyRevenue = "Required";
      if (!formData.industry) newErrors.industry = "Required";
      if (!formData.timeInBusiness) newErrors.timeInBusiness = "Required";
    }

    if (step === 2) {
      if (!formData.firstName) newErrors.firstName = "Required";
      if (!formData.lastName) newErrors.lastName = "Required";
      if (!formData.email) newErrors.email = "Required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = "Invalid email";
      if (!formData.phoneNumber) newErrors.phoneNumber = "Required";
      if (!formData.businessName) newErrors.businessName = "Required";
    }

    if (step === 3) {
      if (!formData.ein) newErrors.ein = "Required";
      if (!formData.businessAddress) newErrors.businessAddress = "Required";
      if (!formData.businessEntityType)
        newErrors.businessEntityType = "Required";
    }

    if (step === 4) {
      if (!formData.creditAuthorization)
        newErrors.creditAuthorization = "Required";
      if (!formData.contactConsent) newErrors.contactConsent = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Here you would send the data to your backend
    alert(
      "Application submitted successfully! We'll contact you within 24 hours."
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-1 flex-col items-center">
                <div className="relative flex w-full items-center">
                  {/* Circle */}
                  <div
                    className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                      currentStep > step.id
                        ? "border-[#0EA56B] bg-[#0EA56B]"
                        : currentStep === step.id
                          ? "border-[#0EA56B] bg-white"
                          : "border-gray-300 bg-white"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle className="h-6 w-6 text-white" />
                    ) : (
                      <span
                        className={`text-sm font-semibold ${
                          currentStep === step.id
                            ? "text-[#0EA56B]"
                            : "text-gray-400"
                        }`}
                      >
                        {step.id}
                      </span>
                    )}
                  </div>

                  {/* Line */}
                  {index < steps.length - 1 && (
                    <div
                      className={`h-0.5 w-full transition-all ${
                        currentStep > step.id ? "bg-[#0EA56B]" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>

                {/* Label */}
                <div className="mt-2 hidden text-center sm:block">
                  <p
                    className={`text-xs font-semibold ${
                      currentStep >= step.id
                        ? "text-[#08122E]"
                        : "text-gray-400"
                    }`}
                  >
                    {step.name}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <Step1BusinessBasics
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
                onBack={handleBack}
                errors={errors}
              />
            )}
            {currentStep === 2 && (
              <Step2ContactInfo
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
                onBack={handleBack}
                errors={errors}
              />
            )}
            {currentStep === 3 && (
              <Step3BusinessDetails
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
                onBack={handleBack}
                errors={errors}
              />
            )}
            {currentStep === 4 && (
              <Step4Documentation
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
                onBack={handleBack}
                errors={errors}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
