"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import DropMessageIcon from "../../component/assets/Icons/DropMessage.png";
import ResponseIcon from "../../component/assets/Icons/ResponseIcon.png";
import MeetIcon from "../../component/assets/Icons/MeetIcon.png";
import ExecutionIcon from "../../component/assets/Icons/ExecutionIcon.png";
import Button from "@/components/ui/stateful-button";
import AnimatedTextarea from "@/components/AnimatedTextarea";
import { useToast } from "@/components/ui/Toast"; // <-- import toast hook

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const { showToast } = useToast(); // <-- toast function

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors = { name: "", email: "", message: "" };
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
      setIsSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setIsSubmitting(false);

      if (res.ok) {
        showToast("success", data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        showToast("error", data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      showToast("error", "Failed to send message.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />

      <section id="contact" className="py-30 bg-white">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-[45px] font-bold text-[#23A654] mb-4 leading-tight">
                Let's Begin
              </h2>
              <p className="text-2xl sm:text-3xl md:text-[45px] font-bold text-gray-900">
                The beginning of something great.
              </p>
            </div>

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
                  className="w-full text-black placeholder-gray-400 px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full text-black placeholder-gray-400 px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <AnimatedTextarea
                  placeholders={[
                    "How can we help you?",
                    "Tell us about your project...",
                    "Describe your idea...",
                    "Need website or app development?",
                  ]}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    className="bg-[#3D3D3D] text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700 transition-colors"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}