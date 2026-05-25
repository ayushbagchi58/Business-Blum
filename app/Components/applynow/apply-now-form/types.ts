export interface FundingStat {
  id: number;
  label: string;
  value: string;
}

export interface SelectOption {
  id: number;
  label: string;
}

export type FormFieldName =
  | "legalBusinessName"
  | "ein"
  | "businessEntityType"
  | "businessAddress"
  | "businessPhone"
  | "website"
  | "industry"
  | "timeInBusiness"
  | "monthlyRevenue"
  | "firstName"
  | "lastName"
  | "ssn"
  | "ownershipPercentage"
  | "email"
  | "phoneNumber"
  | "estimatedCreditScore"
  | "fundingAmount"
  | "fundingPurpose"
  | "preferredFundingType";

export interface FormField {
  id: number;

  name: FormFieldName;

  label: string;

  placeholder?: string;

  type: "input" | "select";

  inputType?: "text" | "email" | "tel" | "number" | "password" | "url";

  options?: SelectOption[];

  fullWidth?: boolean;

  icon?: boolean;
}

export interface CheckboxItem {
  id: number;
  text: string;
}

export interface DocumentItem {
  id: number;
  text: string;
}

export interface FeatureItem {
  id: number;
  text: string;
}

export interface ApplyNowFormSectionData {
  badge: string;

  heading: string;

  description: string;

  fundingStats: FundingStat[];

  businessInformationFields: FormField[];

  ownerInformationFields: FormField[];

  fundingNeedsFields: FormField[];

  authorizationItems: CheckboxItem[];

  documents: DocumentItem[];

  features: FeatureItem[];

  buttonText: string;

  disclaimer: string;
}
