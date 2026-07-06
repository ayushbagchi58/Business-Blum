"use client";

import { useAuthSession } from "@/hooks/useAuthSession";
import { ReactNode } from "react";

/**
 * Client component that syncs auth session data from sessionStorage to cookies
 * This allows middleware to access session data for route protection
 */
export function AuthSessionProvider({ children }: { children: ReactNode }) {
  // Sync sessionStorage to cookies for middleware access
  useAuthSession();

  return <>{children}</>;
}
