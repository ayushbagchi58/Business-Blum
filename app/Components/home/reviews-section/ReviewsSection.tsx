"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle, TrendingUp } from "lucide-react";
import { reviewsSectionData } from "./data";

export default function ReviewsSection() {
  const { badge, title, subtitle, reviewSources, detailedReviews } = reviewsSectionData;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#009966] to-[#00b377] px-4 py-2 text-xs font-semibold text-white sm:text-sm"
          >
            <Star className="h-4 w-4 fill-white" />
            {badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-[#08122E] sm:text-4xl md:text-5xl"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-gray-600 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Review Sources Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mb-16"
        >
          {reviewSources.map((source) => (
            <div
              key={source.id}
              className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg"
            >
              <div className="mb-3 text-2xl font-bold text-[#08122E] sm:text-3xl">
                {source.source}
              </div>
              <div className="mb-2 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(source.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-xl font-bold text-[#08122E]">
                  {source.rating}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {source.totalReviews.toLocaleString()} Reviews
              </p>
            </div>
          ))}
        </motion.div>

        {/* Detailed Reviews Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {detailedReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-xl"
            >
              {/* Verified Badge */}
              {review.verified && (
                <div className="absolute right-4 top-4">
                  <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                    <CheckCircle className="h-3 w-3" />
                    Verified
                  </div>
                </div>
              )}

              {/* Rating */}
              <div className="mb-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="mb-4 flex-grow text-sm leading-relaxed text-gray-700">
                "{review.review}"
              </p>

              {/* Funding Amount Badge */}
              {review.fundingAmount && (
                <div className="mb-4 inline-flex items-center gap-2 self-start rounded-lg bg-gradient-to-r from-[#009966] to-[#00b377] px-3 py-1 text-xs font-bold text-white">
                  <TrendingUp className="h-3 w-3" />
                  Funded: {review.fundingAmount}
                </div>
              )}

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex-grow">
                  <p className="text-sm font-bold text-[#08122E]">{review.name}</p>
                  <p className="text-xs text-gray-600">{review.role}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>

              {/* Source and Date */}
              <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                <span>{review.source}</span>
                <span>{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-lg font-semibold text-[#08122E]">
            Join 50,000+ businesses who trust Business Blum
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl bg-gradient-to-r from-[#009966] to-[#00b377] px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
          >
            Get Your Free Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
