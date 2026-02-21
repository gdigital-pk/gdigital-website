import React from "react";
import Image from "next/image";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";

// Your existing imports
import PortfolioImg1 from "../../component/assets/Images/PortfolioImg1.png"; // Fixed your typo
import PortfolioImg2 from "../../component/assets/Images/PortfolioImg2.png";
import PortfolioImg3 from "../../component/assets/Images/PortfolioImg3.png";
import PortfolioImg4 from "../../component/assets/Images/PortfolioImg4.png";
import logo1 from "../../component/assets/Icons/logo1.png";
import logo2 from "../../component/assets/Icons/logo2.png";
import logo3 from "../../component/assets/Icons/logo3.png";

export default function PortfolioPage() {

  return (
    <>
      <Navbar />
      <section className="py-20 bg-white">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-16 mt-8">
            <h2 className="text-2xl sm:text-3xlmd:text-4xl lg:text-5xl xl:text-[60px] font-bold text-gray-900 font-circular leading-tight max-w-5xl">
              Solutions we’ve designed and built to solve real{" "}
              <span className="text-[#23A654]">business challenges</span>.
            </h2>
          </div>

          <div className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden mb-8 group cursor-pointer">
            <Image src={PortfolioImg1} alt="Featured Project"layout="fill"objectFit="cover" className="transition-transform duration-500 group-hover:scale-105"/>
           <div className="absolute inset-0 bg-[linear-gradient(179.49deg,rgba(0,0,0,0.6)_8.99%,rgba(49,49,49,0)_57.75%,rgba(0,0,0,0.57)_90.93%)]" />
            <div className="absolute top-20 left-1/2 -translate-x-1/2">
               <Image src={logo1} alt="logo" width={180} height={90} className="brightness-0 invert" />
            </div>
          </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<a href="/spark-databox" className="block">
<div className="relative h-[450px] rounded-[1.5rem] overflow-hidden group cursor-pointer">
  <Image
    src={PortfolioImg2}
    alt="Gdigital Project"
    layout="fill"
    objectFit="cover"
    className="transition-transform duration-500 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

  <div className="absolute top-8 left-1/2 -translate-x-1/2">
    <Image src={logo1} alt="logo" width={150} height={60} className="brightness-0 invert" />
  </div>

  <div className="absolute bottom-8 left-6 right-6 text-white">
    <h4 className="text-lg font-semibold mb-1">
    Smart logistics and fleet management solution
    </h4>
    <p className="text-md opacity-80">CEO Transport Ltd</p>
  </div>
</div>
</a>

<a href="/jewellry" className="block">
<div className="relative h-[450px] rounded-[1.5rem] overflow-hidden group cursor-pointer">
  <Image
    src={PortfolioImg3}
    alt="Spark Databox"
    layout="fill"
    objectFit="cover"
    className="transition-transform duration-500 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

  <div className="absolute top-8 left-1/2 -translate-x-1/2">
    <Image src={logo2} alt="logo" width={200} height={100} className="brightness-0 invert" />
  </div>

  <div className="absolute bottom-8 left-6 right-6 text-white">
    <h4 className="text-lg font-semibold mb-1">
    Data analytics platform for smarter decisions
    </h4>
    <p className="text-md opacity-80">Spark Databox</p>
  </div>
</div>
</a>

<a href="/spark-databox" className="block">
<div className="relative h-[450px] rounded-[1.5rem] overflow-hidden group cursor-pointer">
  <Image
    src={PortfolioImg4}
    alt="Face FWD AI"
    layout="fill"
    objectFit="cover"
    className="transition-transform duration-500 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

  <div className="absolute top-8 left-1/2 -translate-x-1/2">
    <Image src={logo3} alt="logo" width={200} height={100} className="brightness-0 invert" />
  </div>

  <div className="absolute bottom-8 left-6 right-6 text-white">
    <h4 className="text-lg font-semibold mb-1">
    AI-powered facial recognition and automation
    </h4>
    <p className="text-md opacity-80">FACE FWD AI</p>
  </div>
</div>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">

<a href="/jewellry" className="block">
  <div className="relative h-[450px] rounded-[1.5rem] overflow-hidden group cursor-pointer">
    <Image
      src={PortfolioImg2}
      alt="Gdigital Project"
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

    <div className="absolute top-8 left-1/2 -translate-x-1/2">
      <Image src={logo1} alt="logo" width={150} height={60} className="brightness-0 invert" />
    </div>

    <div className="absolute bottom-8 left-6 right-6 text-white">
      <h4 className="text-lg font-semibold mb-1">
      Smart logistics and fleet management solution
      </h4>
      <p className="text-md opacity-80">CEO Transport Ltd</p>
    </div>
  </div>
  </a>

  <a href="/spark-databox" className="block">

  <div className="relative h-[450px] rounded-[1.5rem] overflow-hidden group cursor-pointer">
    <Image
      src={PortfolioImg3}
      alt="Spark Databox"
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

    <div className="absolute top-8 left-1/2 -translate-x-1/2">
      <Image src={logo2} alt="logo" width={200} height={100} className="brightness-0 invert" />
    </div>

    <div className="absolute bottom-8 left-6 right-6 text-white">
      <h4 className="text-lg font-semibold mb-1">
      Data analytics platform for smarter decisions
      </h4>
      <p className="text-md opacity-80">Spark Databox</p>
    </div>
  </div>
  </a>

  <a href="/jewellry" className="block">
  <div className="relative h-[450px] rounded-[1.5rem] overflow-hidden group cursor-pointer">
    <Image
      src={PortfolioImg4}
      alt="Face FWD AI"
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

    <div className="absolute top-8 left-1/2 -translate-x-1/2">
      <Image src={logo3} alt="logo" width={200} height={100} className="brightness-0 invert" />
    </div>

    <div className="absolute bottom-8 left-6 right-6 text-white">
      <h4 className="text-lg font-semibold mb-1">
      AI-powered facial recognition and automation
      </h4>
      <p className="text-md opacity-80">FACE FWD AI</p>
    </div>
  </div>
  </a>
</div>
        </div>
      </section>
      <Footer />
    </>
  );
}