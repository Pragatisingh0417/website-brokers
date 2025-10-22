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

export default function Network() {
  

    return (
        <div className={`min-h-screen bg-[#f2f4f0] text-gray-800 ${montserrat.className}`}>
            {/* Hero Banner */}
            <section className="relative h-[45vh] flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-[url('/banner/banner-1.jpg')] bg-cover bg-center brightness-[0.45]"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-5xl font-bold mb-3">Our Network</h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-200">
Please find below the groups of our domains in various categories. Some will have their own websites others may not (just yet).
                    </p>
                </div>
            </section>

            {/* Info Text Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                   If we are in the process of building a site on the domain you are interested it maybe forwarded to an associated website i.e. www.manchesterhotels.co.uk may be forwarded to www.findahotel.co.uk.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                   Hopefully you will find the information you are looking for, if not, please do let us know and we will rectify!
                </p>
            </section>

           


            
        </div>
    );
}
