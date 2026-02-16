import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
// Icons (assuming paths are correct)
import ConsultationIcon from "../assets/Icons/consultrationIcon.png";
import MessageIcon from "../assets/Icons/Message.png";
import PhoneIcon from "../assets/Icons/Phone.png";
import LinkedInIcon from "../assets/Icons/LinkedIn.png";
import InstagramIcon from "../assets/Icons/Instagram.png";
import WhatsAppIcon from "../assets/Icons/WhatsApp.png";
import SocialIcon from "../assets/Icons/Social.png"; // This will be the 'X' icon
import LogoDesign from "../../public/logoDesign.png";

export default function Footer() {
  return (
    <footer className="bg-white pt-10 pb-12">
      <div className="max-w-8xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ===== TOP SECTION: CTA ===== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-transparent pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={ConsultationIcon}
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
              We are an accessible workplace. People with disabilities are welcome
              to apply.
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

        {/* ===== MIDDLE SECTION: LOGO & LINKS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
          
          {/* Column 1: Logo & Contact */}
          <div className="md:col-span-5 lg:col-span-6">
            <Image
              src={LogoDesign}
              alt="GDigital"
              width={140}
              height={50}
              className="mb-8"
            />
            <div className="space-y-5 text-[#333e48] font-medium">
              <div className="flex items-center gap-4">
                <Image src={MessageIcon} alt="Email" width={24} height={24} />
                <a href="mailto:hello@gdigital.com" className="hover:text-[#00966C]">Hello@gdigital.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Image src={PhoneIcon} alt="Phone" width={24} height={24} />
                <a href="tel:+923215593827" className="hover:text-[#00966C]">+923215593827</a>
              </div>
            </div>
          </div>

        {/* Company & Resources Wrapper (Side-by-side on mobile) */}
        <div className="md:col-span-6 grid grid-cols-2 gap-4">
            {/* Company Column */}
            <div>
              <h6 className="text-xl font-bold text-[#333e48] mb-6">Company</h6>
              <ul className="space-y-3 text-gray-400 font-medium">
                <li className="hover:text-[#00966C] cursor-pointer">About Us</li>
                <li className="hover:text-[#00966C] cursor-pointer">Careers</li>
                <li className="hover:text-[#00966C] cursor-pointer">What We Do</li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h6 className="text-xl font-bold text-[#333e48] mb-6">Resources</h6>
              <ul className="space-y-3 text-gray-400 font-medium">
                <li className="hover:text-[#00966C] cursor-pointer">Privacy Policy</li>
                <li className="hover:text-[#00966C] cursor-pointer">Cookies</li>
                <li className="hover:text-[#00966C] cursor-pointer">Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>


        {/* ===== BOTTOM SECTION: SOCIAL & COPYRIGHT ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 mt-10 pt-8">
          {/* Social Icons */}
          <div className="md:col-span-5 lg:col-span-6 flex gap-6 items-center">
            <a href="#" className="opacity-80 hover:opacity-100 transition">
              <Image src={LinkedInIcon} alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition">
              <Image src={InstagramIcon} alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition">
              <Image src={WhatsAppIcon} alt="WhatsApp" width={24} height={24} />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition">
              <Image src={SocialIcon} alt="X" width={22} height={22} />
            </a>
          </div>

          {/* Copyright */}
          <div className="md:col-span-7 lg:col-span-6">
            <p className="text-[#333e48] font-semibold text-lg">
              © 2025 Gdigital. All rights reserved.
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}