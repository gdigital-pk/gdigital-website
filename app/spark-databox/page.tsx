import React from "react";
import Image from "next/image";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";

// Your imports
import PortfolioImg1 from "../../component/assets/Images/PortfolioImg1.png";
import PortfolioImg2 from "../../component/assets/Images/PortfolioImg2.png";
import PortfolioImg3 from "../../component/assets/Images/PortfolioImg3.png";
import DataboxImg1 from "../../component/assets/Images/DataboxImg1.png";
import DataboxImg2 from "../../component/assets/Images/DataboxImg2.png";
import DataboxImg3 from "../../component/assets/Images/DataboxImg3.png";
import DataboxImg4 from "../../component/assets/Images/DataboxImg4.png";
import DataboxImg5 from "../../component/assets/Images/DataboxImg5.png";
import DataboxImg6 from "../../component/assets/Images/DataboxImg6.png";
import logo1 from "../../component/assets/Icons/logo1.png";
import logo2 from "../../component/assets/Icons/logo2.png";
import logo3 from "../../component/assets/Icons/logo3.png";


export default function SparkDataboxPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <Navbar />

      <section className="pt-34 px-6 text-center text-white
  bg-[linear-gradient(180deg,#045C85_0%,#023B56_100%)]">

  {/* Heading */}
  <h1 className="mb-20
  sm:text-3xl
  md:text-4xl
  lg:text-5xl
  xl:text-[60px]
  font-bold
  leading-tight">
    Power — your website with <br />
    <span className="opacity-90 sm:text-3xl
  md:text-4xl
  lg:text-5xl
  xl:text-[60px]
  font-bold
  leading-tight">blazing-fast hosting</span>
  </h1>

  {/* Mockup Container */}
  <div className="relative max-w-6xl mx-auto h-[420px] md:h-[520px] flex justify-center items-end">

    {/* Left Image */}
    <div className="
      absolute bottom-0
      w-[70%]
      md:w-[28%]
      md:left-[6%]
      hidden md:block
    ">
      <div className="rounded-2xl border-[6px] border-slate-900 shadow-2xl overflow-hidden bg-white">
        <Image src={DataboxImg1} alt="Mockup Left" className="w-full h-auto" />
      </div>
    </div>

    {/* Right Image */}
    <div className="
      absolute bottom-0
      w-[70%]
      md:w-[28%]
      md:right-[6%]
      hidden md:block
    ">
      <div className="rounded-2xl border-[6px] border-slate-900 shadow-2xl overflow-hidden bg-white">
        <Image src={DataboxImg2} alt="Mockup Right" className="w-full h-auto" />
      </div>
    </div>

    {/* Center Image */}
    <div className="relative z-20 w-[90%] md:w-[72%] translate-y-12">
      <div className="rounded-3xl border-[8px] border-slate-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden bg-white">
        <Image src={DataboxImg3} alt="Main Mockup" className="w-full h-auto" />
      </div>
    </div>

  </div>
</section>

      {/* 2. Client Info Section */}
      <section className="2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 mt-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
  
  <div className="flex flex-col items-center">
    <h4 className="text-lg font-semibold text-gray-500 uppercase tracking-wider">
      Client
    </h4>
    <p className="text-xl font-bold">Spark Databox</p>
  </div>

  <div className="flex flex-col items-center">
    <h4 className="text-lg font-semibold text-gray-500 uppercase tracking-wider">
      What We Did
    </h4>
    <p className="text-xl font-bold">Spark Databox</p>
  </div>

  <div className="flex flex-col items-center">
    <h4 className="text-lg font-semibold text-gray-500 uppercase tracking-wider">
      Sector
    </h4>
    <p className="text-xl font-bold">Education</p>
  </div>

</section>


      {/* 3. Mobile Mockup Section */}
    <section className="2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  
  {/* Left column */}
  <div className="rounded-3xl p-8 flex justify-center">
    <Image
      src={DataboxImg4}
      alt="Mobile App"
      className="w-100 drop-shadow-2xl"
    />
  </div>

  {/* Right column */}
  <div className="flex items-end md:items-end h-full">
    <p className="text-gray-700 text-lg leading-relaxed font-medium mb-10">
      We believe exceptional digital experiences are never the result of shortcuts.
      Every project begins with deep research and thoughtful experimentation, where
      each detail is explored to guide data-driven choices. From there, we design
      and develop solutions from the ground up—crafted precisely around what users
      truly need.
    </p>
  </div>

</section>


      {/* 4. Large Banner Section */}
      <section className="2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <Image src={DataboxImg6} alt="Conference Display" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* 5. Tablet Mockup Section */}
      <section className="2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  
  {/* Left column (text) */}
  <div className="order-2 md:order-1 flex items-end h-full">
    <p className="text-gray-700 text-lg leading-relaxed font-medium mb-10">
      We believe exceptional digital experiences are never the result of shortcuts.
      Every project begins with deep research and thoughtful experimentation, where
      each detail is explored to guide data-driven choices. From there, we design and
      develop solutions from the ground up—crafted precisely around what users truly
      need.
    </p>
  </div>

  {/* Right column (image) */}
  <div className="rounded-3xl p-8 flex justify-center order-1 md:order-2">
    <Image
      src={DataboxImg5}
      alt="Tablet Mockup"
      className="w-100 drop-shadow-2xl"
    />
  </div>

</section>


      {/* 6. More Of Our Work (The Cards) */}
      <section className="2xl:max-w-[1600px] mx-auto px-6 sm:px-6 lg:px-12 py-20">
        <h2 className="text-4xl font-bold mb-4">More OF Our Work</h2>
        <p className="text-gray-600 mb-12 max-w-xl">
          Whether you're launching a new site or scaling your business, our plans are built to deliver speed, security, and value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded-2xl h-[450px]">
            <Image src={PortfolioImg1} layout="fill" objectFit="cover" alt="Work 1" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all p-8 flex flex-col justify-between text-white">
            <div className="flex justify-center items-center">
      <Image
        src={logo1}
        alt="Logo"
        width={120}
        height={60}
        className="brightness-0 invert"
      />
    </div>
              <div>
                <h3 className="text-xl font-bold">Gdigital: Driving Brand Success through Comprehensive</h3>
                <p className="mt-2 text-md opacity-80">CEO Transport Ltd</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden rounded-2xl h-[450px]">
            <Image src={PortfolioImg2} layout="fill" objectFit="cover" alt="Work 2" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all p-8 flex flex-col justify-between text-white">
            <div className="flex justify-center items-center">
      <Image
        src={logo2}
        alt="Logo"
        width={150}
        height={80}
        className="brightness-0 invert"
      />
    </div>
              <div>
                <h3 className="text-xl font-bold">Gdigital: Driving Brand Success through Comprehensive</h3>
                <p className="mt-2 text-md opacity-80">CEO Transport Ltd</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden rounded-2xl h-[450px]">
            <Image src={PortfolioImg3} layout="fill" objectFit="cover" alt="Work 3" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all p-8 flex flex-col justify-between text-white">
            <div className="flex justify-center items-center">
      <Image
        src={logo3}
        alt="Logo"
        width={150}
        height={80}
        className="brightness-0 invert"
      />
    </div>
              <div>
                <h3 className="text-xl font-bold">Gdigital: Driving Brand Success through Comprehensive</h3>
                <p className="mt-2 text-md opacity-80">SparkDatabox</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}