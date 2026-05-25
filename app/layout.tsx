import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./Components/Layouts/Navbar";
import Footer from "./Components/Layouts/Footer";

export const metadata: Metadata = {
  title: "Business Blum",
  description: "Smart Loan Matching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
