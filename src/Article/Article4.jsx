import React from "react";

const Article3 = () => {
  return (
    <section
      className="bg-cover bg-center text-left py-36"
      style={{
        backgroundImage: 'url("cover_bg.jpg")', // Ganti dengan path gambar yang sesuai
      }}
    >
      <div className="container mx-auto max-w-4xl bg-green-50 p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold font-montserrat text-gray-900 mb-6">
          Cara Memetik Sayuran dengan Benar
        </h1>

        {/* Image Section */}
        <img
          src="card_img4.jpg" // Ganti dengan path gambar yang sesuai
          alt="Cara Memetik Sayuran"
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />

        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Memetik sayuran yang tepat tidak hanya memastikan hasil panen yang optimal tetapi juga menjaga kesehatan tanaman untuk pertumbuhan berikutnya. Berikut adalah panduan lengkap untuk memetik sayuran dengan benar di kebun Anda.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Mengapa Penting Memetik Sayuran dengan Benar?
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Memetik sayuran dengan cara yang tepat dapat meningkatkan kualitas hasil panen, mencegah kerusakan tanaman, dan memperpanjang masa produktif kebun Anda. Selain itu, cara memetik yang benar juga memastikan rasa dan tekstur sayuran tetap terjaga.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Tips Umum Memetik Sayuran
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-4">
          Berikut adalah beberapa tips penting yang dapat Anda ikuti saat memetik sayuran:
        </p>

        <ol className="list-decimal list-inside text-gray-600 font-montserrat font-medium mb-6 space-y-4">
          <li>
            <strong>Pilih Waktu yang Tepat:</strong> Memetik sayuran di pagi hari, sebelum matahari terlalu terik, dapat menjaga kesegaran dan kandungan air dalam sayuran.
          </li>
          <li>
            <strong>Gunakan Alat yang Tepat:</strong> Gunakan gunting kebun atau pisau tajam untuk memetik sayuran. Hindari menarik atau memutar batang, karena dapat merusak tanaman.
          </li>
          <li>
            <strong>Kenali Tingkat Kematangan:</strong> Pastikan sayuran yang Anda petik sudah matang sempurna. Contohnya, tomat sebaiknya dipetik saat warnanya merah cerah, dan selada saat daunnya segar serta berukuran cukup besar.
          </li>
          <li>
            <strong>Hindari Memetik Berlebihan:</strong> Ambil sayuran secukupnya sesuai kebutuhan. Tanaman akan terus menghasilkan jika panen dilakukan secara berkala.
          </li>
          <li>
            <strong>Jaga Kebersihan:</strong> Cuci alat panen sebelum dan sesudah digunakan untuk mencegah penyebaran penyakit tanaman.
          </li>
        </ol>

        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/xMNJgAiiJ5o?si=WIurnjr_mcIbFkHe" // Ganti dengan URL video yang sesuai
            title="Cara Memetik Sayuran yang Benar"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Panduan Memetik Sayuran Berdasarkan Jenisnya
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Setiap jenis sayuran memiliki cara panen yang berbeda. Berikut adalah panduan memetik beberapa jenis sayuran:
        </p>

        <ul className="list-disc list-inside text-gray-600 font-medium font-montserrat mb-6 space-y-4">
          <li>
            <strong>Selada:</strong> Petik daun dari luar terlebih dahulu untuk mendorong pertumbuhan daun baru di tengah.
          </li>
          <li>
            <strong>Tomat:</strong> Gunakan gunting untuk memotong tangkai buah dengan lembut. Jangan menarik langsung buah dari tanaman.
          </li>
          <li>
            <strong>Cabai:</strong> Gunakan tangan untuk memetik dengan lembut atau gunting untuk memotong tangkai cabai.
          </li>
          <li>
            <strong>Bayam:</strong> Cabut daun-daun besar di bagian luar, tetapi biarkan batang utama tetap utuh untuk pertumbuhan berikutnya.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Kesimpulan
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Memetik sayuran dengan cara yang tepat tidak hanya memastikan hasil panen yang maksimal, tetapi juga menjaga kesehatan tanaman Anda. Dengan mengikuti panduan ini, Anda dapat menikmati kebun yang subur dan hasil panen yang melimpah.
        </p>

        <p className="text-gray-600 font-medium font-montserrat">
          Selamat memetik sayuran dan menikmati hasilnya!
        </p>
      </div>
    </section>
  );
};

export default Article3;
