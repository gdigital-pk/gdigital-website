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
        <div className="max-w-7xl 2xl:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Header Section */}
          <div className="mb-16 mt-8">
            <h2 className="text-4xl md:text-[60px] font-bold text-gray-900 leading-tight max-w-5xl">
              Solutions we’ve designed and built to solve real{" "}
              <span className="text-[#23A654]">business challenges</span>.
            </h2>
          </div>

          {/* Featured Project (Large Card) */}
          <div className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden mb-8 group cursor-pointer">
            <Image
              src={PortfolioImg1}
              alt="Featured Project"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-[linear-gradient(179.49deg,rgba(0,0,0,0.6)_8.99%,rgba(49,49,49,0)_57.75%,rgba(0,0,0,0.57)_90.93%)]" />
            
            {/* Logo at top */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2">
               <Image src={logo1} alt="logo" width={160} height={70} className="brightness-0 invert" />
            </div>

            {/* Text at bottom */}
            <div className="absolute bottom-20 left-10 text-white">
              <p className="text-xl font-bold mb-2 tracking-widest">Featured Project</p>
              <h3 className="text-3xl md:text-2xl font-bold max-w-3xl">
                Gdigital: Driving Brand Success through Comprehensive
              </h3>
              <p className="mt-2 text-xl opacity-90">CEO Transport Ltd</p>
            </div>
          </div>

          {/* Grid Section (3 Columns) */}
         {/* Grid Section (3 Columns) */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

{/* Card 1 */}
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
      Gdigital: Driving Brand Success through Comprehensive
    </h4>
    <p className="text-md opacity-80">CEO Transport Ltd</p>
  </div>
</div>
</a>

<a href="/jewellry" className="block">
{/* Card 2 */}
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
    <Image src={logo2} alt="logo" width={180} height={80} className="brightness-0 invert" />
  </div>

  <div className="absolute bottom-8 left-6 right-6 text-white">
    <h4 className="text-lg font-semibold mb-1">
      Gdigital: Driving Brand Success through Comprehensive
    </h4>
    <p className="text-md opacity-80">Spark Databox</p>
  </div>
</div>
</a>

<a href="/spark-databox" className="block">
{/* Card 3 */}
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
    <Image src={logo3} alt="logo" width={180} height={80} className="brightness-0 invert" />
  </div>

  <div className="absolute bottom-8 left-6 right-6 text-white">
    <h4 className="text-lg font-semibold mb-1">
      Gdigital: Driving Brand Success through Comprehensive
    </h4>
    <p className="text-md opacity-80">Face FWD AI</p>
  </div>
</div>
</a>
</div>
{/* Grid Section (3 Columns) */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">

<a href="/jewellry" className="block">
  {/* Card 1 */}
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
        Gdigital: Driving Brand Success through Comprehensive
      </h4>
      <p className="text-md opacity-80">CEO Transport Ltd</p>
    </div>
  </div>
  </a>

  <a href="/spark-databox" className="block">
  {/* Card 2 */}
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
      <Image src={logo2} alt="logo" width={180} height={80} className="brightness-0 invert" />
    </div>

    <div className="absolute bottom-8 left-6 right-6 text-white">
      <h4 className="text-lg font-semibold mb-1">
        Gdigital: Driving Brand Success through Comprehensive
      </h4>
      <p className="text-md opacity-80">Spark Databox</p>
    </div>
  </div>
  </a>

 {/* Card 3 */}
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
      <Image src={logo3} alt="logo" width={180} height={80} className="brightness-0 invert" />
    </div>

    <div className="absolute bottom-8 left-6 right-6 text-white">
      <h4 className="text-lg font-semibold mb-1">
        Gdigital: Driving Brand Success through Comprehensive
      </h4>
      <p className="text-md opacity-80">Face FWD AI</p>
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