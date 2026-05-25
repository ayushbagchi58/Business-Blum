"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CircleCheck,
  Clock3,
  Globe,
  ShieldCheck,
} from "lucide-react";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { applyNowFormSectionData } from "./data";
import { FormField } from "./types";

const schema = yup
  .object({
    legalBusinessName: yup.string().required("Legal business name is required"),

    ein: yup
      .string()
      .required("EIN is required")
      .matches(/^\d{2}[- ]?\d{7}$/, "Enter valid EIN"),

    businessEntityType: yup
      .string()
      .required("Business entity type is required"),

    businessAddress: yup.string().required("Business address is required"),

    businessPhone: yup
      .string()
      .required("Business phone is required")
      .matches(
        /^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/,
        "Enter valid phone number"
      ),

    website: yup.string().notRequired(),

    industry: yup.string().required("Industry is required"),

    timeInBusiness: yup.string().required("Time in business is required"),

    monthlyRevenue: yup.string().required("Monthly revenue is required"),

    firstName: yup.string().required("First name is required"),

    lastName: yup.string().required("Last name is required"),

    ssn: yup
      .string()
      .required("SSN is required")
      .matches(/^\d{3}[- ]?\d{2}[- ]?\d{4}$/, "Enter valid SSN"),

    ownershipPercentage: yup
      .string()
      .required("Ownership percentage is required"),

    email: yup
      .string()
      .email("Enter valid email")
      .required("Email is required"),

    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(
        /^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/,
        "Enter valid phone number"
      ),

    estimatedCreditScore: yup.string().notRequired(),

    fundingAmount: yup.string().required("Funding amount is required"),

    fundingPurpose: yup.string().required("Funding purpose is required"),

    preferredFundingType: yup.string().notRequired(),

    creditAuthorization: yup
      .boolean()
      .required()
      .oneOf([true], "Authorization is required"),

    contactConsent: yup
      .boolean()
      .required()
      .oneOf([true], "Consent is required"),
  })
  .required();

type FormValues = yup.InferType<typeof schema>;

export default function ApplyNowFormSection() {
  const {
    badge,
    heading,
    description,
    fundingStats,
    businessInformationFields,
    ownerInformationFields,
    fundingNeedsFields,
    authorizationItems,
    documents,
    features,
    buttonText,
    disclaimer,
  } = applyNowFormSectionData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(schema) as any,
    mode: "onTouched",
    defaultValues: {
      legalBusinessName: "",
      ein: "",
      businessEntityType: "",
      businessAddress: "",
      businessPhone: "",
      website: "",
      industry: "",
      timeInBusiness: "",
      monthlyRevenue: "",
      firstName: "",
      lastName: "",
      ssn: "",
      ownershipPercentage: "",
      email: "",
      phoneNumber: "",
      estimatedCreditScore: "",
      fundingAmount: "",
      fundingPurpose: "",
      preferredFundingType: "",
      creditAuthorization: false,
      contactConsent: false,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const renderField = (field: FormField) => {
    const error = errors[field.name];

    return (
      <div key={field.id} className={field.fullWidth ? "md:col-span-2" : ""}>
        <label className="mb-1.5 block text-[11px] font-semibold text-[#071133]">
          {field.label}
        </label>

        {field.type === "select" ? (
          <>
            <select
              {...register(field.name)}
              className={`
                h-[44px] w-full rounded-[14px]
                border bg-[#fcfcfd] px-3
                text-[12px] text-[#071133]
                outline-none transition-all duration-300
                focus:border-[#0EA56B]
                focus:ring-4 focus:ring-[#0EA56B]/10
                ${error ? "border-red-400" : "border-[#d7dce5]"}
              `}
            >
              <option value="">Select option</option>

              {field.options?.map((item) => (
                <option key={item.id} value={item.label}>
                  {item.label}
                </option>
              ))}
            </select>

            {error && (
              <p className="mt-1 text-[10px] font-medium text-red-500">
                {String(error.message)}
              </p>
            )}
          </>
        ) : (
          <>
            <div className="relative">
              {field.icon && (
                <Globe className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#98A2B3]" />
              )}

              <input
                type={field.inputType || "text"}
                placeholder={field.placeholder}
                {...register(field.name)}
                className={`
                  h-[44px] w-full rounded-[14px]
                  border bg-[#fcfcfd]
                  ${field.icon ? "pl-10 pr-3" : "px-3"}
                  text-[12px] text-[#071133]
                  outline-none transition-all duration-300
                  placeholder:text-[#98A2B3]
                  focus:border-[#0EA56B]
                  focus:ring-4 focus:ring-[#0EA56B]/10
                  ${error ? "border-red-400" : "border-[#d7dce5]"}
                `}
              />
            </div>

            {error && (
              <p className="mt-1 text-[10px] font-medium text-red-500">
                {String(error.message)}
              </p>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <section className="w-full overflow-hidden bg-[#f5f7fb] py-7 sm:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-[860px] px-3 sm:px-4 lg:px-5">
        <motion.div
          initial={{
            opacity: 0,
            y: 14,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            overflow-hidden rounded-[20px]
            border border-black/5 bg-white
            shadow-[0_10px_30px_rgba(0,0,0,0.05)]
          "
        >
          <div className="bg-[#0A8F63] px-3 py-4 sm:px-5 sm:py-5">
            <div className="mx-auto max-w-2xl text-center">
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full bg-white/10
                  px-2.5 py-1.5 backdrop-blur-md
                "
              >
                <ShieldCheck className="h-3.5 w-3.5 text-[#9CF5D3]" />

                <span className="text-[10px] font-semibold text-white sm:text-[11px]">
                  {badge}
                </span>
              </div>

              <h2
                className="
                  mt-3 text-[20px]
                  font-black tracking-tight
                  text-white sm:text-[26px]
                  md:text-[32px]
                "
              >
                {heading}
              </h2>

              <p
                className="
                  mt-1.5 text-[11px]
                  text-white/85 sm:text-[12px]
                "
              >
                {description}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">
                {fundingStats.map((item) => (
                  <div
                    key={item.id}
                    className="
                      rounded-[12px] bg-white/10
                      px-2 py-2.5 backdrop-blur-md
                    "
                  >
                    <p className="text-[9px] text-white/70 sm:text-[10px]">
                      {item.label}
                    </p>

                    <p
                      className="
                        mt-1 text-[10px]
                        font-bold text-white
                        sm:text-[12px]
                      "
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-3 py-5 sm:px-5 sm:py-6"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-[16px] font-black tracking-tight text-[#071133] sm:text-[18px]">
                  Basic Business Information
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {businessInformationFields.map(renderField)}
                </div>
              </div>

              <div className="border-t border-black/10 pt-6">
                <h3 className="text-[16px] font-black tracking-tight text-[#071133] sm:text-[18px]">
                  Owner Information
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {ownerInformationFields.map(renderField)}
                </div>
              </div>

              <div className="border-t border-black/10 pt-6">
                <h3 className="text-[16px] font-black tracking-tight text-[#071133] sm:text-[18px]">
                  Funding Needs
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {fundingNeedsFields.map(renderField)}
                </div>
              </div>

              <div className="border-t border-black/10 pt-6">
                <h3 className="text-[16px] font-black tracking-tight text-[#071133] sm:text-[18px]">
                  Authorization
                </h3>

                <div className="mt-4 space-y-3">
                  {authorizationItems.map((item) => {
                    const fieldName =
                      item.id === 1 ? "creditAuthorization" : "contactConsent";

                    const error = errors[fieldName];

                    return (
                      <div key={item.id}>
                        <label
                          className="
                              flex items-start gap-3
                              rounded-[16px] border border-[#d7dce5]
                              bg-[#fcfcfd] p-3
                            "
                        >
                          <input
                            type="checkbox"
                            {...register(fieldName)}
                            className="mt-1 h-3.5 w-3.5 accent-[#0EA56B]"
                          />

                          <span
                            className="
                                text-[11px]
                                leading-5 text-[#475467]
                              "
                          >
                            {item.text}
                          </span>
                        </label>

                        {error && (
                          <p className="mt-1 text-[10px] font-medium text-red-500">
                            {String(error.message)}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-black/10 pt-6">
                <h3 className="text-[16px] font-black tracking-tight text-[#071133] sm:text-[18px]">
                  Documents You May Need
                </h3>

                <div
                  className="
                    mt-4 rounded-[18px] border
                    border-[#b7d4ff] bg-[#f5f9ff]
                    p-4
                  "
                >
                  <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
                    {documents.map((item) => (
                      <div key={item.id} className="flex items-start gap-2">
                        <CircleCheck className="mt-0.5 h-3.5 w-3.5 text-[#0EA56B]" />

                        <p
                          className="
                            text-[11px]
                            leading-5 text-[#475467]
                          "
                        >
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p
                    className="
                      mt-3 text-[10px]
                      italic text-[#667085]
                    "
                  >
                    Not all industries require all documents.
                  </p>
                </div>
              </div>

              <div
                className="
                  rounded-[18px] border border-[#b7efd7]
                  bg-[#eefbf5] p-4
                "
              >
                <div
                  className="
                    flex flex-col items-center
                    justify-center gap-3
                    text-center md:flex-row
                  "
                >
                  {features.map((item) => (
                    <div key={item.id} className="flex items-center gap-2">
                      {item.id === 1 && (
                        <ShieldCheck className="h-3.5 w-3.5 text-[#0EA56B]" />
                      )}

                      {item.id === 2 && (
                        <Building2 className="h-3.5 w-3.5 text-[#0EA56B]" />
                      )}

                      {item.id === 3 && (
                        <Clock3 className="h-3.5 w-3.5 text-[#0EA56B]" />
                      )}

                      <span className="text-[11px] font-medium text-[#0F172A]">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="
                  flex h-[50px] w-full
                  items-center justify-center gap-2
                  rounded-[16px] bg-[#0EA56B]
                  text-[12px] font-bold text-white
                  shadow-[0_10px_20px_rgba(14,165,107,0.18)]
                  transition-all duration-300
                  hover:bg-[#0c9461]
                "
              >
                {buttonText}

                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <p
                className="
                  text-center text-[10px]
                  leading-5 text-[#667085]
                "
              >
                {disclaimer}
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
