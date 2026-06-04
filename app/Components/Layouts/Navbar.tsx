"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-[44px] w-[44px] items-center justify-center overflow-hidden rounded-lg bg-[#009966] shadow-sm">
            <Image
              src="/Logos/navlogo.png"
              alt="Business Blum Logo"
              width={44}
              height={44}
              className="h-full w-full object-contain p-1"
              priority
            />
          </div>

          <div className="leading-tight">
            <h1 className="text-[17px] font-semibold text-[#111827] sm:text-[18px]">
              Business <span className="text-[#009966]">Blum</span>
            </h1>

            <p className="text-[11px] font-medium text-gray-500">
              Strategic Capital Matching
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

          <div 
            className="relative"
            onMouseEnter={() => setIndustriesDropdownOpen(true)}
            onMouseLeave={() => setIndustriesDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-[14px] font-medium text-[#374151] transition-colors duration-200 hover:text-[#009966] lg:text-[15px]"
            >
              Industries
              <ChevronDown size={16} className={`transition-transform duration-200 ${industriesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {industriesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 rounded-lg bg-white shadow-xl border border-gray-100 py-2 animate-fade-in">
                <Link
                  href="/industries/construction-funding"
                  className="block px-4 py-2.5 text-[13px] font-medium text-[#374151] hover:bg-emerald-50 hover:text-[#009966] transition-colors"
                >
                  Construction Funding
                </Link>
                <Link
                  href="/industries/trucking-funding"
                  className="block px-4 py-2.5 text-[13px] font-medium text-[#374151] hover:bg-emerald-50 hover:text-[#009966] transition-colors"
                >
                  Trucking Funding
                </Link>
                <Link
                  href="/industries/restaurant-funding"
                  className="block px-4 py-2.5 text-[13px] font-medium text-[#374151] hover:bg-emerald-50 hover:text-[#009966] transition-colors"
                >
                  Restaurant Funding
                </Link>
                <Link
                  href="/industries/equipment-financing"
                  className="block px-4 py-2.5 text-[13px] font-medium text-[#374151] hover:bg-emerald-50 hover:text-[#009966] transition-colors"
                >
                  Equipment Financing
                </Link>
                <Link
                  href="/industries/medical-practice-funding"
                  className="block px-4 py-2.5 text-[13px] font-medium text-[#374151] hover:bg-emerald-50 hover:text-[#009966] transition-colors"
                >
                  Medical Practice Funding
                </Link>
                <Link
                  href="/industries/auto-shop-funding"
                  className="block px-4 py-2.5 text-[13px] font-medium text-[#374151] hover:bg-emerald-50 hover:text-[#009966] transition-colors"
                >
                  Auto Shop Funding
                </Link>
                <Link
                  href="/industries/mca-refinancing"
                  className="block px-4 py-2.5 text-[13px] font-medium text-[#374151] hover:bg-emerald-50 hover:text-[#009966] transition-colors"
                >
                  MCA Refinancing
                </Link>
              </div>
            )}
          </div>

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
            className="group relative hidden overflow-hidden rounded-lg bg-gradient-to-r from-[#009966] to-[#00b377] px-4 py-2 text-[13px] font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 md:block lg:px-5 lg:py-2.5 lg:text-[14px]"
          >
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
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
          mobileMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
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

          <div>
            <button
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-[15px] font-medium text-[#374151] transition hover:bg-gray-50 hover:text-[#009966]"
            >
              Industries
              <ChevronDown size={16} className={`transition-transform duration-200 ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileIndustriesOpen && (
              <div className="ml-4 mt-1 flex flex-col border-l-2 border-gray-200 pl-2">
                <Link
                  href="/industries/construction-funding"
                  className="rounded-lg px-4 py-2 text-[14px] font-medium text-[#374151] transition hover:bg-gray-50 hover:text-[#009966]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileIndustriesOpen(false);
                  }}
                >
                  Construction Funding
                </Link>
                <Link
                  href="/industries/trucking-funding"
                  className="rounded-lg px-4 py-2 text-[14px] font-medium text-[#374151] transition hover:bg-gray-50 hover:text-[#009966]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileIndustriesOpen(false);
                  }}
                >
                  Trucking Funding
                </Link>
                <Link
                  href="/industries/restaurant-funding"
                  className="rounded-lg px-4 py-2 text-[14px] font-medium text-[#374151] transition hover:bg-gray-50 hover:text-[#009966]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileIndustriesOpen(false);
                  }}
                >
                  Restaurant Funding
                </Link>
                <Link
                  href="/industries/equipment-financing"
                  className="rounded-lg px-4 py-2 text-[14px] font-medium text-[#374151] transition hover:bg-gray-50 hover:text-[#009966]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileIndustriesOpen(false);
                  }}
                >
                  Equipment Financing
                </Link>
                <Link
                  href="/industries/medical-practice-funding"
                  className="rounded-lg px-4 py-2 text-[14px] font-medium text-[#374151] transition hover:bg-gray-50 hover:text-[#009966]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileIndustriesOpen(false);
                  }}
                >
                  Medical Practice Funding
                </Link>
                <Link
                  href="/industries/auto-shop-funding"
                  className="rounded-lg px-4 py-2 text-[14px] font-medium text-[#374151] transition hover:bg-gray-50 hover:text-[#009966]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileIndustriesOpen(false);
                  }}
                >
                  Auto Shop Funding
                </Link>
                <Link
                  href="/industries/mca-refinancing"
                  className="rounded-lg px-4 py-2 text-[14px] font-medium text-[#374151] transition hover:bg-gray-50 hover:text-[#009966]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileIndustriesOpen(false);
                  }}
                >
                  MCA Refinancing
                </Link>
              </div>
            )}
          </div>

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
            onClick={() => setMobileMenuOpen(false)}
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
