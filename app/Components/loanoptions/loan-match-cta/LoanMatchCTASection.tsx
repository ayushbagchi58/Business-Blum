"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { loanMatchCTASectionData } from "./data";

export default function LoanMatchCTASection() {
  const { heading, description, button, bottomText } = loanMatchCTASectionData;

  return (
    <section className="relative w-full overflow-hidden bg-[#06122b] py-10 sm:py-12 lg:py-14">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1835] via-[#06122b] to-[#04231d]" />

        <div className="absolute bottom-[-70px] left-1/2 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute right-0 top-0 h-[180px] w-[180px] rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/8 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_60%)]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            max-w-3xl
            text-[26px]
            font-extrabold
            leading-[1.08]
            tracking-tight
            text-white
            sm:text-[34px]
            md:text-[44px]
            lg:text-[52px]
          "
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.55,
          }}
          viewport={{ once: true }}
          className="
            mt-4
            max-w-2xl
            text-[13px]
            leading-6
            text-gray-200
            sm:text-[14px]
            md:text-[15px]
          "
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.55,
          }}
          viewport={{ once: true }}
          className="mt-7"
        >
          <motion.a
            href={button.href}
            whileHover={{
              scale: 1.02,
              y: -1,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2.5
              rounded-xl
              bg-[#0ea472]
              px-5
              py-3
              text-[14px]
              font-semibold
              text-white
              shadow-lg
              shadow-emerald-500/10
              transition-all
              duration-300
              hover:bg-[#0c9467]
              sm:px-6
              sm:py-3.5
              sm:text-[15px]
              md:min-w-[280px]
            "
          >
            {button.label}

            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.32,
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="
            mt-5
            text-[11px]
            text-gray-300
            sm:text-[12px]
            md:text-[13px]
          "
        >
          {bottomText}
        </motion.p>
      </div>
    </section>
  );
}
