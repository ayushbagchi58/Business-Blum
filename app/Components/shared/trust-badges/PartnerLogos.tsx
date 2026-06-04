"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { partnerLogosData } from "./data";

export default function PartnerLogos() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-12"
        >
          {partnerLogosData.title && (
            <h2 className="mb-2 text-2xl font-bold text-[#08122E] sm:text-3xl md:text-4xl">
              {partnerLogosData.title}
            </h2>
          )}
          {partnerLogosData.subtitle && (
            <p className="text-sm text-gray-600 sm:text-base">
              {partnerLogosData.subtitle}
            </p>
          )}
        </motion.div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
          {partnerLogosData.partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex items-center justify-center overflow-hidden rounded-xl border-2 border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-[#009966] hover:shadow-xl sm:p-6"
            >
              {/* Text Content - Shows by default */}
              <motion.div
                className="flex flex-col items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-90"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#009966] to-[#00b377] sm:h-12 sm:w-12"
                >
                  <Building2 className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </motion.div>
                <p className="text-center text-xs font-bold text-[#08122E] sm:text-sm">
                  {partner.name}
                </p>
                <p className="mt-1 text-center text-[10px] text-gray-500">
                  Lending Partner
                </p>
              </motion.div>

              {/* Logo Image - Shows on hover with animation */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-white p-4 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 sm:p-6"
                initial={{ scale: 0.8 }}
              >
                <motion.img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    // If image fails to load, keep showing text
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center sm:mt-12"
        >
          <p className="text-xs text-gray-500 sm:text-sm">
            Partnering with industry-leading financial institutions to bring you the best funding options
          </p>
        </motion.div>
      </div>
    </section>
  );
}
