"use client";

import { motion } from "framer-motion";
import { Building2, Hash, MapPin, FileText } from "lucide-react";
import { StepProps } from "../types";

export default function Step3BusinessDetails({
  formData,
  updateFormData,
  onNext,
  onBack,
  errors,
}: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#08122E]">Business Details</h2>
        <p className="mt-2 text-sm text-gray-600">
          Just a few more details to match you with the best lenders
        </p>
      </div>

      <div className="space-y-5">
        {/* EIN */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
            <Hash className="h-4 w-4 text-[#0EA56B]" />
            Business EIN (Tax ID Number)
          </label>
          <input
            type="text"
            value={formData.ein}
            onChange={(e) => updateFormData({ ein: e.target.value })}
            placeholder="12-3456789"
            className={`
              h-12 w-full rounded-xl border bg-white px-4
              text-sm text-[#08122E] outline-none
              transition-all duration-300
              placeholder:text-gray-400
              focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10
              ${errors.ein ? "border-red-400" : "border-gray-300"}
            `}
          />
          {errors.ein && (
            <p className="mt-1 text-xs text-red-500">{errors.ein}</p>
          )}
        </div>

        {/* Business Address */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
            <MapPin className="h-4 w-4 text-[#0EA56B]" />
            Business Address
          </label>
          <input
            type="text"
            value={formData.businessAddress}
            onChange={(e) =>
              updateFormData({ businessAddress: e.target.value })
            }
            placeholder="123 Main St, City, State, ZIP"
            className={`
              h-12 w-full rounded-xl border bg-white px-4
              text-sm text-[#08122E] outline-none
              transition-all duration-300
              placeholder:text-gray-400
              focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10
              ${errors.businessAddress ? "border-red-400" : "border-gray-300"}
            `}
          />
          {errors.businessAddress && (
            <p className="mt-1 text-xs text-red-500">
              {errors.businessAddress}
            </p>
          )}
        </div>

        {/* Business Entity Type */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
            <Building2 className="h-4 w-4 text-[#0EA56B]" />
            Business Entity Type
          </label>
          <select
            value={formData.businessEntityType}
            onChange={(e) =>
              updateFormData({ businessEntityType: e.target.value })
            }
            className={`
              h-12 w-full rounded-xl border bg-white px-4
              text-sm text-[#08122E] outline-none
              transition-all duration-300
              focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10
              ${errors.businessEntityType ? "border-red-400" : "border-gray-300"}
            `}
          >
            <option value="">Select entity type</option>
            <option value="LLC">LLC</option>
            <option value="Corporation">Corporation</option>
            <option value="S-Corporation">S-Corporation</option>
            <option value="Partnership">Partnership</option>
            <option value="Sole Proprietorship">Sole Proprietorship</option>
            <option value="Non-Profit">Non-Profit</option>
          </select>
          {errors.businessEntityType && (
            <p className="mt-1 text-xs text-red-500">
              {errors.businessEntityType}
            </p>
          )}
        </div>

        {/* Estimated Credit Score */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
            <FileText className="h-4 w-4 text-[#0EA56B]" />
            Estimated Credit Score (Optional)
          </label>
          <select
            value={formData.estimatedCreditScore}
            onChange={(e) =>
              updateFormData({ estimatedCreditScore: e.target.value })
            }
            className="
              h-12 w-full rounded-xl border border-gray-300 bg-white px-4
              text-sm text-[#08122E] outline-none
              transition-all duration-300
              focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10
            "
          >
            <option value="">Select credit score range</option>
            <option value="Excellent (720+)">Excellent (720+)</option>
            <option value="Good (680-719)">Good (680-719)</option>
            <option value="Fair (640-679)">Fair (640-679)</option>
            <option value="Poor (600-639)">Poor (600-639)</option>
            <option value="Bad (Below 600)">Bad (Below 600)</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>

        {/* Trust Message */}
        <div className="mt-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 p-4">
          <p className="text-xs text-gray-700">
            <span className="font-semibold text-[#0EA56B]">✓ Almost Done!</span>{" "}
            - One more step and we'll match you with lenders ready to fund your
            business.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={onBack}
            className="
              flex h-12 flex-1 items-center justify-center
              rounded-xl border-2 border-gray-300 bg-white
              text-sm font-semibold text-gray-700
              transition-all duration-300
              hover:border-gray-400 hover:bg-gray-50
            "
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="
              flex h-12 flex-1 items-center justify-center
              rounded-xl bg-[#0EA56B] text-sm font-semibold text-white
              shadow-lg shadow-[#0EA56B]/25
              transition-all duration-300
              hover:bg-[#0c9461] hover:shadow-xl
            "
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  );
}
