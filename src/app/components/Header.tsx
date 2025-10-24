"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/our-network", label: "Our Network" },
    { href: "/advertise", label: "Advertise" },
    { href: "/terms-and-conditions", label: "Terms and Conditions" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 font-montserrat text-base">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/logo/websitebrokers logo.png"
              alt="Logo"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-sm sm:text-base lg:text-base">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-800 hover:text-[#b9d542] font-medium transition"
            >
              {link.label}
            </Link>
          ))}
          {/* Desktop CTA */}
          <Link
            href="/contact-us"
            className="bg-[#b9d542] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full hover:bg-[#a1b643] transition text-sm sm:text-base"
          >
            Get in touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md px-4 py-4 shadow-lg w-full overflow-auto"
          >
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-gray-800 hover:text-[#8aa921] font-medium transition text-base"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact-us"
                onClick={handleLinkClick}
                className="bg-[#8aa921] text-white px-4 py-2 rounded-full hover:bg-[#7a9820] transition mt-2 text-base text-center"
              >
                Get in touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
