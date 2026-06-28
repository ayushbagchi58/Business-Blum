"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, FileText } from "lucide-react";
import { Document } from "./types";

interface DocumentsTabProps {
  documents: Document[];
}

export default function DocumentsTab({ documents }: DocumentsTabProps) {
  const [dragActive, setDragActive] = useState(false);

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
    // File upload logic will be implemented during backend integration
    console.log("Files dropped:", e.dataTransfer.files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // File upload logic will be implemented during backend integration
    console.log("Files selected:", e.target.files);
  };

  const formatFileSize = (sizeInKB: number): string => {
    if (sizeInKB < 1024) {
      return `${sizeInKB} KB`;
    }
    const sizeInMB = (sizeInKB / 1024).toFixed(1);
    return `${sizeInMB} MB`;
  };

  const getStatusStyle = (status: Document["status"]) => {
    switch (status) {
      case "Verified":
        return "bg-[#e8f5f0] text-[#0EA56B]";
      case "Pending":
        return "bg-yellow-50 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
        <p className="mt-1 text-sm text-gray-600">
          Upload and manage your business documents.
        </p>
      </div>

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`relative rounded-xl border-2 border-dashed bg-white p-8 text-center transition-all ${
          dragActive
            ? "border-[#0EA56B] bg-[#0EA56B]/5"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <input
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
        <div className="pointer-events-none">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <Upload className="h-6 w-6 text-gray-600" />
          </div>
          <p className="mt-3 text-sm font-semibold text-gray-900">
            Upload documents
          </p>
          <p className="mt-1 text-xs text-gray-500">
            PDF, JPG, PNG — up to 20MB
          </p>
          <button className="mt-4 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            Choose files
          </button>
        </div>
      </motion.div>

      {/* Documents List */}
      <div className="space-y-2">
        {documents.map((document, index) => (
          <motion.div
            key={document.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm transition-colors hover:bg-gray-50"
          >
            {/* Document Info */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100">
                <FileText className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {document.fileName}
                </p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(document.fileSize)} · {document.uploadedDate}
                </p>
              </div>
            </div>

            {/* Status Badge */}
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                document.status
              )}`}
            >
              {document.status}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {documents.length === 0 && (
        <div className="rounded-xl bg-white p-12 text-center shadow-sm">
          <FileText className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-4 text-gray-600">No documents uploaded yet.</p>
          <p className="mt-2 text-sm text-gray-500">
            Upload your business documents to complete your application.
          </p>
        </div>
      )}

      {/* Info Box */}
      {documents.length > 0 && (
        <div className="rounded-xl bg-blue-50 p-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-blue-900">
              🔒 Your documents are secure
            </span>{" "}
            - All uploads are encrypted and stored securely. Only authorized
            personnel can access them.
          </p>
        </div>
      )}
    </div>
  );
}
