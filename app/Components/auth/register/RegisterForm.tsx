"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { RegisterFormData, RegistrationStep } from "./types";
import Step1CreateAccount from "./steps/Step1CreateAccount";
import Step2EmailVerification from "./steps/Step2EmailVerification";
import Step3PersonalInfo from "./steps/Step3PersonalInfo";
import Step4SSNVerification from "./steps/Step4SSNVerification";
import Step5CreditAuthorization from "./steps/Step5CreditAuthorization";
import LoadingScreen from "./LoadingScreen";
import SuccessScreen from "./SuccessScreen";

export default function RegisterForm() {
  const [currentStep, setCurrentStep] = useState<RegistrationStep>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<Partial<RegisterFormData>>({});

  const updateFormData = (data: Partial<RegisterFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleStep1Next = (data: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    updateFormData(data);
    setCurrentStep(2);
  };

  const handleStep2Next = (code: string) => {
    updateFormData({ verificationCode: code });
    setCurrentStep(3);
  };

  const handleStep3Next = (data: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phoneNumber: string;
  }) => {
    updateFormData(data);
    setCurrentStep(4);
  };

  const handleStep4Next = (data: { ssnLast4: string }) => {
    updateFormData(data);
    setCurrentStep(5);
  };

  const handleStep5Next = async (data: { creditAuthorization: boolean }) => {
    updateFormData(data);
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsLoading(false);
    setIsSuccess(true);

    setTimeout(() => {
      console.log("Redirecting to dashboard...", formData);
    }, 2000);
  };

  const getProgressPercentage = () => {
    return (currentStep / 5) * 100;
  };

  const getStepLabel = () => {
    return `Step ${currentStep} of 5`;
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isSuccess) {
    return <SuccessScreen userName={formData.firstName || "User"} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#d1fae5] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center items-center mb-6"
        >
          <Image
            src="/Logos/navlogo.png"
            alt="Business Blum"
            width={50}
            height={50}
            className="object-contain"
          />
          <h1 className="text-[20px] font-bold text-[#009966] ml-2">
            Business Blum
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[13px] font-medium text-gray-600">
                {getStepLabel()}
              </span>
              <span className="text-[13px] font-semibold text-[#009966]">
                {getProgressPercentage()}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${getProgressPercentage()}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#009966] to-[#00b377]"
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <Step1CreateAccount
                key="step1"
                onNext={handleStep1Next}
                initialData={{
                  email: formData.email,
                  password: formData.password,
                  confirmPassword: formData.confirmPassword,
                }}
              />
            )}
            {currentStep === 2 && (
              <Step2EmailVerification
                key="step2"
                email={formData.email || ""}
                onNext={handleStep2Next}
                onBack={() => setCurrentStep(1)}
              />
            )}
            {currentStep === 3 && (
              <Step3PersonalInfo
                key="step3"
                onNext={handleStep3Next}
                onBack={() => setCurrentStep(2)}
                initialData={{
                  firstName: formData.firstName,
                  lastName: formData.lastName,
                  dateOfBirth: formData.dateOfBirth,
                  phoneNumber: formData.phoneNumber,
                }}
              />
            )}
            {currentStep === 4 && (
              <Step4SSNVerification
                key="step4"
                onNext={handleStep4Next}
                onBack={() => setCurrentStep(3)}
                initialData={{
                  ssnLast4: formData.ssnLast4,
                }}
              />
            )}
            {currentStep === 5 && (
              <Step5CreditAuthorization
                key="step5"
                onNext={handleStep5Next}
                onBack={() => setCurrentStep(4)}
                initialData={{
                  creditAuthorization: formData.creditAuthorization,
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
