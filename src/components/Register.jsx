import React from "react";

const Register = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
          <p className="text-gray-500 mb-6">Fill in the form to get started.</p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
            >
              Sign Up
            </button>
            <div className="flex justify-center mt-4">
              <span className="text-gray-500 mr-2">
                Already have an account?
              </span>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Log in instead
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-white hover:bg-gray-100 text-gray-500 font-bold py-2 px-4 rounded-lg border border-gray-300">
                Sign In With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
