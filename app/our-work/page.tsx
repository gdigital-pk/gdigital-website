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
  // Data array for the grid items to keep code clean
  const portfolioItems = [
    { id: 1, img: PortfolioImg2, logo: logo1, title: "Gdigital: Driving Brand Success", subtitle: "CEO Transport Ltd" },
    { id: 2, img: PortfolioImg3, logo: logo2, title: "Gdigital: Driving Brand Success", subtitle: "Spark Databox" },
    { id: 3, img: PortfolioImg4, logo: logo3, title: "Gdigital: Driving Brand Success", subtitle: "Face FWD AI" },
    { id: 4, img: PortfolioImg2, logo: logo1, title: "Gdigital: Driving Brand Success", subtitle: "CEO Transport Ltd" },
    { id: 5, img: PortfolioImg3, logo: logo2, title: "Gdigital: Driving Brand Success", subtitle: "Spark Databox" },
    { id: 6, img: PortfolioImg4, logo: logo3, title: "Gdigital: Driving Brand Success", subtitle: "Face FWD AI" },
  ];

  return (
    <>
      <Navbar />
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20">
          
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div 
                key={item.id} 
                className="relative h-[450px] rounded-[1.5rem] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Logo */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                   <Image src={item.logo} alt="logo" width={150} height={60} className="brightness-0 invert" />
                </div>

                {/* Text Content */}
                <div className="absolute bottom-8 left-6 right-6 text-white">
                  <h4 className="text-lg font-semibold leading-tight mb-1">
                    {item.title} through Comprehensive
                  </h4>
                  <p className="text-sm opacity-80">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}