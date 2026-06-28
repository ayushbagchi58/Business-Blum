"use client";

import { motion } from "framer-motion";
import { OfferDetails } from "./types";

interface OffersTabProps {
  offers: OfferDetails[];
  totalOffers: number;
}

export default function OffersTab({ offers, totalOffers }: OffersTabProps) {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Funding Offers</h1>
        <p className="mt-1 text-sm text-gray-600">
          {totalOffers} {totalOffers === 1 ? "offer" : "offers"} matched to your
          profile.
        </p>
      </div>

      {/* Offers List */}
      <div className="space-y-4">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="overflow-hidden rounded-xl bg-white p-6 shadow-sm"
          >
            {/* Offer Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-gray-900">
                    {offer.offerType}
                  </h3>
                  {offer.isBestMatch && (
                    <span className="rounded bg-[#0EA56B] px-2 py-0.5 text-xs font-semibold text-white">
                      Best Match
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-sm text-gray-600">{offer.provider}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-gray-900">
                  ${offer.amount.toLocaleString()}
                </p>
                <p className="text-xs text-[#0EA56B]">
                  {offer.matchPercentage}% match
                </p>
              </div>
            </div>

            {/* Offer Details */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Term
                </p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {offer.term}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Rate
                </p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {offer.rate}
                </p>
              </div>
            </div>

            {/* View Full Offer Button */}
            <button className="mt-5 flex h-11 w-full items-center justify-center rounded-lg bg-[#0EA56B] text-sm font-semibold text-white transition-colors hover:bg-[#0c9461]">
              View Full Offer
            </button>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {offers.length === 0 && (
        <div className="rounded-xl bg-white p-12 text-center shadow-sm">
          <p className="text-gray-600">No offers available yet.</p>
          <p className="mt-2 text-sm text-gray-500">
            Complete your application to receive personalized funding offers.
          </p>
        </div>
      )}

      {/* Info Box */}
      {offers.length > 0 && (
        <div className="rounded-xl bg-blue-50 p-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-blue-900">💡 Need help?</span>{" "}
            Our advisors can help you compare offers and choose the best option
            for your business.
          </p>
        </div>
      )}
    </div>
  );
}
