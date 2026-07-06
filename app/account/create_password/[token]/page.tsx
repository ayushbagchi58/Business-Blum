"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function CreatePasswordCompatibilityPage() {
  const router = useRouter();
  const params = useParams();
  const token = params.token as string;

  useEffect(() => {
    if (token) {
      // Redirect to the correct route with token as query parameter
      router.replace(`/create-password?token=${token}`);
    } else {
      // No token, redirect to register
      router.replace("/register");
    }
  }, [token, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center">
        <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#0EA56B]"></div>
        <p className="text-sm text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}
