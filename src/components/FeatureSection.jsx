import React from "react";
import { FeatureCard } from "./Home";
import { CheckCircleIcon } from "lucide-react";
import { assets } from "../assets/assets";

const FeatureSection = () => {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<CheckCircleIcon className="h-8 w-8" />}
              title="Curated Properties"
              description="Every listing is hand-picked and verified for quality and comfort."
            />
            <FeatureCard
              icon={<CheckCircleIcon className="h-8 w-8" />}
              title="Effortless Booking"
              description="Simple, secure, and fast booking process from start to finish."
            />
            <FeatureCard
              icon={<CheckCircleIcon className="h-8 w-8" />}
              title="24/7 Support"
              description="Our dedicated team is here to help you around the clock."
            />
            <FeatureCard
              icon={<CheckCircleIcon className="h-8 w-8" />}
              title="Best Price Guarantee"
              description="Find the best deals and offers you won't find anywhere else."
            />
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: assets.feature_1,
                name: "Aspen, Colorado",
              },
              {
                img: assets.feature_2,
                name: "Lake Como, Italy",
              },
              {
                img: assets.feature_3,
                name: "Malibu, California",
              },
            ].map((dest) => (
              <div
                key={dest.name}
                className="relative rounded-lg overflow-hidden shadow-lg h-96 group"
              >
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold">{dest.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection
