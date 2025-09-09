import React from "react";
import { assets } from "../assets/assets";

const News = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          News and Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: assets.news,
              title: "Top 10 Hidden Gems to Visit This Summer",
              author: "Jane Doe",
            },
            {
              img: assets.news,
              title: "The Ultimate Guide to Packing for a Weekend Getaway",
              author: "John Smith",
            },
            {
              img: assets.news,
              title: "Exploring Local Cuisine on Your Next Trip",
              author: "Emily White",
            },
          ].map((article) => (
            <div
              key={article.title}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3 h-14">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm">By {article.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
