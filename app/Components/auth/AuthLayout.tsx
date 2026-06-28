"use client";

import Image from "next/image";
import { AuthTestimonial, AuthStats } from "./types";

interface AuthLayoutProps {
  children: React.ReactNode;
  testimonial: AuthTestimonial;
  stats: AuthStats;
}

export default function AuthLayout({
  children,
  testimonial,
  stats,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Testimonial */}
      <div className="hidden w-full flex-col justify-between bg-gradient-to-br from-[#0a1628] to-[#0c2335] p-12 text-white lg:flex lg:w-[450px]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0EA56B]">
            <Image
              src="/Logos/navlogo.png"
              alt="Business Blum"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold">Business Blum</span>
        </div>

        {/* Testimonial */}
        <div className="space-y-6">
          <blockquote className="text-xl font-medium leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-[#0EA56B]">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-400">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8">
          <div>
            <p className="text-2xl font-bold">{stats.funded}</p>
            <p className="mt-1 text-xs text-gray-400">Funded</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{stats.businesses}</p>
            <p className="mt-1 text-xs text-gray-400">Businesses</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{stats.partners}</p>
            <p className="mt-1 text-xs text-gray-400">Partners</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex flex-1 items-center justify-center bg-gray-50">
        {children}
      </div>
    </div>
  );
}
