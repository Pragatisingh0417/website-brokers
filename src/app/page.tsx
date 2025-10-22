"use client";

import Banner from "./components/Banner";
import { FaRocket, FaChartLine, FaUsers, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import CardSection from "./components/CardSection";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <div className="bg-[#f2f4f0]">
      {/* HERO BANNER */}
      <Banner />

      {/* INTRO SECTION */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Experience That <span className="text-[#8aa921]"> Delivers Results </span>
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          With age comes experience, and having been a major player in the online marketing world since the earliest days of the Internet in the nineties, here at Websitebrokers we have the knowledge and ability to make your online presence felt!
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          As early adopters of the Internet as a highly tactical and targeted marketing tool, we&apos;ve helped businesses achieve and surpass their potential with technical know-how, excellent design, and perfect functionality.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          As a small to medium enterprise, you may not have the large advertising budgets of leading brands — but at Websitebrokers, that&apos;s no obstacle to creating a bespoke, high-impact global presence.
        </p>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Why Choose <span className="text-[#8aa921]"> Websitebrokers </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaRocket className="text-[#8aa921] text-4xl mx-auto mb-4" />,
                title: "Proven Expertise",
                desc: "Decades of experience in online marketing, design, and SEO success.",
              },
              {
                icon: <FaChartLine className="text-[#8aa921] text-4xl mx-auto mb-4" />,
                title: "Data-Driven Results",
                desc: "We help your website achieve first-page rankings and maximize visibility.",
              },
              {
                icon: <FaUsers className="text-[#8aa921] text-4xl mx-auto mb-4" />,
                title: "SME Friendly",
                desc: "Affordable, customized marketing solutions designed for small and medium enterprises.",
              },
              {
                icon: <FaGlobe className="text-[#8aa921] text-4xl mx-auto mb-4" />,
                title: "Global Reach",
                desc: "Our affiliate network across industries boosts your brand worldwide.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: idx * 0.2 } }}
                viewport={{ once: true }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* BUSINESS GROWTH INSIGHT SECTIONS */}
      {[
        {
          title: (
            <>
              The Importance of Your{" "}
              <span className="text-[#8aa921]">Online Presence</span>
            </>
          ),
          text: "Recent marketing research has shown that any business not yet on the web can be losing an annual percentage of earnings and growth rate, which can mean the difference between business success and business failure.",
          text2: "Ensure that your business is being given every opportunity to flourish in a crowded marketplace with first-page ranking on any search engine. This is the difference that a custom website and targeted advertising from Websitebrokers can make to you — right now!",
          img: "/images/home-1.jpg",
          reverse: false,
        },
        {
          title: (
            <>
              Your Gateway to{" "}
              <span className="text-[#8aa921]">Profitable Online </span> Advertising
            </>
          ),
          text: "Our affiliated sites in alternative medicine, travel, hotels, holidays, events, gambling, speculation, entertainment and many more sectors can bring you the &apos;click-through&apos; banner advertising you need to make your website not only more efficient, but more profitable too.",
          text2: "Year on year sales figures have shown that a website from Websitebrokers with linked banner advertising can give you exponential growth which can far outstrip your competitors, and increase your profit margin. Websitebrokers can make to you — right now!",
          img: "/images/home-2.jpg",
          reverse: true,
        },
      ].map((section, idx) => {
        const slideVariant = {
          hidden: (reverse: boolean) => ({
            opacity: 0,
            x: reverse ? 100 : -100,
          }),
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        };

        return (
          <section key={idx} className="py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
              {/* IMAGE */}
              <motion.div
                className={`${
                  section.reverse ? "md:order-2" : "md:order-1"
                } flex justify-center`}
                custom={section.reverse}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideVariant}
              >
                <img
                  src={section.img}
                  alt="Section Image"
                  className="rounded-2xl shadow-lg w-full md:w-[90%] object-cover"
                />
              </motion.div>

              {/* CONTENT */}
              <motion.div
                className={`${
                  section.reverse ? "md:order-1" : "md:order-2"
                }`}
                custom={section.reverse}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideVariant}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {section.text}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {section.text2}
                </p>
                <div className="flex flex-wrap gap-4 pt-6">
                  <Link
                    href="/what-we-do"
                    className="bg-[#8aa921] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a981d] transition-all shadow-md hover:shadow-lg"
                  >
                    Know More
                  </Link>
                  <Link
                    href="/contact-us"
                    className="border-2 border-[#8aa921] text-[#8aa921] px-6 py-3 rounded-full font-semibold hover:bg-[#8aa921] hover:text-white transition-all shadow-md hover:shadow-lg"
                  >
                    Get In Touch
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* INTRO SECTION */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Your <span className="text-[#8aa921]">Goals. </span> Our{" "}
          <span className="text-[#8aa921]">Expertise.</span>
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          The basic formula for the success of your business is within your grasp. To get a clear idea of exactly how we can help you achieve your business goals today simply talk to us. We can take care of all the little exhausting details, so you don&apos;t need to worry about anything. Our extensive portfolio of domains, mainly with .com and .co.uk addresses, are at your disposal, plus our network of affiliated websites which can promote your banner advertising to great effect.
        </p>
      </motion.section>

      {/* CARD SECTION */}
      <CardSection />

      {/* FINAL CTA */}
      <motion.section
        className="bg-gray-900 text-white py-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s Build Your Digital Success Story
        </h2>
        <p className="text-lg mb-8">
          Talk to us today and discover how Websitebrokers can help your business grow.
        </p>
        <a
          href="/contact-us"
          className="bg-[#8aa921] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-[#7a981d] transition"
        >
          Contact Our Experts
        </a>
      </motion.section>
    </div>
  );
}
