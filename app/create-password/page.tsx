"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { CreatePasswordForm } from "@/app/Components/auth/create-password";
import { Suspense } from "react";

function CreatePasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const token = searchParams.get("token") || "";
  const [isValidating, setIsValidating] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  // Route protection: Check if user has valid token OR verified session
  useEffect(() => {
    // Prevent browser back button
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
    };

    window.addEventListener("popstate", handlePopState);

    const validateAccess = () => {
      // Method 1: Token from email link (preferred)
      if (token) {
        // TODO: Validate token with backend API
        console.log("🔐 Token-based access:", token);

        // For now, accept any token (backend will validate)
        // In production, verify token via API call here

        setIsValidating(false);

        setIsAuthorized(true);
        return;
      }

      // Method 2: Session-based (user came from verification page directly)
      const emailVerified = sessionStorage.getItem("email_verified");
      const verifiedEmail = sessionStorage.getItem("verified_email");

      if (emailVerified === "true" && verifiedEmail) {
        // Check if email matches
        if (email && email !== verifiedEmail) {
          toast.error("Invalid password creation link.");
          router.replace("/register");
          return;
        }

        setIsValidating(false);

        setIsAuthorized(true);
        return;
      }

      // No valid access method found
      toast.error(
        "Please verify your email first or use the link from your email."
      );
      router.replace("/register");
    };

    validateAccess();

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [email, token, router]);

  // Show loading while validating
  if (isValidating) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#0EA56B]"></div>
          <p className="text-sm text-gray-600">Validating access...</p>
        </div>
      </div>
    );
  }

  // If not authorized, show redirecting screen
  if (!isAuthorized) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#0EA56B]"></div>
          <p className="text-sm text-gray-600">Redirecting...</p>
        </div>
      </div>
    );
  }

  return <CreatePasswordForm />;
}

export default function CreatePasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <CreatePasswordContent />
    </Suspense>
  );
}
