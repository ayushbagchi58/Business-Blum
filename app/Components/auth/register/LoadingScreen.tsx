"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#d1fae5] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="flex justify-center items-center mb-6">
          <Image
            src="/Logos/navlogo.png"
            alt="Business Blum"
            width={50}
            height={50}
            className="object-contain"
          />
          <h1 className="text-[20px] font-bold text-[#009966] ml-2">
            Business Blum
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-10 text-center"
        >
          <h2 className="text-[24px] font-bold text-[#1e293b] mb-6">
            Checking your credit
          </h2>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-emerald-200 rounded-full blur-xl"
              />
              <div className="relative bg-white rounded-full p-5 shadow-lg">
                <Shield size={40} className="text-[#009966]" />
              </div>
            </div>
          </motion.div>

          <p className="text-[15px] text-gray-600 mb-1.5">
            We&apos;re securely connecting to credit bureaus...
          </p>
          <p className="text-[13px] text-gray-500">
            This usually takes under 30 seconds
          </p>

          <div className="flex justify-center gap-1.5 mt-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 bg-[#009966] rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
