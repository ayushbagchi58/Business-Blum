"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Routes that should NOT have navbar/footer
  const isDashboardRoute = pathname?.startsWith("/dashboard");
  const isAuthRoute =
    pathname?.startsWith("/login") || pathname?.startsWith("/register");
  const isVerifyEmailRoute = pathname?.startsWith("/verify-email");

  if (isDashboardRoute || isAuthRoute || isVerifyEmailRoute) {
    // Dashboard, Auth, and Verify Email layouts - no navbar/footer
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
