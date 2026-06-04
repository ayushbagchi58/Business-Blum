import Link from "next/link";
import { DollarSign, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#06152d] text-white">
      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-3 py-8 sm:px-4 md:px-5 lg:px-8 lg:py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-emerald-500 sm:h-9 sm:w-9">
                  <DollarSign className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </div>

                <div className="min-w-0">
                  <h2 className="truncate text-[11px] font-bold leading-none sm:text-sm md:text-base">
                    Business <span className="text-emerald-400">Blum</span>
                  </h2>

                  <p className="mt-1 truncate text-[8px] text-slate-400 sm:text-[10px]">
                    Strategic Capital Matching
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[9px] leading-4 text-slate-300 sm:text-[11px] sm:leading-5 md:text-xs lg:text-sm lg:leading-6">
                Institutional-grade capital matching platform connecting enterprises with strategic lending partners. We facilitate eligibility assessment and optimal financing solutions for sophisticated business requirements.
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="mb-3 text-[10px] font-semibold sm:text-xs md:text-sm lg:text-base">
                Loan Options
              </h3>

              <ul className="space-y-2 text-[8px] text-slate-200 sm:text-[10px] md:text-xs lg:text-sm">
                {[
                  {
                    label: "Personal Loans",
                    href: "/applynow",
                  },
                  {
                    label: "Business Loans",
                    href: "/applynow",
                  },
                  {
                    label: "Startup Funding",
                    href: "/applynow",
                  },
                  {
                    label: "Debt Consolidation",
                    href: "/applynow",
                  },
                  {
                    label: "Emergency Funding",
                    href: "/applynow",
                  },
                  {
                    label: "Equipment Financing",
                    href: "/applynow",
                  },
                ].map((item) => (
                  <li key={item.label} className="truncate">
                    <Link
                      href={item.href}
                      className="transition-colors duration-200 hover:text-emerald-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h3 className="mb-3 text-[10px] font-semibold sm:text-xs md:text-sm lg:text-base">
                Industries
              </h3>

              <ul className="space-y-2 text-[8px] text-slate-200 sm:text-[10px] md:text-xs lg:text-sm">
                {[
                  {
                    label: "Construction Funding",
                    href: "/industries/construction-funding",
                  },
                  {
                    label: "Trucking Funding",
                    href: "/industries/trucking-funding",
                  },
                  {
                    label: "Restaurant Funding",
                    href: "/industries/restaurant-funding",
                  },
                  {
                    label: "Equipment Financing",
                    href: "/industries/equipment-financing",
                  },
                  {
                    label: "Medical Funding",
                    href: "/industries/medical-practice-funding",
                  },
                  {
                    label: "Auto Shop Funding",
                    href: "/industries/auto-shop-funding",
                  },
                  {
                    label: "MCA Refinancing",
                    href: "/industries/mca-refinancing",
                  },
                ].map((item) => (
                  <li key={item.label} className="truncate">
                    <Link
                      href={item.href}
                      className="transition-colors duration-200 hover:text-emerald-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h3 className="mb-3 text-[10px] font-semibold sm:text-xs md:text-sm lg:text-base">
                Company
              </h3>

              <ul className="space-y-2 text-[8px] text-slate-200 sm:text-[10px] md:text-xs lg:text-sm">
                {[
                  {
                    label: "About Us",
                    href: "/about",
                  },
                  {
                    label: "How It Works",
                    href: "/howitworks",
                  },
                  {
                    label: "Testimonials",
                    href: "/#success-stories",
                  },
                  {
                    label: "FAQ",
                    href: "/#faq-section",
                  },
                  {
                    label: "Contact Us",
                    href: "/contact",
                  },
                ].map((item) => (
                  <li key={item.label} className="truncate">
                    <Link
                      href={item.href}
                      className="transition-colors duration-200 hover:text-emerald-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h3 className="mb-3 text-[10px] font-semibold sm:text-xs md:text-sm lg:text-base">
                Contact Us
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-3 w-3 flex-shrink-0 text-emerald-400 sm:h-4 sm:w-4" />

                  <div className="min-w-0">
                    <p className="truncate text-[8px] font-medium sm:text-[10px] md:text-xs lg:text-sm">
                      (800) 555-BLUM
                    </p>

                    <p className="mt-1 text-[7px] text-slate-400 sm:text-[9px] md:text-[10px]">
                      Mon-Fri 8am-8pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-3 w-3 flex-shrink-0 text-emerald-400 sm:h-4 sm:w-4" />

                  <p className="break-all text-[8px] text-slate-200 sm:text-[10px] md:text-xs lg:text-sm">
                    hello@businessblum.com
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3 w-3 flex-shrink-0 text-emerald-400 sm:h-4 sm:w-4" />

                  <p className="text-[8px] leading-4 text-slate-200 sm:text-[10px] sm:leading-5 md:text-xs lg:text-sm lg:leading-6">
                    123 Financial Blvd
                    <br />
                    New York, NY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-3 py-4 text-center sm:px-4 md:flex-row md:text-left lg:px-8">
            <p className="text-[9px] text-slate-400 sm:text-[10px] md:text-xs">
              © 2026 Business Blum. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-[8px] text-slate-400 sm:gap-4 sm:text-[10px] md:text-xs">
              <Link
                href="/privacy-policy"
                className="transition-colors duration-200 hover:text-emerald-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="transition-colors duration-200 hover:text-emerald-400"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/security"
                className="transition-colors duration-200 hover:text-emerald-400"
              >
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
