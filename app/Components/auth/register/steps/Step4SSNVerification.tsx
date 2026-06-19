"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { Shield, Info } from "lucide-react";
import { step4Schema } from "../validation";

interface Step4Data {
  ssnLast4: string;
}

interface Step4SSNVerificationProps {
  onNext: (data: Step4Data) => void;
  onBack: () => void;
  initialData?: Partial<Step4Data>;
}

export default function Step4SSNVerification({
  onNext,
  onBack: _onBack,
  initialData,
}: Step4SSNVerificationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step4Data>({
    resolver: yupResolver(step4Schema),
    defaultValues: initialData,
    mode: "onBlur",
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h2 className="text-[22px] font-bold text-[#1e293b] text-center mb-1.5">
          We need this to find your credit
        </h2>
        <p className="text-[14px] text-gray-600 text-center">
          Your information is encrypted and secure
        </p>
      </div>

      <form onSubmit={handleSubmit(onNext)} className="space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-3.5"
        >
          <div className="flex gap-2.5">
            <Info className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
            <div>
              <h3 className="text-[14px] font-semibold text-blue-900 mb-1">
                Why do we need this?
              </h3>
              <p className="text-[13px] text-blue-800 leading-relaxed">
                We use your SSN to securely match you with your credit report.
                This is industry standard and required by federal law.
              </p>
            </div>
          </div>
        </motion.div>

        <div>
          <label
            htmlFor="ssnLast4"
            className="block text-[14px] font-semibold text-[#1e293b] mb-1.5"
          >
            Last 4 digits of SSN
          </label>
          <input
            {...register("ssnLast4")}
            id="ssnLast4"
            type="text"
            inputMode="numeric"
            maxLength={4}
            placeholder="••••"
            className={`w-full px-3.5 py-2.5 bg-[#f3f4f6] border rounded-lg text-[14px] transition-all duration-200 focus:outline-none focus:ring-2 ${
              errors.ssnLast4
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-200 focus:ring-emerald-200 focus:border-[#009966]"
            }`}
          />
          {errors.ssnLast4 && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm mt-1"
            >
              {errors.ssnLast4.message}
            </motion.p>
          )}
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-600 text-[12px]">
          <Shield size={14} className="text-emerald-600" />
          <span>256-bit SSL encryption</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-[#009966] to-[#00b377] text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Continue
        </motion.button>
      </form>
    </motion.div>
  );
}
