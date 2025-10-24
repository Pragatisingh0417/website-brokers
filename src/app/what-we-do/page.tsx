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

  return (
    <div className={`min-h-screen bg-[#f2f4f0] text-gray-800 ${montserrat.className}`}>
      
      {/* HERO SECTION */}
    {/* HERO SECTION */}
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('/banner/what-we-do.png')] bg-cover bg-center brightness-[0.45]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 md:px-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
          >
            What We Do
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
          >
            Discover how Websitebrokers can help your business grow through strategic digital exposure.
          </motion.p>
        </motion.div>
      </section>

      {/* INTRO TEXT */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-12 text-center"
      >
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          From the earliest days of Internet communications in the nineties, Websitebrokers has been at the forefront of business and marketing communications on the web. We have a long-established working relationship with the travel, leisure, hotel, corporate, and sporting industries, and understand the importance of clear, efficient, targeted advertising to achieve a higher market share for your business.
        </p>
      </motion.section>

      {/* OUR EXPERTISE */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-24 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              Our <span className="text-[#8aa921]">Expertise </span> 
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
              At Websitebrokers, we specialise in driving customer traffic to your websites. Through strategic marketing, search engine visibility, and precisely positioned click-through banner advertising, we design bespoke communication and advertising packages tailored to achieve your business goals.
            </p>

            <div className="flex flex-wrap gap-4 pt-6 justify-center lg:justify-start">
              <Link
                href="/our-network"
                className="bg-[#8aa921] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#7a981d] transition-all shadow-md hover:shadow-lg"
              >
                Know More
              </Link>
              <Link
                href="/contact-us"
                className="border-2 border-[#8aa921] text-[#8aa921] px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#8aa921] hover:text-white transition-all shadow-md hover:shadow-lg"
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

      {/* OUR GOAL */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-24 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto items-center">
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
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              Our <span className="text-[#8aa921]"> Goal </span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
              Our goal is for our clients to get organic first-page listings (i.e. not pay-per-click) on all search engine searches with our carefully crafted websites — bringing those all-important sales conversion opportunities straight to you.
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
              Economical, targeted, and efficient, a website and banner advertising on affiliated sites with us can increase your profits without the need for a large traditional advertising spend.
            </p>

            <div className="flex flex-wrap gap-4 pt-6 justify-center lg:justify-start">
              <Link
                href="/our-network"
                className="bg-[#8aa921] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#7a981d] transition-all shadow-md hover:shadow-lg"
              >
                Know More
              </Link>
              <Link
                href="/contact-us"
                className="border-2 border-[#8aa921] text-[#8aa921] px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#8aa921] hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL TEXT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-12 text-center">
        <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
          "With the aid of our extensive website portfolio including .com and .co.uk domain names in the sports, hotel, and travel sectors — plus a wealth of town and location names — we create websites that our clients are proud of, and which drive their business forward."
        </p>
      </section>

      {/* CARD SECTION */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        viewport={{ once: true }}
      >
        {/* CARD 1 */}
        <motion.div
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          className="bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between border border-gray-100 hover:shadow-2xl hover:border-[#8aa921]/40 transition-all duration-300"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 border-l-4 border-[#8aa921] pl-3 sm:pl-4">
              Banner Advertising
            </h3>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-lg">
              Targeted 'click-through' banner advertising on our affiliated host websites increases the number of potential customers that your website will be seen by, and is an exceedingly economical way of advertising in today's fast paced market. Coupled with the beautifully designed and easy to navigate websites we create, your business will go from strength to strength.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-6 justify-center md:justify-start">
            <Link
              href="/what-we-do"
              className="bg-[#8aa921] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#7a981d] transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Know More
            </Link>
            <Link
              href="/contact-us"
              className="border-2 border-[#8aa921] text-[#8aa921] px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#8aa921] hover:text-white transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          className="bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between border border-gray-100 hover:shadow-2xl hover:border-[#8aa921]/40 transition-all duration-300"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 border-l-4 border-[#8aa921] pl-3 sm:pl-4">
              Invest with Websitebrokers
            </h3>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-lg">
              Invest in a website and targeted banner advertising from Websitebrokers, and you really will see the benefit to your business that our key search engine knowledge and wealth of marketing experience can bring.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-6 justify-center md:justify-start">
            <Link
              href="/advertise"
              className="bg-[#8aa921] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#7a981d] transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Know More
            </Link>
            <Link
              href="/contact-us"
              className="border-2 border-[#8aa921] text-[#8aa921] px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#8aa921] hover:text-white transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
