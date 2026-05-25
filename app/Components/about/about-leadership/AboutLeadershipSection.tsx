"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { leadershipSectionData } from "./data";

export default function AboutLeadershipSection() {
  const { badge, title, subtitle, members } = leadershipSectionData;

  return (
    <section className="w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-5 lg:px-6">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#12A56B]"
          >
            {badge}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="mt-2 text-[28px] font-black tracking-tight text-[#071133] sm:text-[34px] md:text-[42px]"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-2 text-xs text-[#475569] sm:text-sm md:text-[15px]"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[16px] border border-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                <div className="relative h-[190px] w-full sm:h-[240px] md:h-[260px] lg:h-[300px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#071133]/90 via-[#071133]/20 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4">
                  <h3 className="text-sm font-black leading-tight text-white sm:text-lg md:text-[20px]">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-[11px] font-bold text-[#23d18b] sm:text-sm">
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="mt-2 text-[11px] leading-[1.7] text-[#475569] sm:mt-3 sm:text-sm md:text-[15px]">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
