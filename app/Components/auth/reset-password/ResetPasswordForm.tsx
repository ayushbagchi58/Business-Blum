"use client";

import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Lock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";
import { ResetPasswordFormData, PasswordStrength } from "./types";
import { resetPasswordData } from "./data";
import { useResetPassword } from "@/hooks/useAuth";

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const resetPasswordMutation = useResetPassword();

  const [formData, setFormData] = useState<ResetPasswordFormData>({
    password: "",
    confirm_password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Calculate password strength
  const passwordStrength: PasswordStrength = useMemo(() => {
    const { password } = formData;
    if (!password) {
      return {
        score: 0,
        label: "",
        color: "",
        requirements: resetPasswordData.requirements.map((req) => ({
          id: req.id,
          label: req.label,
          met: false,
        })),
      };
    }

    const requirements = resetPasswordData.requirements.map((req) => ({
      id: req.id,
      label: req.label,
      met: req.regex.test(password),
    }));

    const metCount = requirements.filter((req) => req.met).length;
    const strengthLevel =
      resetPasswordData.strengthLevels[metCount] ||
      resetPasswordData.strengthLevels[0];

    return {
      score: metCount,
      label: strengthLevel.label,
      color: strengthLevel.color,
      requirements,
    };
    // Only depend on password field, not entire formData object
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.password]);

  const handleInputChange = (
    field: keyof ResetPasswordFormData,
    value: string
  ) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Check if all password requirements are met
    const allRequirementsMet = passwordStrength.requirements.every(
      (req) => req.met
    );

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!allRequirementsMet) {
      newErrors.password = "Password does not meet all requirements";
    }

    if (!formData.confirm_password) {
      newErrors.confirm_password = "Please confirm your password";
    } else if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Check if token exists
    if (!token) {
      toast.error(
        "Invalid password reset link. Please use the link from your email."
      );
      return;
    }

    try {
      console.log("🔐 Resetting password with token:", token);

      const response = await resetPasswordMutation.mutateAsync({
        token,
        data: {
          password: formData.password,
          confirm_password: formData.confirm_password,
        },
      });

      if (response.success) {
        console.log("✅ Password reset successfully");

        // Success toast already shown by hook from API response

        // Redirect to login page
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      }
    } catch (error) {
      // Error toast already shown by hook
      console.error("❌ Password reset failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0EA56B] to-[#0c9461]"
          >
            <Lock className="h-8 w-8 text-white" />
          </motion.div>

          <h1 className="text-3xl font-bold text-[#08122E]">
            {resetPasswordData.title}
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {resetPasswordData.subtitle}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your new password"
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password}</p>
              )}

              {formData.password && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-600">
                      Password Strength
                    </span>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: passwordStrength.color }}
                    >
                      {passwordStrength.label}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <div
                        key={index}
                        className="h-1.5 flex-1 rounded-full transition-all"
                        style={{
                          backgroundColor:
                            index < passwordStrength.score
                              ? passwordStrength.color
                              : "#e5e7eb",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {formData.password && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 space-y-2 rounded-lg bg-gray-50 p-3"
                >
                  {passwordStrength.requirements.map((req) => (
                    <div key={req.id} className="flex items-center gap-2">
                      {req.met ? (
                        <CheckCircle2 className="h-4 w-4 text-[#0EA56B]" />
                      ) : (
                        <XCircle className="h-4 w-4 text-gray-300" />
                      )}
                      <span
                        className={`text-xs ${
                          req.met ? "text-gray-700" : "text-gray-500"
                        }`}
                      >
                        {req.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your new password"
                  value={formData.confirm_password}
                  onChange={(e) =>
                    handleInputChange("confirm_password", e.target.value)
                  }
                  className={`h-12 w-full rounded-xl border bg-white px-4 pr-12 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10 ${
                    errors.confirm_password
                      ? "border-red-400"
                      : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.confirm_password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.confirm_password}
                </p>
              )}

              {formData.password &&
                formData.confirm_password &&
                !errors.confirm_password && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 flex items-center gap-2"
                  >
                    {formData.password === formData.confirm_password ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-[#0EA56B]" />
                        <span className="text-xs text-[#0EA56B]">
                          Passwords match
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 text-red-500" />
                        <span className="text-xs text-red-500">
                          Passwords do not match
                        </span>
                      </>
                    )}
                  </motion.div>
                )}
            </div>

            <button
              type="submit"
              disabled={resetPasswordMutation.isPending}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0EA56B] text-sm font-semibold text-white transition-all hover:bg-[#0c9461] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {resetPasswordMutation.isPending ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Resetting Password...
                </>
              ) : (
                <>
                  Reset Password
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            {!token && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-4 py-3"
              >
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-700">
                  No valid token found. Please use the link from your email.
                </p>
              </motion.div>
            )}
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          Remember your password?{" "}
          <a
            href="/login"
            className="font-semibold text-[#0EA56B] hover:underline"
          >
            Back to Login
          </a>
        </p>
      </motion.div>
    </div>
  );
}
