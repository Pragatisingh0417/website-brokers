"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import {
  FaUser,
  FaBuilding,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFax,
  FaGlobe,
  FaLock,
} from "react-icons/fa";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Advertise() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    address: "",
    postalCode: "",
    website: "",
    email: "",
    telephone: "",
    fax: "",
    optIn: false,
    code: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Thank you! Your message has been submitted.");
    setFormData({
      name: "",
      company: "",
      position: "",
      address: "",
      postalCode: "",
      website: "",
      email: "",
      telephone: "",
      fax: "",
      optIn: false,
      code: "",
    });
  };

  return (
    <motion.div
      className={`min-h-screen bg-[#f2f4f0] text-gray-800 py-16 px-6 md:px-24 ${montserrat.className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-[#8aa921] text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Advertise
      </motion.h1>

      {/* Info Text */}
      <motion.div
        className="max-w-3xl mx-auto space-y-4 mb-12 text-center text-gray-700 text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <p>
          If you are interested in receiving newsletters and buying domains then
          please click here to chat with us on WhatsApp, or submit your details
          and check the 'Opt in' box on the form below and we will notify you
          via email of our upcoming sales.
        </p>
        <p>
          If you are interested in Advertising/Banners and/or Affiliate deals,
          please complete this form.
        </p>
        <p>
          One of our Sales Representatives will call you within 5 business days
          to discuss your requirements.
        </p>
        <p className="text-[#8aa921] font-semibold hover:underline cursor-pointer">
          Click here to read our Terms and Conditions
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-md border border-gray-200 max-w-5xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {[
              { icon: FaUser, name: "name", placeholder: "Name", required: true },
              { icon: FaBuilding, name: "company", placeholder: "Company" },
              { icon: FaBriefcase, name: "position", placeholder: "Position" },
              { icon: FaMapMarkerAlt, name: "address", placeholder: "Address" },
              {
                icon: FaMapMarkerAlt,
                name: "postalCode",
                placeholder: "Post/Zip Code",
              },
              { icon: FaGlobe, name: "website", placeholder: "Website" },
            ].map(({ icon: Icon, name, placeholder, required }) => (
              <div key={name} className="relative">
                <Icon className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name={name}
                  value={formData[name as keyof typeof formData] as string}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full pl-10 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required={required}
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full pl-10 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
              <FaPhoneAlt className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Telephone"
                className="w-full pl-10 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FaFax className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="fax"
                value={formData.fax}
                onChange={handleChange}
                placeholder="Fax"
                className="w-full pl-10 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center space-x-2 mt-4">
              <input
                type="checkbox"
                name="optIn"
                checked={formData.optIn}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <label className="text-gray-700 font-medium text-sm sm:text-base">
                Opt in to Newsletters & Special Offer Emails
              </label>
            </div>

            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="Enter Code"
                className="w-full pl-10 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="mt-8 w-full bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
