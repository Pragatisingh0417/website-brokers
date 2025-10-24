// app/components/Banner.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative text-white text-center">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/banner/banner-7.png')] bg-cover bg-center bg-no-repeat"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 md:py-40 md:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          Welcome to  Website Brokers
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 max-w-2xl">
  Websitebrokers helps you buy, sell, and grow digital businesses with ease.
        </p>
        <Link
          href="/contact-us"
          className="bg-white text-[#8aa921] font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
