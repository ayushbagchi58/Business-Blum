"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit2, Check, Eye, EyeOff, Lock, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { ProfileData } from "./types";
import { useChangePassword } from "@/hooks/useAuth";
import { useAppSelector } from "@/store/hooks";

interface ProfileTabProps {
  initialData: ProfileData;
}

interface ProfileFieldProps {
  label: string;
  value: string;
  field: keyof ProfileData;
  fullWidth?: boolean;
  isEditing: boolean;
  onChange: (field: keyof ProfileData, value: string) => void;
}

function ProfileField({
  label,
  value,
  field,
  fullWidth = false,
  isEditing,
  onChange,
}: ProfileFieldProps) {
  return (
    <div className={fullWidth ? "sm:col-span-2" : ""}>
      <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </label>
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(field, e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-[#0EA56B] focus:ring-2 focus:ring-[#0EA56B]/20"
        />
      ) : (
        <p className="mt-1 text-sm font-medium text-gray-900">{value}</p>
      )}
    </div>
  );
}

export default function ProfileTab({ initialData }: ProfileTabProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>(initialData);
  const [editedData, setEditedData] = useState<ProfileData>(initialData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Get user from Redux store
  const user = useAppSelector((state) => state.auth.user);

  // Change password hook
  const changePasswordMutation = useChangePassword();

  // Password change states
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState<Record<string, string>>(
    {}
  );

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData(profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData(profileData);
  };

  const handleSave = () => {
    setProfileData(editedData);
    setIsEditing(false);
    setShowSuccessMessage(true);

    // Backend integration placeholder
    console.log("Saving profile data:", editedData);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setEditedData({ ...editedData, [field]: value });
  };

  const handlePasswordInputChange = (field: string, value: string) => {
    setPasswordData({ ...passwordData, [field]: value });
    // Clear error for this field
    if (passwordErrors[field]) {
      setPasswordErrors({ ...passwordErrors, [field]: "" });
    }
  };

  const validatePasswordChange = (): boolean => {
    const errors: Record<string, string> = {};

    if (!passwordData.currentPassword) {
      errors.currentPassword = "Current password is required";
    }

    if (!passwordData.newPassword) {
      errors.newPassword = "New password is required";
    } else if (passwordData.newPassword.length < 8) {
      errors.newPassword = "Password must be at least 8 characters";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]/.test(
        passwordData.newPassword
      )
    ) {
      errors.newPassword =
        "Must include uppercase, lowercase, number, and special character";
    }

    if (!passwordData.confirmPassword) {
      errors.confirmPassword = "Please confirm your new password";
    } else if (passwordData.newPassword !== passwordData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (
      passwordData.currentPassword &&
      passwordData.newPassword &&
      passwordData.currentPassword === passwordData.newPassword
    ) {
      errors.newPassword =
        "New password must be different from current password";
    }

    setPasswordErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePasswordChange = async () => {
    if (!validatePasswordChange()) return;

    // Check if user is logged in and has an id
    if (!user?.id) {
      toast.error("User session not found. Please log in again.");
      return;
    }

    console.log("🔑 Change Password - User ID Check:");
    console.log("  User from Redux:", user);
    console.log("  User ID being used:", user.id);
    console.log("  User ID type:", typeof user.id);

    try {
      const response = await changePasswordMutation.mutateAsync({
        userId: user.id,
        data: {
          old_password: passwordData.currentPassword,
          new_password: passwordData.newPassword,
          confirm_password: passwordData.confirmPassword,
        },
      });

      if (response.success) {
        // Success message already shown by the hook from API response
        // Reset password form
        setIsChangingPassword(false);
        setPasswordData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        setPasswordErrors({});
        setShowCurrentPassword(false);
        setShowNewPassword(false);
        setShowConfirmPassword(false);
      }
    } catch (error) {
      // Error message already shown by the hook
      console.error("❌ Password change failed:", error);
    }
  };

  const handleCancelPasswordChange = () => {
    setIsChangingPassword(false);
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setPasswordErrors({});
    setShowCurrentPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);
  };

  const getPasswordStrength = (password: string): string => {
    if (password.length === 0) return "";
    if (password.length < 8) return "Weak";

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&#]/.test(password);

    const strength = [
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialChar,
    ].filter(Boolean).length;

    if (strength < 3) return "Weak";
    if (strength === 3) return "Good";
    return "Strong";
  };

  const getPasswordStrengthColor = (strength: string): string => {
    switch (strength) {
      case "Weak":
        return "text-red-500";
      case "Good":
        return "text-yellow-500";
      case "Strong":
        return "text-[#0EA56B]";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your account and business information.
          </p>
        </div>

        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <Edit2 className="h-4 w-4" />
            Edit
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 rounded-lg bg-[#0EA56B] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0c9461]"
            >
              <Check className="h-4 w-4" />
              Save
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 rounded-lg bg-[#e8f5f0] p-4 text-sm text-[#0EA56B]"
          >
            <Check className="h-4 w-4" />
            Profile updated successfully.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl bg-white p-6 shadow-sm"
        >
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Contact Information
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <ProfileField
              isEditing={isEditing}
              onChange={handleInputChange}
              label="First Name"
              value={profileData.firstName}
              field="firstName"
            />
            <ProfileField
              isEditing={isEditing}
              onChange={handleInputChange}
              label="Last Name"
              value={profileData.lastName}
              field="lastName"
            />
            <ProfileField
              isEditing={isEditing}
              onChange={handleInputChange}
              label="Business Legal Name"
              value={profileData.businessName}
              field="businessName"
              fullWidth
            />
            <ProfileField
              isEditing={isEditing}
              onChange={handleInputChange}
              label="Email Address"
              value={profileData.email}
              field="email"
            />
            <ProfileField
              isEditing={isEditing}
              onChange={handleInputChange}
              label="Phone Number"
              value={profileData.phoneNumber}
              field="phoneNumber"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl bg-white p-6 shadow-sm"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Security Settings
            </h2>
            {!isChangingPassword && (
              <button
                onClick={() => setIsChangingPassword(true)}
                className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                <Lock className="h-3.5 w-3.5" />
                Change Password
              </button>
            )}
          </div>

          {!isChangingPassword ? (
            <div className="rounded-lg bg-gray-50 p-4">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Password</p>
                  <p className="mt-1 text-xs text-gray-600">
                    Last changed on {profileData.accountCreated}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Current Password <span className="text-red-500">*</span>
                </label>
                <div className="relative mt-1">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    value={passwordData.currentPassword}
                    onChange={(e) =>
                      handlePasswordInputChange(
                        "currentPassword",
                        e.target.value
                      )
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-gray-900 outline-none transition-colors focus:border-[#0EA56B] focus:ring-2 focus:ring-[#0EA56B]/20"
                    placeholder="Enter current password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {passwordErrors.currentPassword && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3 w-3" />
                    {passwordErrors.currentPassword}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  New Password <span className="text-red-500">*</span>
                </label>
                <div className="relative mt-1">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      handlePasswordInputChange("newPassword", e.target.value)
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-gray-900 outline-none transition-colors focus:border-[#0EA56B] focus:ring-2 focus:ring-[#0EA56B]/20"
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {passwordData.newPassword && !passwordErrors.newPassword && (
                  <p
                    className={`mt-1 text-xs ${getPasswordStrengthColor(getPasswordStrength(passwordData.newPassword))}`}
                  >
                    Password strength:{" "}
                    {getPasswordStrength(passwordData.newPassword)}
                  </p>
                )}
                {passwordErrors.newPassword && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3 w-3" />
                    {passwordErrors.newPassword}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Confirm New Password <span className="text-red-500">*</span>
                </label>
                <div className="relative mt-1">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={passwordData.confirmPassword}
                    onChange={(e) =>
                      handlePasswordInputChange(
                        "confirmPassword",
                        e.target.value
                      )
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-gray-900 outline-none transition-colors focus:border-[#0EA56B] focus:ring-2 focus:ring-[#0EA56B]/20"
                    placeholder="Confirm new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {passwordData.confirmPassword &&
                  passwordData.newPassword === passwordData.confirmPassword &&
                  !passwordErrors.confirmPassword && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-[#0EA56B]">
                      <Check className="h-3 w-3" />
                      Passwords match
                    </p>
                  )}
                {passwordErrors.confirmPassword && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3 w-3" />
                    {passwordErrors.confirmPassword}
                  </p>
                )}
              </div>

              <div className="rounded-lg bg-blue-50 p-3">
                <p className="mb-2 text-xs font-semibold text-gray-700">
                  Password Requirements:
                </p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <div
                      className={`h-1 w-1 rounded-full ${passwordData.newPassword.length >= 8 ? "bg-[#0EA56B]" : "bg-gray-400"}`}
                    />
                    At least 8 characters long
                  </li>
                  <li className="flex items-center gap-2">
                    <div
                      className={`h-1 w-1 rounded-full ${/[A-Z]/.test(passwordData.newPassword) && /[a-z]/.test(passwordData.newPassword) ? "bg-[#0EA56B]" : "bg-gray-400"}`}
                    />
                    Contains uppercase and lowercase letters
                  </li>
                  <li className="flex items-center gap-2">
                    <div
                      className={`h-1 w-1 rounded-full ${/\d/.test(passwordData.newPassword) ? "bg-[#0EA56B]" : "bg-gray-400"}`}
                    />
                    Contains at least one number
                  </li>
                  <li className="flex items-center gap-2">
                    <div
                      className={`h-1 w-1 rounded-full ${/[@$!%*?&#]/.test(passwordData.newPassword) ? "bg-[#0EA56B]" : "bg-gray-400"}`}
                    />
                    Contains at least one special character (@$!%*?&#)
                  </li>
                </ul>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={handleCancelPasswordChange}
                  disabled={changePasswordMutation.isPending}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePasswordChange}
                  disabled={changePasswordMutation.isPending || !user?.id}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0EA56B] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0c9461] disabled:cursor-not-allowed disabled:opacity-50"
                  title={!user?.id ? "User session not found" : ""}
                >
                  {changePasswordMutation.isPending ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4" />
                      Update Password
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl bg-white p-6 shadow-sm"
        >
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Business Details
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <ProfileField
              isEditing={isEditing}
              onChange={handleInputChange}
              label="Business EIN (Tax ID Number)"
              value={profileData.ein}
              field="ein"
            />
            <ProfileField
              isEditing={isEditing}
              onChange={handleInputChange}
              label="Business Entity Type"
              value={profileData.businessEntityType}
              field="businessEntityType"
            />
            <ProfileField
              isEditing={isEditing}
              onChange={handleInputChange}
              label="Business Address"
              value={profileData.businessAddress}
              field="businessAddress"
              fullWidth
            />
            <ProfileField
              isEditing={isEditing}
              onChange={handleInputChange}
              label="Estimated Credit Score"
              value={profileData.estimatedCreditScore}
              field="estimatedCreditScore"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl bg-white p-6 shadow-sm"
        >
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Account
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Account Created
              </label>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {profileData.accountCreated}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
