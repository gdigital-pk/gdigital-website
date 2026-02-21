"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import DropMessageIcon from "../../component/assets/Icons/DropMessage.png";
import ResponseIcon from "../../component/assets/Icons/ResponseIcon.png";
import MeetIcon from "../../component/assets/Icons/MeetIcon.png";
import ExecutionIcon from "../../component/assets/Icons/ExecutionIcon.png";
import { Button } from "@/components/ui/stateful-button";
import AnimatedTextarea from "@/components/AnimatedTextarea";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors = {
      name: "",
      email: "",
      message: "",
    };
  
    let isValid = true;
  
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
  
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }
  
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }
  
    setErrors(newErrors);
  
    if (!isValid) return;
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    
      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    }
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
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
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
  placeholder="Name"
  className="w-full px-4 text-black py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23A654]"
/>
{errors.name && (
  <p className="text-red-500 text-sm">{errors.name}</p>
)}
               <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email"
  className="w-full text-black px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23A654]"
/>
{errors.email && (
  <p className="text-red-500 text-sm">{errors.email}</p>
)}

<AnimatedTextarea
  placeholders={[
    "How can we help you?",
    "Tell us about your project...",
    "Describe your idea...",
    "Need website or app development?",
  ]}
  value={formData.message}
  onChange={(e) =>
    setFormData({ ...formData, message: e.target.value })
  }
/>

{errors.message && (
  <p className="text-red-500 text-sm">{errors.message}</p>
)}

                <div className="flex justify-end">
                  <Button 
                    type="submit" onClick={handleClick}
                    className="bg-[#3D3D3D] text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700 transition-colors"
                  >
                    Send Message
                  </Button>
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
