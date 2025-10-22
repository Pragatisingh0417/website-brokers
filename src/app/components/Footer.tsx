"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#eff4df] text-gray-900">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left: Logo + CTA */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image 
                src="/logo/websitebrokers logo.png" 
                alt="Logo" 
                width={150} 
                height={40} 
                className="object-contain"
              />
            </Link>
            <p className="text-gray-700 text-base leading-relaxed">
              With age comes experience, and having been a major player in the online marketing world since the earliest days of the Internet in the nineties, here at Websitebrokers we have the knowledge and ability to make your online presence felt!<br /><br />
              As early adopters of the Internet as a highly tactical and targeted marketing tool, we have set out to help businesses achieve and surpass their earning potential, with technical know-how, excellent design, and perfect functionality.
            </p>
            <Link
              href="/contact"
              className="bg-[#b9d542] text-black px-6 py-3 rounded-full hover:bg-[#b9d542] transition w-max"
            >
              Get in Touch
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#b9d542]  leading-relaxed font-semibold mb-4  text-lg ">Quick Links</h3>
            <Link href="/" className="hover:text-red-700 transition">Home</Link>
            <Link href="/what-we-do" className="hover:text-red-700 transition">What We Do</Link>
            <Link href="/our-network" className="hover:text-red-700 transition">Our Network</Link>
            <Link href="/advertise" className="hover:text-red-700 transition">Advertise</Link>
            <Link href="/terms" className="hover:text-red-700 transition">Terms & Conditions</Link>
            <Link href="/contact" className="hover:text-red-700 transition">Contact Us</Link>
          </div>

          

          {/* Right: Social Media */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#b9d542]  leading-relaxed font-semibold mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="p-3 bg-[#b9d542] rounded-full hover:bg-red-700 transition">
                <FaFacebookF size={16} />
              </Link>
              <Link href="#" className="p-3 bg-[#b9d542] rounded-full hover:bg-red-700 transition">
                <FaTwitter size={16} />
              </Link>
              <Link href="#" className="p-3 bg-[#b9d542] rounded-full hover:bg-red-700 transition">
                <FaLinkedinIn size={16} />
              </Link>
              <Link href="#" className="p-3 bg-[#b9d542] rounded-full hover:bg-red-700 transition">
                <FaInstagram size={16} />
              </Link>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              &copy; {new Date().getFullYear()} Websitebrokers. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
