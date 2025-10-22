// app/components/Banner.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <section className=" text-white py-60 px-4 md:px-20 text-center relative">
      {/* Optional background image */}
      <div className="absolute inset-0  bg-[url('/banner/banner-3.jpg')] bg-cover bg-center"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          We help your business stand out online
        </p>
        <Link
          href="/contact"
          className="bg-white text-red-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
