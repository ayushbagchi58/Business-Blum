"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, RefreshCw, ExternalLink } from "lucide-react";
import { Suspense } from "react";
import { useResendOTP } from "@/hooks/useAuth";
import { toast } from "sonner";

function CheckEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const resendOTPMutation = useResendOTP();
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  // Route protection: Check if user actually verified email
  useEffect(() => {
    const emailVerified = sessionStorage.getItem("email_verified");
    const verifiedEmail = sessionStorage.getItem("verified_email");

    if (emailVerified !== "true" || !verifiedEmail) {
      // User didn't verify email, redirect to register
      toast.error("Please verify your email first to access this page.");
      router.replace("/register");
      return;
    }

    if (email && email !== verifiedEmail) {
      // Email mismatch, redirect
      toast.error("Invalid access. Please register again.");
      router.replace("/register");
      return;
    }

    // Auth check passed - NOW we can show content
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsChecking(false);

    setIsAuthorized(true);
  }, [email, router]);

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

  const handleResendEmail = async () => {
    if (!email) return;

    try {
      const response = await resendOTPMutation.mutateAsync({ email });

      if (response.success) {
        // Success message already shown by useResendOTP hook from API response
        console.log("✅ Password setup email resent successfully");
      }
    } catch (error) {
      // Error message already shown by useResendOTP hook
      console.error("❌ Failed to resend email:", error);
    }
  };

  const handleGoToLogin = () => {
    // Clear session and go to login
    sessionStorage.clear();
    router.push("/login");
  };

  // Show loading or redirect while checking auth
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

  // If not authorized, don't render anything (redirect is happening)
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
        className="w-full max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg"
        >
          <CheckCircle2 className="h-10 w-10 text-white" />
        </motion.div>

        <div className="rounded-2xl bg-white p-8 shadow-xl md:p-12">
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-3xl font-bold text-[#08122E] md:text-4xl">
              ✅ Email Verified Successfully!
            </h1>
            <p className="text-lg text-gray-600">
              You're almost there! One more step to complete your registration.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 rounded-xl bg-gradient-to-r from-[#0EA56B]/10 to-blue-50 p-6 border border-[#0EA56B]/20"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0EA56B]">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-semibold text-[#08122E]">
                  📧 Check Your Inbox
                </h3>
                <p className="mb-3 text-sm text-gray-700">
                  We've sent a password setup email to:
                </p>
                <p className="mb-4 text-base font-semibold text-[#0EA56B]">
                  {email}
                </p>
                <div className="rounded-lg bg-white/80 p-4">
                  <p className="mb-2 text-sm font-medium text-gray-700">
                    What to do next:
                  </p>
                  <ol className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#0EA56B]/20 text-xs font-bold text-[#0EA56B]">
                        1
                      </span>
                      <span>Open your email inbox</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#0EA56B]/20 text-xs font-bold text-[#0EA56B]">
                        2
                      </span>
                      <span>
                        Look for an email from <strong>Business Blum</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#0EA56B]/20 text-xs font-bold text-[#0EA56B]">
                        3
                      </span>
                      <span>
                        Click the <strong>"Create Password"</strong> button
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#0EA56B]/20 text-xs font-bold text-[#0EA56B]">
                        4
                      </span>
                      <span>Set up your secure password</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mb-8 text-center">
            <p className="mb-3 text-sm text-gray-600">
              Didn't receive the email?
            </p>
            <button
              onClick={handleResendEmail}
              disabled={resendOTPMutation.isPending}
              className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {resendOTPMutation.isPending ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4" />
                  Resend Email
                </>
              )}
            </button>
          </div>

          <div className="rounded-xl bg-blue-50 p-6 border border-blue-200">
            <p className="mb-3 text-sm font-semibold text-gray-700">
              💡 Email Not Arriving? Check:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>
                  Your <strong>spam</strong> or <strong>junk</strong> folder
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Make sure the email address is correct</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Wait a few minutes for the email to arrive</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>
                  Add <strong>noreply@businessblum.com</strong> to your contacts
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 border-t pt-6 text-center">
            <p className="mb-3 text-sm text-gray-600">
              Already set your password?
            </p>
            <button
              onClick={handleGoToLogin}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EA56B] transition-colors hover:text-[#0c9461]"
            >
              <ExternalLink className="h-4 w-4" />
              Go to Login
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Need help?{" "}
          <a
            href="/contact"
            className="font-semibold text-[#0EA56B] hover:underline"
          >
            Contact Support
          </a>
        </p>
      </motion.div>
    </div>
  );
}

export default function CheckEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <CheckEmailContent />
    </Suspense>
  );
}
