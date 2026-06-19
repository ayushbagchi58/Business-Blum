"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const mediaMentions = [
  {
    id: 1,
    publication: "Forbes",
    quote:
      "Business Blum is revolutionizing SMB capital access with institutional-grade matching technology",
    author: "Financial Innovation Desk",
    year: "2025",
    category: "FinTech Innovation",
  },
  {
    id: 2,
    publication: "TechCrunch",
    quote:
      "Their AI-powered platform is democratizing business financing at unprecedented scale",
    author: "Enterprise Technology",
    year: "2025",
    category: "Platform Economy",
  },
  {
    id: 3,
    publication: "The Wall Street Journal",
    quote:
      "Setting new standards for transparent, efficient business capital matching",
    author: "Small Business Journal",
    year: "2026",
    category: "Market Leadership",
  },
  {
    id: 4,
    publication: "Inc. Magazine",
    quote:
      "Fastest-growing capital matching platform serving American small businesses",
    author: "Growth 500",
    year: "2025",
    category: "Rapid Growth",
  },
];

const recognitions = [
  {
    id: 1,
    award: "FinTech Breakthrough Award",
    category: "Best Lending Platform",
    year: "2025",
  },
  {
    id: 2,
    award: "Inc. 5000",
    category: "Fastest Growing Companies",
    year: "2024-2025",
  },
  {
    id: 3,
    award: "Stevie® Award",
    category: "Financial Services Innovation",
    year: "2025",
  },
];

export default function MediaMentionsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center lg:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            <span className="text-sm font-semibold text-emerald-700">
              Industry Recognition
            </span>
          </div>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Featured in Leading Business{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              & Technology Publications
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Recognized by industry leaders for platform innovation and market
            impact
          </p>
        </motion.div>

        {/* Media Mentions */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:mb-16 lg:grid-cols-2">
          {mediaMentions.map((mention, index) => (
            <motion.div
              key={mention.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="mb-4 inline-flex rounded-xl bg-emerald-100 p-3">
                <Quote className="h-5 w-5 text-emerald-600" />
              </div>

              {/* Quote */}
              <blockquote className="mb-4 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                "{mention.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                <div>
                  <p className="font-bold text-slate-900">
                    {mention.publication}
                  </p>
                  <p className="text-sm text-slate-600">{mention.author}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-emerald-600">
                    {mention.category}
                  </p>
                  <p className="text-xs text-slate-500">{mention.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-900 p-8 lg:p-12"
        >
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
              Awards & Industry Recognition
            </h3>
            <p className="text-slate-300">
              Honored for innovation, growth, and excellence in financial
              services
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={recognition.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/20 bg-white/5 p-6 text-center backdrop-blur-sm"
              >
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                  <svg
                    className="h-6 w-6 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h4 className="mb-2 font-bold text-white">
                  {recognition.award}
                </h4>
                <p className="mb-1 text-sm text-emerald-300">
                  {recognition.category}
                </p>
                <p className="text-xs text-slate-400">{recognition.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
