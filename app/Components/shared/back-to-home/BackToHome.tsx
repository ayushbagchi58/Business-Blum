"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackToHomeProps {
  href?: string;
  label?: string;
}

export default function BackToHome({
  href = "/dashboard",
  label = "Back to Home",
}: BackToHomeProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <div className="bg-gray-50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={handleClick}
          className="flex items-center gap-2 text-[#0EA56B] transition-colors hover:text-[#0c9461]"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="text-lg font-medium">{label}</span>
        </button>
      </div>
    </div>
  );
}
