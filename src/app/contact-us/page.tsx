// app/contact.tsx
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
            {/* Hero Banner */}
            <section className="relative h-[45vh] flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-[url('/banner/banner-1.jpg')] bg-cover bg-center brightness-[0.45]"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-5xl font-bold mb-3">Contact Us</h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-200">
                        Have questions, domain inquiries, or need assistance? We’d love to hear from you.
                    </p>
                </div>
            </section>

            {/* Info Text Section */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 py-12 text-center space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                    If you are interested in receiving newsletters and buying domains, please submit your
                    details and check the “Opt in” box on the form below. We will notify you via email about
                    our upcoming sales.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                    For any domain name related queries, including complaints or abuse, please contact us
                    using the form or the details below. You can expect a response within a few hours, and no
                    more than 3 days.
                </p>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-6 md:px-16 lg:px-24  border-t border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {/* Left Side - Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Get In Touch</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Fill out the form or reach us directly through the following contact details. We
                            typically respond within 24–48 hours.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <FaPhoneAlt className="text-blue-900 text-lg" />
                                <p className="font-medium">+44 7624 483888</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-blue-900 text-lg" />
                                <a
                                    href="mailto:lynnmcnab48@gmail.com"
                                    className="text-blue-700 hover:underline"
                                >
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

                    {/* Right Side - Form */}
                    <div className="bg-gray-50 shadow-md rounded-2xl p-8 border border-gray-200">
                        <img
                            src="/images/contact-1.jpg"
                            alt="Contact illustration"
                            className="w-full h-auto rounded-xl"
                        />

                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#f2f4f0] border-t border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {/* right  Side - image */}
                    <div className="space-y-6">
                        <img
                            src="/images/contact-2.jpg"
                            alt="Contact illustration"
                            className="w-full h-auto rounded-xl"
                        />


                    </div>
                    {/* left Side - Form */}
                    <div className="bg-gray-50 shadow-md rounded-2xl p-8 border border-gray-200">
                        <h3 className="text-2xl font-semibold text-blue-900 mb-6">Send Us a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                    placeholder="Your full name"
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
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                    placeholder="you@example.com"
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
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="optIn"
                                    checked={formData.optIn}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-900 border-gray-300"
                                />
                                <label className="text-gray-700 text-sm">
                                    Opt in for newsletters
                                </label>
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
