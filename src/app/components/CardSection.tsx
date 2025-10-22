"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket, Megaphone } from "lucide-react";

export default function CardSection() {
  return (
    <section className="relative overflow-hidden py-15 bg-gradient-to-b from-gray-50 to-white">
      {/* === FLOATING BACKGROUND BLOBS === */}
      <motion.div
        className="absolute top-0 -left-40 w-96 h-96 bg-[#8aa921]/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-96 h-96 bg-[#8aa921]/10 rounded-full blur-3xl"
        animate={{
          y: [0, -25, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* === CARD GRID === */}
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.25, duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        {/* CARD 1 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          className="relative  shadow-xl rounded-3xl p-10 flex flex-col justify-between border border-gray-100 hover:border-[#8aa921]/40 hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#8aa921]/10 p-3 rounded-full">
              <Rocket className="text-[#8aa921] w-7 h-7" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">What We Do</h3>
          </div>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            At <span className="font-semibold">Websitebrokers</span>, we help your
            brand stand out from the competition. Our SEO expertise drives traffic,
            boosts visibility, and places your business where it matters most —
            at the top of search results.
            <br /><br />
            Using advanced tools and analytics, we ensure your business achieves
            measurable, lasting online growth.
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <Link
              href="/what-we-do"
              className="bg-[#8aa921] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a981d] transition-all shadow-md hover:shadow-lg"
            >
              Read More
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
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          className="relative bg-white shadow-xl rounded-3xl p-10 flex flex-col justify-between border border-gray-100 hover:border-[#8aa921]/40 hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#8aa921]/10 p-3 rounded-full">
              <Megaphone className="text-[#8aa921] w-7 h-7" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Advertising</h3>
          </div>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Advertise with <span className="font-semibold">Websitebrokers</span> and
            unlock the potential of banner marketing across our affiliate network.
            <br /><br />
            We help your brand gain visibility in the fast-paced digital landscape
            through targeted, results-driven campaigns tailored to your business goals.
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <Link
              href="/advertise"
              className="bg-[#8aa921] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a981d] transition-all shadow-md hover:shadow-lg"
            >
              Read More
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#8aa921] text-[#8aa921] px-6 py-3 rounded-full font-semibold hover:bg-[#8aa921] hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
