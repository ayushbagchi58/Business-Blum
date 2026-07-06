// API Endpoints Configuration
// All endpoints are relative paths that will be appended to the base URL from environment variables

export const API = {
  AUTH: {
    REGISTER: "/api/v1/company/create-company",
    VERIFICATION: "/api/v1/company/verifyOTP",
    RESENDOTP: "/api/v1/company/resend-email-verification-code",
    CREATEPASSWORD: "/api/v1/company/create-password",
    LOGIN: "/api/v1/company/signin",
  },
} as const;

// Type helper for endpoint keys
export type ApiEndpoint =
  (typeof API)[keyof typeof API][keyof (typeof API)[keyof typeof API]];
