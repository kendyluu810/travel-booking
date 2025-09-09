import React, { useMemo, useState } from "react";
import PropertyCard from "./PropertyCard";
import { allProperties } from "../assets/assets";

const StaysPage = () => {
  const [filters, setFilters] = useState({
    type: "all",
    price: 1000,
    amenities: [],
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        amenities: checked
          ? [...prev.amenities, value]
          : prev.amenities.filter((amenity) => amenity !== value),
      }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      // Property Type Filter
      if (
        filters.type !== "all" &&
        property.type.toLowerCase() !== filters.type
      ) {
        return false;
      }
      // Price Filter
      if (property.price > filters.price) {
        return false;
      }
      // Amenities Filter
      if (
        filters.amenities.length > 0 &&
        !filters.amenities.every((amenity) =>
          property.amenities.includes(amenity)
        )
      ) {
        return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-12 pt-28">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Find Your Perfect Stay
          </h1>
          <p className="text-gray-600 mt-2">
            Browse our curated selection of exclusive properties.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-1/4 lg:w-1/5">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h3 className="font-bold text-xl mb-4">Filter By</h3>

              {/* Property Type */}
              <div className="mb-6">
                <label
                  htmlFor="type"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Property Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20823A]"
                >
                  <option value="all">All Types</option>
                  <option value="villa">Villa</option>
                  <option value="cottage">Cottage</option>
                  <option value="chalet">Chalet</option>
                  <option value="apartment">Apartment</option>
                  <option value="barn">Barn</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label
                  htmlFor="price"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Max Price:{" "}
                  <span className="text-[#092410] font-bold">
                    ${filters.price}
                  </span>
                </label>
                <input
                  id="price"
                  type="range"
                  name="price"
                  min="50"
                  max="1000"
                  step="10"
                  value={filters.price}
                  onChange={handleFilterChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#092410]"
                />
              </div>

              {/* Amenities */}
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Amenities</h4>
                <div className="space-y-2">
                  {["wifi", "pool", "kitchen", "ac", "parking"].map(
                    (amenity) => (
                      <div key={amenity} className="flex items-center">
                        <input
                          id={amenity}
                          type="checkbox"
                          name="amenities"
                          value={amenity}
                          checked={filters.amenities.includes(amenity)}
                          onChange={handleFilterChange}
                          className="h-4 w-4 rounded border-gray-300 text-[#092410] focus:ring-[#20823A]"
                        />
                        <label
                          htmlFor={amenity}
                          className="ml-2 text-gray-600 capitalize"
                        >
                          {amenity}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Property Listings */}
          <main className="w-full md:w-3/4 lg:w-4/5">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-semibold text-gray-700">
                  No Properties Found
                </h3>
                <p className="text-gray-500 mt-2">
                  Try adjusting your filters to find your perfect stay.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default StaysPage;
