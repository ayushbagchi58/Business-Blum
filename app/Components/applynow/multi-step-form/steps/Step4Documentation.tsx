"use client";

import { motion } from "framer-motion";
import { Upload, FileText, CheckCircle2, AlertCircle, X } from "lucide-react";
import { useState } from "react";
import { StepProps } from "../types";

interface DocumentType {
  key: keyof Pick<
    StepProps["formData"],
    | "bankStatements"
    | "governmentId"
    | "voidedCheck"
    | "businessLicense"
    | "profitLossStatements"
    | "businessTaxReturns"
    | "articlesOfIncorporation"
    | "invoicesContracts"
  >;
  label: string;
  description: string;
  required: boolean;
}

const REQUIRED_DOCUMENTS: DocumentType[] = [
  {
    key: "bankStatements",
    label: "3-6 months of business bank statements",
    description: "PDF, JPG, or PNG format",
    required: true,
  },
  {
    key: "governmentId",
    label: "Government-issued ID or driver license",
    description: "Clear photo of valid ID",
    required: true,
  },
  {
    key: "voidedCheck",
    label: "Voided business check",
    description: "Photo or PDF of voided check",
    required: true,
  },
  {
    key: "businessLicense",
    label: "Business license",
    description: "If applicable to your business",
    required: false,
  },
  {
    key: "profitLossStatements",
    label: "Profit & Loss statements",
    description: "Recent financial statements",
    required: true,
  },
  {
    key: "businessTaxReturns",
    label: "Business tax returns",
    description: "Some programs require this",
    required: false,
  },
  {
    key: "articlesOfIncorporation",
    label: "Articles of Incorporation",
    description: "Business formation documents",
    required: true,
  },
  {
    key: "invoicesContracts",
    label: "Invoices or contracts",
    description: "If applicable to your application",
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

  const handleFileChange = (docKey: string, files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);
    const newDocs = { ...uploadedDocs, [docKey]: fileArray };
    setUploadedDocs(newDocs);
    updateFormData({ [docKey]: fileArray });
  };

  const removeFile = (docKey: string, fileIndex: number) => {
    const currentFiles = uploadedDocs[docKey] || [];
    const newFiles = currentFiles.filter((_, i) => i !== fileIndex);

    const newDocs = { ...uploadedDocs, [docKey]: newFiles };
    setUploadedDocs(newDocs);
    updateFormData({
      [docKey]: newFiles.length > 0 ? newFiles : undefined,
    });
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
      (doc) => uploadedDocs[doc.key]?.length > 0
    );
  };

  const handleSubmit = () => {
    if (!allRequiredDocsUploaded()) {
      alert("Please upload all required documents before submitting.");
      return;
    }
    onNext();
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
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 flex-shrink-0 text-blue-600" />
            <div>
              <p className="text-sm font-semibold text-[#08122E]">
                Required Documents
              </p>
              <p className="mt-1 text-xs text-gray-700">
                All documents marked with * are required for application
                submission
              </p>
            </div>
          </div>
        </div>

        {REQUIRED_DOCUMENTS.map((doc) => (
          <div
            key={doc.key}
            className="border-b border-gray-200 pb-5 last:border-0"
          >
            <div className="mb-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-[#08122E]">
                {doc.label}
                {doc.required && <span className="text-red-500">*</span>}
              </label>
              <p className="mt-1 text-xs text-gray-500">{doc.description}</p>
            </div>

            <div className="relative">
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange(doc.key, e.target.files)}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0 z-10"
                id={`upload-${doc.key}`}
              />
              <div className="flex items-center gap-3 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4 transition-colors hover:border-[#0EA56B] hover:bg-[#0EA56B]/5">
                <Upload className="h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF, JPG, PNG (max 10MB each)
                  </p>
                </div>
              </div>
            </div>

            {uploadedDocs[doc.key]?.length > 0 && (
              <div className="mt-3 space-y-2">
                {uploadedDocs[doc.key].map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-[#0EA56B]" />
                      <div>
                        <p className="text-sm font-medium text-[#08122E]">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(doc.key, index)}
                      className="rounded-full p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
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
                Almost done!
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
            className="flex h-12 flex-1 items-center justify-center rounded-xl border-2 border-gray-300 bg-white text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={!allRequiredDocsUploaded()}
            className="flex h-12 flex-1 items-center justify-center rounded-xl bg-[#0EA56B] text-sm font-semibold text-white shadow-lg shadow-[#0EA56B]/25 transition-all duration-300 hover:bg-[#0c9461] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Application
          </button>
        </div>
      </div>
    </motion.div>
  );
}
