import React from "react";
import Image from "next/image";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";

// Your imports
import PortfolioImg1 from "../../component/assets/Images/PortfolioImg1.png";
import PortfolioImg2 from "../../component/assets/Images/PortfolioImg2.png";
import PortfolioImg3 from "../../component/assets/Images/PortfolioImg3.png";
import PortfolioImg4 from "../../component/assets/Images/PortfolioImg4.png";
import DataboxImg1 from "../../component/assets/Images/DataboxImg1.png";
import DataboxImg2 from "../../component/assets/Images/DataboxImg2.png";
import DataboxImg3 from "../../component/assets/Images/DataboxImg3.png";
import DataboxImg4 from "../../component/assets/Images/DataboxImg4.png";
import DataboxImg5 from "../../component/assets/Images/DataboxImg5.png";
import logo1 from "../../component/assets/Icons/logo1.png";
import logo2 from "../../component/assets/Icons/logo2.png";
import logo3 from "../../component/assets/Icons/logo3.png";


export default function SparkDataboxPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="bg-[#004d61] pt-20 pb-40 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          Power — your website with <br /> blazing-fast hosting
        </h1>
        <div className="relative max-w-5xl mx-auto">
          {/* Overlapping Mockups */}
          <div className="flex justify-center items-center gap-4">
             <div className="w-1/4 transform -rotate-6 translate-y-8 opacity-80">
                <Image src={PortfolioImg1} alt="Mockup Left" className="rounded-lg shadow-2xl" />
             </div>
             <div className="w-2/4 z-10 relative">
                <Image src={PortfolioImg1} alt="Main Mockup" className="rounded-xl shadow-2xl border-4 border-gray-800" />
             </div>
             <div className="w-1/4 transform rotate-6 translate-y-8 opacity-80">
                <Image src={PortfolioImg1} alt="Mockup Right" className="rounded-lg shadow-2xl" />
             </div>
          </div>
        </div>
      </section>

      {/* 2. Client Info Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="text-lg font-semibold text-gray-500 uppercase tracking-wider">Client</h4>
          <p className="text-xl font-bold">Spark Databox</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-500 uppercase tracking-wider">What We Did</h4>
          <p className="text-xl font-bold">Spark Databox</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-500 uppercase tracking-wider">Sector</h4>
          <p className="text-xl font-bold">Eductaion</p>
        </div>
      </section>

      {/* 3. Mobile Mockup Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-[#a78bfa] rounded-3xl p-8 flex justify-center">
             <Image src={PortfolioImg2} alt="Mobile App" className="w-64 drop-shadow-2xl" />
        </div>
        <div>
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            We believe exceptional digital experiences are never the result of shortcuts. Every project begins with deep research and thoughtful experimentation, where each detail is explored to guide data-driven choices. From there, we design and develop solutions from the ground up—crafted precisely around what users truly need.
          </p>
        </div>
      </section>

      {/* 4. Large Banner Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <Image src={PortfolioImg3} alt="Conference Display" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* 5. Tablet Mockup Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            We believe exceptional digital experiences are never the result of shortcuts. Every project begins with deep research and thoughtful experimentation, where each detail is explored to guide data-driven choices. From there, we design and develop solutions from the ground up—crafted precisely around what users truly need.
          </p>
        </div>
        <div className="bg-[#c2410c] rounded-3xl p-8 flex justify-center order-1 md:order-2">
             <Image src={PortfolioImg4} alt="Tablet Mockup" className="w-80 drop-shadow-2xl" />
        </div>
      </section>

      {/* 6. More Of Our Work (The Cards) */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">More OF Our Work</h2>
        <p className="text-gray-600 mb-12 max-w-xl">
          Whether you're launching a new site or scaling your business, our plans are built to deliver speed, security, and value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded-2xl h-[450px]">
            <Image src={PortfolioImg1} layout="fill" objectFit="cover" alt="Work 1" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all p-8 flex flex-col justify-between text-white">
              <Image src={logo1} alt="Logo" width={100} height={40} className="brightness-0 invert" />
              <div>
                <h3 className="text-xl font-bold">Gdigital: Driving Brand Success through Comprehensive</h3>
                <p className="mt-2 text-sm opacity-80">CEO Transport Ltd</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden rounded-2xl h-[450px]">
            <Image src={PortfolioImg2} layout="fill" objectFit="cover" alt="Work 2" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all p-8 flex flex-col justify-between text-white">
              <Image src={logo2} alt="Logo" width={120} height={40} className="brightness-0 invert" />
              <div>
                <h3 className="text-xl font-bold">Gdigital: Driving Brand Success through Comprehensive</h3>
                <p className="mt-2 text-sm opacity-80">CEO Transport Ltd</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden rounded-2xl h-[450px]">
            <Image src={PortfolioImg3} layout="fill" objectFit="cover" alt="Work 3" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all p-8 flex flex-col justify-between text-white">
              <Image src={logo3} alt="Logo" width={120} height={40} className="brightness-0 invert" />
              <div>
                <h3 className="text-xl font-bold">Gdigital: Driving Brand Success through Comprehensive</h3>
                <p className="mt-2 text-sm opacity-80">SparkDatabox</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}