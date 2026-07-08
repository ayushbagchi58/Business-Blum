"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useForgotPassword } from "@/hooks/useAuth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const forgotPasswordMutation = useForgotPassword();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    try {
      const response = await forgotPasswordMutation.mutateAsync({ email });

      if (response.success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      // Error toast already shown by hook
      console.error("❌ Forgot password failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#d1fae5] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="flex justify-center items-center mb-6">
          <Image
            src="/Logos/navlogo.png"
            alt="Business Blum"
            width={50}
            height={50}
            className="object-contain"
          />
          <h1 className="text-[20px] font-bold text-[#009966] ml-2">
            Business Blum
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <Link
            href="/login"
            className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-[#009966] transition-colors mb-5"
          >
            <ArrowLeft size={16} />
            Back to login
          </Link>

          {!isSubmitted ? (
            <>
              <h2 className="text-[24px] font-bold text-[#1e293b] mb-1.5">
                Forgot password?
              </h2>
              <p className="text-[14px] text-gray-600 mb-5">
                Enter your email and we&apos;ll send you a reset link
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[14px] font-semibold text-[#1e293b] mb-1.5"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={forgotPasswordMutation.isPending}
                    className="w-full px-3.5 py-2.5 bg-[#f3f4f6] border border-gray-200 rounded-lg text-[14px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-[#009966] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={forgotPasswordMutation.isPending}
                  className="w-full bg-gradient-to-r from-[#009966] to-[#00b377] text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {forgotPasswordMutation.isPending ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    "Send reset link"
                  )}
                </motion.button>
              </form>
            </>
          ) : (
            <div className="text-center py-3">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-7 h-7 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#1e293b] mb-1.5">
                Check your email
              </h3>
              <p className="text-[14px] text-gray-600 mb-5">
                We&apos;ve sent a password reset link to{" "}
                <span className="font-semibold">{email}</span>
              </p>
              <Link
                href="/login"
                className="text-[13px] font-semibold text-[#009966] hover:text-[#007a52] transition-colors"
              >
                Return to login
              </Link>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
