import { ApplyNowFormSectionData } from "./types";

export const applyNowFormSectionData: ApplyNowFormSectionData = {
  badge: "Secure Funding Application",

  heading: "Access $5K - $10M in Business Funding",

  description: "From Merchant Cash Advances to SBA Loans",

  fundingStats: [
    {
      id: 1,
      label: "MCA Programs",
      value: "$500+ Credit",
    },
    {
      id: 2,
      label: "Equipment Loans",
      value: "$50+ Credit",
    },
    {
      id: 3,
      label: "Term Loans",
      value: "$600+ Credit",
    },
    {
      id: 4,
      label: "SBA Loans",
      value: "$680+ Credit",
    },
  ],

  businessInformationFields: [
    {
      id: 1,
      name: "legalBusinessName",
      label: "Legal Business Name *",
      placeholder: "Your Business LLC",
      type: "input",
      inputType: "text",
      fullWidth: true,
    },
    {
      id: 2,
      name: "ein",
      label: "EIN (Employer ID Number) *",
      placeholder: "XX XXXXXXX",
      type: "input",
      inputType: "text",
    },
    {
      id: 3,
      name: "businessEntityType",
      label: "Business Entity Type *",
      type: "select",
      options: [
        { id: 1, label: "LLC" },
        { id: 2, label: "Corporation" },
        { id: 3, label: "Sole Proprietorship" },
      ],
    },
    {
      id: 4,
      name: "businessAddress",
      label: "Business Address *",
      placeholder: "123 Main St, Suite 100, City, State ZIP",
      type: "input",
      inputType: "text",
      fullWidth: true,
    },
    {
      id: 5,
      name: "businessPhone",
      label: "Business Phone *",
      placeholder: "(555) 123 4567",
      type: "input",
      inputType: "tel",
    },
    {
      id: 6,
      name: "website",
      label: "Business Website or Social Media",
      placeholder: "www.yourwebsite.com",
      type: "input",
      inputType: "url",
      icon: true,
    },
    {
      id: 7,
      name: "industry",
      label: "Industry *",
      type: "select",
      options: [
        { id: 1, label: "Retail" },
        { id: 2, label: "Construction" },
        { id: 3, label: "Healthcare" },
        { id: 4, label: "Technology" },
        { id: 5, label: "Restaurant" },
      ],
    },
    {
      id: 8,
      name: "timeInBusiness",
      label: "Time in Business *",
      type: "select",
      options: [
        { id: 1, label: "0-6 Months" },
        { id: 2, label: "6-12 Months" },
        { id: 3, label: "1-2 Years" },
        { id: 4, label: "3+ Years" },
      ],
    },
    {
      id: 9,
      name: "monthlyRevenue",
      label: "Average Monthly Revenue *",
      type: "select",
      fullWidth: true,
      options: [
        { id: 1, label: "$5k - $10k" },
        { id: 2, label: "$10k - $25k" },
        { id: 3, label: "$25k - $50k" },
        { id: 4, label: "$50k+" },
      ],
    },
  ],

  ownerInformationFields: [
    {
      id: 1,
      name: "firstName",
      label: "First Name *",
      placeholder: "John",
      type: "input",
      inputType: "text",
    },
    {
      id: 2,
      name: "lastName",
      label: "Last Name *",
      placeholder: "Doe",
      type: "input",
      inputType: "text",
    },
    {
      id: 3,
      name: "ssn",
      label: "Social Security Number *",
      placeholder: "XXX XX XXXX",
      type: "input",
      inputType: "text",
    },
    {
      id: 4,
      name: "ownershipPercentage",
      label: "Ownership Percentage *",
      type: "select",
      options: [
        { id: 1, label: "0% - 25%" },
        { id: 2, label: "25% - 50%" },
        { id: 3, label: "50% - 75%" },
        { id: 4, label: "75% - 100%" },
      ],
    },
    {
      id: 5,
      name: "email",
      label: "Email Address *",
      placeholder: "john@business.com",
      type: "input",
      inputType: "email",
    },
    {
      id: 6,
      name: "phoneNumber",
      label: "Phone Number *",
      placeholder: "(555) 123 4567",
      type: "input",
      inputType: "tel",
    },
    {
      id: 7,
      name: "estimatedCreditScore",
      label: "Estimated Credit Score (Optional)",
      type: "select",
      fullWidth: true,
      options: [
        { id: 1, label: "500 - 599" },
        { id: 2, label: "600 - 649" },
        { id: 3, label: "650 - 699" },
        { id: 4, label: "700+" },
      ],
    },
  ],

  fundingNeedsFields: [
    {
      id: 1,
      name: "fundingAmount",
      label: "Funding Amount Needed *",
      type: "select",
      options: [
        { id: 1, label: "$5K - $25K" },
        { id: 2, label: "$25K - $100K" },
        { id: 3, label: "$100K - $500K" },
        { id: 4, label: "$500K+" },
      ],
    },
    {
      id: 2,
      name: "fundingPurpose",
      label: "Funding Purpose *",
      type: "select",
      options: [
        { id: 1, label: "Working Capital" },
        { id: 2, label: "Equipment" },
        { id: 3, label: "Payroll" },
        { id: 4, label: "Expansion" },
        { id: 5, label: "Inventory" },
      ],
    },
    {
      id: 3,
      name: "preferredFundingType",
      label: "Preferred Funding Type (Optional)",
      type: "select",
      fullWidth: true,
      options: [
        {
          id: 1,
          label: "No preference - show me all options",
        },
      ],
    },
  ],

  authorizationItems: [
    {
      id: 1,
      text: "Personal Credit Authorization: I authorize Business Blum and its lending partners to obtain my personal credit report for the purpose of evaluating my loan application.",
    },
    {
      id: 2,
      text: "Consent to Contact: I consent to be contacted by Business Blum and its lending partners via phone, email, and SMS.",
    },
  ],

  documents: [
    {
      id: 1,
      text: "3-6 months of business bank statements",
    },
    {
      id: 2,
      text: "Government-issued ID or driver's license",
    },
    {
      id: 3,
      text: "Voided business check",
    },
    {
      id: 4,
      text: "Business license (if applicable)",
    },
    {
      id: 5,
      text: "Profit & loss statements",
    },
    {
      id: 6,
      text: "Business tax returns (recent program)",
    },
    {
      id: 7,
      text: "Articles of incorporation",
    },
    {
      id: 8,
      text: "Invoice or contract (if applicable)",
    },
  ],

  features: [
    {
      id: 1,
      text: "Soft credit inquiry only",
    },
    {
      id: 2,
      text: "Bank-level encryption",
    },
    {
      id: 3,
      text: "Funding under 48 hours",
    },
  ],

  buttonText: "Get Matched with 200+ Lenders",

  disclaimer:
    "By submitting this form, you agree to our Privacy Policy and Terms of Service.",
};
