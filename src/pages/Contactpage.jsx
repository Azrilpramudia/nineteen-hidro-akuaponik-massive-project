import React, { useState } from "react";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to a backend server
    alert("Message sent!");
  };

  return (
    <section className="bg-green-50 text-gray-700 py-16">
      <div className="container mx-auto text-center max-w-xl">
        <p className="text-gray-700 mb-12">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 px-4 py-2 block w-full rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:border-gray-500 focus:ring-gray-500"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
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
              className="mt-1 px-4 py-2 block w-full rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:border-gray-500 focus:ring-gray-500"
              placeholder="Let us know how we can help you"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="mt-1 px-4 py-2 block w-full rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:border-gray-500 focus:ring-gray-500"
              placeholder="Leave a comment..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contactpage;
