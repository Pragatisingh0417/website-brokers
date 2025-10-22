"use client";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-25">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/logo/websitebrokers logo.png" alt="Logo" className="h-15 w-auto" />
          </Link>
        </div>

        {/* Center: Navigation (Desktop) */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-900 hover:text-[#b9d542] font-medium">
            Home
          </Link>
          <Link href="/what-we-do" className="text-gray-800 hover:text-[#b9d542] font-medium">
            What We Do
          </Link>
          <Link href="/our-network" className="text-gray-800 hover:text-[#b9d542] font-medium">
            Our Network
          </Link>
          <Link href="/advertise" className="text-gray-800 hover:text-[#b9d542] font-medium">
            Advertise
          </Link>
          <Link href="/terms-and-conditions" className="text-gray-800 hover:text-[#b9d542] font-medium">
            Terms and Conditions
          </Link>
          <Link href="/contact-us" className="text-gray-800 hover:text-[#b9d542]  font-medium">
            Contact Us
          </Link>
        </nav>

        {/* Right: Call to action (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-[#b9d542] text-black px-5 py-3 rounded-full hover:bg-red-800 transition"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 focus:outline-none"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 px-6 pb-4">
          <nav className="flex flex-col gap-3">
            <Link href="/" className="text-gray-200 hover:text-red-700 font-medium">
              Home
            </Link>
            <Link href="/what-we-do" className="text-gray-200 hover:text-red-700 font-medium">
              What We Do
            </Link>
            <Link href="/our-network" className="text-gray-200 hover:text-red-700 font-medium">
              Our Network
            </Link>
            <Link href="/advertise" className="text-gray-200 hover:text-red-700 font-medium">
              Advertise
            </Link>
            <Link href="/terms" className="text-gray-200 hover:text-red-700 font-medium">
              Terms and Conditions
            </Link>
            <Link href="/contact" className="text-gray-200 hover:text-red-700 font-medium">
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="bg-[#b9d542] text-white px-5 py-3 rounded-full hover:bg-red-800 transition mt-2"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
