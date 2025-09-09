import { MapPinIcon, StarIcon } from "lucide-react";
import React from "react";

const PropertyCard = ({ property }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden group">
    <div className="relative">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-800 flex items-center">
        <StarIcon className="w-4 h-4 text-yellow-500 mr-1" /> {property.rating}
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg text-gray-800 mb-1">{property.title}</h3>
      <div className="flex items-center text-gray-600 text-sm mb-2">
        <MapPinIcon className="w-4 h-4 mr-1" />
        <span>{property.location}</span>
      </div>
      <p className="text-[#092410] font-bold text-xl">
        ${property.price}
        <span className="font-normal text-gray-500 text-sm">/night</span>
      </p>
    </div>
  </div>
);
export default PropertyCard;
