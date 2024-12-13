import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Email Input */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="text-white text-2xl font-montserrat font-semibold mb-4">
              HidroAkuaponik
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-white text-gray-400 px-4 py-2 rounded focus:outline-none w-full md:w-auto"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 10.882l7.997-4.998a1 1 0 00-.495-1.847H2.499a1 1 0 00-.495 1.847z" />
                  <path d="M18 8.118v6.764a1 1 0 01-1.447.894L10 11.618l-6.553 4.158A1 1 0 012 15.882V9.118a1 1 0 011.447-.894L10 11.618l6.553-4.158A1 1 0 0118 8.118z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="w-full md:w-3/4 flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-4">
              <h4 className="text-white mb-4">Home</h4>
              <ul>
                <li>
                  <Link to="/" className="hover:text-yellow-500">
                    Hero Section
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4">
              <h4 className="text-white mb-4">About Us</h4>
              <ul>
                <li>
                  <Link to="/about" className="hover:text-yellow-500">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    Our Works
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    Our Clients
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4">
              <h4 className="text-white mb-4">Services</h4>
              <ul>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    Valuation Mastery
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    Strategic Marketing
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    Negotiation Wizardry
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    Closing Success
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    Property Management
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <ul>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    Contact Form
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-500">
                    Our Offices
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="flex justify-between items-center border-t border-white pt-4 mt-8">
          <p className="text-white">
            ©2024 HidroAkuaponik. All Rights Reserved.{" "}
            <Link to="#" className="hover:text-white">
              Terms & Conditions
            </Link>
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
