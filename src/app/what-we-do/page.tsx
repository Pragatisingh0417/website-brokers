// app/what-we-do.tsx
/* eslint-disable react/no-unescaped-entities */

"use client";
import { motion } from "framer-motion";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function WhatWeDo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    optIn: false,
  });





  const btnPrimary =
    "px-6 py-3 rounded-2xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition";
  const btnOutline =
    "px-6 py-3 rounded-2xl border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition";

  return (
    <div className={`min-h-screen bg-[#f2f4f0] text-gray-800 ${montserrat.className}`}>
      {/* HERO SECTION */}
      <section className="relative h-[45vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('/banner/banner-1.jpg')] bg-cover bg-center brightness-[0.45]"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-3">What We Do</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Discover how Websitebrokers can help your business grow through strategic digital exposure.
          </p>
        </div>
      </section>

      {/* INTRO TEXT SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          From the earliest days of Internet communications in the nineties, Websitebrokers has been
          at the forefront of business and marketing communications on the web. We have a long-established
          working relationship with the travel, leisure, hotel, corporate, and sporting industries,
          and understand the importance of clear, efficient, targeted advertising to achieve a higher market share
          for your business.
        </p>
      </section>

      {/* OUR EXPERTISE SECTION */}
      <section className="py-16 px-6 md:px-16 lg:px-24  border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Websitebrokers, we specialise in driving customer traffic to your websites.
              Through strategic marketing, search engine visibility, and precisely positioned click-through banner advertising,
              we design bespoke communication and advertising packages tailored to achieve your business goals.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                href="/about"
                className="bg-[#8aa921] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a981d] transition-all shadow-md hover:shadow-lg"
              >
                Know More
              </Link>

              <Link
                href="/contact"
                className="border-2 border-[#8aa921] text-[#8aa921] px-6 py-3 rounded-full font-semibold hover:bg-[#8aa921] hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                Get In Touch
              </Link>
            </div>

          </div>

          <div className="shadow-lg rounded-xl overflow-hidden">
            <Image
              src="/images/what-we-do.jpg"
              alt="Digital marketing and web strategy by Websitebrokers"
              width={800}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
      </section>

      {/* OUR GOAL SECTION */}
      <section className="py-16 px-6 md:px-16 lg:px-24  border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="shadow-lg rounded-xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/home-3.jpg"
              alt="Achieving client goals through SEO and marketing"
              width={800}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Goal</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our goal is for our clients to get organic first-page listings (i.e. not pay-per-click)
              on all search engine searches with our carefully crafted websites — bringing those
              all-important sales conversion opportunities straight to you.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Economical, targeted, and efficient, a website and banner advertising on affiliated sites
              with us can increase your profits without the need for a large traditional advertising spend.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                href="/about"
                className="bg-[#8aa921] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a981d] transition-all shadow-md hover:shadow-lg"
              >
                Know More
              </Link>

              <Link
                href="/contact"
                className="border-2 border-[#8aa921] text-[#8aa921] px-6 py-3 rounded-full font-semibold hover:bg-[#8aa921] hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                Get In Touch
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ADDITIONAL TEXT SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          "With the aid of our extensive website portfolio including .com and .co.uk domain names in
          the sports, hotel, and travel sectors — plus a wealth of town and location names — we create
          websites that our clients are proud of, and which drive their business forward."
        </p>
      </section>



      {/* CARD SECTION */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
        viewport={{ once: true }}
      >
        {/* CARD 1 */}
        <motion.div
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          className="bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-2xl p-10 flex flex-col justify-between border border-gray-100 hover:shadow-2xl hover:border-[#8aa921]/40 transition-all duration-300"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-5 border-l-4 border-[#8aa921] pl-4">
              Banner Advertising

            </h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Targeted 'click-through' banner advertising on our affiliated host websites increases the number of potential customers that your website will be seen by, and is an exceedingly economical way of advertising in today's fast paced market. Coupled with the beautifully designed and easy to navigate websites we create, your business will go from strength to strength.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-8">
            <Link
              href="/what-we-do"
              className="bg-[#8aa921] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a981d] transition-all shadow-md hover:shadow-lg"
            >
              Know More
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#8aa921] text-[#8aa921] px-6 py-3 rounded-full font-semibold hover:bg-[#8aa921] hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          className="bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-2xl p-10 flex flex-col justify-between border border-gray-100 hover:shadow-2xl hover:border-[#8aa921]/40 transition-all duration-300"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-5 border-l-4 border-[#8aa921] pl-4">
              Invest with Websitebrokers

            </h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Invest in a website and targeted banner advertising from Websitebrokers, and you really will see the benefit to your business that our key search engine knowledge and wealth of marketing experience can bring.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-8">
            <Link
              href="/advertise"
              className="bg-[#8aa921] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a981d] transition-all shadow-md hover:shadow-lg"
            >
              Know More
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#8aa921] text-[#8aa921] px-6 py-3 rounded-full font-semibold hover:bg-[#8aa921] hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </motion.section>

    </div>
  );
}
