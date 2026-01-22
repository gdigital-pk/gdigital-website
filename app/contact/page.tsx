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
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 mt-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
  {/* Left Side Text */}
  <div className="md:w-1/2">
    <h2 className="text-[45px] font-bold text-[#23A654] mb-4">
      Let's Begin
    </h2>
    <p className="text-gray-900 text-[45px] md:text-[45px] font-bold">
      The beginning of something great.
    </p>
  </div>

  {/* Right Side Form */}
  <div className="md:w-1/2 bg-white rounded-2xl shadow-xl p-10 w-full">
    <h3 className="text-2xl font-bold text-gray-900 mb-6 items-center">
      Send us a Message
    </h3>

    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name Field */}
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23A654] placeholder-gray-400 transition-all"
        />
      </div>

      {/* Email Field */}
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23A654] placeholder-gray-400 transition-all"
        />
      </div>

      {/* Message Field */}
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={2}
          placeholder="How we can help you?"
          className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23A654] placeholder-gray-400 transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="w-auto bg-[#3D3D3D] text-white px-3 py-2 rounded-md font-medium hover:bg-gray-700 transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>

<div className="flex items-start w-full mt-24">

  {/* Left side */}
  <div className="md:w-1/3">
    <h3 className="text-[45px] font-bold text-[#23A654] text-start">
      Innovation.
    </h3>
    <h3 className="text-[45px] font-bold text-gray-900 text-start mt-2">
      Driven by people.
    </h3>
  </div>

  {/* Right side */}
  <div className="md:w-1/2 ml-auto relative">

    {/* Solid line (top → first icon) */}
    <div className="relative flex items-start gap-6 py-10">

{/* solid vertical line */}
<div className="absolute left-[32px] top-0 h-[190px] border-l-2 border-dashed border-gray-400/60"></div>


<Image
  src={DropMessageIcon}
  alt="Say hello"
  width={70}
  height={75}
  className="object-contain flex-shrink-0 bg-white z-10"
/>

<div>
  <h4 className="text-[22px] font-bold text-gray-900">
    Say hello.
  </h4>
  <p className="text-md text-gray-600 mt-2 leading-relaxed max-w-lg">
    Drop us a message. Think of this as the spark, the first step that makes everything possible.
  </p>
</div>
</div>



    {/* Item 2 */}
    <div className="relative flex items-start gap-6 py-10">

{/* dashed vertical line */}
<div className="absolute left-[32px] top-0 h-[250px] border-l-2 border-dashed border-gray-400/60"></div>

<Image
  src={ResponseIcon}
  alt="Quick response"
  width={56}
  height={56}
  className="object-contain flex-shrink-0 bg-white z-10"
/>

<div>
  <h4 className="text-[22px] font-bold text-gray-900">
    Quick response.
  </h4>
  <p className="text-md text-gray-600 mt-2 leading-relaxed max-w-lg">
    We won’t keep you waiting. Our team jumps in fast so momentum never dies.
  </p>
</div>
</div>

    {/* Item 3 */}
    <div className="relative flex items-start gap-6 py-10">

{/* dashed vertical line */}
<div className="absolute left-[32px] top-[80px] h-full border-l-2 border-dashed border-gray-400/60"></div>

<Image
  src={MeetIcon}
  alt="Meet & map it out"
  width={75}
  height={75}
  className="object-contain flex-shrink-0 bg-white z-10"
/>

<div>
  <h4 className="text-[22px] font-bold text-gray-900">
    Meet & map it out.
  </h4>
  <p className="text-md text-gray-600 mt-2 leading-relaxed max-w-lg">
    We connect. We listen. We shape your idea into a clear plan. Collaboration at its best.
  </p>
</div>
</div>


    {/* Item 4 */}
    <div className="relative flex items-start gap-6 py-10">
      <Image
        src={ExecutionIcon}
        alt="Let's make it real"
        width={50}
        height={50}
        className="object-contain flex-shrink-0 bg-white z-10"
      />
      <div>
        <h4 className="text-[22px] font-bold text-gray-900">
          Let’s make it real.
        </h4>
        <p className="text-md text-gray-600 mt-2 leading-relaxed max-w-lg">
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

