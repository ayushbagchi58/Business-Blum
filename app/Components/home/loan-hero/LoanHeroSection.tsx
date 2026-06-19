"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Clock3 } from "lucide-react";

export default function LoanHeroSection() {
  return (
    <section className="relative flex min-h-[78vh] w-full items-center justify-center overflow-hidden bg-[#020817] px-5 py-10 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_30%)]" />

      <div className="absolute bottom-[-180px] right-[-140px] h-[520px] w-[520px] rounded-full bg-emerald-500/25 blur-[120px]" />

      <div className="absolute bottom-[-80px] right-[10%] h-[280px] w-[280px] rounded-full bg-emerald-400/10 blur-[90px]" />

      <div className="absolute left-[-100px] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-8 top-16 hidden h-20 w-20 rounded-full border border-dashed border-white/10 md:block"
      >
        <div className="absolute inset-3 rounded-full bg-white/[0.03]" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-8 hidden md:block"
      >
        <div
          className="
            h-0 w-0
            border-l-[34px]
            border-r-[34px]
            border-b-[58px]
            border-l-transparent
            border-r-transparent
            border-b-white/10
          "
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/4 top-2/3 h-2 w-2 rounded-full bg-white/40"
      />

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/4 top-1/3 h-2.5 w-2.5 rounded-full bg-emerald-400/60"
      />

      <motion.div
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-120px] right-[-100px] h-[400px] w-[400px] rounded-full bg-emerald-400/20 blur-[100px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-xs font-semibold text-emerald-300 backdrop-blur-sm"
        >
          <Shield className="h-4 w-4" />
          Join 50,000+ Businesses Funded Nationwide
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
        >
          Get Funding Up to $10 Million
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base"
        >
          Complete your application in minutes. Get matched with 200+ trusted
          lenders. Approvals in as little as 24 hours. No obligation
          consultation.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="mt-7"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 25px 50px rgba(16, 185, 129, 0.4)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(16,185,129,0.25)] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Application
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="mt-10 flex flex-col items-center gap-4 text-white/85 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-7"
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400" />
            </motion.div>
            <span className="text-sm">No credit impact</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Shield className="h-4.5 w-4.5 text-emerald-400" />
            </motion.div>
            <span className="text-sm">100% secure</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Clock3 className="h-4.5 w-4.5 text-emerald-400" />
            </motion.div>
            <span className="text-sm">3-minute application</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
