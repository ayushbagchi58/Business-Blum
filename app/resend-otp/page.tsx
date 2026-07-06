"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useResendOTP } from "@/hooks/useAuth";
import { API } from "@/lib/endpoints";
import { syncSessionToCookies } from "@/lib/sessionSync";

export default function ResendOTPPage() {
  const router = useRouter();
  const resendOTPMutation = useResendOTP();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  // Route protection: User must have attempted registration or verification
  useEffect(() => {
    const tempUserId = sessionStorage.getItem("temp_user_id");
    const tempEmail = sessionStorage.getItem("temp_user_email");

    // If no registration attempt found, redirect to register
    if (!tempUserId && !tempEmail) {
      toast.error("Please register first to access this page.");
      router.replace("/register");
      return;
    }

    // Auth check passed - NOW we can show content
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsChecking(false);

    setIsAuthorized(true);
  }, [router]);

  // Prevent browser back button
  useEffect(() => {
    // Replace current history entry
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      // Push state again to prevent going back
      window.history.pushState(null, "", window.location.href);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email format");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      return;
    }

    try {
      console.log("🔄 Sending resend OTP request:");
      console.log("  Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL);
      console.log("  Endpoint:", API.AUTH.RESENDOTP);
      console.log(
        "  Full URL:",
        `${process.env.NEXT_PUBLIC_API_BASE_URL}${API.AUTH.RESENDOTP}`
      );
      console.log("  Request body:", JSON.stringify({ email }, null, 2));

      const response = await resendOTPMutation.mutateAsync({ email });

      if (response.success) {
        // Store email in sessionStorage for verification page
        sessionStorage.setItem("resend_email", email);
        // Set a flag to reset OTP timer
        sessionStorage.setItem("otp_resent", "true");
        sessionStorage.setItem("otp_resent_time", Date.now().toString());

        // Sync to cookies immediately for middleware
        syncSessionToCookies();

        // Use router.replace to prevent back navigation
        router.replace(
          `/verify-registration?email=${encodeURIComponent(email)}`
        );
      }
    } catch (error) {
      console.error("❌ Resend OTP error:", error);
    }
  };

  // Show loading while checking auth - don't render content until authorized
  if (isChecking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#0EA56B]"></div>
          <p className="text-sm text-gray-600">Verifying access...</p>
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

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Link
          href="/register"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#0EA56B]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Registration
        </Link>

        <div className="mb-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0EA56B] to-[#0c9461]"
          >
            <Mail className="h-8 w-8 text-white" />
          </motion.div>

          <h1 className="text-3xl font-bold text-[#08122E]">
            Resend Verification Code
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Enter your email address to receive a new verification code
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                disabled={resendOTPMutation.isPending}
                className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10 ${
                  emailError ? "border-red-400" : "border-gray-300"
                } ${resendOTPMutation.isPending ? "cursor-not-allowed opacity-50" : ""}`}
              />
              {emailError && (
                <p className="mt-1 text-xs text-red-500">{emailError}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={resendOTPMutation.isPending}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0EA56B] text-sm font-semibold text-white transition-all hover:bg-[#0c9461] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {resendOTPMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending Code...
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4" />
                  Send Verification Code
                </>
              )}
            </button>
          </form>

          <div className="mt-6 rounded-xl bg-blue-50 p-4">
            <p className="text-sm text-gray-700">
              💡 <strong>Tip:</strong> Make sure to enter the same email address
              you used during registration. A new verification code will be sent
              to your inbox.
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          Having trouble? Contact our{" "}
          <a
            href="/contact"
            className="font-semibold text-[#0EA56B] hover:underline"
          >
            support team
          </a>
        </p>
      </motion.div>
    </div>
  );
}
