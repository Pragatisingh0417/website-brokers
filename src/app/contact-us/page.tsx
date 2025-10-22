"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    optIn: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", message: "", optIn: false });
  };

  return (
    <div className={`min-h-screen bg-[#f2f4f0] text-gray-800 ${montserrat.className}`}>

      {/* HERO SECTION */}
      <section className="relative h-[35vh] sm:h-[45vh] md:h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('/banner/banner-1.jpg')] bg-cover bg-center brightness-[0.45]" />
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            Have questions, domain inquiries, or need assistance? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* INFO TEXT SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-12 text-center space-y-6">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          If you are interested in receiving newsletters and buying domains, please submit your
          details and check the “Opt in” box on the form below. We will notify you via email about
          our upcoming sales.
        </p>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          For any domain name related queries, including complaints or abuse, please contact us
          using the form or the details below. You can expect a response within a few hours, and no
          more than 3 days.
        </p>
      </section>

      {/* CONTACT INFO + IMAGE */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-24 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left - Info */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#8aa921] mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Fill out the form or reach us directly through the following contact details. We
              typically respond within 24–48 hours.
            </p>

            <div className="space-y-4 text-base sm:text-lg">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-900 text-lg" />
                <p className="font-medium">+44 7624 483888</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-900 text-lg" />
                <a href="mailto:lynnmcnab48@gmail.com" className="text-blue-700 hover:underline">
                  lynnmcnab48@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-900 text-lg mt-1" />
                <p>
                  Websitebrokers Ltd <br />
                  P.O. Box 79, Ramsey, Isle of Man IM8 1AA <br />
                  United Kingdom
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-green-600 text-lg" />
                <Link
                  href="https://wa.me/447624483888"
                  target="_blank"
                  className="text-green-700 font-medium hover:underline"
                >
                  Chat with us on WhatsApp
                </Link>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/contact-1.jpg"
              alt="Contact illustration"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* FORM + IMAGE SECTION */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-24 bg-[#f2f4f0] border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left - Image */}
          <div className="space-y-6 order-2 lg:order-1">
            <img
              src="/images/contact-2.jpg"
              alt="Contact illustration"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Right - Form */}
          <div className="bg-gray-50 shadow-md rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-200 order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#8aa921] mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="optIn"
                  checked={formData.optIn}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-900 border-gray-300"
                />
                <label className="text-gray-700 text-sm">Opt in for newsletters</label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition transform hover:scale-[1.02] shadow-md"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
