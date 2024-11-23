/* eslint-disable no-unused-vars */
import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/nav_logo.png"
            alt="Hidroakuaponik"
            className="h-12"
          />
          <a href="#">
            <span className="font-bold text-2xl">HidroAkuaponik</span>
          </a>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-9">
          <a href="#" className="font-medium hover:text-red-600 py-1">
            Home
          </a>
          <a href="#" className="font-medium hover:text-red-600 py-1">
            Service
          </a>
          <a href="#" className="font-medium hover:text-red-600 py-1">
            Article
          </a>
          <a href="#" className="font-medium hover:text-red-600 py-1">
            About Me
          </a>
          <a href="#">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
