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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start w-full mb-16 mt-8">
        <h2 className="text-3xl sm:text-4xl md:text-[60px] font-bold text-gray-900 mb-4 leading-snug">
            Future-ready products designed <br/> for scale. Strategy-first.<br/>
            Experience- <span className="text-[#23A654]">driven</span>.
          </h2>
        </div>

        {/* Process Flow Diagram */}
        <div className="mb-20 flex items-center justify-center">
  <Image
    src="/servicesImg.png"
    alt="Services"
    className="max-w-full h-auto"
    width={1200}
    height={600}
  />
</div>

        {/* Our Services Section */}
        <div className="mb-20">
        <h3 className="text-[45px] font-bold text-[#23A654] text-start">
           Our Services.
        </h3>
          <h3 className="text-[45px] font-bold text-gray-900 text-start">
            From Start to Finish!
          </h3>
          <p className="text-lg text-gray-600 text-start max-w-[500px] mb-8">
          We combine strategy, design, and development into
           seamless digital experiences that people love, trust, and remember.
           </p>
          <div className="grid md:grid-cols-3 gap-0">
            {/* Strategy */}
            <div className="bg-gray-50 p-8 border-t border-b border-r border-gray-300">
              <h4 className="text-[30px] font-semibold text-gray-900 mb-4">Strategy</h4>
              <h6 className="text-[20px] font-semibold text-gray-900">Descovery</h6>
              <ul className="space-y-2 text-gray-600">
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
              <h6 className="text-[20px] font-semibold text-gray-900 mt-5">Product Definition</h6>
              <ul className="space-y-2 text-gray-600">
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
              <h6 className="text-[20px] font-semibold text-gray-900 mt-5">Operations</h6>
              <ul className="space-y-2 text-gray-600">
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
            <div className="bg-gray-50 p-8 border-t border-b border-r border-gray-300">
              <h4 className="text-[30px] font-semibold text-gray-900 mb-4">Design</h4>
              <h6 className="text-[20px] font-semibold text-gray-900">Interface</h6>
              <ul className="space-y-2 text-gray-600">
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
              <h6 className="text-[20px] font-semibold text-gray-900 mt-5">Brand</h6>
              <ul className="space-y-2 text-gray-600">
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
              <h6 className="text-[20px] font-semibold text-gray-900 mt-5">Multimedia</h6>
              <ul className="space-y-2 text-gray-600">
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
            <div className="bg-gray-50 p-8 border-t border-b border-gray-300">
              <h4 className="text-[30px] font-semibold text-gray-900 mb-4">Development</h4>
              <h6 className="text-[20px] font-semibold text-gray-900">Front-end</h6>
              <ul className="space-y-2 text-gray-600">
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
              <h6 className="text-[20px] font-semibold text-gray-900 mt-5">Back-end</h6>
              <ul className="space-y-2 text-gray-600">
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
              <h6 className="text-[20px] font-semibold text-gray-900 mt-5">DevOps</h6>
              <ul className="space-y-2 text-gray-600">
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
        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-10 mb-20">

{/* Left side - headings */}
<div className="flex items-start w-full">

  {/* Left side */}
  <div className="md:w-1/3">
    <h3 className="text-[45px] font-bold text-[#23A654] text-start">
      Deliverables.
    </h3>
    <h3 className="text-[45px] font-bold text-gray-900 text-start mt-2">
      Including but not <br /> limited to.
    </h3>
  </div>

  <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">

    {[
      { icon: MultimediaIcon1, title: "Multimedia" },
      { icon: MultimediaIcon2, title: "Multimedia" },
      { icon: MultimediaIcon3, title: "Multimedia" },
      { icon: MultimediaIcon4, title: "Multimedia" },
      { icon: MultimediaIcon5, title: "Multimedia" },
      { icon: MultimediaIcon6, title: "Multimedia" },
    ].map((item, index) => (
      <div
        key={index}
        className="text-center p-4"
      >
        <div className="text-start mb-2">
          <Image
            src={item.icon}
            alt={item.title}
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        <h4 className="text-[22px] font-bold text-gray-900 mt-3 text-start">
          {item.title}
        </h4>

        <p className="text-md text-gray-600 text-start mt-2">
          The online shop where you can sell your products.
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

