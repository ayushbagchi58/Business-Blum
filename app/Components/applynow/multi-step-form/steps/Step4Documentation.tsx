"use client";

import { motion } from "framer-motion";
import { Upload, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { StepProps } from "../types";

export default function Step4Documentation({
  formData,
  updateFormData,
  onNext,
  onBack,
  errors,
}: StepProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...files]);
      updateFormData({ bankStatements: [...uploadedFiles, ...files] });
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files);
      setUploadedFiles((prev) => [...prev, ...files]);
      updateFormData({ bankStatements: [...uploadedFiles, ...files] });
    }
  };

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    updateFormData({ bankStatements: newFiles });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
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
          Upload your bank statements to speed up approval (optional but
          recommended)
        </p>
      </div>

      <div className="space-y-5">
        {/* File Upload Zone */}
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`
            relative rounded-xl border-2 border-dashed
            p-8 text-center transition-all duration-300
            ${
              dragActive
                ? "border-[#0EA56B] bg-[#0EA56B]/5"
                : "border-gray-300 bg-gray-50"
            }
          `}
        >
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            id="file-upload"
          />
          <div className="pointer-events-none">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-3 text-sm font-semibold text-[#08122E]">
              Drag and drop your files here
            </p>
            <p className="mt-1 text-xs text-gray-500">
              or click to browse (PDF, JPG, PNG)
            </p>
            <p className="mt-2 text-xs text-gray-400">
              Bank statements from the last 3-6 months
            </p>
          </div>
        </div>

        {/* Uploaded Files List */}
        {uploadedFiles.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#08122E]">
              Uploaded Files:
            </p>
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-3"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-[#0EA56B]" />
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
                  onClick={() => removeFile(index)}
                  className="text-xs text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Why Upload Documents */}
        <div className="rounded-xl bg-blue-50 p-4">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 flex-shrink-0 text-blue-600" />
            <div>
              <p className="text-sm font-semibold text-[#08122E]">
                Why upload bank statements?
              </p>
              <ul className="mt-2 space-y-1 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0EA56B]">•</span>
                  Faster approval process (24 hours vs 3-5 days)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0EA56B]">•</span>
                  Higher funding amounts available
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0EA56B]">•</span>
                  Better rates and terms from lenders
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0EA56B]">•</span>
                  Secure, encrypted document transfer
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Authorization Checkboxes */}
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

        {/* Success Message */}
        <div className="rounded-xl bg-gradient-to-br from-[#0EA56B]/10 to-[#0EA56B]/5 p-4">
          <div className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#0EA56B]" />
            <div>
              <p className="text-sm font-semibold text-[#08122E]">
                You're almost done!
              </p>
              <p className="mt-1 text-xs text-gray-700">
                Submit your application and get matched with lenders within 24
                hours. We'll contact you with your personalized funding options.
              </p>
            </div>
          </div>
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
            Submit Application
          </button>
        </div>
      </div>
    </motion.div>
  );
}
