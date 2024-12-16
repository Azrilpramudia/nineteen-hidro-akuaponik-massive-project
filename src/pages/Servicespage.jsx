import React from "react";

const Servicespage = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-montserrat font-bold text-center text-green-600">
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
  );
};

export default Servicespage;
