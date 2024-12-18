import React from "react";

const Article2 = () => {
  return (
    <section
      className="bg-cover bg-center text-left py-36"
      style={{
        backgroundImage: 'url("cover_bg.jpg")', // Ganti dengan path gambar yang sesuai
      }}
    >
      <div className="container mx-auto max-w-4xl bg-green-50 p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold font-montserrat text-gray-900 mb-6">
          Tips Berkebun untuk Pemula
        </h1>

        {/* Image Section */}
        <img
          src="card_img2.jpg" // Ganti dengan path gambar yang sesuai
          alt="Berkebun untuk Pemula"
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />

        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Berkebun adalah aktivitas yang bermanfaat dan menyenangkan, terutama
          bagi pemula yang ingin mulai menanam tanaman di rumah. Dengan beberapa
          tips sederhana, Anda bisa mulai berkebun meskipun memiliki ruang yang
          terbatas.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Mengapa Berkebun Itu Menyenangkan?
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Berkebun memberikan banyak manfaat, mulai dari mengurangi stres hingga
          menghasilkan makanan sehat langsung dari kebun Anda. Berkebun juga
          membantu Anda terhubung dengan alam meskipun tinggal di lingkungan
          perkotaan.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Tips Memulai Berkebun untuk Pemula
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-4">
          Berikut adalah beberapa tips untuk memulai berkebun dengan mudah:
        </p>

        <ol className="list-decimal list-inside text-gray-600 font-montserrat font-medium mb-6 space-y-4">
          <li>
            <strong>Pilih Tanaman yang Mudah Dirawat:</strong> Sebagai pemula,
            pilih tanaman yang tidak memerlukan banyak perhatian, seperti
            tanaman hias seperti lidah mertua, tanaman herbal seperti daun mint,
            atau tanaman sayuran seperti selada dan bayam.
          </li>
          <li>
            <strong>Pilih Lokasi yang Tepat:</strong> Pastikan tanaman
            mendapatkan sinar matahari yang cukup. Pilih tempat yang mendapatkan
            cahaya matahari langsung setidaknya 4-6 jam sehari.
          </li>
          <li>
            <strong>Gunakan Tanah yang Berkualitas:</strong> Gunakan tanah pot
            yang baik dan subur agar tanaman Anda dapat tumbuh dengan optimal.
            Jangan lupa untuk memberi pupuk secara rutin agar tanaman
            mendapatkan nutrisi yang dibutuhkan.
          </li>
          <li>
            <strong>Perhatikan Penyiraman:</strong> Jangan terlalu sering
            menyiram tanaman. Pastikan tanah tetap lembab, namun tidak tergenang
            air, yang dapat merusak akar tanaman.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Berkebun di Wadah
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Jika Anda memiliki ruang terbatas, berkebun dalam wadah adalah solusi
          terbaik. Anda bisa menanam berbagai tanaman dalam pot atau kotak
          jendela. Pastikan wadah memiliki lubang drainase agar air tidak
          menggenang.
        </p>

        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/W9bdw_YO84Q?si=2tUK8AQWrrkZw5U4"
            title="Urban Gardening Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Manfaat Berkebun untuk Pemula
        </h2>
        <ul className="list-disc list-inside text-gray-600 font-medium font-montserrat mb-6 space-y-2">
          <li>
            Meningkatkan kesehatan mental dengan mengurangi stres dan memberikan
            rasa puas.
          </li>
          <li>
            Menyediakan bahan makanan organik segar, seperti sayuran dan rempah,
            langsung dari kebun Anda.
          </li>
          <li>
            Memperindah ruang dengan tanaman hijau dan memberikan sentuhan alami
            di rumah.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Kesimpulan
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Berkebun untuk pemula memang membutuhkan beberapa langkah awal, tetapi
          dengan memilih tanaman yang tepat, perawatan yang sederhana, dan
          tempat yang cocok, Anda bisa menikmati kebun mini di rumah. Jadikan
          berkebun sebagai aktivitas yang menyenangkan dan bermanfaat!
        </p>

        <p className="text-gray-600 font-medium font-montserrat">
          Selamat berkebun!
        </p>
      </div>
    </section>
  );
};

export default Article2;
