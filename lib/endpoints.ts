export const API = {
  AUTH: {
    REGISTER: "/api/v1/company/create-company",
    VERIFICATION: "/api/v1/company/verifyOTP",
    RESENDOTP: "/api/v1/company/resend-email-verification-code",
    CREATEPASSWORD: "/api/v1/company/create-password",
    LOGIN: "/api/v1/company/signin",
    FORGOTPASSWORD: "/api/v1/company/forgot-password",
    RESETPASSWORD: "/api/v1/company/reset-password",
    CHANGEPASSWORD: "/api/v1/company/change_password",
  },
} as const;

export type ApiEndpoint =
  (typeof API)[keyof typeof API][keyof (typeof API)[keyof typeof API]];
