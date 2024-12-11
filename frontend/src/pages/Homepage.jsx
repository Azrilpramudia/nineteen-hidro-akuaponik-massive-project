import React from "react";

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-100 text-center py-24">
        <h1 className="text-4xl font-extrabold text-green-600">
          Welcome to Agriculture Hub
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Empowering sustainable agriculture with modern solutions
        </p>
        <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-500">
          Learn More
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-green-600">
            About Agriculture Hub
          </h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
            Agriculture Hub is dedicated to bringing innovative and sustainable
            farming solutions to communities worldwide. Our mission is to
            promote eco-friendly farming practices that ensure food security for
            generations to come.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-green-600">
            Our Services
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-green-600">
                Sustainable Farming Solutions
              </h3>
              <p className="mt-4 text-gray-700">
                We provide innovative solutions to improve crop yields while
                promoting sustainability.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-green-600">
                Consulting & Training
              </h3>
              <p className="mt-4 text-gray-700">
                Our expert consultants offer personalized advice and training to
                farmers.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-green-600">
                Technology Integration
              </h3>
              <p className="mt-4 text-gray-700">
                We help integrate cutting-edge technology to increase efficiency
                and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
