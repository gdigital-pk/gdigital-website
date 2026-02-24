import React from "react";
import Image from "next/image";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";

// Your imports
import limoBermuda from "../../component/assets/Images/limo-bermuda.png";
import limoBermuda2 from "../../component/assets/Images/limo-bermuda2.png";
import limoBermuda3 from "../../component/assets/Images/limo-bermuda3.png";
import limoBermuda4 from "../../component/assets/Images/lima-bermuda4.png";
import PortfolioImg4 from "../../component/assets/Images/PortfolioImg4.png";
import PortfolioImg2 from "../../component/assets/Images/PortfolioImg2.png";
import PortfolioImg3 from "../../component/assets/Images/PortfolioImg3.png";
import logo1 from "../../component/assets/Icons/logo1.png";
import logo2 from "../../component/assets/Icons/logo2.png";
import logo3 from "../../component/assets/Icons/logo3.png";


export default function JewellryPage() {
  return (
    <div className="bg-white font-sans text-gray-900">
      <Navbar />
    <section className="pt-24 max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">

  {/* Image Container */}
  <div className="relative max-w-7xl mx-auto flex justify-center items-center">
    <div className="relative">
      <Image 
        src={limoBermuda} 
        alt="Main Mockup" 
        className="w-full max-w-[1400px] object-contain"
      />
    </div>
  </div>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

<div className="flex flex-col items-center">
<h4 className="font-circular font-bold text-lg md:text-2xl text-[#3D3D3D] tracking-wider">
Client
</h4>
  <p className="text-lg md:text-xl font-normal mt-2">
    Spark Databox
  </p>
</div>

<div className="flex flex-col items-center">
  <h4 className="font-circular font-bold text-lg md:text-2xl text-[#3D3D3D] tracking-wider">
    What We Did
  </h4>
  <p className="text-lg md:text-xl font-normal mt-2">
    Web Development
  </p>
</div>

<div className="flex flex-col items-center">
  <h4 className="font-circular font-bold text-lg md:text-2xl text-[#3D3D3D] tracking-wider">
    Sector
  </h4>
  <p className="text-lg md:text-xl font-normal mt-2 ">
    Education
  </p>
</div>

</div>

</section>

    <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  <div className="rounded-3xl p-8 flex justify-center">
    <Image
      src={limoBermuda2}
      alt="Mobile App"
      className="w-100 drop-shadow-2xl"
    />
  </div>

  <div className="flex items-end md:items-end h-full max-w-lg">
    <p className="text-gray-700 text-lg leading-relaxed font-medium mb-10 font-inter text-[#3D3D3D]">
      We believe exceptional digital experiences are never the result of shortcuts.
      Every project begins with deep research and thoughtful experimentation, where
      each detail is explored to guide data-driven choices. From there, we design
      and develop solutions from the ground up—crafted precisely around what users
      truly need.
    </p>
  </div>

</section>

      <section className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <Image src={limoBermuda3} alt="Conference Display" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* 5. Tablet Mockup Section */}
      <section className="max-w-7xl 2xl:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  
      <div className="order-2 md:order-1 flex items-end h-full max-w-lg">
    <p className="text-gray-700 text-lg leading-relaxed font-medium mb-10 font-inter text-[#3D3D3D]">
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
      src={limoBermuda4}
      alt="Tablet Mockup"
      className="w-100 drop-shadow-2xl"
    />
  </div>

</section>


<section className="2xl:max-w-[1400px] mx-auto px-6 sm:px-6 lg:px-12 py-20">
        <h2 className="text-4xl font-bold mb-4">More OF Our Work</h2>
        <p className="text-gray-600 mb-12 max-w-md font-medium">
          Whether you're launching a new site or scaling your business, our plans are built to deliver speed, security, and value.
        </p>

        <section className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-20">
<a href="/limo-bermuda" className="block">
<div className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl h-[580px] ">
  <Image src={PortfolioImg2} alt="work" fill className="object-cover" />

  <div className="absolute left-0 right-0 top-[78px] flex justify-center">
    <div className="relative w-55 h-25">
      <Image
        src={logo1}
        alt="Logo"
        fill
        className="object-contain brightness-0 invert"
      />
    </div>
  </div>

  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
    <h4 className="text-white font-circular font-small text-2xl leading-[32px] mb-4 max-w-[90%]">
      Smart logistics and fleet management solution
    </h4>
    <p className="text-white/80 font-circular font-small text-lg">
      CEO Transport Ltd
    </p>
  </div>
</div>
</a>

<a href="/spark-databox" className="block">
<div className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl h-[580px]">
  <Image src={PortfolioImg3} alt="work" fill className="object-cover" />

  <div className="absolute left-0 right-0 top-[55px] flex justify-center">
    <div className="relative w-65 h-30">
      <Image
        src={logo2}
        alt="Logo"
        fill
        className="object-contain brightness-0 invert"
      />
    </div>
  </div>

  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
    <h4 className="text-white font-circular font-small text-2xl leading-[32px] mb-4 max-w-[90%]">
      Data analytics platform for smarter decisions
    </h4>
    <p className="text-white/80 font-circular font-small text-lg">
      Spark Databox
    </p>
  </div>
</div>
</a>

<a href="/face-fwd" className="block">
<div className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl h-[580px]">
  <Image src={PortfolioImg4} alt="work" fill className="object-cover" />

  <div className="absolute left-0 right-0 top-[65px] flex justify-center">
    <div className="relative w-65 h-30">
      <Image
        src={logo3}
        alt="Logo"
        fill
        className="object-contain brightness-0 invert"
      />
    </div>
  </div>

  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
    <h4 className="text-white font-circular font-small text-2xl leading-[32px] mb-4 max-w-[90%]">
      AI-powered facial recognition and automation
    </h4>
    <p className="text-white/80 font-circular font-small text-lg">
      FACE FWD AI
    </p>
  </div>
</div>
</a>
</section>

      </section>
      <Footer />
    </div>
  );
}