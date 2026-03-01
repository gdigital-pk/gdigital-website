"use client";

import React, { useState } from "react";
import LogoDesign from "../../public/logoDesign.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const links = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/hosting", label: "Hosting" },
    { href: "/our-work", label: "Our Work" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center h-20">
          <div className="flex-shrink-0">
          <Link href="/landing">
            <img src={LogoDesign.src} alt="Logo" className="cursor-pointer" />
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <div className="hidden md:flex space-x-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-0 py-2 text-md font-medium transition-colors ${
                    pathname === link.href
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:block ml-4">
              <Link href="/contact">
              <button className="bg-[#129F68] text-white px-8 py-3 rounded-full flex items-center gap-2 
          transition transform duration-300 hover:bg-[#0e8557] transition-colors">
             Contact Us
          </button>
          </Link>
            </div>

            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-white border-t">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact">
              <button className="bg-[#129F68] text-white px-4 py-2 mt-2 rounded-full flex text-center
          transition transform duration-300 hover:bg-[#0e8557] transition-colors">
             Contact Us
          </button>
          </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
