"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import { contactLocationsSectionData } from "./data";

export default function ContactLocationsSection() {
  const { heading, description, locations } = contactLocationsSectionData;

  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa] py-8 sm:py-9 lg:py-10">
      <div className="mx-auto w-full max-w-5xl px-3 sm:px-4 lg:px-5">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className="
              text-[24px] font-black
              tracking-tight text-[#071133]
              sm:text-[30px]
              md:text-[38px]
            "
          >
            {heading}
          </h2>

          <p
            className="
              mt-2 text-[12px]
              text-[#475467]
              sm:text-[13px]
              md:text-[15px]
            "
          >
            {description}
          </p>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -3,
              }}
              className="
                rounded-[18px] border border-black/5
                bg-white p-4
                shadow-[0_4px_14px_rgba(0,0,0,0.045)]
                transition-all duration-300
                hover:shadow-[0_8px_18px_rgba(0,0,0,0.06)]
                sm:p-5
              "
            >
              <div
                className="
                  flex h-9 w-9 items-center
                  justify-center rounded-lg
                  bg-[#e8f8f1]
                "
              >
                <MapPin className="h-4 w-4 text-[#0EA56B]" />
              </div>

              <h3
                className="
                  mt-4 text-[18px]
                  font-black tracking-tight
                  text-[#071133]
                  sm:text-[20px]
                "
              >
                {location.city}
              </h3>

              <div className="mt-3 space-y-1.5">
                <p
                  className="
                    text-[12px]
                    text-[#344054]
                    sm:text-[13px]
                  "
                >
                  {location.addressLine1}
                </p>

                <p
                  className="
                    text-[12px]
                    text-[#344054]
                    sm:text-[13px]
                  "
                >
                  {location.addressLine2}
                </p>
              </div>

              <div className="mt-4 border-t border-black/10 pt-3">
                <p
                  className="
                    text-[11px]
                    text-[#475467]
                    sm:text-[12px]
                  "
                >
                  {location.hours}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
