import React from "react";

const Article5 = () => {
  return (
    <section
      className="bg-cover bg-center text-left py-36"
      style={{
        backgroundImage: 'url("cover_bg.jpg")', // Ubah path sesuai dengan image Anda
      }}
    >
      <div className="container mx-auto max-w-4xl bg-green-50 p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold font-montserrat text-gray-900 mb-6">
          Cara Panen Sayuran dengan Bantuan Alat
        </h1>

        {/* Image Section */}
        <img
          src="card_img5.jpg" // Replace this with the actual path to your image
          alt="Panen Sayuran"
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />

        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Panen sayuran merupakan salah satu langkah penting dalam proses bercocok tanam. Dengan menggunakan alat yang tepat, panen dapat dilakukan dengan lebih cepat, efisien, dan menjaga kualitas hasil panen. Artikel ini akan membahas cara-cara memanen sayuran menggunakan berbagai alat yang tersedia.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Mengapa Menggunakan Alat untuk Panen?
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Menggunakan alat panen membantu mengurangi kerusakan tanaman, mempercepat proses panen, dan meningkatkan hasil panen yang berkualitas. Alat yang tepat juga dapat membantu menjaga kondisi fisik petani dengan mengurangi beban kerja yang berlebihan.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Alat yang Digunakan untuk Memanen Sayuran
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-4">
          Berikut adalah beberapa alat yang umum digunakan untuk memanen sayuran:
        </p>

        <ul className="list-disc list-inside text-gray-600 font-montserrat font-medium mb-6 space-y-4">
          <li>
            <strong>Gunting atau Pisau Panen:</strong> Alat ini digunakan untuk memotong batang atau daun dengan presisi, cocok untuk sayuran seperti selada, bayam, atau kangkung.
          </li>
          <li>
            <strong>Sabit Kecil:</strong> Ideal untuk memanen sayuran berdaun lebar atau tanaman dengan batang yang lebih besar seperti sawi atau brokoli.
          </li>
          <li>
            <strong>Keranjang Panen:</strong> Digunakan untuk mengumpulkan hasil panen dengan hati-hati agar tidak mudah rusak.
          </li>
          <li>
            <strong>Alat Pemotong Elektrik:</strong> Cocok untuk panen dalam skala besar, terutama pada sayuran seperti kale atau kubis.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Tips Memanen dengan Bantuan Alat
        </h2>
        <ol className="list-decimal list-inside text-gray-600 font-montserrat font-medium mb-6 space-y-4">
          <li>
            <strong>Pilih Waktu yang Tepat:</strong> Panen dilakukan pada pagi hari saat suhu masih sejuk untuk menjaga kesegaran sayuran.
          </li>
          <li>
            <strong>Gunakan Alat yang Bersih:</strong> Pastikan alat panen telah dibersihkan untuk menghindari kontaminasi pada sayuran.
          </li>
          <li>
            <strong>Potong dengan Hati-hati:</strong> Hindari menarik atau merobek tanaman karena dapat merusak bagian yang tidak dipanen.
          </li>
          <li>
            <strong>Pisahkan Hasil Panen:</strong> Gunakan keranjang terpisah untuk sayuran yang mudah rusak dan yang lebih tahan banting.
          </li>
        </ol>

        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/oHS_QJGvBsY?si=lQra0uv6lYlA7w1P"
            title="Cara Panen Sayuran dengan Alat"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Manfaat Panen dengan Alat Modern
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Dengan bantuan alat modern, panen dapat dilakukan dengan lebih efisien dan menghasilkan sayuran berkualitas tinggi. Alat modern juga meminimalkan tenaga kerja manual yang berat, memungkinkan petani untuk memanen dalam jumlah besar tanpa mengorbankan kualitas.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Kesimpulan
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Menggunakan alat untuk memanen sayuran adalah langkah yang cerdas untuk meningkatkan efisiensi dan kualitas hasil panen. Dengan alat yang tepat, Anda dapat memastikan bahwa proses panen berjalan lancar dan hasil panen tetap segar. Selamat memanen dengan alat modern Anda!
        </p>

        <p className="text-gray-600 font-medium font-montserrat">
          Selamat mencoba!
        </p>
      </div>
    </section>
  );
};

export default Article5;
