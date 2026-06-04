"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle, 
  Shield,
  HardHat,
  Truck,
  UtensilsCrossed,
  Cog,
  Stethoscope,
  Wrench,
  RefreshCw,
  DollarSign,
  Zap,
  Users,
  TrendingUp,
  Clock,
  AlertCircle,
  Car,
  ChevronDown,
  LucideIcon
} from "lucide-react";
import { IndustryPageData } from "./types";

interface IndustryLandingPageProps {
  data: IndustryPageData;
}

// Map icon names to actual icon components
const iconMap: Record<string, LucideIcon> = {
  HardHat,
  Truck,
  UtensilsCrossed,
  Cog,
  Stethoscope,
  Wrench,
  RefreshCw,
  DollarSign,
  Zap,
  Users,
  TrendingUp,
  Clock,
  Shield,
  AlertCircle,
  Car,
};

export default function IndustryLandingPage({ data }: IndustryLandingPageProps) {
  const { hero, benefits, howItWorks, requirements, faqs, cta } = data;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [openStepIndex, setOpenStepIndex] = useState<number | null>(0);
  
  // Get the icon component from the map
  const HeroIcon = iconMap[hero.icon] || Shield;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleStep = (index: number) => {
    setOpenStepIndex(openStepIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#08122E] via-[#0b1838] to-[#08122E] px-4 py-12 sm:py-14 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,107,0.15),transparent_50%)]" />
        
        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#0EA56B]/20 px-3 py-1.5 text-xs font-semibold text-[#0EA56B]">
              <HeroIcon className="h-4 w-4" />
              {hero.badge}
            </div>

            <h1 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
              {hero.title}
            </h1>

            <p className="mx-auto mb-6 max-w-2xl text-base text-gray-300 sm:text-lg">
              {hero.description}
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/applynow"
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0EA56B] to-[#00b377] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl"
              >
                {hero.ctaText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300">
                {hero.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5 text-[#0EA56B]" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="mb-2 text-2xl font-bold text-[#08122E] sm:text-3xl">
              Why Choose {hero.industry} Funding?
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-600">
              Specialized financing solutions designed specifically for {hero.industry.toLowerCase()} businesses
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const BenefitIcon = iconMap[benefit.icon] || Shield;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0EA56B] to-[#00b377]">
                    <BenefitIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-1.5 text-base font-bold text-[#08122E]">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section - Accordion Style */}
      <section className="bg-gray-50 py-12 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="mb-2 text-2xl font-bold text-[#08122E] sm:text-3xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray-600">
              Get funded in 3 simple steps - click each step to learn more
            </p>
          </motion.div>

          <div className="space-y-3">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <button
                  onClick={() => toggleStep(index)}
                  className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-gray-50"
                >
                  <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white transition-all ${
                    openStepIndex === index 
                      ? 'bg-gradient-to-br from-[#0EA56B] to-[#00b377] scale-110 shadow-lg' 
                      : 'bg-gradient-to-br from-gray-400 to-gray-500'
                  }`}>
                    {index + 1}
                  </div>
                  <h3 className="flex-1 pr-3 text-base font-bold text-[#08122E]">
                    {step.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: openStepIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown 
                      className={`h-5 w-5 transition-colors ${
                        openStepIndex === index ? 'text-[#0EA56B]' : 'text-gray-400'
                      }`} 
                    />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openStepIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t-2 border-[#0EA56B] bg-gradient-to-b from-emerald-50/50 to-white px-4 pb-4 pt-3">
                        <p className="text-sm leading-relaxed text-gray-700">
                          {step.description}
                        </p>
                        {index < howItWorks.length - 1 && (
                          <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#0EA56B]">
                            <span>Next Step</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <Link
              href="/applynow"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0EA56B] to-[#00b377] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl"
            >
              Start Your Application
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="mb-2 text-2xl font-bold text-[#08122E] sm:text-3xl">
              Qualification Requirements
            </h2>
            <p className="text-base text-gray-600">
              Simple requirements to get approved
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2.5 rounded-lg border border-gray-200 bg-gray-50 p-3"
              >
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0EA56B]" />
                <span className="text-sm text-gray-700">{req}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section - Enhanced Accordion Style */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-[#08122E] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">Click on any question to see the answer</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-gray-50 sm:p-6"
                >
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-base font-bold transition-all ${
                    openFaqIndex === index 
                      ? 'bg-gradient-to-br from-[#0EA56B] to-[#00b377] text-white scale-110 shadow-lg' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    Q
                  </div>
                  <h3 className="flex-1 pr-4 text-base font-bold text-[#08122E] sm:text-lg">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown 
                      className={`h-6 w-6 transition-colors ${
                        openFaqIndex === index ? 'text-[#0EA56B]' : 'text-gray-400'
                      }`} 
                    />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t-2 border-[#0EA56B] bg-gradient-to-b from-emerald-50/50 to-white px-5 pb-6 pt-5 sm:px-6">
                        <div className="flex gap-3">
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0EA56B] to-[#00b377] text-sm font-bold text-white">
                            A
                          </div>
                          <p className="flex-1 text-base leading-relaxed text-gray-700 sm:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-2xl bg-gradient-to-br from-[#08122E] to-[#0b1838] p-8 text-center"
          >
            <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
              Still Have Questions?
            </h3>
            <p className="mb-6 text-gray-300">
              Our funding specialists are here to help you find the perfect financing solution
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-[#08122E]"
              >
                Contact Us
              </Link>
              <Link
                href="/applynow"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0EA56B] to-[#00b377] px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
              >
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#08122E] via-[#0b1838] to-[#08122E] px-4 py-12 sm:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(14,165,107,0.15),transparent_50%)]" />
        
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              {cta.title}
            </h2>
            <p className="mb-6 text-base text-gray-300">
              {cta.description}
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/applynow"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0EA56B] to-[#00b377] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl"
              >
                {cta.buttonText}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="flex items-center gap-1.5 text-gray-300">
                <Shield className="h-4 w-4 text-[#0EA56B]" />
                <span className="text-xs">No obligation • Soft credit pull</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
