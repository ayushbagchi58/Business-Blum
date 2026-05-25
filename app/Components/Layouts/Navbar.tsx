"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-[44px] w-[44px] items-center justify-center rounded-lg bg-[#009966] text-white shadow-sm">
            <span className="text-[24px] font-bold">$</span>
          </div>

          <div className="leading-tight">
            <h1 className="text-[17px] font-semibold text-[#111827] sm:text-[18px]">
              Business <span className="text-[#009966]">Blum</span>
            </h1>

            <p className="text-[11px] font-medium text-gray-500">
              Smart Loan Matching
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-7">
          <Link
            href="/howitworks"
            className="text-[14px] font-medium text-[#374151] transition-colors duration-200 hover:text-[#009966] lg:text-[15px]"
          >
            How It Works
          </Link>

          <Link
            href="/loanoptions"
            className="text-[14px] font-medium text-[#374151] transition-colors duration-200 hover:text-[#009966] lg:text-[15px]"
          >
            Loan Options
          </Link>

          <Link
            href="/#success-stories"
            className="text-[14px] font-medium text-[#374151] transition-colors duration-200 hover:text-[#009966] lg:text-[15px]"
          >
            Success Stories
          </Link>

          <Link
            href="/about"
            className="text-[14px] font-medium text-[#374151] transition-colors duration-200 hover:text-[#009966] lg:text-[15px]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-[14px] font-medium text-[#374151] transition-colors duration-200 hover:text-[#009966] lg:text-[15px]"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/applynow"
            type="button"
            className="hidden rounded-lg bg-[#009966] px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition duration-200 hover:bg-[#007a52] md:block lg:px-5 lg:py-2.5 lg:text-[14px]"
          >
            Apply Now
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 md:hidden"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4">
          <Link
            href="/howitworks"
            className="rounded-lg px-4 py-3 text-[15px] font-medium text-[#374151] transition hover:bg-gray-50 hover:text-[#009966]"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </Link>

          <Link
            href="/loanoptions"
            className="rounded-lg px-4 py-3 text-[15px] font-medium text-[#374151] transition hover:bg-gray-50 hover:text-[#009966]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Loan Options
          </Link>

          <Link
            href="/#success-stories"
            className="rounded-lg px-4 py-3 text-[15px] font-medium text-[#374151] transition hover:bg-gray-50 hover:text-[#009966]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Success Stories
          </Link>

          <Link
            href="/about"
            className="rounded-lg px-4 py-3 text-[15px] font-medium text-[#374151] transition hover:bg-gray-50 hover:text-[#009966]"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="rounded-lg px-4 py-3 text-[15px] font-medium text-[#374151] transition hover:bg-gray-50 hover:text-[#009966]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/applynow"
            className="mt-4 rounded-lg bg-[#009966] px-5 py-3 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#007a52]"
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
