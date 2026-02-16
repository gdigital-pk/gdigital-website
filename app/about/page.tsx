"use client";

import React from "react";
import CountUp from "react-countup";
import Image from "next/image";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import TrustingImg from "../../component/assets/Images/TrustImg.png";
import FutureFusionImg from "../../component/assets/Images/FutureFusionImg.png";
import PurposeImg from "../../component/assets/Images/PurposeImg.png";
import InovationImg from "../../component/assets/Images/InovationImg.png";
import EmpathyIcon from "../../component/assets/Icons/EmpathyIcon.png";
import CollaborationIcon from "../../component/assets/Icons/CollaborationIcon.png";
import PlayfulIcon from "../../component/assets/Icons/PlayfulIcon.png";
import Playful2Icon from "../../component/assets/Icons/Playful2Icon.png";
import Playful3Icon from "../../component/assets/Icons/Playful3Icon.png";

export default function About() {
  return (
    <>
      <Navbar />

      <section id="about" className="py-20 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl 2xl:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">

          {/* Header */}
          <div className="mb-20 sm:mb-30 mt-8">
          <h2 className="
  text-2xl
  sm:text-3xl
  md:text-4xl
  lg:text-5xl
  xl:text-[60px]
  font-bold
  text-gray-900
  leading-tight
">
              Innovators and problem-solvers <br />
              building reliable software to help <br />
              businesses <span className="text-[#23A654]">grow</span>.
            </h2>

            {/* Image gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
              {[TrustingImg, FutureFusionImg, PurposeImg, InovationImg].map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt="About image"
                  className="w-full h-auto rounded-lg object-cover"
                  width={300}
                  height={200}
                />
              ))}
            </div>
          </div>

          {/* Who We Are */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-12">
            <div className="md:w-1/2">
            <h3 className="text-2xl sm:text-3xl lg:text-[45px] font-bold text-[#23A654]">
                Who We Are
              </h3>
              <h3 className="text-2xl sm:text-3xl lg:text-[45px] font-bold text-gray-900">
                Driven by Purpose <br /> Always.
              </h3>
            </div>

            <div className="md:w-1/2">
              <p className="  text-base
  sm:text-lg
  text-gray-600
  max-w-full
  sm:max-w-[500px]
  mb-8">
                We’re not just developers or designers — we’re dreamers, innovators, 
                and problem-solvers who believe technology should make life better. 
                We mix creativity with logic, and passion with purpose, to craft software 
                that actually matters. At the heart of it, we’re just a team of curious
                minds having fun while building things that help businesses grow and ideas come alive.
              </p>
            </div>
          </div>

          <hr className="my-15 md:my-15 border-t-2 border-gray-300" />

          {/* Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-20 md:mb-40 text-center">
  
  <div>
    <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900">
      <CountUp end={20} duration={2} enableScrollSpy scrollSpyOnce />+
    </div>
    <div className="text-gray-600 mt-1">Years of Experience</div>
  </div>

  <div>
    <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900">
      <CountUp end={1000} duration={2} enableScrollSpy scrollSpyOnce />+
    </div>
    <div className="text-gray-600 mt-1">Project Done</div>
  </div>

  <div>
    <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900">
      <CountUp end={300} duration={2} enableScrollSpy scrollSpyOnce />+
    </div>
    <div className="text-gray-600 mt-1">Satisfied Clients</div>
  </div>

  <div>
    <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900">
      <CountUp end={64} duration={2} enableScrollSpy scrollSpyOnce />
    </div>
    <div className="text-gray-600 mt-1">Certified Awards</div>
  </div>

</div>

          {/* Innovation Cards */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-20">
            <div className="md:w-1/3">
              <h3 className="text-2xl sm:text-3xl lg:text-[45px] font-bold text-[#23A654]">
                Innovation.
              </h3>
              <h3 className="text-2xl sm:text-3xl lg:text-[45px] font-bold text-gray-900">
                Driven by people.
              </h3>
            </div>

            <div className="md:w-2/3 flex flex-col gap-6">
              {[
                { icon: EmpathyIcon, title: "Empathy & Respect" },
                { icon: CollaborationIcon, title: "Collaboration" },
                { icon: PlayfulIcon, title: "Playful Spirit" },
                { icon: Playful2Icon, title: "Growth Mindset" },
                { icon: Playful3Icon, title: "Integrity" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-4 border-b border-gray-300 pb-6">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="object-contain flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-[22px] font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed max-w-lg">
                      We value every individual, honoring differences and treating people with kindness.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
