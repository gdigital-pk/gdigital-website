'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Message from "../assets/Icons/Message.png";
import Phone from "../assets/Icons/Phone.png";
import logoDesign from "../../public/logoDesign.png";
import LinkedIn from "../assets/Icons/LinkedIn.png";
import Instagram from "../assets/Icons/Instagram.png";
import WhatsApp from "../assets/Icons/WhatsApp.png";
import Social from "../assets/Icons/Social.png";
import consultrationIcon from "../assets/Icons/consultrationIcon.png";
import { ArrowRight } from "lucide-react";

interface VersionInfo {
  version: string;
  commit: string;
  buildDate: string;
}

export default function Footer() {
  const [version, setVersion] = useState<VersionInfo | null>(null);

  useEffect(() => {
    fetch('/api/version')
      .then(res => res.json())
      .then(data => setVersion(data))
      .catch(() => setVersion(null));
  }, []);

  return (
    <footer className="bg-white pt-10 pb-12">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Schedule Consultation Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-transparent pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={consultrationIcon}
                alt="Consultation"
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <h2 className="text-2xl sm:text-3x md:text-5xl font-semibold text-[#333e48] tracking-tight">
                Schedule a Free Consultation
              </h2>
            </div>
            <p className="text-xl text-[#333e48] font-medium mb-3">
              Or apply as a digital accessibility expert
            </p>
            <p className="text-gray-400 text-base max-w-md leading-relaxed">
              We are an accessible workplace. People with disabilities are
              welcome to apply.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00966C] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#007a58] transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
          {/* Company Info */}
          <div className="md:col-span-5 lg:col-span-6">
            <Image
              src={logoDesign}
              alt="GDigital"
              width={140}
              height={50}
              className="mb-8"
            />
            <div className="space-y-5 text-[#333e48] font-medium">
              <div className="flex items-center gap-4">
                <Image src={Message} alt="Email" width={24} height={24} />
                <a href="mailto:hello@gdigital.com" className="hover:text-[#00966C]">Hello@gdigital.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Image src={Phone} alt="Phone" width={24} height={24} />
                <a href="tel:+923215593827" className="hover:text-[#00966C]">+923215593827</a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            <div>
              <h6 className="text-xl font-bold text-[#333e48] mb-6">Company</h6>
              <ul className="space-y-3 text-gray-400 font-medium">

    <li>
      <Link
        href="/about"
        className="hover:text-[#00966C] transition-colors"
      >
        About Us
      </Link>
    </li>

    <li>
      <Link
        href="/services"
        className="hover:text-[#00966C] transition-colors"
      >
        Services
      </Link>
    </li>

    <li>
      <Link
        href="/our-works"
        className="hover:text-[#00966C] transition-colors"
      >
        What We Do
      </Link>
    </li>

  </ul>
            </div>
            <div>
              <h6 className="text-xl font-bold text-[#333e48] mb-6">
                Resources
              </h6>
              <ul className="space-y-3 text-gray-400 font-medium">
                <li className="hover:text-[#00966C] cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-[#00966C] cursor-pointer">Cookies</li>
                <li className="hover:text-[#00966C] cursor-pointer">
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 mt-10 pt-8">
          <div className="md:col-span-5 lg:col-span-6 flex gap-2 items-center">
          <a
      href="https://www.linkedin.com/company/gdigitalpk"
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-80 hover:opacity-100 transition"
    >
      <Image src={LinkedIn} alt="LinkedIn" width={30} height={30} />
    </a>

    <a
      href="https://www.instagram.com/gdigital.pk"
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-80 hover:opacity-100 transition"
    >
      <Image src={Instagram} alt="Instagram" width={28} height={28} />
    </a>
          </div>
          <div className="md:col-span-7 lg:col-span-6">
            <p className="text-[#333e48] font-semibold text-lg">
              © 2026 Gdigital. All rights reserved.
            </p>
            {version && (
              <p className="text-gray-400 text-sm mt-2">
                Version {version.version} • Build {version.commit} • {new Date(version.buildDate).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
