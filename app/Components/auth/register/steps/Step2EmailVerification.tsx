"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Step2EmailVerificationProps {
  email: string;
  onNext: (code: string) => void;
  onBack: () => void;
}

export default function Step2EmailVerification({
  email,
  onNext,
  onBack: _onBack,
}: Step2EmailVerificationProps) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(
        () => setResendCooldown(resendCooldown - 1),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
    setError("");

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newCode = [...code];
    pastedData.split("").forEach((char, i) => {
      if (i < 6) newCode[i] = char;
    });
    setCode(newCode);

    const lastFilledIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastFilledIndex]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");

    if (fullCode.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }

    onNext(fullCode);
  };

  const handleResend = () => {
    if (resendCooldown > 0) return;
    setResendCooldown(60);

    console.log("Verification code resent");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h2 className="text-[22px] font-bold text-[#1e293b] text-center mb-1.5">
          Check your email
        </h2>
        <p className="text-[14px] text-gray-600 text-center">
          We sent a verification code to
        </p>
        <p className="text-[14px] font-semibold text-[#1e293b] text-center mt-1">
          {email}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <div className="flex gap-2 justify-center mb-2">
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
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-11 h-11 text-center text-[20px] font-semibold border-2 border-[#009966] rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all duration-200"
              />
            ))}
          </div>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm text-center mt-2"
            >
              {error}
            </motion.p>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-[#009966] to-[#00b377] text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Verify email
        </motion.button>

        <div className="text-center">
          {resendCooldown > 0 ? (
            <p className="text-[13px] text-gray-500">
              Resend code in {resendCooldown}s
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="text-[13px] font-semibold text-[#009966] hover:text-[#007a52] transition-colors"
            >
              Resend code
            </button>
          )}
        </div>
      </form>
    </motion.div>
  );
}
