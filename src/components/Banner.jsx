import React from "react";

export default function Banner() {
  return (
    <div className="bg-gray-50 min-h-screen pb-14">
      {/* Hero Section */}
      <section className="bg-indigo-400 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to My Responsive Page
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Build stunning layouts with Next.js and Tailwind CSS.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
