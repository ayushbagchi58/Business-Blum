"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { toast } from "sonner";
import { EmailVerification } from "@/app/Components/applynow/email-verification";
import { useVerifyOTP } from "@/hooks/useAuth";
import { syncSessionToCookies } from "@/lib/sessionSync";

function VerifyRegistrationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const verifyOTPMutation = useVerifyOTP();
  const [resetTimer, setResetTimer] = useState(false);

  // Route protection: Check if user came from registration
  useEffect(() => {
    const userIdFromUrl = searchParams.get("uid");
    const userIdFromSession = sessionStorage.getItem("temp_user_id");
    const tempEmail = sessionStorage.getItem("temp_user_email");

    // If no user_id in URL or sessionStorage, redirect to register
    if (!userIdFromUrl && !userIdFromSession) {
      toast.error("Please register first to verify your email.");
      router.push("/register");
      return;
    }

    // If email in URL doesn't match session email, redirect
    if (tempEmail && email && email !== tempEmail) {
      toast.error("Invalid verification link. Please register again.");
      sessionStorage.clear();
      router.push("/register");
      return;
    }

    // Check if OTP was just resent
    const otpResent = sessionStorage.getItem("otp_resent");
    if (otpResent === "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResetTimer(true);
      sessionStorage.removeItem("otp_resent");
      sessionStorage.removeItem("otp_resent_time");
    }
  }, [email, searchParams, router]);

  const handleVerificationComplete = async (otp: string) => {
    // Get user_id from URL query parameter first, then sessionStorage as fallback
    const userIdFromUrl = searchParams.get("uid");
    const userIdFromSession = sessionStorage.getItem("temp_user_id");
    const userId = userIdFromUrl || userIdFromSession;

    console.log("🔍 Verification Debug:");
    console.log("  User ID from URL:", userIdFromUrl);
    console.log("  User ID from sessionStorage:", userIdFromSession);
    console.log("  Final User ID:", userId);
    console.log("  Email:", email);
    console.log("  OTP:", otp);

    if (!userId) {
      console.error("❌ User ID not found in URL or sessionStorage");
      toast.error("Session expired. Please register again.");
      router.push("/register");
      return;
    }

    try {
      console.log("📤 Sending OTP verification request with:", {
        user_id: userId,
        otp: otp,
      });

      const response = await verifyOTPMutation.mutateAsync({
        user_id: userId,
        otp: otp,
      });

      if (response.success) {
        // Clear temp data
        sessionStorage.removeItem("temp_user_id");

        // Set a flag that email is verified
        sessionStorage.setItem("email_verified", "true");
        sessionStorage.setItem("verified_email", email);

        // Sync to cookies immediately for middleware
        syncSessionToCookies();

        // Redirect to check-email page (industry standard: user needs to click link in email)
        router.replace(`/check-email?email=${encodeURIComponent(email)}`);
      }
    } catch (error) {
      console.error("❌ OTP verification error:", error);
    }
  };

  const handleResendCode = () => {
    // Redirect to resend OTP page
    router.push("/resend-otp");
  };

  return (
    <EmailVerification
      email={email}
      onVerificationComplete={handleVerificationComplete}
      onResendCode={handleResendCode}
      isVerifying={verifyOTPMutation.isPending}
      resetTimer={resetTimer}
    />
  );
}

export default function VerifyRegistrationPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <VerifyRegistrationContent />
    </Suspense>
  );
}
