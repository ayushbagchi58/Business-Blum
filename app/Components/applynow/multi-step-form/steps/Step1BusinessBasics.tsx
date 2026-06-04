"use client";

import { motion } from "framer-motion";
import { Building2, DollarSign, TrendingUp, Clock } from "lucide-react";
import { StepProps } from "../types";

export default function Step1BusinessBasics({
  formData,
  updateFormData,
  onNext,
  errors,
}: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#08122E]">Business Basics</h2>
        <p className="mt-2 text-sm text-gray-600">
          Let's start with some basic information about your funding needs
        </p>
      </div>

      <div className="space-y-5">
        {/* Funding Amount */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
            <DollarSign className="h-4 w-4 text-[#0EA56B]" />
            How much funding do you need?
          </label>
          <select
            value={formData.fundingAmount}
            onChange={(e) => updateFormData({ fundingAmount: e.target.value })}
            className={`
              h-12 w-full rounded-xl border bg-white px-4
              text-sm text-[#08122E] outline-none
              transition-all duration-300
              focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10
              ${errors.fundingAmount ? "border-red-400" : "border-gray-300"}
            `}
          >
            <option value="">Select funding amount</option>
            <option value="$10,000 - $50,000">$10,000 - $50,000</option>
            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
            <option value="$100,000 - $250,000">$100,000 - $250,000</option>
            <option value="$250,000 - $500,000">$250,000 - $500,000</option>
            <option value="$500,000 - $1,000,000">$500,000 - $1,000,000</option>
            <option value="$1,000,000+">$1,000,000+</option>
          </select>
          {errors.fundingAmount && (
            <p className="mt-1 text-xs text-red-500">{errors.fundingAmount}</p>
          )}
        </div>

        {/* Monthly Revenue */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
            <TrendingUp className="h-4 w-4 text-[#0EA56B]" />
            What is your average monthly revenue?
          </label>
          <select
            value={formData.monthlyRevenue}
            onChange={(e) => updateFormData({ monthlyRevenue: e.target.value })}
            className={`
              h-12 w-full rounded-xl border bg-white px-4
              text-sm text-[#08122E] outline-none
              transition-all duration-300
              focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10
              ${errors.monthlyRevenue ? "border-red-400" : "border-gray-300"}
            `}
          >
            <option value="">Select monthly revenue</option>
            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
            <option value="$100,000 - $250,000">$100,000 - $250,000</option>
            <option value="$250,000 - $500,000">$250,000 - $500,000</option>
            <option value="$500,000+">$500,000+</option>
          </select>
          {errors.monthlyRevenue && (
            <p className="mt-1 text-xs text-red-500">{errors.monthlyRevenue}</p>
          )}
        </div>

        {/* Industry */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
            <Building2 className="h-4 w-4 text-[#0EA56B]" />
            What industry is your business in?
          </label>
          <select
            value={formData.industry}
            onChange={(e) => updateFormData({ industry: e.target.value })}
            className={`
              h-12 w-full rounded-xl border bg-white px-4
              text-sm text-[#08122E] outline-none
              transition-all duration-300
              focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10
              ${errors.industry ? "border-red-400" : "border-gray-300"}
            `}
          >
            <option value="">Select your industry</option>
            <option value="Construction">Construction</option>
            <option value="Trucking & Transportation">Trucking & Transportation</option>
            <option value="Restaurant & Food Service">Restaurant & Food Service</option>
            <option value="Healthcare & Medical">Healthcare & Medical</option>
            <option value="Auto Repair & Services">Auto Repair & Services</option>
            <option value="Retail">Retail</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Professional Services">Professional Services</option>
            <option value="Real Estate">Real Estate</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Other">Other</option>
          </select>
          {errors.industry && (
            <p className="mt-1 text-xs text-red-500">{errors.industry}</p>
          )}
        </div>

        {/* Time in Business */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#08122E]">
            <Clock className="h-4 w-4 text-[#0EA56B]" />
            How long has your business been operating?
          </label>
          <select
            value={formData.timeInBusiness}
            onChange={(e) => updateFormData({ timeInBusiness: e.target.value })}
            className={`
              h-12 w-full rounded-xl border bg-white px-4
              text-sm text-[#08122E] outline-none
              transition-all duration-300
              focus:border-[#0EA56B] focus:ring-4 focus:ring-[#0EA56B]/10
              ${errors.timeInBusiness ? "border-red-400" : "border-gray-300"}
            `}
          >
            <option value="">Select time in business</option>
            <option value="Less than 6 months">Less than 6 months</option>
            <option value="6 months - 1 year">6 months - 1 year</option>
            <option value="1 - 2 years">1 - 2 years</option>
            <option value="2 - 5 years">2 - 5 years</option>
            <option value="5+ years">5+ years</option>
          </select>
          {errors.timeInBusiness && (
            <p className="mt-1 text-xs text-red-500">{errors.timeInBusiness}</p>
          )}
        </div>

        {/* Trust Message */}
        <div className="mt-6 rounded-xl bg-gradient-to-br from-[#0EA56B]/10 to-[#0EA56B]/5 p-4">
          <p className="text-xs text-gray-700">
            <span className="font-semibold text-[#0EA56B]">✓ Soft Pull Only</span> - 
            This won't affect your credit score. We match you with the best lenders for your situation.
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="
            mt-6 flex h-12 w-full items-center justify-center
            rounded-xl bg-[#0EA56B] text-sm font-semibold text-white
            shadow-lg shadow-[#0EA56B]/25
            transition-all duration-300
            hover:bg-[#0c9461] hover:shadow-xl
          "
        >
          Continue to Contact Info
        </button>
      </div>
    </motion.div>
  );
}
