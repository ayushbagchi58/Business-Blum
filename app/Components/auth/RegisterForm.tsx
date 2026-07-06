"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { RegisterFormData } from "./types";
import { useRegister } from "@/hooks/useAuth";
import { syncSessionToCookies } from "@/lib/sessionSync";

export default function RegisterForm() {
  const router = useRouter();
  const registerMutation = useRegister();
  const [formData, setFormData] = useState<RegisterFormData>({
    legal_name: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
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

    if (!formData.legal_name) {
      newErrors.legal_name = "Legal name is required";
    }

    if (!formData.first_name) {
      newErrors.first_name = "First name is required";
    }

    if (!formData.last_name) {
      newErrors.last_name = "Last name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone_number) {
      newErrors.phone_number = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone_number.replace(/\D/g, ""))) {
      newErrors.phone_number = "Invalid phone number (10 digits required)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign Up clicked");
    // Backend integration placeholder
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await registerMutation.mutateAsync(formData);

        if (response.success && response.data) {
          // Store user_id in sessionStorage for OTP verification
          // The API uses owner_id field primarily
          const userId =
            response.data.owner.owner_id || response.data.owner.uid;

          console.log("✅ Registration Response:");
          console.log("  Full Response:", response);
          console.log("  Owner ID:", userId);
          console.log("  Email:", formData.email);

          if (!userId) {
            console.error("❌ Could not extract user ID from response");
            toast.error(
              "Registration succeeded but session setup failed. Please try logging in."
            );
            return;
          }

          if (typeof window !== "undefined") {
            sessionStorage.setItem("temp_user_id", userId);
            sessionStorage.setItem("temp_user_email", formData.email);

            // Sync to cookies immediately for middleware
            syncSessionToCookies();

            // Verify it was stored
            const storedUserId = sessionStorage.getItem("temp_user_id");
            console.log("  Stored User ID:", storedUserId);
          }

          // Use router.replace instead of router.push to prevent back navigation
          router.replace(
            `/verify-registration?email=${encodeURIComponent(formData.email)}&uid=${encodeURIComponent(userId)}`
          );
        }
      } catch (error) {
        // Error is already handled by the mutation's onError
        console.error("Registration error:", error);
      }
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
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

        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
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

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-medium uppercase text-gray-400">
                OR
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
                Legal Name
              </label>
              <input
                type="text"
                placeholder="AyushBagchi"
                value={formData.legal_name}
                onChange={(e) =>
                  handleInputChange("legal_name", e.target.value)
                }
                className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10 ${
                  errors.legal_name ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.legal_name && (
                <p className="mt-1 text-xs text-red-500">{errors.legal_name}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
                First Name
              </label>
              <input
                type="text"
                placeholder="Ayush"
                value={formData.first_name}
                onChange={(e) =>
                  handleInputChange("first_name", e.target.value)
                }
                className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10 ${
                  errors.first_name ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.first_name && (
                <p className="mt-1 text-xs text-red-500">{errors.first_name}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Bagchi"
                value={formData.last_name}
                onChange={(e) => handleInputChange("last_name", e.target.value)}
                className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10 ${
                  errors.last_name ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.last_name && (
                <p className="mt-1 text-xs text-red-500">{errors.last_name}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
                Email Address
              </label>
              <input
                type="email"
                placeholder="ayushbagchi144@gmail.com"
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

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="9123990338"
                value={formData.phone_number}
                onChange={(e) =>
                  handleInputChange("phone_number", e.target.value)
                }
                className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10 ${
                  errors.phone_number ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.phone_number && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.phone_number}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={registerMutation.isPending}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0EA56B] text-sm font-semibold text-white transition-all hover:bg-[#0c9461] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {registerMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

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
