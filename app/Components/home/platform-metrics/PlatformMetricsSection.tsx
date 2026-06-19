"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Zap, Globe, Award } from "lucide-react";

const platformMetrics = [
  {
    id: 1,
    icon: DollarSign,
    metric: "$2.4B+",
    label: "Capital Facilitated",
    description: "Total funding matched since inception",
    trend: "+127% YoY",
  },
  {
    id: 2,
    icon: Users,
    metric: "50,000+",
    label: "Active Businesses",
    description: "Enterprises powered by our platform",
    trend: "+89% YoY",
  },
  {
    id: 3,
    icon: Globe,
    metric: "200+",
    label: "Institutional Partners",
    description: "Vetted lending institutions nationwide",
    trend: "+34% YoY",
  },
  {
    id: 4,
    icon: Zap,
    metric: "<24hrs",
    label: "Avg Response Time",
    description: "AI-powered matching engine",
    trend: "97% faster",
  },
  {
    id: 5,
    icon: TrendingUp,
    metric: "87%",
    label: "Approval Rate",
    description: "Industry-leading success ratio",
    trend: "+12% vs industry",
  },
  {
    id: 6,
    icon: Award,
    metric: "4.8/5",
    label: "Platform Rating",
    description: "Across 13,000+ verified reviews",
    trend: "Top 1% rated",
  },
];

export default function PlatformMetricsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-16 sm:py-20 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center lg:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></div>
            <span className="text-sm font-semibold text-emerald-300">
              Enterprise-Grade Platform Performance
            </span>
          </div>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Powering Business Growth at{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Unprecedented Scale
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            AI-driven capital matching platform processing millions in funding
            applications daily
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {platformMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/10"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-3">
                    <Icon className="h-6 w-6 text-emerald-400" />
                  </div>

                  {/* Metric */}
                  <div className="mb-2">
                    <h3 className="text-3xl font-bold text-white sm:text-4xl">
                      {metric.metric}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-emerald-400">
                      {metric.label}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mb-3 text-sm text-slate-400">
                    {metric.description}
                  </p>

                  {/* Trend Badge */}
                  <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    <TrendingUp className="h-3 w-3" />
                    {metric.trend}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:mt-16 lg:p-8"
        >
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                Powered by Advanced AI & Machine Learning
              </h3>
              <p className="text-sm text-slate-300 sm:text-base">
                Our proprietary matching algorithm analyzes 200+ data points to
                connect businesses with optimal lending partners in real-time
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 lg:flex-nowrap">
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                <span className="text-sm font-medium text-white">
                  AI-Powered
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span className="text-sm font-medium text-white">
                  Real-Time
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-violet-400"></div>
                <span className="text-sm font-medium text-white">Secure</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
