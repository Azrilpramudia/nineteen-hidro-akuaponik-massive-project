import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* Add your logo image here */}
              <img
                src="/src/assets/nav_logo.png"
                alt="Brand Logo"
                className="h-10 w-10 object-cover"
              />
              <span className="ml-2 text-xl font-montserrat font-bold text-gray-800">
                HidroAkuaponik
              </span>
            </Link>
          </div>

          {/* Navbar Links for larger screens */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                Services
              </Link>
              <Link
                to="/article"
                className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                Article
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Login/Sign Up Buttons for larger screens */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-800 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-bold">
              Login
            </button>
            <button className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md text-sm font-bold">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/article"
              className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Article
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <div className="mt-3 space-y-2">
              <button className="text-gray-800 bg-gray-100 hover:bg-gray-200 block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                Login
              </button>
              <button className="bg-green-600 text-white hover:bg-green-700 block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
