import React from "react";

const Login = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
          <p className="text-gray-500 mb-6">Please enter your details.</p>
          <form>
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
              <div className="flex justify-between items-center mt-2">
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">
                      Remember me for 30 days
                    </span>
                  </label>
                </div>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
            >
              Log In
            </button>
            <div className="flex justify-center mt-4">
              <span className="text-gray-500 mr-2">
                Don&apos;t have an account?
              </span>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Sign up for free
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

export default Login;
