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
  const isApplicationRoute = pathname?.startsWith("/application");
  const isAuthRoute =
    pathname?.startsWith("/login") ||
    pathname?.startsWith("/register") ||
    pathname?.startsWith("/verify-registration") ||
    pathname?.startsWith("/create-password");
  const isVerifyEmailRoute = pathname?.startsWith("/verify-email");

  // Dashboard, Auth, and Verify Email - no navbar/footer
  if (isDashboardRoute || isAuthRoute || isVerifyEmailRoute) {
    return <>{children}</>;
  }

  // Application page - show navbar but no footer
  if (isApplicationRoute) {
    return (
      <>
        <Navbar />
        {children}
      </>
    );
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
