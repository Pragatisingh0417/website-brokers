"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { FaGlobe, FaBullhorn, FaHandshake } from "react-icons/fa";
import NetworkDirectory from "../components/NetworkDirectory";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Network() {
  return (
    <div className={`min-h-screen bg-[#f2f4f0] text-gray-800 ${montserrat.className}`}>

      {/* HERO SECTION */}
      <section className="relative h-[35vh] sm:h-[45vh] md:h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/banner/networks.png')] bg-cover bg-center brightness-[0.45]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 md:px-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Our Network
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            Explore our domain network across multiple industries — some with live sites, and others in development.
          </p>
        </motion.div>
      </section>

      {/* INFO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            If we are currently developing a site for a domain you’re interested in, it might temporarily forward to an associated website. 
            <span className="font-medium text-[#8aa921]"> For example:</span> 
            <span className="italic"> www.manchesterhotels.co.uk </span> may redirect to 
            <span className="italic"> www.findahotel.co.uk</span>.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We strive to ensure all information is accurate. If you spot anything missing or incorrect, please do let us know — we’ll fix it right away!
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Interested in <span className="font-semibold text-[#8aa921]">advertising</span> on one of our sites (even upcoming ones)?{" "}
            <Link href="/contact-us" className="text-[#8aa921] font-semibold hover:underline">
              Click here
            </Link>{" "}
            and let us know your preferred site(s) — we can get it live quickly!
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Some of our domains may also be <span className="font-semibold text-[#8aa921]">for sale</span>. If you’re interested in acquiring one, reach out to discuss availability.
          </p>
        </motion.div>
      </section>

      {/* FEATURE CARDS SECTION */}
      <section className="bg-white py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {[
            {
              icon: <FaGlobe className="text-4xl sm:text-5xl text-[#8aa921]" />,
              title: "Diverse Categories",
              text: "Our domain network spans multiple sectors — travel, business, tech, lifestyle, and more.",
            },
            {
              icon: <FaBullhorn className="text-4xl sm:text-5xl text-[#8aa921]" />,
              title: "Advertising Opportunities",
              text: "Partner with us to showcase your brand across relevant, high-visibility digital spaces.",
            },
            {
              icon: <FaHandshake className="text-4xl sm:text-5xl text-[#8aa921]" />,
              title: "Partnership & Acquisition",
              text: "Interested in collaboration or purchasing a domain? Let’s discuss potential partnerships.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-[#f9faf8] rounded-2xl shadow-md hover:shadow-xl p-6 sm:p-8 md:p-10 text-center transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">{card.title}</h3>
              <p className="text-gray-700 text-base sm:text-lg">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NETWORK DIRECTORY */}
      <div className="px-4 sm:px-6 md:px-12">
        <NetworkDirectory />
      </div>

    </div>
  );
}
