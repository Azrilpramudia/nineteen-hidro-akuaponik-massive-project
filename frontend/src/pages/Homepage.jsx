import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-left py-36"
        style={{
          backgroundImage: 'url("/cover_bg.jpg")', // Ubah path sesuai dengan image Anda
        }}
      >
        <div className="container mx-auto px-8">
          <h1 className="text-4xl font-extrabold font-montserrat text-green-600">
            Welcome to HidroAkuaponik
          </h1>
          <p className="mt-4 text-lg text-white font-montserrat font-medium">
            HidroAkuaponik adalah platform edukasi dan informasi yang berfokus{" "}
            <br />
            pada teknologi budidaya pertanian berkelanjutan yang menggabungkan
            <br />
            hidroponik dan akuaponik
          </p>
          <button className="mt-6 px-8 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 font-montserrat">
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Bagian Teks */}
          <div className="md:w-1/2 text-left md:pr-8">
            <h2 className="text-3xl font-montserrat font-bold text-green-600 mb-4">
              About US
            </h2>
            <p className="text-gray-600 mb-4 font-montserrat font-medium">
              Platform ini menyediakan berbagai sumber informasi yang dapat
              diakses oleh petani, pelajar, atau siapa saja yang tertarik untuk
              mempelajari metode pertanian modern yang ramah lingkungan. Konten
              edukasi mencakup panduan dasar, tutorial langkah demi langkah,
              serta artikel ilmiah tentang teknik optimal dalam sistem
              hidroponik dan akuaponik.
            </p>
          </div>

          {/* Gambar */}
          <div className="md:w-1/2 mt-8 md:mt-10">
            <img
              src="/src/assets/farming_bg.jpg"
              alt="About Us"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-montserrat font-bold text-center text-green-600 mb-4">
            Article
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="max-w-sm bg-green-600 text-white rounded-lg overflow-hidden shadow-md">
              <img
                className="w-full h-48 object-cover"
                src="/src/assets/card_img.jpg"
                alt="Card image"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold font-roboto">
                  Belajar Menanam di Kawasan Kota
                </h2>
                <p className="mt-2 text-sm text-gray-800 font-medium">
                  Belajar Menanam di kota sangat cocok untuk mengurangi polusi
                  kota
                </p>
                <Link to="learnplant">
                  <button className="mt-4 px-4 py-2 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600">
                    Read more →
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-sm bg-green-600 text-white rounded-lg overflow-hidden shadow-md">
              <img
                className="w-full h-48 object-cover"
                src="/src/assets/card_img2.jpg"
                alt="Card image"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold font-roboto">
                  Tips Berkebun untuk Pemula
                </h2>
                <p className="mt-2 text-sm text-gray-800 font-medium">
                  Tips Berkebun untuk pemula dengan perawatan tanaman dengan
                  baik
                </p>
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600">
                  Read more →
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="max-w-sm bg-green-600 text-white rounded-lg overflow-hidden shadow-md">
              <img
                className="w-full h-48 object-cover"
                src="/src/assets/card_img3.jpg"
                alt="Card image"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold font-roboto">
                  Mengelola Tanaman di Rumah
                </h2>
                <p className="mt-2 text-sm text-gray-800 font-medium">
                  belajar cara mengelola tanaman di halaman rumah dengan baik
                  dan benar
                </p>
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600">
                  Read more →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
    </div>
  );
};

export default Homepage;
