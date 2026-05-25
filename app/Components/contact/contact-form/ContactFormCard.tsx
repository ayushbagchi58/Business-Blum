"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ContactFormField } from "./types";

interface ContactFormCardProps {
  heading: string;
  disclaimer: string;
  submitButtonText: string;
  formFields: ContactFormField[];
}

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const schema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),

  lastName: yup
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),

  email: yup
    .string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),

  phone: yup
    .string()
    .trim()
    .matches(/^[0-9+\-\s()]+$/, "Enter a valid phone number")
    .min(8, "Phone number is too short")
    .required("Phone number is required"),

  subject: yup
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .required("Subject is required"),

  message: yup
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export default function ContactFormCard({
  heading,
  disclaimer,
  submitButtonText,
  formFields,
}: ContactFormCardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 1200));

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className="
        rounded-2xl border border-black/5
        bg-white p-3
        shadow-[0_4px_14px_rgba(0,0,0,0.04)]
        sm:p-4 md:p-5
      "
    >
      <div className="h-1 w-10 rounded-full bg-[#12A56B]" />

      <h2
        className="
          mt-3 text-[18px]
          font-black tracking-tight
          text-[#071133]
          sm:text-[20px]
          md:text-[22px]
        "
      >
        {heading}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {formFields.map((field) => {
            const isTextarea = field.type === "textarea";

            const errorMessage =
              errors[field.name as keyof FormValues]?.message;

            return (
              <div
                key={field.id}
                className={
                  isTextarea || field.name === "subject" ? "sm:col-span-2" : ""
                }
              >
                <label
                  className="
                    mb-1.5 block text-[11px]
                    font-semibold text-[#071133]
                    sm:text-[12px]
                  "
                >
                  {field.label}
                </label>

                {isTextarea ? (
                  <textarea
                    rows={4}
                    placeholder={field.placeholder}
                    {...register(field.name as keyof FormValues)}
                    className={`
                      w-full resize-none rounded-xl
                      border bg-white px-3 py-2.5
                      text-[11px] text-[#071133]
                      outline-none transition-all duration-300
                      placeholder:text-[#8b95a7]
                      sm:text-[12px]
                      ${
                        errorMessage
                          ? "border-red-400 focus:ring-red-100"
                          : "border-[#d9dee8] focus:border-[#12A56B] focus:ring-2 focus:ring-[#12A56B]/10"
                      }
                    `}
                  />
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    {...register(field.name as keyof FormValues)}
                    className={`
                      h-[42px] w-full rounded-xl
                      border bg-white px-3
                      text-[11px] text-[#071133]
                      outline-none transition-all duration-300
                      placeholder:text-[#8b95a7]
                      sm:text-[12px]
                      ${
                        errorMessage
                          ? "border-red-400 focus:ring-red-100"
                          : "border-[#d9dee8] focus:border-[#12A56B] focus:ring-2 focus:ring-[#12A56B]/10"
                      }
                    `}
                  />
                )}

                {errorMessage && (
                  <p className="mt-1 text-[10px] font-medium text-red-500">
                    {errorMessage}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            mt-4 flex h-[44px] w-full
            items-center justify-center gap-2
            rounded-xl bg-[#0EA56B]
            text-[11px] font-bold text-white
            shadow-[0_6px_16px_rgba(14,165,107,0.14)]
            transition-all duration-300
            hover:bg-[#0c9461]
            disabled:cursor-not-allowed
            disabled:opacity-70
            sm:text-[12px]
          "
        >
          {isSubmitting ? "Sending..." : submitButtonText}

          <Send className="h-3.5 w-3.5" />
        </button>

        <p
          className="
            mt-2.5 text-center text-[8px]
            leading-4 text-[#667085]
            sm:text-[9px]
          "
        >
          {disclaimer}
        </p>
      </form>
    </motion.div>
  );
}
