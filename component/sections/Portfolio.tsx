import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solutions we've designed and built to solve real business challenges.
          </h2>
        </div>

        {/* Main Image */}
        <div className="mb-16">
          <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <p className="text-xl">Premium Solution Showcase</p>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "CEO", name: "John Smith", company: "Tech Corp", description: "Leading digital transformation" },
            { title: "CEO", name: "Sarah Johnson", company: "Innovate Inc", description: "Driving innovation forward" },
            { title: "PACE", name: "Michael Brown", company: "Growth Labs", description: "Accelerating business growth" },
            { title: "CEO", name: "Emily Davis", company: "Future Systems", description: "Building tomorrow's solutions" },
            { title: "CEO", name: "David Wilson", company: "Digital First", description: "Transforming industries" },
            { title: "PACE", name: "Lisa Anderson", company: "Next Gen", description: "Pioneering new technologies" },
          ].map((person, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-green-50 transition-colors">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{person.name.charAt(0)}</span>
              </div>
              <div className="text-sm font-semibold text-green-600 mb-1">{person.title}</div>
              <div className="font-semibold text-gray-900 mb-1">{person.name}</div>
              <div className="text-sm text-gray-600 mb-2">{person.company}</div>
              <div className="text-xs text-gray-500">{person.description}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-700 transition-colors"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

