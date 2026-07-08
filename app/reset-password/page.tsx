"use client";

import { Suspense } from "react";
import { ResetPasswordForm } from "@/app/Components/auth/reset-password";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#0EA56B] border-t-transparent" />
          </div>
        }
      >
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
