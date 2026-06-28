"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Building, Lock, Eye, EyeOff } from "lucide-react";
import { StepProps } from "../types";

export default function Step2ContactInfo({
  formData,
  updateFormData,
  onNext,
  onBack,
  errors,
}: StepProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#08122E]">
          Contact Information
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          How can we reach you with your funding options?
        </p>
      </div>

      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
              <User className="h-4 w-4 text-[#0EA56B]" />
              First Name
            </label>
            <input
              type="text"
              value={formData.firstName || ""}
              onChange={(e) => updateFormData({ firstName: e.target.value })}
              placeholder="John"
              className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-[#08122E] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10"
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
              <User className="h-4 w-4 text-[#0EA56B]" />
              Last Name
            </label>
            <input
              type="text"
              value={formData.lastName || ""}
              onChange={(e) => updateFormData({ lastName: e.target.value })}
              placeholder="Smith"
              className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-[#08122E] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10"
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
            <Building className="h-4 w-4 text-[#0EA56B]" />
            Business Legal Name
          </label>
          <input
            type="text"
            value={formData.businessName || ""}
            onChange={(e) => updateFormData({ businessName: e.target.value })}
            placeholder="ABC Construction LLC"
            className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-[#08122E] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10"
          />
          {errors.businessName && (
            <p className="mt-1 text-xs text-red-500">{errors.businessName}</p>
          )}
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
            <Mail className="h-4 w-4 text-[#0EA56B]" />
            Email Address
          </label>
          <input
            type="email"
            value={formData.email || ""}
            onChange={(e) => updateFormData({ email: e.target.value })}
            placeholder="john@business.com"
            className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-[#08122E] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
            <Phone className="h-4 w-4 text-[#0EA56B]" />
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phoneNumber || ""}
            onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
            placeholder="(555) 123-4567"
            className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-[#08122E] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10"
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
              <Lock className="h-4 w-4 text-[#0EA56B]" />
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password || ""}
                onChange={(e) => updateFormData({ password: e.target.value })}
                placeholder="Min. 8 characters"
                autoComplete="new-password"
                className={`h-12 w-full rounded-xl border bg-white px-4 pr-12 text-sm text-[#08122E] outline-none transition-all duration-300 placeholder:text-gray-400 focus:ring-4 ${
                  errors.password
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-gray-300 focus:border-[#0EA56B] focus:ring-[#0EA56B]/10"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-700"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
            {formData.password && !errors.password && (
              <p
                className={
                  formData.password.length < 8
                    ? "mt-1 text-xs text-red-500"
                    : formData.password.length < 12
                      ? "mt-1 text-xs text-yellow-600"
                      : "mt-1 text-xs text-green-600"
                }
              >
                {formData.password.length < 8
                  ? "Weak password"
                  : formData.password.length < 12
                    ? "Good password"
                    : "Strong password"}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
              <Lock className="h-4 w-4 text-[#0EA56B]" />
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword || ""}
                onChange={(e) =>
                  updateFormData({ confirmPassword: e.target.value })
                }
                placeholder="Re-enter password"
                autoComplete="new-password"
                className={`h-12 w-full rounded-xl border bg-white px-4 pr-12 text-sm text-[#08122E] outline-none transition-all duration-300 placeholder:text-gray-400 focus:ring-4 ${
                  errors.confirmPassword
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-gray-300 focus:border-[#0EA56B] focus:ring-[#0EA56B]/10"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-700"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.confirmPassword}
              </p>
            )}
            {formData.confirmPassword &&
              formData.password === formData.confirmPassword &&
              !errors.confirmPassword && (
                <p className="mt-1 text-xs text-green-600">Passwords match</p>
              )}
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 p-4">
          <p className="text-xs text-gray-700">
            <span className="font-semibold text-blue-600">
              🔒 Your Privacy Matters
            </span>{" "}
            - We never sell your information. You'll only hear from lenders we
            match you with.
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onBack}
            className="flex h-12 flex-1 items-center justify-center rounded-xl border-2 border-gray-300 bg-white text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="flex h-12 flex-1 items-center justify-center rounded-xl bg-[#0EA56B] text-sm font-semibold text-white shadow-lg shadow-[#0EA56B]/25 transition-all duration-300 hover:bg-[#0c9461] hover:shadow-xl"
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  );
}
