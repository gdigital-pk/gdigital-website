import React from "react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Building Digital Solutions
            <br />
            <span className="text-green-600">That Drive Growth</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We create innovative software solutions that help businesses scale, innovate, and succeed in the digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-green-50 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

