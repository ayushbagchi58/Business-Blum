import "./globals.css";
import type { Metadata } from "next";
import ConditionalLayout from "./Components/Layouts/ConditionalLayout";
import { Toaster } from "sonner";
import ReduxProvider from "@/providers/ReduxProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { AuthSessionProvider } from "./Components/auth/AuthSessionProvider";

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
        <ReduxProvider>
          <ReactQueryProvider>
            <AuthSessionProvider>
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
            </AuthSessionProvider>
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
