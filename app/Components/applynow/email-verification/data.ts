import { VerificationData } from "./types";

export const verificationData: VerificationData = {
  title: "Verify Your Email",
  subtitle: "We've sent a verification code to your email address",
  codeLength: 6,
  resendCooldown: 60,
  instructions: [
    {
      id: 1,
      text: "Check your inbox for the verification code",
      icon: "mail",
    },
    {
      id: 2,
      text: "Enter the 6-digit code below",
      icon: "key",
    },
    {
      id: 3,
      text: "Don't forget to check your spam folder",
      icon: "alert",
    },
  ],
};
