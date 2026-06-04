export interface FormData {
  // Step 1: Business Basics
  fundingAmount: string;
  monthlyRevenue: string;
  industry: string;
  timeInBusiness: string;

  // Step 2: Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  businessName: string;

  // Step 3: Business Details
  ein: string;
  businessAddress: string;
  businessEntityType: string;
  estimatedCreditScore: string;

  // Step 4: Documentation (file uploads)
  bankStatements?: File[];
  
  // Consent
  creditAuthorization: boolean;
  contactConsent: boolean;
}

export interface StepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
  errors: Record<string, string>;
}
