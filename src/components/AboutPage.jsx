import { CheckCircleIcon, HeartIcon, ShieldIcon } from "lucide-react";
import React from "react";
import { assets } from "../assets/assets";

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-sm text-center">
    <div className="flex justify-center text-[#092410] mb-4">{icon}</div>
    <h3 className="font-bold text-gray-800 text-xl mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TeamMemberCard = ({ image, name, role }) => (
  <div className="text-center">
    <img
      src={image}
      alt={`Photo of ${name}`}
      className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
    />
    <h4 className="text-xl font-bold text-gray-800">{name}</h4>
    <p className="text-gray-500">{role}</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.mission1})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            About Living Harmony
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mt-4">
            Connecting you with serene and exclusive properties for an
            unforgettable escape.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Living Harmony, our mission is to make finding and booking your
                perfect getaway simple, seamless, and secure. We believe that
                everyone deserves a break from the ordinary, a chance to find
                peace and create lasting memories.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We meticulously curate our listings to ensure that every
                property meets our high standards of quality, comfort, and
                uniqueness. Your peace of mind is our top priority.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={assets.mission1}
                alt="Our Mission"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<CheckCircleIcon className="h-12 w-12" />}
              title="Unmatched Quality"
              description="Every property is hand-picked and verified to ensure it meets our exacting standards for an exceptional stay."
            />
            <ValueCard
              icon={<ShieldIcon className="h-12 w-12" />}
              title="Trust & Safety"
              description="Your security is paramount. We offer a secure booking platform and 24/7 support for a worry-free experience."
            />
            <ValueCard
              icon={<HeartIcon className="h-12 w-12" />}
              title="Passionate Service"
              description="Our team is passionate about travel and dedicated to helping you find the perfect escape with personalized support."
            />
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="py-20 bg-[#F0FDF4]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <TeamMemberCard
              name="Alex Johnson"
              role="Founder & CEO"
              image="https://placehold.co/400x400/ddd/333?text=Alex"
            />
            <TeamMemberCard
              name="Maria Garcia"
              role="Head of Properties"
              image="https://placehold.co/400x400/ddd/333?text=Maria"
            />
            <TeamMemberCard
              name="James Smith"
              role="Lead Developer"
              image="https://placehold.co/400x400/ddd/333?text=James"
            />
            <TeamMemberCard
              name="Emily White"
              role="Customer Support"
              image="https://placehold.co/400x400/ddd/333?text=Emily"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
