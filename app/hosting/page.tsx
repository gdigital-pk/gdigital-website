import React from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight , ChevronLeft } from 'lucide-react';
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import HostingBackground from "../../component/assets/Images/HostingBackground.png";
import DigitalFutureIcon from "../../component/assets/Icons/DigitalFuture.png";
import SparkIcon from "../../component/assets/Icons/Spark.png";
import FireIcon from "../../component/assets/Icons/Fire.png";
import StarIcon from "../../component/assets/Icons/Star.png";
import WordpressImg from "../../component/assets/Images/WordpressImg.png";
import HostingImg from "../../component/assets/Images/HostingImg.png";
import UserIcon from "../../component/assets/Icons/UserIcon.png";
import EmailIcon from "../../component/assets/Icons/EmailIcon.png";
import VirusProtection from "../../component/assets/Icons/VirusProtection.png";
import StorageIcon from "../../component/assets/Icons/StorageIcon.png";
import BusinessImg from "../../component/assets/Images/BusinessImg.png";
import CarIcon from "../../component/assets/Icons/CarIcon.png";
import WatchIcon from "../../component/assets/Icons/WatchIcon.png";
import LockIcon from "../../component/assets/Icons/LockIcon.png";
import HostingImg1 from "../../component/assets/Images/HostingImg1.png";
import HostingImg2 from "../../component/assets/Images/HostingImg2.png";
import HostingImg3 from "../../component/assets/Images/HostingImg3.png";
import HostingImg4 from "../../component/assets/Images/HostingImg4.png";
import HostingImg5 from "../../component/assets/Images/HostingImg5.png";
import HostingImg6 from "../../component/assets/Images/HostingImg6.png";
import HostingImg7 from "../../component/assets/Images/HostingImg7.png";
import HostingImg8 from "../../component/assets/Images/HostingImg8.png";
import Avatar from "../../component/assets/Icons/Avatar.png";



export default function Hosting() {


 const plans = [
    {
      name: "Spark",
      price: "$200",
      icon: SparkIcon,
    },
    {
      name: "Blaze",
      price: "$200",
      icon: null, 
    },
    {
      name: "Inferno",
      price: "$200",
      icon: FireIcon,
    },
  ];

  return (
    <>
      <Navbar />
    <section id="hosting" className="bg-[#F9F9F9] py-20">
      <div className="max-w-9xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 mt-170">
        {/* Header */} 
        <div className="absolute inset-0 flex justify-center">
  <img
    src={HostingBackground.src}
    alt="Hosting Background"
    className="max-w-7xl 2xl:max-w-[1400px] h-full object-cover px-4 sm:px-6 lg:px-20"
  />
</div>

{/* Text content on top of image */}
<div className="relative max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
  <div className="absolute bottom-8 left-8 right-8 
                  flex flex-col md:flex-row 
                  items-start md:items-end 
                  gap-6 md:gap-5">
    
    {/* LEFT SIDE */}
    <div className="w-full md:w-2/2 max-w-lg">
    <h2
  className="
    text-3xl sm:text-4xl md:text-[48px] 
    font-extrabold 
    font-sans 
    text-[#3D3D3D] 
    w-full md:max-w-sm 
    leading-[1.1] 
    tracking-wide
mb-2  px-6"
>
  Everything your website needs.
</h2>
</div>
    <div className="w-full md:w-3/3 lg:w-3/4">
  <h6 className="text-[22px] md:text-[19px] font-medium text-gray-800 leading-[1.35] mb-4">
    Domain, hosting, and email — made easy.
  </h6>

  <p className="text-[16px] md:text-[18px] font-normal text-gray-600 leading-[1.6] mb-6">
    Reliable performance, secure servers, and everything you need — from
    domain registration to professional email — all in one affordable
    package.
  </p>
</div>

  </div>
</div>


<div className="mb-20 grid md:grid-cols-2 gap-12 items-center pt-40">

  <div className="order-2 md:order-1 flex items-center justify-center">
    <Image
      src={DigitalFutureIcon}
      alt="Built for the Digital Future"
      width={250}
      height={250}
    className="object-contain flex-shrink-0 z-10"
    />
  </div>

  <div className="order-1 md:order-2">
    <h3 className="text-3xl
        sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
      Built for the Digital Future
    </h3>

    <p className="text-lg text-gray-600 leading-relaxed">
      At gdigital, we create the technology that drives tomorrow’s businesses.
      Our hosting solutions are crafted for speed, security, and scalability —
      empowering brands to grow, evolve, and lead in the digital age.
    </p>
  </div>
</div>


<div className="mb-20 grid md:grid-cols-2 gap-12 items-center pt-20">

  <div className="order-1 md:order-1">
    <h3 className="text-3xl
        sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
    Make your website in minutes
    </h3>

    <p className="text-lg text-gray-600 leading-relaxed">
    We believe exceptional digital experiences are never the result of shortcuts.
     Every project begins with deep research and thoughtful experimentation, 
     where each detail is explored to guide data-driven choices.
     From there, we design and develop solutions from the ground up—crafted
      precisely around what users truly need.
    </p>
  </div>

  {/* RIGHT SIDE – IMAGE */}
  <div className="order-2 md:order-2 flex items-center justify-center">
    <Image
      src={HostingImg}
      alt="Built for the Digital Future"
      width={400}
      height={400}
      className="object-contain flex-shrink-0 bg-white z-10"
    />
  </div>

</div>

<div className="mb-30 grid md:grid-cols-2 gap-12 items-center pt-20">

  <div className="order-2 md:order-1 flex items-center justify-center">
    <Image
      src={WordpressImg}
      alt="Built for the Digital Future"
      width={400}
      height={400}
    className="object-contain flex-shrink-0 bg-white z-10"
    />
  </div>

  {/* RIGHT SIDE – TEXT */}
  <div className="order-1 md:order-2">
    <h3 className="text-3xl
        sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
    WordPress without the complexity
    </h3>

    <p className="text-lg text-gray-600 leading-relaxed">
    We believe exceptional digital experiences are never the result of
     shortcuts. Every project begins with deep research and thoughtful 
     experimentation, where each detail is explored to guide data-driven choices.
      From there, we design and develop solutions from 
    the ground up—crafted precisely around what users truly need.
    </p>
  </div>

</div>

        <div className=" grid md:grid-cols-3 gap-12 items-center pt-20 pb-7">
          <div>
            <h3 className="text-3xl
        sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Hosting Packages
            Made for You</h3>
            <p className="text-lg text-gray-600 mb-6">
            Whether you’re launching a new site or scaling your 
            business, our plans are built to deliver speed, security, and value.
            </p>
          </div>
        </div>
        
  <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto relative px-4 py-20">
      <div className="grid md:grid-cols-3 border-t border-b border-gray-200">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative p-10 md:p-14 flex flex-col items-start ${
              i !== 2 ? "md:border-r border-gray-200" : ""
            }`}
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 md:left-14 md:translate-x-0">
              {plan.icon && (
                <Image
                  src={plan.icon}
                  alt={plan.name}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              )}
            </div>

            <div className="mt-8 w-full">
              <h4 className="text-3xl
        sm:text-3xl lg:text-5xl text-gray-800 font-medium mb-1">{plan.name}</h4>
              <p className="text-base text-gray-500 mb-10 font-medium">(Basic Package)</p>

              <p className="text-3xl
        sm:text-3xl lg:text-5xl text-gray-800 font-bold mb-10">{plan.price}</p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8 pr-4">
                For individuals and small teams who need credibility without complexity.
              </p>

              <div className="w-full">
                <p className="text-lg font-bold text-gray-800 mb-6">What you get:</p>
                <ul className="space-y-4 text-[17px] text-gray-600 mb-10">
                  <li className="flex items-center gap-4">
                    <Image src={UserIcon} alt="Users" width={25} height={25} />
                    <span>1–10 user</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Image src={EmailIcon} alt="Email" width={25} height={25} className="mt-1" />
                    <span>Branded domain email (e.g., you@company.com)</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Image src={VirusProtection} alt="Security" width={25} height={25} />
                    <span>Basic spam & virus protection</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Image src={StorageIcon} alt="Storage" width={25} height={25} />
                    <span>5GB storage per inbox</span>
                  </li>
                </ul>
              </div>

              {/* Thin Divider Line */}
              <div className="w-full border-t border-gray-100 pt-8 mt-auto">
                <p className="text-lg font-bold text-gray-800 mb-4">Perfect for:</p>
                <ul className="space-y-3 text-[17px] text-gray-600">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Freelancers moving away from Gmail/Yahoo</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Startups needing a professional look on a budget</span>
                  </li>
                </ul>
              </div>

              <button className="mt-14 w-full py-4 border-2 border-[#10b981] text-gray-700 font-bold text-lg rounded-full hover:bg-emerald-50 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* The Shooting Star (StarIcon) positioned on the border between Col 1 and Col 2 */}
      <div className="relative"> 
  
  <div className="hidden md:block absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none z-10">
    <Image
      src={StarIcon}
      alt="Shooting Star"
      width={90}
      height={90}
      className="transform rotate-[-5deg]"
    />
  </div>

</div>
    </div>


    <div className="max-w-7xl 2xl:max-w-[1200px] mx-auto mt-16 lg:mt-24 px-4 sm:px-6 pb-10">
  <div className="bg-[#FDFCFE] border border-[#EAE9E9] rounded-2xl py-12 lg:pt-20 px-6 lg:px-20">

    {/* Flex Wrapper */}
    <div className="flex flex-col items-start gap-12">
      <div className="text-start lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Build trust with a professional business email
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8">
          Polish your brand, protect your inbox, and grow your business with tools
          that keep you in the driver's seat.
        </p>

        <ul className="space-y-4 text-base sm:text-lg text-gray-600 inline-block text-left">
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold mt-1">✓</span>
            <span>Build trust with a branded business email</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold mt-1">✓</span>
            <span>Seamless email access across all apps and devices</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold mt-1">✓</span>
            <span>Private, protected, and always online</span>
          </li>

        </ul>
      </div>

      <div className="flex justify-center">
        <Image
          src={BusinessImg}
          alt="Business Email"
          width={1400}
          height={1200}
          className="object-contain"
        />
      </div>
    </div>
  </div>
</div>

<div className="max-w-7xl 2xl:max-w-[1400px] mx-auto mt-25 px-6 ">
<div className="bg-white rounded-3xl px-14 py-20 pl-20border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">

    <div className="max-w-lg mb-20">
      <h2 className="text-3xl
        sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
        Why Choose <br /> G Digital Hosting?
      </h2>

      <p className="text-xl text-gray-600 leading-relaxed">
        Reliable, fast, and secure hosting solutions tailored for your business.
        Experience seamless performance and 24/7 support with G Digital.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-16">
      <div>
        <Image src={CarIcon} alt="Fast Performance" width={60} height={50} className="mb-6" />
        <h4 className="text-2xl font-bold text-gray-900 mb-4">
          Blazing-Fast Performance
        </h4>
        <p className="text-lg text-gray-600 leading-relaxed">
          Experience ultra-fast load times with our optimized servers, CDN
          integration, and advanced caching — ensuring your visitors never wait.
        </p>
      </div>

      <div>
        <Image src={WatchIcon} alt="Uptime" width={60} height={60} className="mb-3" />
        <h4 className="text-2xl font-bold text-gray-900 mb-4">
          99.9% Uptime Guarantee
        </h4>
        <p className="text-lg text-gray-600 leading-relaxed">
          Your business deserves reliability. We ensure your website stays live
          and accessible around the clock, backed by our robust infrastructure.
        </p>
      </div>

      <div>
        <Image src={LockIcon} alt="Security" width={60} height={60} className="mb-3" />
        <h4 className="text-2xl font-bold text-gray-900 mb-4">
          Managed Security
        </h4>
        <p className="text-lg text-gray-600 leading-relaxed">
          We take security seriously — with SSL certificates, daily backups,
          malware scanning, and firewall protection all included.
        </p>
      </div>

    </div>
  </div>
</div>

    <div className=" max-w-7xl 2xl:max-w-[1400px] mx-auto pt-30 mt-32 bg-[#079669]">
<div className="relative z-10 mx-auto">
<div className="text-center max-w-xl mx-auto mb-20 px-6">
  <h2 className="text-3xl
        sm:text-3xl lg:text-5xl font-bold text-white mb-6">
    Made With Gdigital
  </h2>

  <p className="text-lg text-white/80 mb-10">
    Polish your brand, protect your inbox, and grow your business
    with tools that keep you in the driver’s seat.
  </p>

  <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
    Get Started
    <ArrowRight size={20} />
  </button>
</div>

<div className="relative">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      HostingImg1,
      HostingImg2,
      HostingImg3,
      HostingImg4,
      HostingImg5,
      HostingImg6,
      HostingImg7,
      HostingImg8,
    ].map((img, index) => (
      <div
        key={index}
        className="rounded-2xl overflow-hidden shadow-2xl bg-white"
      >
        <Image
          src={img}
          alt={`Website preview ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
  </div>
  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-50 bg-gradient-to-t from-[#0aa06e] to-transparent" />
</div>

</div>

<section className="bg-gray-50 py-24 px-10">
  <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 gap-12">
    <div className="flex flex-col gap-2 w-full md:w-2/3">
      <h3 className="text-2xl font-bold mt-0 text-[#23A654]">Testimonials</h3>
      <h2 className="text-4xl md:text-5xl font-bold">
        <span className="text-gray-900">What Our Customer</span> <br />
        <span className="text-gray-900">Says About US</span>
      </h2>
    </div>

    <div className="flex flex-col gap-8 w-full md:w-2/3 mt-8 md:mt-0">
      <div className="flex justify-center">
      <div className="flex items-start
                  bg-white rounded-xl shadow-md 
                  p-6 gap-4 w-full max-w-md
                  border-l-4 border-transparent 
                  hover:border-[#23A654]
                  transition-all duration-500 ease-in-out
                  md:translate-x-10 
                  md:hover:translate-x-0">
          <Image src={Avatar} alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h3 className="font-bold text-xl text-gray-900">Mehwish</h3>
            <p className="text-gray-700 text-md">
              The online shop where you can sell your products.
            </p>
          </div>
        </div>
      </div>

      {/* 2nd Card → Right */}
      <div className="flex justify-center">
      <div className="flex items-start
                  bg-white rounded-xl shadow-md 
                  p-6 gap-4 w-full max-w-md
                  border-l-4 border-transparent 
                  hover:border-[#23A654]
                  transition-all duration-500 ease-in-out
                  md:translate-x-10 
                  md:hover:translate-x-0">

          <Image src={Avatar} alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h3 className="font-bold text-xl text-gray-900">Mehwish</h3>
            <p className="text-gray-700 text-md">
              Amazing customer support and smooth shopping experience.
            </p>
          </div>
        </div>
      </div>

      {/* 3rd Card → Center */}
      <div className="flex justify-center">
      <div className="flex items-start
                  bg-white rounded-xl shadow-md 
                  p-6 gap-4 w-full max-w-md
                  border-l-4 border-transparent 
                  hover:border-[#23A654]
                  transition-all duration-500 ease-in-out
                  md:translate-x-10 
                  md:hover:translate-x-0">
                    
          <Image src={Avatar} alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h3 className="font-bold text-xl text-gray-900">Mehwish</h3>
            <p className="text-gray-700 text-md">
              Loved the products, will definitely order again!
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>



      </div>
    </section>
    <Footer />
    </>
  );
}

