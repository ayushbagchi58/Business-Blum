"use client";

import { motion } from "framer-motion";
import { Upload, FileText, CheckCircle2, X } from "lucide-react";
import { useState } from "react";
import { StepProps } from "../types";

// Document type definitions
const REQUIRED_DOCUMENTS = [
  {
    key: "bankStatements" as const,
    label: "Business Bank Statements",
    description: "3-6 months of business bank statements",
    required: true,
  },
  {
    key: "governmentId" as const,
    label: "Government-Issued ID",
    description: "Driver's license or government-issued ID",
    required: true,
  },
  {
    key: "voidedCheck" as const,
    label: "Voided Business Check",
    description: "A voided check from your business account",
    required: false,
  },
  {
    key: "businessLicense" as const,
    label: "Business License",
    description: "If applicable to your business type",
    required: false,
  },
  {
    key: "profitLossStatements" as const,
    label: "Profit & Loss Statements",
    description: "Recent P&L statements for your business",
    required: false,
  },
  {
    key: "businessTaxReturns" as const,
    label: "Business Tax Returns",
    description: "Required for some funding programs",
    required: false,
  },
  {
    key: "articlesOfIncorporation" as const,
    label: "Articles of Incorporation",
    description: "Business formation documents",
    required: false,
  },
  {
    key: "invoicesContracts" as const,
    label: "Invoices or Contracts",
    description: "If applicable to your business",
    required: false,
  },
];

export default function Step4Documentation({
  formData,
  updateFormData,
  onNext,
  onBack,
  errors,
}: StepProps) {
  const [uploadedDocs, setUploadedDocs] = useState<Record<string, File[]>>({});
  const [dragActiveKey, setDragActiveKey] = useState<string | null>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    docKey: string
  ) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newDocs = {
        ...uploadedDocs,
        [docKey]: [...(uploadedDocs[docKey] || []), ...files],
      };
      setUploadedDocs(newDocs);
      updateFormData({ [docKey]: newDocs[docKey] });
    }
  };

  const handleDrag = (e: React.DragEvent, docKey: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActiveKey(docKey);
    } else if (e.type === "dragleave") {
      setDragActiveKey(null);
    }
  };

  const handleDrop = (e: React.DragEvent, docKey: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActiveKey(null);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files);
      const newDocs = {
        ...uploadedDocs,
        [docKey]: [...(uploadedDocs[docKey] || []), ...files],
      };
      setUploadedDocs(newDocs);
      updateFormData({ [docKey]: newDocs[docKey] });
    }
  };

  const removeFile = (docKey: string, fileIndex: number) => {
    const currentFiles = uploadedDocs[docKey] || [];
    const newFiles = currentFiles.filter((_, i) => i !== fileIndex);
    const newDocs = { ...uploadedDocs, [docKey]: newFiles };
    setUploadedDocs(newDocs);
    updateFormData({ [docKey]: newFiles.length > 0 ? newFiles : undefined });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const allRequiredDocsUploaded = () => {
    return REQUIRED_DOCUMENTS.filter((doc) => doc.required).every(
      (doc) => uploadedDocs[doc.key] && uploadedDocs[doc.key].length > 0
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#08122E]">Documentation</h2>
        <p className="mt-2 text-sm text-gray-600">
          Please upload all required documents to complete your application
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 p-4">
          <p className="text-sm font-semibold text-[#08122E] mb-2">
            Required Documents:
          </p>
          <ul className="space-y-1 text-xs text-gray-700">
            {REQUIRED_DOCUMENTS.filter((doc) => doc.required).map((doc) => (
              <li key={doc.key} className="flex items-start gap-2">
                <span className="text-[#0EA56B] font-bold">•</span>
                <span>
                  <strong>{doc.label}</strong> - {doc.description}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-gray-600 italic">
            Optional documents (if applicable): Voided Business Check, Business
            License, Profit & Loss Statements, Business Tax Returns, Articles of
            Incorporation, Invoices or Contracts
          </p>
        </div>

        {REQUIRED_DOCUMENTS.map((doc) => (
          <div key={doc.key} className="space-y-2">
            <div className="flex items-center gap-2">
              <label className="text-sm font-semibold text-[#08122E]">
                {doc.label}
                {doc.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              {uploadedDocs[doc.key] && uploadedDocs[doc.key].length > 0 && (
                <CheckCircle2 className="h-4 w-4 text-[#0EA56B]" />
              )}
            </div>
            <p className="text-xs text-gray-600">{doc.description}</p>

            <div
              onDragEnter={(e) => handleDrag(e, doc.key)}
              onDragLeave={(e) => handleDrag(e, doc.key)}
              onDragOver={(e) => handleDrag(e, doc.key)}
              onDrop={(e) => handleDrop(e, doc.key)}
              className={`
                relative rounded-lg border-2 border-dashed
                p-4 text-center transition-all duration-300
                ${
                  dragActiveKey === doc.key
                    ? "border-[#0EA56B] bg-[#0EA56B]/5"
                    : "border-gray-300 bg-gray-50"
                }
              `}
            >
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange(e, doc.key)}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
              <div className="pointer-events-none">
                <Upload className="mx-auto h-8 w-8 text-gray-400" />
                <p className="mt-2 text-xs font-semibold text-[#08122E]">
                  Click to upload or drag and drop
                </p>
                <p className="mt-1 text-xs text-gray-500">PDF, JPG, PNG</p>
              </div>
            </div>

            {uploadedDocs[doc.key] && uploadedDocs[doc.key].length > 0 && (
              <div className="space-y-2">
                {uploadedDocs[doc.key].map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-2"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-[#0EA56B]" />
                      <div>
                        <p className="text-xs font-medium text-[#08122E]">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(doc.key, index)}
                      className="text-red-500 hover:text-red-700 p-1"
                      type="button"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="space-y-3 border-t border-gray-200 pt-5">
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.creditAuthorization}
                onChange={(e) =>
                  updateFormData({ creditAuthorization: e.target.checked })
                }
                className="mt-1 h-4 w-4 accent-[#0EA56B]"
              />
              <span className="text-xs text-gray-700">
                I authorize a soft credit inquiry to match me with the best
                lenders. This will NOT affect my credit score.
              </span>
            </label>
            {errors.creditAuthorization && (
              <p className="ml-7 mt-1 text-xs text-red-500">
                {errors.creditAuthorization}
              </p>
            )}
          </div>

          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.contactConsent}
                onChange={(e) =>
                  updateFormData({ contactConsent: e.target.checked })
                }
                className="mt-1 h-4 w-4 accent-[#0EA56B]"
              />
              <span className="text-xs text-gray-700">
                I agree to be contacted by lenders matched to my application via
                phone, email, or SMS about funding options.
              </span>
            </label>
            {errors.contactConsent && (
              <p className="ml-7 mt-1 text-xs text-red-500">
                {errors.contactConsent}
              </p>
            )}
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-[#0EA56B]/10 to-[#0EA56B]/5 p-4">
          <div className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#0EA56B]" />
            <div>
              <p className="text-sm font-semibold text-[#08122E]">
                You're almost done!
              </p>
              <p className="mt-1 text-xs text-gray-700">
                {allRequiredDocsUploaded()
                  ? "All required documents uploaded. Submit your application to get matched with lenders within 24 hours."
                  : "Please upload all required documents to submit your application."}
              </p>
            </div>
          </div>
        </div>

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
            disabled={!allRequiredDocsUploaded()}
            className={`
              flex h-12 flex-1 items-center justify-center
              rounded-xl text-sm font-semibold text-white
              shadow-lg transition-all duration-300
              ${
                allRequiredDocsUploaded()
                  ? "bg-[#0EA56B] shadow-[#0EA56B]/25 hover:bg-[#0c9461] hover:shadow-xl cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed opacity-60"
              }
            `}
          >
            Submit Application
          </button>
        </div>
      </div>
    </motion.div>
  );
}
