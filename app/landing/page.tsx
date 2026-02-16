"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import Influencer  from "../../component/Influencer";
import { ArrowRight, ChevronLeft, ChevronRight, Link } from "lucide-react";
import Articles from "../articles/page";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Autoplay } from "swiper/modules";

// Your imports
import Landingicon1 from "../../component/assets/Icons/Landingicon1.png";
import LandingIcon2 from "../../component/assets/Icons/LandingIcon2.png";
import LandingIcon3 from "../../component/assets/Icons/LandingIcon3.png";
import LandingIcon4 from "../../component/assets/Icons/LandingIcon4.png";
import LandingIcon5 from "../../component/assets/Icons/LandingIcon5.png";
import LandingIcon6 from "../../component/assets/Icons/LandingIcon6.png";
import PsImg from "../../component/assets/Images/PsImg.png";
import LandingImg1 from "../../component/assets/Images/LandingImg1.png";
import InfluencerImg from "../../component/assets/Images/InfluencerImg.png";
import wajahat from "../../component/assets/Images/wajahat.png";
import bajwa from "../../component/assets/Images/bajwa.png";
import siddiqui from "../../component/assets/Images/siddiqui.png";
import nayel from "../../component/assets/Images/nayel.png";
import shazia from "../../component/assets/Images/shazia.png";
import arslan from "../../component/assets/Images/arslan.png";
import shahzad from "../../component/assets/Images/shahzad.png";
import laiba from "../../component/assets/Images/laiba.png";
import romaisa from "../../component/assets/Images/romaisa.png";
import mustafa from "../../component/assets/Images/mustafa.png";
import adeel from "../../component/assets/Images/adeel.png";
import aashir from "../../component/assets/Images/aashir.png";
import alishba from "../../component/assets/Images/alishba.png";
import melika from "../../component/assets/Images/melika.png";
import PortfolioImg1 from "../../component/assets/Images/PortfolioImg1.png";
import PortfolioImg2 from "../../component/assets/Images/PortfolioImg2.png";
import PortfolioImg3 from "../../component/assets/Images/PortfolioImg3.png";
import logo1 from "../../component/assets/Icons/logo1.png";
import logo2 from "../../component/assets/Icons/logo2.png";
import logo3 from "../../component/assets/Icons/logo3.png";
import Avatar from "../../component/assets/Icons/Avatar.png";
import ArticleIcon1 from "../../component/assets/Icons/ArticleIcon1.png";
import ArticleIcon2 from "../../component/assets/Icons/ArticleIcon2.png";
import ArticleIcon3 from "../../component/assets/Icons/ArticleIcon3.png";
import ArticleIcon4 from "../../component/assets/Icons/ArticleIcon4.png";

export default function LandingPage() {

    const portfolioData = [
        {
          img: PortfolioImg1,
          logo: logo1,
          title: "Gdigital: Driving Brand Success through Comprehensive",
          client: "CEO Transport Ltd",
          isTaller: false,
        },
        {
          img: PortfolioImg2,
          logo: logo2,
          title: "Gdigital: Driving Brand Success through Comprehensive",
          client: "CEO Transport Ltd",
          isTaller: true, // This makes the middle card taller
        },
        {
          img: PortfolioImg3,
          logo: logo3,
          title: "Gdigital: Driving Brand Success through Comprehensive",
          client: "SparkDatabox",
          isTaller: false,
        },
      ];

      const articles = [
        {
          id: 1,
          isVents: true,
          brand: "Rolling Stone",
          title: "Gdigital: Driving Brand Success through Comprehensive Operational and PR Solutions",
          source: "Rolling Stone",
          url: "https://www.rollingstone.co.uk/culture/gdigital-driving-brand-success-through-comprehensive-operational-and-pr-solutions-42877/",
          icon: ArticleIcon1
        },
        {
          id: 2,
          isVents: false,
          brand: "Independent",
          title: "Gdigital: empowering brands, creators, and public figures with comprehensive operational and PR solutions",
          source: "Independent",
          url: "https://www.independent.co.uk/news/business/gdigital-brands-creators-pr-social-media-b2603181.html",
          icon: ArticleIcon2
        },
        {
          id: 3,
          isVents: false,
          brand: "US TIMES NOW",
          title: "Gdigital: Revolutionizing Brand Success with Comprehensive Operational and PR Solutions",
          source: "US TIMES NOW",
          url: "https://www.ustimesnow.com/gdigital-revolutionizing-brand-success-with-comprehensive-operational-and-pr-solutions/",
          icon: ArticleIcon3
        },
        {
          id: 4,
          isVents: false,
          brand: "Daily Caller",
          title: "Gdigital: Revolutionizing Brand Success with Comprehensive Operational and PR Solutions",
          source: "Daily Caller",
          url: "https://dailycaller.com/2023/11/05/gdigital-revolutionizing-brand-success-with-comprehensive-operational-and-pr-solutions/",
          icon: ArticleIcon4
        },
      ];

      const people = [
        { img: wajahat, name: "Wajahat Rauf", role: "Film Director" },
        { img: bajwa, name: "Alba Bajwa", role: "Influencer / Model" },
        { img: siddiqui, name: "Walid Siddiqui", role: "Influencer / Model" },
        { img: nayel, name: "Nayel Wajahat", role: "Musician" },
        { img: shazia, name: "Shazia Wajahat", role: "Films Director" },
        { img: arslan, name: "Arslan Ash", role: "Digital Creator" },
        { img: shahzad, name: "Shahzad Sheikh", role: "Influencer / Actor" },
        { img: laiba, name: "Laiba Khurram", role: "Influencer / Model" },
        { img: romaisa, name: "Romaisa Khan", role: "Influencer / Model" },
        { img: mustafa, name: "Mustafa Taifoor", role: "Influencer / Model" },
        { img: adeel, name: "Adeel Chaudry", role: "Influencer" },
        { img: aashir, name: "Aashir Wajahat", role: "Influencer / Model" },
        { img: alishba, name: "Alishba Anjum", role: "Influencer / Model" },
        { img: melika, name: "Melika Najafizadeh", role: "Influencer / Model" },
      ];

  
  return (
    <div className="bg-white font-sans text-[#333]">
          <Navbar />

   <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1200px] bg-[#333333] rounded-[60px] md:rounded-[80px] lg:flex-row items-center gap-10 pt-10">

      {/* --- HERO SECTION --- */}
      <section 
  className="relative pt-10 pb-40 px-6 md:px-16 rounded-b-[100px] md:rounded-b-[140px] z-20"
  style={{ 
    background: 'linear-gradient(144.63deg, #079669 23.69%, #23E9AA 66.82%, #8DDA7D 113.32%)' 
  }}
>
        

        {/* Massive Headline */}
        <div className="max-w-7xl mx-auto min-h-[70vh]">
          <h1 className="text-white text-3xl
        sm:text-3xl md:text-[80px] leading-[0.82] font-[800] italic uppercase tracking-[-0.06em] mt-30" 
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Create. Build.<br />
            Launch. Grow.<br />
            Evolve.
          </h1>
        </div>
      </section>
      <div className="bg-[#333333] rounded-[60px] md:rounded-[80px] p-10 md:p-16 
                flex flex-col lg:flex-row items-center lg:items-start gap-12">

  <p className="text-gray-400 text-md md:text-lg font-semibold leading-tight mt-10
              max-w-[200px] text-justify lg:text-justify shrink-0">
  Trusted By Brands we have Help Shaped.
</p>

  {/* RIGHT LOGOS */}
  <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-end gap-6">

  <div className="bg-white rounded-xl w-[140px] h-32 flex flex-col items-center justify-center shadow-2xl gap-2">
  <Image
    src={Landingicon1}
    alt="Brand logo 1"
    className="object-contain"
    width={50}
    height={40}
    priority
  />
  
  <Image
    src={LandingIcon6}  // <-- second image
    alt="Brand logo 2"
    className="object-contain"
    width={70}
    height={60}
    priority
  />
</div>

<div className="bg-white rounded-xl w-[142px] h-32 flex items-center justify-center shadow-2xl">
  <Image
    src={LandingIcon2}
    alt="Brand logo 2"
    className="object-contain"
    width={110}
    height={80}
    priority
  />
</div>

<div className="bg-white rounded-xl w-[142px] h-32 flex items-center justify-center p-6 shadow-2xl">
  <Image
    src={LandingIcon3}
    alt="Brand logo 3"
    className="object-contain"
    width={110}
    height={40}
    priority
  />
</div>

<div className="bg-white rounded-xl w-[142px] h-32 flex items-center justify-center p-6 shadow-2xl">
  <Image
    src={LandingIcon4}
    alt="Brand logo 3"
    className="object-contain"
    width={150}
    height={80}
    priority
  />
</div>

<div className="bg-white rounded-xl w-[142px] h-32 flex items-center justify-center p-6 shadow-2xl">
  <Image
    src={LandingIcon5}
    alt="Brand logo 3"
    className="object-contain"
    width={120}
    height={60}
    priority
  />
</div>
</div>

</div>
      {/* </section> */}
    </div>
      {/* --- PORTFOLIO HEADER --- */}
      <section className="max-w-7xl 2xl:max-w-[1200px] mx-auto px-10 py-20 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-[45px] font-bold  text-[#23A654]">
            Where Ideas Become<br /><span className="text-[#333]">Digital Products</span>
          </h3>
        </div>
        <div>
          <p className=" text-base sm:text-lg text-gray-600 max-w-full sm:max-w-[500px] mb-6">
            Our case studies showcase how we help businesses transform decreasing reliable, salable software. 
            From strategy to execution, each project highlights our commitment to performance, usability, and long-term value.
          </p>

          <hr className="w-full sm:w-[500px] border-t border-gray-300 mb-6" />

          <div className="flex justify-between items-center">
             <p className="text-base sm:text-lg font-bold text-gray-400">Let's Built something <br/> <span className="text-base sm:text-lg text-black">meaningful together</span></p>
             <button className="bg-[#00B86B] text-white px-6 py-3 rounded-full flex items-center gap-2">
               See Projects <ArrowRight size={18} />
             </button>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO GRID --- */}
      <section className="max-w-7xl 2xl:max-w-[1300px] mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-20">
      {portfolioData.map((item, i) => (
        <div
          key={i}
          className={`relative rounded-[2.5rem] overflow-hidden group shadow-2xl transition-all duration-500 ${
            item.isTaller ? "h-[650px]" : "h-[580px]"
          }`}
        >
          {/* Background Image */}
          <Image
            src={item.img}
            alt="work"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Logo at the Top */}
          <div className="absolute top-12 left-0 right-0 flex justify-center px-8">
            <div className="relative w-48 h-20">
              <Image
                src={item.logo}
                alt="Logo"
                fill
                className="object-contain brightness-0 invert" // Ensures logo is pure white
              />
            </div>
          </div>

          {/* Text Content at the Bottom with Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
            <h3 className="text-white font-bold text-2xl leading-tight mb-4 max-w-[90%]">
              {item.title}
            </h3>
            <p className="text-white/80 text-lg font-medium">
              {item.client}
            </p>
          </div>
        </div>
      ))}
    </section>

      {/* --- SERVICES SECTION --- */}
      <section className="max-w-7xl 2xl:max-w-[1200px] mx-auto px-10 py-20 flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1">
          <Image src={PsImg} alt="Services" className="w-full max-w-md" />
        </div>
        <div className="flex-1">
          <span className="text-xl sm:text-2xl lg:text-[45px] text-[#23A654]">Our Services.</span>
          <h2 className="text-3xl sm:text-3xl lg:text-5xl font-semibold text-[#333] mt-2 mb-6 leading-tight">Design-Led Digital Products.</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-full sm:max-w-[500px] mb-8">
            We believe exceptional digital experiences are never the result of shortcuts. Every project begins with deep research 
            and thoughtful experimentation, where each detail is explored to guide data-driven choices. From there, we design 
            and develop solutions from the ground up—crafted precisely around what users truly need.
          </p>
          <button className="bg-[#00B86B] text-white px-8 py-3 rounded-full flex items-center gap-2">
            Read More <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* --- HOSTING SECTION --- */}
      <section className="max-w-7xl 2xl:max-w-[1200px] mx-auto px-10 py-20 flex flex-col md:flex-row-reverse items-center gap-20">
        <div className="flex-1">
          <Image src={LandingImg1} alt="Hosting" className="w-full" />
        </div>
        <div className="flex-1">
          <span className="text-xl sm:text-2xl lg:text-[45px] text-[#23A654]">Our Hosting.</span>
          <h2 className="text-3xl sm:text-3xl lg:text-5xl font-semibold text-[#333] mt-2 mb-6 leading-tight">Fast. Secure. Scalable.</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-full sm:max-w-[500px] mb-8">
            We deliver high-performance hosting built for modern software and digital products. Our infrastructure is optimized 
            for speed, reliability, and security—so your applications stay online, load faster, and scale effortlessly as your business 
            grows. From startups to enterprise platforms, our hosting is engineered to support real-world performance and long-term growth.
          </p>
          <button className="bg-[#00B86B] text-white px-8 py-3 rounded-full flex items-center gap-2">
            View Hosting Plans <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* --- INFLUENCERS SECTION --- */}
      <section className="max-w-7xl 2xl:max-w-[1200px] mx-auto px-10 py-20">
  <h2 className="text-3xl sm:text-3xl lg:text-5xl font-semibold text-[#333] leading-tight mb-12">
    People We Have Worked<br />With
    <span className="text-[#00B86B]">.</span>
  </h2>

  <Influencer people={people} />
</section>

      {/* --- ARTICLES SECTION --- */}
      <section className="max-w-7xl 2xl:max-w-[1200px] mx-auto px-6 md:px-10 py-24">
      {/* Heading */}
      <h2 className=" text-3xl sm:text-3xl lg:text-[52px] font-bold text-[#333] mb-14 tracking-tight">
        Articles About <span className="text-[#129F68]">GDigital</span>
      </h2>

      {/* Articles List */}
      <div className="border-t border-gray-300">
  {articles.map((item) => (
    <a
      key={item.id}
      href={item.url}           // external URL
      target="_blank"           // opens in new tab
      rel="noopener noreferrer" // security best practice
      className="block"
    >
      <div
        className="flex flex-col md:flex-row items-start md:items-center
                   justify-between py-10 border-b border-gray-300
                   gap-8 group cursor-pointer hover:bg-gray-50
                   transition-all px-4"
      >
        {/* Column 1: Brand Logo & Name */}
        <div className="flex items-center gap-5 w-full md:w-[25%]">
        <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-gray-300">
  <Image
    src={item.icon}
    alt={item.brand}
    width={60}   // adjust size to fit nicely in circle
    height={60}
    className="object-contain"
  />
</div>
          <span className="text-lg font-bold text-[#333]">{item.brand}</span>
        </div>

        {/* Column 2: Title and Source */}
        <div className="flex-1 max-w-2xl">
          <h3 className="text-[22px] font-bold text-[#333] leading-[1.3] mb-2
                         group-hover:text-[#129F68] transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-500 text-base">{item.source}</p>
        </div>

        {/* Column 3: Arrow Button */}
        <div className="flex justify-end items-center w-full md:w-auto">
          <div className="w-10 h-10 bg-[#333] text-white rounded-full
                          flex items-center justify-center
                          transition-transform duration-300
                          group-hover:scale-110">
            <ChevronRight size={20} strokeWidth={3} />
          </div>
        </div>
      </div>
    </a>
  ))}
</div>

      {/* CTA Button */}
      <a
  href="/articles"
  className="mt-12 inline-flex items-center gap-2
             bg-[#129F68] text-white px-7 py-3.5 rounded-full
             font-bold text-sm hover:bg-[#0e8557] transition-colors"
>
  Read More <ArrowRight size={16} strokeWidth={3} />
</a>
    </section>

      {/* --- TESTIMONIALS --- */}
      <section className="bg-gray-50 py-24 px-10">
  <div className="flex flex-col md:flex-row max-w-7xl 2xl:max-w-[1200px] mx-auto px-6 gap-12">

    {/* Title Section → Always top on mobile */}
    <div className="flex flex-col gap-2 w-full md:w-2/3">
      <h3 className="text-2xl font-bold mt-0 text-[#23A654]">Testimonials</h3>
      <h2 className="text-4xl md:text-5xl font-bold">
        <span className="text-gray-900">What Our Customer</span> <br />
        <span className="text-gray-900">Says About US</span>
      </h2>

      {/* Navigation Arrows */}
      <div className="flex gap-3 mt-4">
        <button className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
          <ChevronLeft size={20} />
        </button>
        <button className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>

    {/* Cards Section → Zig-Zag Testimonials */}
    <div className="flex flex-col gap-8 w-full md:w-2/3 mt-8 md:mt-0">

      {/* 1st Card → Center */}
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


      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}