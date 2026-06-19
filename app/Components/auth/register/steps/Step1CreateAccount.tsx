"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { step1Schema } from "../validation";

interface Step1Data {
  email: string;
  password: string;
  confirmPassword: string;
}

interface Step1CreateAccountProps {
  onNext: (data: Step1Data) => void;
  initialData?: Partial<Step1Data>;
}

export default function Step1CreateAccount({
  onNext,
  initialData,
}: Step1CreateAccountProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: yupResolver(step1Schema),
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
          Let&apos;s get started
        </h2>
        <p className="text-[14px] text-gray-600 text-center">
          Create your Business Blum account
        </p>
      </div>

      <form onSubmit={handleSubmit(onNext)} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-[14px] font-semibold text-[#1e293b] mb-1.5"
          >
            Email address
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="princessiwouno@gmail.com"
            className={`w-full px-3.5 py-2.5 bg-[#f3f4f6] border rounded-lg text-[14px] transition-all duration-200 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-200 focus:ring-emerald-200 focus:border-[#009966]"
            }`}
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm mt-1"
            >
              {errors.email.message}
            </motion.p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-[14px] font-semibold text-[#1e293b] mb-1.5"
          >
            Password
          </label>
          <div className="relative">
            <input
              {...register("password")}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="At least 8 characters"
              className={`w-full px-3.5 py-2.5 bg-[#f3f4f6] border rounded-lg text-[14px] transition-all duration-200 focus:outline-none focus:ring-2 pr-11 ${
                errors.password
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-200 focus:ring-emerald-200 focus:border-[#009966]"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm mt-1"
            >
              {errors.password.message}
            </motion.p>
          )}
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-[14px] font-semibold text-[#1e293b] mb-1.5"
          >
            Confirm password
          </label>
          <div className="relative">
            <input
              {...register("confirmPassword")}
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              className={`w-full px-3.5 py-2.5 bg-[#f3f4f6] border rounded-lg text-[14px] transition-all duration-200 focus:outline-none focus:ring-2 pr-11 ${
                errors.confirmPassword
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-200 focus:ring-emerald-200 focus:border-[#009966]"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm mt-1"
            >
              {errors.confirmPassword.message}
            </motion.p>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-[#009966] to-[#00b377] text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-2"
        >
          Continue
        </motion.button>

        <p className="text-center text-[14px] text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#009966] hover:text-[#007a52] transition-colors"
          >
            Log in
          </Link>
        </p>
      </form>
    </motion.div>
  );
}
