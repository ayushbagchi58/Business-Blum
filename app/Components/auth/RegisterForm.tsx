"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, Check } from "lucide-react";
import { RegisterFormData } from "./types";

export default function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof RegisterFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign Up clicked");
    // Backend integration placeholder
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Register form submitted:", formData);
      // Backend integration placeholder
      // For now, redirect to dashboard
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          {/* Step Indicator */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0EA56B] text-sm font-semibold text-white">
              <Check className="h-4 w-4" />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-600">
              2
            </div>
          </div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Step 1 of 2
          </p>
          <h1 className="text-3xl font-bold text-gray-900">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Start finding funding in minutes. No credit check required.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Google Sign Up */}
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border-2 border-gray-200 bg-white text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
            >
              <Image
                src="https://www.google.com/favicon.ico"
                alt="Google"
                width={20}
                height={20}
              />
              Sign up with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-medium uppercase text-gray-400">
                OR
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Maria Gonzalez"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10 ${
                  errors.fullName ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10 ${
                  errors.email ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className={`h-12 w-full rounded-xl border bg-white px-4 pr-12 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10 ${
                    errors.password ? "border-red-400" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-700"
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
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0EA56B] text-sm font-semibold text-white transition-all hover:bg-[#0c9461]"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-[#0EA56B] hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
