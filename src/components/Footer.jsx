import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#092410] text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <img src={assets.logo} alt="Logo" className="h-28 w-auto" />
            <p className="max-w-xs">
              Your gateway to exclusive properties and unforgettable stays.
              Discover peace and comfort with us.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a
                  href="/stays"
                  className="hover:text-white transition-colors duration-300"
                >
                  Properties
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/blogs"
                  className="hover:text-white transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <p className="mb-2">123 Serenity Lane, Mountain View, CA</p>
            <p className="mb-2">contact@livingharmony.com</p>
            <p>+1 (123) 456-7890</p>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
