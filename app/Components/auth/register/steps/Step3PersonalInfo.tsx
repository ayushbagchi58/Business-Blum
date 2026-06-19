"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { step3Schema } from "../validation";

interface Step3Data {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
}

interface Step3PersonalInfoProps {
  onNext: (data: Step3Data) => void;
  onBack: () => void;
  initialData?: Partial<Step3Data>;
}

export default function Step3PersonalInfo({
  onNext,
  onBack: _onBack,
  initialData,
}: Step3PersonalInfoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3Data>({
    resolver: yupResolver(step3Schema),
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
          Tell us about yourself
        </h2>
        <p className="text-[14px] text-gray-600 text-center">
          We need this to verify your identity
        </p>
      </div>

      <form onSubmit={handleSubmit(onNext)} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="firstName"
              className="block text-[14px] font-semibold text-[#1e293b] mb-1.5"
            >
              First name
            </label>
            <input
              {...register("firstName")}
              id="firstName"
              type="text"
              placeholder="John"
              className={`w-full px-3.5 py-2.5 bg-[#f3f4f6] border rounded-lg text-[14px] transition-all duration-200 focus:outline-none focus:ring-2 ${
                errors.firstName
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-200 focus:ring-emerald-200 focus:border-[#009966]"
              }`}
            />
            {errors.firstName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm mt-1"
              >
                {errors.firstName.message}
              </motion.p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-[14px] font-semibold text-[#1e293b] mb-1.5"
            >
              Last name
            </label>
            <input
              {...register("lastName")}
              id="lastName"
              type="text"
              placeholder="Doe"
              className={`w-full px-3.5 py-2.5 bg-[#f3f4f6] border rounded-lg text-[14px] transition-all duration-200 focus:outline-none focus:ring-2 ${
                errors.lastName
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-200 focus:ring-emerald-200 focus:border-[#009966]"
              }`}
            />
            {errors.lastName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm mt-1"
              >
                {errors.lastName.message}
              </motion.p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-[14px] font-semibold text-[#1e293b] mb-1.5"
          >
            Date of birth
          </label>
          <input
            {...register("dateOfBirth")}
            id="dateOfBirth"
            type="date"
            className={`w-full px-3.5 py-2.5 bg-[#f3f4f6] border rounded-lg text-[14px] transition-all duration-200 focus:outline-none focus:ring-2 ${
              errors.dateOfBirth
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-200 focus:ring-emerald-200 focus:border-[#009966]"
            }`}
          />
          {errors.dateOfBirth && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm mt-1"
            >
              {errors.dateOfBirth.message}
            </motion.p>
          )}
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-[14px] font-semibold text-[#1e293b] mb-1.5"
          >
            Phone number
          </label>
          <input
            {...register("phoneNumber")}
            id="phoneNumber"
            type="tel"
            placeholder="555-123-4567"
            className={`w-full px-3.5 py-2.5 bg-[#f3f4f6] border rounded-lg text-[14px] transition-all duration-200 focus:outline-none focus:ring-2 ${
              errors.phoneNumber
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-200 focus:ring-emerald-200 focus:border-[#009966]"
            }`}
          />
          {errors.phoneNumber && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm mt-1"
            >
              {errors.phoneNumber.message}
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
      </form>
    </motion.div>
  );
}
