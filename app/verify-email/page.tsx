"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { EmailVerification } from "../Components/applynow/email-verification";
import LoadingScreen from "../Components/applynow/LoadingScreen";

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  // Get email from URL params directly
  const email = searchParams.get("email") || "";

  useEffect(() => {
    // If no email provided, redirect back to apply now
    if (!email) {
      router.push("/applynow");
    }
  }, [email, router]);

  const handleVerificationComplete = () => {
    // Show loading screen after verification
    setShowLoadingScreen(true);
  };

  const handleResendCode = () => {
    // Backend integration placeholder
    console.log("Resending verification code to:", email);
  };

  const handleLoadingComplete = () => {
    // Redirect to dashboard
    router.push("/dashboard");
  };

  // Don't render anything if no email
  if (!email) {
    return null;
  }

  return (
    <>
      {showLoadingScreen ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <EmailVerification
          email={email}
          onVerificationComplete={handleVerificationComplete}
          onResendCode={handleResendCode}
        />
      )}
    </>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <VerifyEmailContent />
    </Suspense>
  );
}
