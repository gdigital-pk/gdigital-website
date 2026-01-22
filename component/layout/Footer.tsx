import React from "react";
import Image from "next/image";
import Link from "next/link"; 
import ConsultationIcon from "../assets/Icons/consultrationIcon.png";
import MessageIcon from "../assets/Icons/Message.png";
import PhoneIcon from "../assets/Icons/Phone.png";
import LinkedInIcon from "../assets/Icons/LinkedIn.png";
import InstagramIcon from "../assets/Icons/Instagram.png";
import WhatsAppIcon from "../assets/Icons/WhatsApp.png";
import SocialIcon from "../assets/Icons/Social.png";
import LogoDesign from "../../public/logoDesign.png";

export default function Footer() {
  return (
    <footer className="bg-white pt-15 pb-18">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20">

        {/* ===== CTA SECTION ===== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          
          {/* Left */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={ConsultationIcon} // replace with your icon
                alt="Consultation"
                width={40}
                height={40}
              />
              <h2 className="text-4xl md:text-[44px] font-semibold text-gray-800">
                Schedule a Free Consultation
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Or apply as a digital accessibility expert
            </p>

            <p className="text-gray-400 max-w-lg">
              We are an accessible workplace. People with disabilities are welcome
              to apply.
            </p>
          </div>

          {/* Right Button */}
          <div className="hidden md:block ml-4">
              <Link
                href="/contact"
                className="bg-green-600 text-white px-6 py-2 rounded-full text-md font-medium hover:bg-green-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>

        </div>

        {/* ===== FOOTER CONTENT ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Image
              src={LogoDesign} // your logo
              alt="GDigital"
              width={120}
              height={70}
              className="mb-6"
            />

<div className="space-y-4 mt-8 text-gray-700 ">
  <p className="flex items-center gap-3">
    <Image src={MessageIcon} alt="Email" width={22} height={22} />
    hello@gdigital.com
  </p>

  <p className="flex items-center gap-3">
    <Image src={PhoneIcon} alt="Phone" width={22} height={22} />
    +45 60 47 52 64
  </p>
</div>
          </div>
          <div />
          <div>
            <h6 className="text-xl font-semibold text-gray-800 mb-6">
              Company
            </h6>
            <ul className="space-y-3 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>What We Do</li>
            </ul>
          </div>
          <div>
            <h6 className="text-xl font-semibold text-gray-800 mb-6">
              Resources
            </h6>
            <ul className="space-y-3 text-gray-400">
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-3">
        <div className="flex gap-5 mt-5">
  <a href="#" aria-label="LinkedIn">
    <Image
      src={LinkedInIcon}
      alt="LinkedIn"
      width={32}
      height={32}
      className="hover:opacity-70 transition"
    />
  </a>

  <a href="#" aria-label="Instagram">
    <Image
      src={InstagramIcon}
      alt="Instagram"
      width={30}
      height={30}
      className="hover:opacity-70 transition"
    />
  </a>

  <a href="#" aria-label="WhatsApp">
    <Image
      src={WhatsAppIcon}
      alt="WhatsApp"
      width={30}
      height={30}
      className="hover:opacity-70 transition"
    />
  </a>

  <a href="#" aria-label="Social">
    <Image
      src={SocialIcon}
      alt="Social"
      width={30}
      height={30}
      className="hover:opacity-70 transition"
    />
  </a>
</div>
<div className="text-start text-gray-700 mt-5">
          © 2025 Gdigital. All rights reserved.
        </div>
        </div>
        {/* ===== COPYRIGHT ===== */}
       
      </div>
    </footer>
  );
}
