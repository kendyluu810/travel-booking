import React from "react";
import { assets, blogPosts } from "../assets/assets";
import BlogCard from "./BlogCard";

const BlogsPage = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.Oceanfront_Oasis})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Travel Stories & Insights
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mt-4">
            Your source for travel tips, destination guides, and inspiration for
            your next getaway.
          </p>
        </div>
      </div>

      {/* Blog Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Featured Post */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
            Featured Post
          </h2>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-16 group">
            <div className="md:flex">
              <div className="md:w-1/2 lg:w-3/5 overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 lg:w-2/5 p-8 flex flex-col justify-center">
                <p className="text-[#20823A] font-semibold text-sm mb-2">
                  {featuredPost.category}
                </p>
                <h3 className="font-extrabold text-2xl md:text-3xl text-gray-800 mb-4 hover:text-[#092410] transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center">
                  <img
                    src={featuredPost.authorImage}
                    alt={featuredPost.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-gray-900">
                      {featuredPost.author}
                    </p>
                    <p className="text-gray-500 text-sm">{featuredPost.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Posts */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
            More Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination/Load More */}
          <div className="text-center mt-16">
            <button className="bg-[#20823A] hover:bg-[#092410] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
