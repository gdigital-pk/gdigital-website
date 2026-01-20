import React from "react";

export default function Hosting() {
  return (
    <section id="hosting" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything your website needs.
          </h2>
        </div>

        {/* Built for the Digital Future */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-lg mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Built for the Digital Future</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern hosting solutions designed to keep your website fast, secure, and always online.
          </p>
        </div>

        {/* Make your website in minutes */}
        <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Make your website in minutes</h3>
            <p className="text-lg text-gray-600 mb-6">
              Get your website up and running quickly with our intuitive tools and pre-built templates.
              No technical expertise required.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Drag-and-drop website builder</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Pre-designed templates</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">One-click deployment</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">🚀</span>
              </div>
              <p className="text-gray-700 font-medium">Quick Setup</p>
            </div>
          </div>
        </div>

        {/* WordPress without the complexity */}
        <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📦</div>
              <p className="text-gray-700 font-medium">WordPress Simplified</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">WordPress without the complexity</h3>
            <p className="text-lg text-gray-600 mb-6">
              Managed WordPress hosting that takes care of updates, security, and performance so you can focus on your content.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Automatic updates and backups</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Enhanced security features</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Optimized performance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hosting Packages */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Hosting Packages Made for You
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Spark",
                price: "$200",
                features: [
                  "10 GB Storage",
                  "100 GB Bandwidth",
                  "Free SSL Certificate",
                  "24/7 Support",
                  "Email Accounts",
                  "Domain Included",
                ],
              },
              {
                name: "More",
                price: "$200",
                features: [
                  "50 GB Storage",
                  "500 GB Bandwidth",
                  "Free SSL Certificate",
                  "24/7 Priority Support",
                  "Unlimited Email",
                  "Domain Included",
                  "Daily Backups",
                ],
                popular: true,
              },
              {
                name: "Inferno",
                price: "$200",
                features: [
                  "Unlimited Storage",
                  "Unlimited Bandwidth",
                  "Free SSL Certificate",
                  "24/7 Premium Support",
                  "Unlimited Email",
                  "Domain Included",
                  "Daily Backups",
                  "CDN Included",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-8 rounded-lg ${
                  plan.popular ? "ring-2 ring-green-600 bg-green-50" : ""
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h4 className="text-2xl font-bold text-gray-900 mb-2 text-center">{plan.name}</h4>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-medium transition-colors ${
                    plan.popular
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-white text-green-600 border-2 border-green-600 hover:bg-green-50"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

