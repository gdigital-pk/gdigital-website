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
  return (
    <>
      <Navbar />
    <section id="hosting" className="py-20 bg-[#F9F9F9]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 mt-170">
        {/* Header */}
        <div className="absolute inset-0">
  <img
    src={HostingBackground.src}
    alt="Hosting Background"
    className="w-full h-full object-cover"
  />
  {/* Optional overlay */}
  <div className="absolute inset-0 "></div>
</div>

{/* Text content on top of image */}
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="absolute bottom-8 left-8 right-8 flex items-end gap-10">
    
    {/* LEFT SIDE */}
    <h2 className="text-4xl md:text-7xl font-bold text-gray-900 max-w-lg">
      Everything your website needs.
    </h2>

    {/* RIGHT SIDE */}
    <div>
      <h6 className="text-lg md:text-2xl text-gray-700 font-bold mb-5">
        Domain, hosting, and email — made easy.
      </h6>

      <p className="text-lg text-gray-600 mb-10">
        Reliable performance, secure servers, and everything you need — from
        domain registration to professional email — all in one affordable
        package.
      </p>
    </div>
  </div>
</div>

<div className="mb-20 grid md:grid-cols-2 gap-12 items-center pt-40">

  {/* LEFT SIDE – IMAGE */}
  <div className="order-2 md:order-1 flex items-center justify-center">
    <Image
      src={DigitalFutureIcon}
      alt="Built for the Digital Future"
      width={200}
      height={200}
    className="object-contain flex-shrink-0 bg-white z-10"
    />
  </div>

  {/* RIGHT SIDE – TEXT */}
  <div className="order-1 md:order-2">
    <h3 className="text-4xl font-bold text-gray-900 mb-5">
      Built for the Digital Future
    </h3>

    <p className="text-lg text-gray-600 leading-relaxed">
      At G Digital, we create the technology that drives tomorrow’s businesses.
      Our hosting solutions are crafted for speed, security, and scalability —
      empowering brands to grow, evolve, and lead in the digital age.
    </p>
  </div>

</div>


<div className="mb-20 grid md:grid-cols-2 gap-12 items-center pt-20">

  {/* LEFT SIDE – TEXT */}
  <div className="order-1 md:order-1">
    <h3 className="text-4xl font-bold text-gray-900 mb-5">
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



<div className="mb-20 grid md:grid-cols-2 gap-12 items-center pt-20">

  {/* LEFT SIDE – IMAGE */}
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
    <h3 className="text-4xl font-bold text-gray-900 mb-5">
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
    

        {/* Make your website in minutes */}
        <div className=" grid md:grid-cols-3 gap-12 items-center pt-10">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Hosting Packages
            Made for You</h3>
            <p className="text-lg text-gray-600 mb-6">
            Whether you’re launching a new site or scaling your 
            business, our plans are built to deliver speed, security, and value.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8">
  <div className="flex items-center w-full">
    <div className="flex-grow border-t border-gray-400"></div>

    <Image src={SparkIcon} alt="Spark" width={90} height={90} className="mx-8" />

    <div className="flex-grow border-t border-gray-400"></div>

    <Image src={FireIcon} alt="Fire" width={90} height={90} className="mx-8" />

    <div className="flex-grow border-t border-gray-400"></div>
  </div>
</div>
<div className="max-w-7xl mx-auto">
<div className="max-w-7xl mx-auto grid md:grid-cols-3 border-t border-b border-gray-700">

{["Spark", "Blaze", "Inferno"].map((plan, i) => (
  <div
    key={i}
    className={`p-12 text-white ${
      i !== 2 ? "border-r border-gray-700" : ""
    }`}
  >
    <h4 className="text-4xl text-gray-900 font-bold mb-2">{plan}</h4>
    <p className="text-lg text-gray-600 mb-6">(Basic Package)</p>

    <p className="text-4xl text-gray-900 font-bold mb-8">$200</p>

    <p className="text-xl text-gray-600 mb-8">For individuals and small teams who need credibility without complexity.</p>

    <p className="text-xl text-gray-600 mb-8">
What you get:
</p>

<ul className="space-y-4 text-lg text-gray-600 mb-10">
  <li className="flex items-center gap-3">
    <Image src={UserIcon} alt="Users" width={20} height={20} />
    <span>1–10 user</span>
  </li>

  <li className="flex items-center gap-3">
    <Image src={EmailIcon} alt="Email" width={20} height={20} />
    <span>Branded domain email (e.g., you@company.com)</span>
  </li>

  <li className="flex items-center gap-3">
    <Image src={VirusProtection} alt="Security" width={20} height={20} />
    <span>Basic spam & virus protection</span>
  </li>

  <li className="flex items-center gap-3">
    <Image src={StorageIcon} alt="Storage" width={20} height={20} />
    <span>5GB storage per inbox</span>
  </li>
</ul>

    <p className="text-lg text-gray-600 mb-6">Perfect for:</p>
    <ul className="space-y-2 text-lg text-gray-600">
      <li>• Freelancers moving away from Gmail/Yahoo</li>
      <li>• Startups needing a professional look on a budget</li>
    </ul>

    <button className="mt-20 mb-10 w-full h-15 py-3 border-3 border-green-500 text-gray-600 text-lg rounded-full">
      Get Started
    </button>
  </div>
))}
</div>

<div className="flex justify-center">
    <Image
      src={StarIcon}
      alt="Star"
      width={110}
      height={110}
    />
  </div>

</div>


<div className="max-w-4xl mx-auto mt-24 px-6">
  <div className="bg-[#FDFCFE] border border-gray-200 rounded-2xl py-20 px-10">

    {/* Content Wrapper */}
    <div className="max-w-3xl">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        Build trust with a professional business email
      </h2>

      {/* Paragraph */}
      <p className="text-xl text-gray-600 mb-10">
        Polish your brand, protect your inbox, and grow your business with tools
        that keep you in the driver's seat.
      </p>

      {/* Check List */}
      <ul className="space-y-4 text-lg text-gray-600">
        <li className="flex items-start gap-3">
          <span className="text-green-600 text-xl font-bold mt-1">✓</span>
          <span>Build trust with a branded business email</span>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-green-600 text-xl font-bold mt-1">✓</span>
          <span>Seamless email access across all apps and devices</span>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-green-600 text-xl font-bold mt-1">✓</span>
          <span>Private, protected, and always online</span>
        </li>
      </ul>
    </div>

    {/* Image */}
    <div className="flex justify-center">
      <Image
        src={BusinessImg}
        alt="Business Email"
        width={900}
        height={900}
        className="object-contain"
      />
    </div>

  </div>
</div>


<div className="w-[90%] mx-auto mt-32 px-6">
  <div className="bg-white border border-gray-200 rounded-3xl px-14 py-20">

    {/* Top Content */}
    <div className="max-w-3xl mb-20">
      <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Why Choose <br /> G Digital Hosting?
      </h2>

      <p className="text-xl text-gray-600 leading-relaxed">
        Reliable, fast, and secure hosting solutions tailored for your business.
        Experience seamless performance and 24/7 support with G Digital.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid md:grid-cols-3 gap-16">

      {/* Feature 1 */}
      <div>
        <Image src={CarIcon} alt="Fast Performance" width={48} height={48} className="mb-6" />
        <h4 className="text-2xl font-bold text-gray-900 mb-4">
          Blazing-Fast Performance
        </h4>
        <p className="text-lg text-gray-600 leading-relaxed">
          Experience ultra-fast load times with our optimized servers, CDN
          integration, and advanced caching — ensuring your visitors never wait.
        </p>
      </div>

      {/* Feature 2 */}
      <div>
        <Image src={WatchIcon} alt="Uptime" width={48} height={48} className="mb-6" />
        <h4 className="text-2xl font-bold text-gray-900 mb-4">
          99.9% Uptime Guarantee
        </h4>
        <p className="text-lg text-gray-600 leading-relaxed">
          Your business deserves reliability. We ensure your website stays live
          and accessible around the clock, backed by our robust infrastructure.
        </p>
      </div>

      {/* Feature 3 */}
      <div>
        <Image src={LockIcon} alt="Security" width={48} height={48} className="mb-6" />
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


    {/* Made With Gdigital Section */}
    <div
  className="
  relative
  w-screen
  left-1/2 right-1/2
  -ml-[50vw] -mr-[50vw]
  pt-30
  overflow-hidden
  mt-32
  bg-[#079669]
"
>
<div className="relative z-10 mx-auto">

{/* Top Content */}
<div className="text-center max-w-xl mx-auto mb-20 px-6">
  <h2 className="text-5xl font-bold text-white mb-6">
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

{/* Website Preview Grid */}
<div className="relative max-w-9xl mx-auto">
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
  {/* Bottom Fade (matches image) */}
  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-50 bg-gradient-to-t from-[#0aa06e] to-transparent" />
</div>

</div>

<div className="flex max-w-7xl mx-auto px-6 py-24 gap-12">

  {/* Left Section → Title + Arrows */}
  <div className="flex flex-col justify-start gap-6 w-2/3">
    <h2 className="text-4xl md:text-5xl font-bold mt-30">
      <span className="text-[#23A654]">What Our Customer</span> <br />
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

  {/* Right Section → Zig-Zag Testimonials */}
  <div className="flex flex-col gap-8 w-2/3 relative">

    {/* 1st Card → Center */}
    <div className="flex justify-center">
      <div className="flex items-center bg-white rounded-xl shadow-md p-6 gap-4 w-full max-w-md">
        <Image src={Avatar} alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h3 className="font-bold text-xl text-gray-900">Mehwish</h3>
          <p className="text-gray-700 text-mdtext-md">
            The online shop where you can sell your products.
          </p>
        </div>
      </div>
    </div>

    {/* 2nd Card → Right + Green Border */}
    <div className="flex justify-end">
      <div className="flex items-center bg-white rounded-xl shadow-md p-6 gap-4 w-full max-w-md border-l-4 border-[#23A654]">
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
      <div className="flex items-center bg-white rounded-xl shadow-md p-6 gap-4 w-full max-w-md">
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



      </div>
    </section>
    <Footer />
    </>
  );
}

