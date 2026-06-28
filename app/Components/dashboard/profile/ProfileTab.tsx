"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit2, Check } from "lucide-react";
import { ProfileData } from "./types";

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
            Business Basics
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <ProfileField
              isEditing={isEditing}
              onChange={handleInputChange}
              label="How much funding do you need?"
              value={profileData.fundingAmount}
              field="fundingAmount"
            />
            <ProfileField
              isEditing={isEditing}
              onChange={handleInputChange}
              label="Average Monthly Revenue"
              value={profileData.monthlyRevenue}
              field="monthlyRevenue"
            />
            <ProfileField
              isEditing={isEditing}
              onChange={handleInputChange}
              label="Industry"
              value={profileData.industry}
              field="industry"
            />
            <ProfileField
              isEditing={isEditing}
              onChange={handleInputChange}
              label="Time in Business"
              value={profileData.timeInBusiness}
              field="timeInBusiness"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
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
