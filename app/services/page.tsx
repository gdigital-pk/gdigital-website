import React from "react";
import Image from "next/image";
import MultimediaIcon1 from "../../component/assets/Icons/MultimediaIcon1.png";
import MultimediaIcon2 from "../../component/assets/Icons/MultimediaIcon2.png";
import MultimediaIcon3 from "../../component/assets/Icons/MultimediaIcon3.png";
import MultimediaIcon4 from "../../component/assets/Icons/MultimediaIcon4.png";
import MultimediaIcon5 from "../../component/assets/Icons/MultimediaIcon5.png";
import MultimediaIcon6 from "../../component/assets/Icons/MultimediaIcon6.png";
import Footer from "../../component/layout/Footer";
import Navbar from "../../component/layout/Navbar";


export default function Services() {
  return (
    <>
    <Navbar/>
    <section id="services" className="py-20 bg-white">
    <div className="max-w-8xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-start w-full mb-16 mt-8">
        <h2 className="
  text-2xl
  sm:text-3xl
  md:text-4xl
  lg:text-5xl
  xl:text-[60px]
  font-bold
  text-gray-900
  leading-tight
">
            Future-ready products designed <br/> for scale. Strategy-first.<br/>
            Experience- <span className="text-[#23A654]">driven</span>.
          </h2>
        </div>

        {/* Process Flow Diagram */}
        <div className="mb-12 sm:mb-16 lg:mb-20 flex items-center justify-center px-2">
  <Image
    src="/servicesImg.png"
    alt="Services"
    className="max-w-full h-auto"
    width={1500}
    height={600}
  />
</div>

        {/* Our Services Section */}
        <div className="mb-20">
        <h3 className="text-2xl sm:text-3xl lg:text-[45px] font-bold text-[#23A654]">
  Our Services.
</h3>
<h3 className="text-2xl sm:text-3xl lg:text-[45px] font-bold text-gray-900">
  From Start to Finish!
</h3>
<p className="
  text-base
  sm:text-lg
  text-gray-600
  max-w-full
  sm:max-w-[500px]
  mb-8
">
          We combine strategy, design, and development into
           seamless digital experiences that people love, trust, and remember.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Strategy */}
            {/* <div className="bg-gray-50 p-8 border-t border-b border-r border-gray-300"> */}
            <div className="bg-gray-50 p-6 sm:p-8 border border-gray-300 md:border-l-0">
              <h4 className="text-xl sm:text-2xl lg:text-[30px] font-semibold mb-4 text-gray-900">Strategy</h4>
              <h6 className="text-base sm:text-lg lg:text-[20px] font-semibold mt-5 text-gray-900">Dscovery</h6>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-start">

                  <span>Product auditing
                  </span>
                </li>
                <li className="flex items-start">
                  <span>Business and data analysis</span>
                </li>
                <li className="flex items-start">
                  <span>Segmentation and personas</span>
                </li>
                <li className="flex items-start">
                  <span>PUser research</span>
                </li>
              </ul>
              <h6 className="text-base sm:text-lg lg:text-[20px] font-semibold mt-5 text-gray-900">Product Definition</h6>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-start">

                  <span>Product strategy
                  </span>
                </li>
                <li className="flex items-start">
                  <span>Proof of concept</span>
                </li>
                <li className="flex items-start">
                  <span>Minimum viable product</span>
                </li>
                <li className="flex items-start">
                  <span>Growth strategy</span>
                </li>
                <li className="flex items-start">
                  <span>Conversion rate optimisation</span>
                </li>
              </ul>
              <h6 className="text-base sm:text-lg lg:text-[20px] font-semibold mt-5 text-gray-900">Operations</h6>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-start">

                  <span>Product management
                  </span>
                </li>
                <li className="flex items-start">
                  <span>Project management</span>
                </li>
              </ul>
            </div>

            {/* Design */}
            <div className="bg-gray-50 p-6 sm:p-8 border border-gray-300 md:border-l-0">
             <h4 className="text-xl sm:text-2xl lg:text-[30px] font-semibold mb-4 text-gray-900">Design</h4>
              <h6 className="text-base sm:text-lg lg:text-[20px] font-semibold mt-5 text-gray-900">Interface</h6>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-start">

                  <span>User experience strategy
                  </span>
                </li>
                <li className="flex items-start">
                  <span>User experience design</span>
                </li>
                <li className="flex items-start">
                  <span>User interface design</span>
                </li>
                <li className="flex items-start">
                  <span>Design systems</span>
                </li>
                <li className="flex items-start">
                  <span>User testing</span>
                </li>
              </ul>
              <h6 className="text-base sm:text-lg lg:text-[20px] font-semibold mt-5 text-gray-900">Brand</h6>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-start">

                  <span>Brand strategy
                  </span>
                </li>
                <li className="flex items-start">
                  <span>Brand identity</span>
                </li>
                <li className="flex items-start">
                  <span>Logo design</span>
                </li>
                <li className="flex items-start">
                  <span>Brand guidelines</span>
                </li>
              </ul>
              <h6 className="text-base sm:text-lg lg:text-[20px] font-semibold mt-5 text-gray-900">Multimedia</h6>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-start">

                  <span>Illustration
                  </span>
                </li>
                <li className="flex items-start">
                  <span>Video and motion design</span>
                </li>
              </ul>
            </div>

            {/* Development */}
            <div className="bg-gray-50 p-6 sm:p-8 border border-gray-300 md:border-l-0 md:border-r-0">
              <h4 className="text-xl sm:text-2xl lg:text-[30px] font-semibold mb-4 text-gray-900">Development</h4>
              <h6 className="text-base sm:text-lg lg:text-[20px] font-semibold mt-5 text-gray-900">Front-end</h6>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-start">

                  <span>React
                  </span>
                </li>
                <li className="flex items-start">
                  <span>NextJS</span>
                </li>
                <li className="flex items-start">
                  <span>Svelte</span>
                </li>
                <li className="flex items-start">
                  <span>React Native</span>
                </li>
                <li className="flex items-start">
                  <span>Swift</span>
                </li>
                <li className="flex items-start">
                  <span>Kotlin</span>
                </li>
              </ul>
              <h6 className="text-base sm:text-lg lg:text-[20px] font-semibold mt-5 text-gray-900">Back-end</h6>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-start">

                  <span>Elixir
                  </span>
                </li>
                <li className="flex items-start">
                  <span>Python</span>
                </li>
                <li className="flex items-start">
                  <span>Node</span>
                </li>
              </ul>
              <h6 className="text-base sm:text-lg lg:text-[20px] font-semibold mt-5 text-gray-900">DevOps</h6>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-start">

                  <span>Hosting and maintenance
                  </span>
                </li>
                <li className="flex items-start">
                  <span>VInfrastructure setup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Deliverables Section */}
      {/* Deliverables Section */}
<div className="flex flex-col lg:flex-row gap-12 mb-20">

<div className="flex flex-col sm:flex-col lg:flex-row w-full gap-8">

  {/* Left side - headings */}
  <div className="lg:w-1/3">
    <h3 className="text-2xl sm:text-3xl lg:text-[45px] font-bold text-[#23A654]">
      Deliverables.
    </h3>
    <h3 className="text-2xl sm:text-3xl lg:text-[45px] font-bold text-gray-900 mt-2">
      Including but not <br className="hidden sm:block" /> limited to.
    </h3>
  </div>

  {/* Right side - grid */}
  <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-2 gap-6">
  {[
    { 
      icon: MultimediaIcon1, 
      title: "Ecommerce",
      desc: "We build custom online stores for your growing business."
    },
    { 
      icon: MultimediaIcon2, 
      title: "Experience",
      desc: "We create intuitive digital interfaces for your target users."
    },
    { 
      icon: MultimediaIcon3, 
      title: "Web Applications",
      desc: "We develop scalable web applications for your enterprise platform."
    },
    { 
      icon: MultimediaIcon4, 
      title: "Mobile App",
      desc: "We engineer high-performance mobile apps for iOS and Android."
    },
    { 
      icon: MultimediaIcon5, 
      title: "Hosting Solutions",
      desc: "We provide secure cloud infrastructure for your digital products."
    },
    { 
      icon: MultimediaIcon6, 
      title: "Digital Product",
      desc: "We design strategic growth plans for your business success."
    },
  ].map((item, index) => (
    <div key={index} className="p-4 sm:p-6">
      
      <div className="mb-2">
        <Image
          src={item.icon}
          alt={item.title}
          width={40}
          height={40}
          className="sm:w-[50px]"
        />
      </div>

      <h4 className="text-lg sm:text-[22px] font-bold text-gray-900 mt-3">
        {item.title}
      </h4>

      <p className="text-sm sm:text-base text-gray-600 mt-2">
        {item.desc}
      </p>

    </div>
  ))}
</div>


</div>
</div>


      </div>
    </section>
    <Footer />
    </>
  );
}

