import React from "react";
import { assets } from "../assets/assets";
import { CalendarIcon, MapPinIcon, SearchIcon, UsersIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={assets.hero_img}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 pb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-center leading-tight [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)] mb-8">
          Escape the City,
          <br /> Find Your Peace
        </h1>

        {/* Search Bar */}
        <div className="w-full max-w-4xl bg-white bg-opacity-90 backdrop-blur-sm p-4 rounded-lg shadow-2xl mt-4">
          <form className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center">
            <div className="flex items-center bg-gray-100 p-3 rounded-md">
              <MapPinIcon className="h-5 w-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Destination"
                className="w-full bg-transparent text-gray-800 focus:outline-none"
              />
            </div>
            <div className="flex items-center bg-gray-100 p-3 rounded-md">
              <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Check In"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="w-full bg-transparent text-gray-800 focus:outline-none"
              />
            </div>
            <div className="flex items-center bg-gray-100 p-3 rounded-md">
              <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Check Out"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="w-full bg-transparent text-gray-800 focus:outline-none"
              />
            </div>
            <div className="flex items-center bg-gray-100 p-3 rounded-md">
              <UsersIcon className="h-5 w-5 text-gray-500 mr-2" />
              <input
                type="number"
                placeholder="Guests"
                className="w-full bg-transparent text-gray-800 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full lg:col-span-1 bg-[#20823A] hover:bg-[#72d48c] text-white font-bold p-3 rounded-md flex items-center justify-center transition-colors duration-300"
            >
              <SearchIcon className="h-5 w-5 mr-2" /> Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
