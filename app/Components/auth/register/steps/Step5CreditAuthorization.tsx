"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { Lock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { step5Schema } from "../validation";

interface Step5Data {
  creditAuthorization: boolean;
}

interface Step5CreditAuthorizationProps {
  onNext: (data: Step5Data) => void;
  onBack: () => void;
  initialData?: Partial<Step5Data>;
}

export default function Step5CreditAuthorization({
  onNext,
  onBack,
  initialData,
}: Step5CreditAuthorizationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step5Data>({
    resolver: yupResolver(step5Schema),
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
          We&apos;ll check your credit
        </h2>
        <p className="text-[14px] text-gray-600 text-center">
          Review and agree to continue
        </p>
      </div>

      <form onSubmit={handleSubmit(onNext)} className="space-y-5">
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 rounded-lg p-3.5"
          >
            <div className="flex gap-2.5">
              <Lock
                className="text-emerald-600 flex-shrink-0 mt-0.5"
                size={20}
              />
              <div>
                <h3 className="text-[15px] font-semibold text-[#1e293b] mb-1">
                  Credit data access
                </h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  We&apos;ll access your credit reports from major bureaus to
                  provide personalized recommendations.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 rounded-lg p-3.5"
          >
            <div className="flex gap-2.5">
              <CheckCircle
                className="text-emerald-600 flex-shrink-0 mt-0.5"
                size={20}
              />
              <div>
                <h3 className="text-[15px] font-semibold text-[#1e293b] mb-1">
                  Ongoing monitoring
                </h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  We&apos;ll monitor your credit regularly to track your
                  progress and alert you to changes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-100 rounded-lg p-3.5"
        >
          <p className="text-[13px] text-gray-700 leading-relaxed">
            I authorize Business Blum to access my credit information and
            provide ongoing monitoring services. I understand this is required
            to use the platform.
          </p>
        </motion.div>

        <div className="flex items-start gap-2.5">
          <input
            {...register("creditAuthorization")}
            id="creditAuthorization"
            type="checkbox"
            className="mt-0.5 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
          />
          <label
            htmlFor="creditAuthorization"
            className="text-[13px] text-gray-700 cursor-pointer"
          >
            I have read and agree to the credit authorization
          </label>
        </div>
        {errors.creditAuthorization && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 text-sm"
          >
            {errors.creditAuthorization.message}
          </motion.p>
        )}

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onBack}
            className="flex-1 bg-white border-2 border-gray-300 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex-1 bg-gradient-to-r from-[#009966] to-[#00b377] text-white font-semibold py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            I Agree & Continue
          </motion.button>
        </div>

        <p className="text-center text-[12px] text-gray-500">
          By continuing, you agree to our{" "}
          <Link
            href="/terms"
            className="text-gray-700 underline hover:text-[#009966] transition-colors"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="text-gray-700 underline hover:text-[#009966] transition-colors"
          >
            Privacy Policy
          </Link>
        </p>
      </form>
    </motion.div>
  );
}
