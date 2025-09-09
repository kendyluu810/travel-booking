import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted:", formData);
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mt-4">
            We're here to help. Send us a message or give us a call.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Contact Info */}
            <div className="lg:w-1/3 bg-[#042f22] text-white p-8">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="mb-8 text-gray-300">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <PhoneIcon className="w-6 h-6 mr-4 mt-1 text-[#20823A]" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-300">+1 (123) 456-7890</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MailIcon className="w-6 h-6 mr-4 mt-1 text-[#20823A]" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">contact@livingharmony.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPinIcon className="w-6 h-6 mr-4 mt-1 text-[#20823A]" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-300">
                      123 Serenity Lane, Mountain View, CA
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#72D48C] focus:border-[#72D48C]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#72D48C] focus:border-[#72D48C]"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#72D48C] focus:border-[#72D48C]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#72D48C] focus:border-[#72D48C]"
                  ></textarea>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#20823A] hover:bg-[#092410] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#72D48C]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
