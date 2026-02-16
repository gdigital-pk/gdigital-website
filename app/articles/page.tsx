import React from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ArticleIcon1 from "../../component/assets/Icons/ArticleIcon1.png";
import ArticleIcon2 from "../../component/assets/Icons/ArticleIcon2.png";
import ArticleIcon3 from "../../component/assets/Icons/ArticleIcon3.png";
import ArticleIcon4 from "../../component/assets/Icons/ArticleIcon4.png";
import ArticleIcon5 from "../../component/assets/Icons/ArticleIcon5.png";
import ArticleIcon6 from "../../component/assets/Icons/ArticleIcon6.png";
import ArticleIcon7 from "../../component/assets/Icons/ArticleIcon7.png";
import ArticleIcon8 from "../../component/assets/Icons/ArticleIcon8.png";
import Footer from "../../component/layout/Footer";
import Navbar from "../../component/layout/Navbar";


export default function Articles() {

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
    {
      id: 5,
      isVents: true,
      brand: "CaliforniaTimes",
      title: "Gdigital: Revolutionizing Brand Success with Comprehensive Operational and PR Solutions",
      source: "CaliforniaTimes",
      url: "https://www.californiatimes.us/gdigital-revolutionizing-brand-success-with-comprehensive-operational-and-pr-solutions/",
      icon: ArticleIcon5
    },
    {
      id: 6,
      isVents: false,
      brand: "Ventsmagazine",
      title: "Gdigital: Revolutionizing Brand Success with Comprehensive Operational and PR Solutions",
      source: "Ventsmagazine",
      url: "https://ventsmagazine.com/2023/12/10/ascend-ecoms-will-basta-guides-aspiring-ecommerce-entrepreneurs-towards-unrivaled-success/",
      icon: ArticleIcon6
    },
    {
      id: 7,
      isVents: false,
      brand: "CaliforniaSpectator",
      title: "Gdigital: Revolutionizing Brand Success with Comprehensive Operational and PR Solutions",
      source: "CaliforniaSpectator",
      url: "https://californiaspectator.com/entertainment/gdigital-revolutionizing-brand-success-with-comprehensive-operational-and-pr-solutions/",
      icon: ArticleIcon7
    },
    {
      id: 8,
      isVents: false,
      brand: "Theusjournal",
      title: "Gdigital: Redefining Brand Success with Expert Operational and PR Solutions",
      source: "Theusjournal",
      url: "https://www.theusjournal.com/social-media/gdigital-redefining-brand-success-with-expert-operational-and-pr-solutions/",
      icon: ArticleIcon8
    }
  ];

  return (
    <>
    <Navbar/>

      {/* --- ARTICLES SECTION --- */}
      <section className="px-6 md:px-10 py-20 bg-white">
      <div className="max-w-7xl 2xl:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <h2 className=" text-3xl sm:text-3xl lg:text-[52px] font-bold text-[#333] mb-14 tracking-tight mt-8">
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


      </div>
    </section>
    <Footer />
    </>
  );
}

