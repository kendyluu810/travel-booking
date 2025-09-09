import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import News from "./News";
import { assets } from "../assets/assets";

export const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm text-center md:text-left">
    <div className="flex justify-center md:justify-start text-[#20823A] mb-3">
      {icon}
    </div>
    <h3 className="font-bold text-gray-800 text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* Features Section */}
      <FeatureSection />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#72D48C]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-4">
              <h3 className="text-lg font-semibold">Add our great filter</h3>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Easy to find</h3>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Get best payment</h3>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Simple & friendly</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Property Listings */}
      <section className="py-16 bg-[#092410]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            Explore Our Exclusive
          </h2>
          <p className="text-gray-300 mb-12">Property Listings</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: assets.Property_1,
                title: "The Glass House",
                price: "$450/night",
              },
              {
                img: assets.Property_2,
                title: "Riverbend Retreat",
                price: "$250/night",
              },
              {
                img: assets.Property_3,
                title: "Alpine Chalet",
                price: "$350/night",
              },
              {
                img: assets.Property_4,
                title: "The Old Barn",
                price: "$200/night",
              },
            ].map((prop) => (
              <div
                key={prop.title}
                className="bg-white rounded-lg shadow-md overflow-hidden text-left"
              >
                <img
                  src={prop.img}
                  alt={prop.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-[#092410] font-semibold">{prop.price}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-12 bg-[#092410] hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Explore More
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="absolute top-1/2 left-10 -translate-y-1/2 transform -rotate-12 opacity-50 hidden lg:block">
            <img
              src={assets.Property_1}
              className="rounded-lg shadow-lg w-48 h-48"
              alt="gem 1"
            />
          </div>
          <div className="absolute top-1/2 right-10 -translate-y-1/2 transform rotate-12 opacity-50 hidden lg:block">
            <img
              src={assets.Property_2}
              className="rounded-lg shadow-lg w-48 h-48"
              alt="gem 2"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 max-w-2xl mx-auto">
            Leave The Traffic Behind And Find Hidden Gems By The Highway.
          </h2>
          <button className="bg-[#092410] hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg">
            Book Now
          </button>
        </div>
      </section>

      {/* News & Articles */}
      <News />
    </>
  );
};

export default Home;
