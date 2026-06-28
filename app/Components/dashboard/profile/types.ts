export interface ProfileData {
  // Personal Information (from Step 2: Contact Info)
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  businessName: string;

  // Business Basics (from Step 1)
  fundingAmount: string;
  monthlyRevenue: string;
  industry: string;
  timeInBusiness: string;

  // Business Details (from Step 3)
  ein: string;
  businessAddress: string;
  businessEntityType: string;
  estimatedCreditScore: string;

  // Account
  accountCreated: string;
}
