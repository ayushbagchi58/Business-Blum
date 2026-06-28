import "./globals.css";
import type { Metadata } from "next";
import ConditionalLayout from "./Components/Layouts/ConditionalLayout";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Business Blum",
  description: "Smart Loan Matching",
  icons: {
    icon: "/Logos/navlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
        <Toaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            style: {
              background: "white",
              border: "1px solid #e5e7eb",
            },
            className: "sonner-toast",
          }}
        />
      </body>
    </html>
  );
}
