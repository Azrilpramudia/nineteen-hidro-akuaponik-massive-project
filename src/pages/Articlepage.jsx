import React from "react";
import { Link } from "react-router-dom";

const Articlepage = () => {
  return (
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
              src="/card_img.jpg"
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
              <Link to="/learnplant">
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
              src="/card_img2.jpg"
              alt="Card image"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold font-roboto">
                Tips Berkebun untuk Pemula
              </h2>
              <p className="mt-2 text-sm text-gray-800 font-medium">
                Tips Berkebun untuk pemula dengan perawatan tanaman dengan baik
              </p>
              <Link to="/article2">
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600">
                  Read more →
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-sm bg-green-600 text-white rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-48 object-cover"
              src="/card_img3.jpg"
              alt="Card image"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold font-roboto">
                Mengelola Tanaman di Rumah
              </h2>
              <p className="mt-2 text-sm text-gray-800 font-medium">
                belajar cara mengelola tanaman di halaman rumah dengan baik dan
                benar
              </p>
              <Link to="/article3">
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600">
                  Read more →
                </button>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-sm bg-green-600 text-white rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-48 object-cover"
              src="/card_img4.jpg"
              alt="Card image"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold font-roboto">
                Cara Memetik Sayuran
              </h2>
              <p className="mt-2 text-sm text-gray-800 font-medium">
                cara memetik sayuran dengan baik dan benar
              </p>
              <button className="mt-4 px-4 py-2 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600">
                Read more →
              </button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="max-w-sm bg-green-600 text-white rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-48 object-cover"
              src="/card_img5.jpg"
              alt="Card image"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold font-roboto">
                Mengelola Tanaman dengan Teknologi
              </h2>
              <p className="mt-2 text-sm text-gray-800 font-medium">
                Ini dia cara mengelola tanaman dengan bantuan alat teknologi
              </p>
              <button className="mt-4 px-4 py-2 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600">
                Read more →
              </button>
            </div>
          </div>

          {/* Card 6 */}
          <div className="max-w-sm bg-green-600 text-white rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-48 object-cover"
              src="/card_img6.jpg"
              alt="Card image"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold font-roboto">
                Cara Panen Sayuran
              </h2>
              <p className="mt-2 text-sm text-gray-800 font-medium">
                cara memanen sayuran dengan baik dan benar
              </p>
              <button className="mt-4 px-4 py-2 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600">
                Read more →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articlepage;
