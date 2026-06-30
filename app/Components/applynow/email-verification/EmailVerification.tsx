"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  KeyRound,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";
import { EmailVerificationProps } from "./types";
import { verificationData } from "./data";

export default function EmailVerification({
  email,
  onVerificationComplete,
  onResendCode,
}: EmailVerificationProps) {
  const [code, setCode] = useState<string[]>(
    Array(verificationData.codeLength).fill("")
  );
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Resend cooldown timer
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(
        () => setResendCooldown(resendCooldown - 1),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  // Auto-focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1); // Take only the last character
    setCode(newCode);

    // Auto-focus next input
    if (value && index < verificationData.codeLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when all fields are filled
    if (
      newCode.every((digit) => digit !== "") &&
      index === verificationData.codeLength - 1
    ) {
      handleVerify(newCode.join(""));
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newCode = [...code];

      if (code[index]) {
        // Clear current field
        newCode[index] = "";
        setCode(newCode);
      } else if (index > 0) {
        // Move to previous field and clear it
        newCode[index - 1] = "";
        setCode(newCode);
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (
      e.key === "ArrowRight" &&
      index < verificationData.codeLength - 1
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    const digits = pastedData
      .replace(/\D/g, "")
      .slice(0, verificationData.codeLength);

    if (digits.length === verificationData.codeLength) {
      const newCode = digits.split("");
      setCode(newCode);
      inputRefs.current[verificationData.codeLength - 1]?.focus();
      // Auto-verify pasted code
      handleVerify(digits);
    }
  };

  const handleVerify = async (verificationCode: string) => {
    setIsVerifying(true);

    // Simulate API call
    setTimeout(() => {
      // Backend integration placeholder
      console.log("Verifying code:", verificationCode);

      // For demo purposes, accept any 6-digit code
      toast.success("Email Verified Successfully!", {
        description: "Your email has been confirmed.",
        duration: 3000,
      });

      setIsVerifying(false);
      onVerificationComplete();
    }, 1500);
  };

  const handleResend = () => {
    if (resendCooldown > 0) return;

    setIsResending(true);

    // Simulate API call
    setTimeout(() => {
      // Backend integration placeholder
      console.log("Resending verification code to:", email);

      if (onResendCode) {
        onResendCode();
      }

      toast.success("Verification Code Sent!", {
        description: "Please check your email inbox.",
        duration: 3000,
      });

      setIsResending(false);
      setResendCooldown(verificationData.resendCooldown);
      setCode(Array(verificationData.codeLength).fill(""));
      inputRefs.current[0]?.focus();
    }, 1000);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "mail":
        return <Mail className="h-5 w-5 text-[#0EA56B]" />;
      case "key":
        return <KeyRound className="h-5 w-5 text-[#0EA56B]" />;
      case "alert":
        return <AlertCircle className="h-5 w-5 text-[#0EA56B]" />;
      default:
        return <CheckCircle2 className="h-5 w-5 text-[#0EA56B]" />;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Header */}
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
            {verificationData.title}
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {verificationData.subtitle}
          </p>
          <p className="mt-2 text-sm font-semibold text-[#0EA56B]">{email}</p>
        </div>

        {/* Verification Card */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          {/* OTP Input */}
          <div className="mb-6">
            <label className="mb-3 block text-center text-sm font-medium text-gray-700">
              Enter Verification Code
            </label>
            <div className="flex justify-center gap-2" onPaste={handlePaste}>
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  disabled={isVerifying}
                  className={`h-12 w-12 rounded-lg border-2 text-center text-xl font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#0EA56B]/20 ${
                    digit
                      ? "border-[#0EA56B] bg-[#0EA56B]/5 text-[#08122E]"
                      : "border-gray-300 bg-white text-gray-900"
                  } ${isVerifying ? "cursor-not-allowed opacity-50" : ""}`}
                />
              ))}
            </div>
          </div>

          {/* Verify Button */}
          <button
            onClick={() => handleVerify(code.join(""))}
            disabled={code.some((digit) => !digit) || isVerifying}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0EA56B] text-sm font-semibold text-white transition-all hover:bg-[#0c9461] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isVerifying ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Verify Email
              </>
            )}
          </button>

          {/* Resend Code */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Didn't receive the code?{" "}
              {resendCooldown > 0 ? (
                <span className="font-semibold text-gray-400">
                  Resend in {resendCooldown}s
                </span>
              ) : (
                <button
                  onClick={handleResend}
                  disabled={isResending}
                  className="font-semibold text-[#0EA56B] transition-colors hover:text-[#0c9461] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isResending ? "Sending..." : "Resend Code"}
                </button>
              )}
            </p>
          </div>

          {/* Instructions */}
          <div className="mt-6 space-y-3 rounded-xl bg-blue-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Verification Tips
            </p>
            {verificationData.instructions.map((instruction) => (
              <div key={instruction.id} className="flex items-start gap-3">
                {getIconComponent(instruction.icon)}
                <p className="text-sm text-gray-700">{instruction.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
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
