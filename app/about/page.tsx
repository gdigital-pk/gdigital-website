import React from "react";
import Image from "next/image";
import TrustingImg from "../../component/assets/Images/TrustImg.png";
import FutureFusionImg from "../../component/assets/Images/FutureFusionImg.png";
import PurposeImg from "../../component/assets/Images/PurposeImg.png";
import InovationImg from "../../component/assets/Images/InovationImg.png";
import Navbar from "../../component/layout/Navbar";
import EmpathyIcon from "../../component/assets/Icons/EmpathyIcon.png";
import CollaborationIcon from "../../component/assets/Icons/CollaborationIcon.png";
import PlayfulIcon from "../../component/assets/Icons/PlayfulIcon.png";
import Playful2Icon from "../../component/assets/Icons/Playful2Icon.png";
import Playful3Icon from "../../component/assets/Icons/Playful3Icon.png";
import Footer from "../../component/layout/Footer";


export default function about() {
  return (
    <>
    <Navbar />
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 mt-8">
  {/* Heading */}
  <div className="text-start">
    <h2 className="text-4xl md:text-[60px] font-bold text-gray-900 leading-snug">
      Innovators and <br /> 
      problem-solvers <br /> 
      building reliable <br /> 
      software to help <br /> 
      businesses grow.
    </h2>
  </div>

  {/* Images BELOW the text */}
  <div className="flex flex-nowrap gap-4 mb15">
    <img src={TrustingImg.src} alt="Trusting" className="w-78 rounded-lg" />
    <img src={FutureFusionImg.src} alt="Future Fusion" className="w-78 rounded-lg" />
    <img src={PurposeImg.src} alt="Purpose" className="w-78 rounded-lg" />
    <img src={InovationImg.src} alt="Innovation" className="w-78 rounded-lg" />
  </div>
</div>


<div className="flex items-start w-full">

  {/* Left side */}
  <div className="md:w-1/2">
    <h3 className="text-[45px] font-bold text-[#23A654] text-start">
    Who We Are 
    </h3>
    <h3 className="text-[45px] font-bold text-gray-900 text-start mt-2">
    Driven by Purpose <br /> Always.
    </h3>
  </div>

  {/* Right side - pushed to extreme right */}
  <div className="md:w-1/2 ml-auto grid grid-cols-1 gap-6">
        <p className="text-lg text-gray-600 text-start mt-2">
        We’re not just developers or designers — we’re dreamers, innovators, 
        and problem-solvers who believe technology should make life better. 
        We mix creativity with logic, and passion with purpose, to craft software 
        that actually matters. At the heart of it, we’re just a team of curious
         minds having fun while building things that help businesses grow and ideas come alive.
        </p>
 
  </div>
</div>
<hr className="my-15 md:my-15 border-t-2 border-gray-300"/>
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-25">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">20 <br/> +</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">100 <br/> 0+</div>
            <div className="text-gray-600">Project Done</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">300 <br/> +</div>
            <div className="text-gray-600">Satisfied Client</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">6 <br/> 4</div>
            <div className="text-gray-600">Certified Award</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-10 mb-15">

{/* Left side - headings */}
<div className="flex items-start w-full">

  {/* Left side */}
  <div className="md:w-1/3">
    <h3 className="text-[45px] font-bold text-[#23A654] text-start">
    Innovation.
    </h3>
    <h3 className="text-[45px] font-bold text-gray-900 text-start mt-2">
    Driven by people.
    </h3>
  </div>

  {/* Right side - pushed to extreme right */}
  <div className="md:w-1/2 ml-auto">
  {[
    { icon: EmpathyIcon, title: "Empathy & Respect" },
    { icon: CollaborationIcon, title: "Collaboration" },
    { icon: PlayfulIcon, title: "Playful Spirit" },
    { icon: Playful2Icon, title: "Growth Mindset" },
    { icon: Playful3Icon, title: "Integrity" },
  ].map((item, index) => (
    <div key={index} className="border-b border-gray-600/40 py-8">
      <div className="flex items-start gap-6">
        
        {/* Icon */}
        <Image
          src={item.icon}
          alt={item.title}
          width={56}
          height={56}
          className="object-contain flex-shrink-0"
        />

        {/* Text */}
        <div>
          <h4 className="text-[22px] font-bold text-gray-900 ">
            {item.title}.
          </h4>

          <p className="text-md text-gray-600 mt-2 leading-relaxed max-w-lg">
            We value every individual, honoring differences and treating
            people with kindness.
          </p>
        </div>

      </div>
    </div>
  ))}
</div>

</div>
</div>

      </div>
    </section>
    <Footer />
    </>
  );
}

