import React from "react";

const Article6 = () => {
  return (
    <section
      className="bg-cover bg-center text-left py-36"
      style={{
        backgroundImage: 'url("cover_bg.jpg")', // Ubah path sesuai dengan image Anda
      }}
    >
      <div className="container mx-auto max-w-4xl bg-green-50 p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold font-montserrat text-gray-900 mb-6">
          Cara Panen Sayuran
        </h1>

        {/* Image Section */}
        <img
          src="card_img6.jpg" // Replace this with the actual path to your image
          alt="Cara Panen Sayuran"
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />

        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Memanen sayuran pada waktu yang tepat dan dengan metode yang benar
          merupakan langkah penting untuk memastikan hasil panen berkualitas.
          Artikel ini akan memberikan panduan tentang cara memanen berbagai
          jenis sayuran agar tetap segar dan bernutrisi.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Waktu yang Tepat untuk Memanen
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Memanen sayuran pada waktu yang tepat sangat penting. Berikut adalah
          beberapa panduan umum:
        </p>

        <ul className="list-disc list-inside text-gray-600 font-medium font-montserrat mb-6 space-y-2">
          <li>
            <strong>Sayuran berdaun hijau:</strong> Panen ketika daun sudah
            cukup besar tetapi masih muda dan lembut.
          </li>
          <li>
            <strong>Tomat:</strong> Panen ketika sudah matang sempurna dengan
            warna merah cerah.
          </li>
          <li>
            <strong>Wortel:</strong> Tarik dari tanah saat ukurannya sudah
            sesuai dengan jenis varietasnya.
          </li>
          <li>
            <strong>Kacang:</strong> Petik saat masih muda dan renyah untuk
            hasil terbaik.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Alat yang Dibutuhkan
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Memanen sayuran dengan alat yang tepat dapat mempermudah pekerjaan
          Anda dan menjaga tanaman tetap sehat:
        </p>

        <ul className="list-disc list-inside text-gray-600 font-medium font-montserrat mb-6 space-y-2">
          <li>
            <strong>Gunting atau pisau tajam:</strong> Untuk memotong batang
            atau daun tanpa merusak tanaman.
          </li>
          <li>
            <strong>Sekop kecil:</strong> Berguna untuk menggali sayuran akar
            seperti wortel atau kentang.
          </li>
          <li>
            <strong>Keranjang atau wadah:</strong> Untuk menampung hasil panen
            tanpa merusaknya.
          </li>
          <li>
            <strong>Sarung tangan:</strong> Melindungi tangan Anda dari duri
            atau kotoran.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Teknik Memanen Sayuran
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Teknik memanen yang benar akan memastikan tanaman Anda tetap produktif
          untuk panen berikutnya:
        </p>

        <ol className="list-decimal list-inside text-gray-600 font-montserrat font-medium mb-6 space-y-4">
          <li>
            <strong>Potong dengan hati-hati:</strong> Gunakan gunting atau pisau
            tajam untuk memotong daun, batang, atau buah tanpa merusak bagian
            lain dari tanaman.
          </li>
          <li>
            <strong>Hindari menarik:</strong> Jangan menarik sayuran terlalu
            kuat karena dapat merusak akar atau batang utama.
          </li>
          <li>
            <strong>Panen di pagi hari:</strong> Waktu terbaik untuk memanen
            adalah pagi hari ketika tanaman masih segar dan belum terkena
            panas.
          </li>
          <li>
            <strong>Periksa kematangan:</strong> Pastikan sayuran sudah matang
            sesuai dengan jenisnya sebelum dipanen.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Penyimpanan Hasil Panen
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Setelah memanen, pastikan hasil panen disimpan dengan benar agar
          tetap segar dan bernutrisi:
        </p>

        <ul className="list-disc list-inside text-gray-600 font-medium font-montserrat mb-6 space-y-2">
          <li>
            Cuci sayuran dengan lembut untuk menghilangkan kotoran atau tanah.
          </li>
          <li>
            Keringkan dengan kain bersih sebelum disimpan.
          </li>
          <li>
            Simpan sayuran berdaun di dalam wadah kedap udara atau bungkus
            dengan kain lembab.
          </li>
          <li>
            Sayuran akar dapat disimpan di tempat yang sejuk dan gelap.
          </li>
        </ul>


        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/vwQUUYGQL4c?si=T9qOFnhD-PbJ2fXe"
            title="Cara Panen Sayuran dengan Alat"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Kesimpulan
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Dengan teknik dan alat yang tepat, memanen sayuran dapat menjadi
          aktivitas yang menyenangkan dan memuaskan. Pastikan untuk memperhatikan
          waktu, alat, dan cara memanen agar hasil panen tetap segar dan tanaman
          tetap produktif.
        </p>

        <p className="text-gray-600 font-medium font-montserrat">
          Selamat memanen!
        </p>
      </div>
    </section>
  );
};

export default Article6;
