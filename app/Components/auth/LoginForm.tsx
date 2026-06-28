"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { LoginFormData } from "./types";
import LoadingScreen from "../applynow/LoadingScreen";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    field: keyof LoginFormData,
    value: string | boolean
  ) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign In clicked");
    // Backend integration placeholder
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Login form submitted:", formData);

      // Show success notification
      toast.success("Login Successful!", {
        description: "Welcome back to Business Blum",
        duration: 3000,
      });

      // Show loading screen after a brief delay
      setTimeout(() => {
        setShowLoadingScreen(true);
      }, 500);

      // Redirect to dashboard after loading screen
      setTimeout(() => {
        router.push("/dashboard");
      }, 5500);
    }
  };

  return (
    <>
      {showLoadingScreen && (
        <LoadingScreen
          mainText="Welcome Back!"
          subText="Loading your dashboard"
          onComplete={() => router.push("/dashboard")}
        />
      )}

      <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to your Business Blum account.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Google Sign In */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border-2 border-gray-200 bg-white text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                <Image
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Continue with Google
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs font-medium uppercase text-gray-400">
                  OR
                </span>
                <div className="h-px flex-1 bg-gray-200" />
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
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-[#0EA56B] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onChange={(e) =>
                    handleInputChange("rememberMe", e.target.checked)
                  }
                  className="h-4 w-4 rounded border-gray-300 text-[#0EA56B] focus:ring-2 focus:ring-[#0EA56B]/20"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-sm text-gray-700"
                >
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0EA56B] text-sm font-semibold text-white transition-all hover:bg-[#0c9461]"
              >
                Sign in
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            {/* Footer */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-[#0EA56B] hover:underline"
              >
                Create one free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
