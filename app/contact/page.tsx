"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import DropMessageIcon from "../../component/assets/Icons/DropMessage.png";
import ResponseIcon from "../../component/assets/Icons/ResponseIcon.png";
import MeetIcon from "../../component/assets/Icons/MeetIcon.png";
import ExecutionIcon from "../../component/assets/Icons/ExecutionIcon.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />

      <section id="contact" className="py-30 bg-white">
        <div className="max-w-8xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            {/* Left Text */}
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-[45px] lg:text-5xlxl:text-[60px] font-bold text-[#23A654] mb-4 leading-tight">
                Let's Begin
              </h2>
              <p className="text-2xl sm:text-3xl md:text-[45px] font-bold text-gray-900">
                The beginning of something great.
              </p>
            </div>

            {/* Right Form */}
            <div className="md:w-1/2 bg-white rounded-2xl shadow-xl p-6 sm:p-10 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23A654] placeholder-gray-400 transition-all"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23A654] placeholder-gray-400 transition-all"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="How we can help you?"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23A654] placeholder-gray-400 transition-all resize-none"
                />

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#3D3D3D] text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="flex flex-col md:flex-row items-start w-full mt-16 mb-5 md:mt-24 gap-10">
            {/* Left Text */}
            <div className="md:w-1/3">
              <h3 className="text-2xl sm:text-4xl md:text-[45px] font-bold text-[#23A654]">
                Innovation.
              </h3>
              <h3 className="text-2xl sm:text-4xl md:text-[45px] font-bold text-gray-900 mt-2">
                Driven by people.
              </h3>
            </div>

            {/* Right Timeline */}
            <div className="md:w-2/3 relative">
              {/* Item 1 */}
              <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 py-6">
                <div className="absolute left-4 top-0 h-full border-l-2 border-dashed border-gray-400/60 hidden sm:block"></div>
                <Image
                  src={DropMessageIcon}
                  alt="Say hello"
                  width={60}
                  height={60}
                  className="z-10 bg-white rounded-full flex-shrink-0"
                />
                <div className="mt-4 sm:mt-0">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                    Say hello.
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">
                    Drop us a message. Think of this as the spark, the first step that makes everything possible.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 py-6">
                <Image
                  src={ResponseIcon}
                  alt="Quick response"
                  width={50}
                  height={50}
                  className="z-10 bg-white rounded-full flex-shrink-0"
                />
                <div className="mt-4 sm:mt-0">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                    Quick response.
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">
                    We won’t keep you waiting. Our team jumps in fast so momentum never dies.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 py-6">
                <Image
                  src={MeetIcon}
                  alt="Meet & map it out"
                  width={60}
                  height={60}
                  className="z-10 bg-white rounded-full flex-shrink-0"
                />
                <div className="mt-4 sm:mt-0">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                    Meet & map it out.
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">
                    We connect. We listen. We shape your idea into a clear plan. Collaboration at its best.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 py-6">
                <Image
                  src={ExecutionIcon}
                  alt="Let's make it real"
                  width={50}
                  height={50}
                  className="z-10 bg-white rounded-full flex-shrink-0"
                />
                <div className="mt-4 sm:mt-0">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                    Let’s make it real.
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">
                    From vision to execution — this is where the beginning of something great truly happens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
