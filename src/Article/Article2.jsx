import React from "react";

const Article2 = () => {
  return (
    <section
      className="bg-cover bg-center text-left py-36"
      style={{
        backgroundImage: 'url("cover_bg.jpg")', // Ubah path sesuai dengan image Anda
      }}
    >
      <div className="container mx-auto max-w-4xl bg-green-50 p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold font-montserrat text-gray-900 mb-6">
          Tips Bekerbun untuk Pemula
        </h1>

        {/* Image Section */}
        <img
          src="card_img2.jpg" // Replace this with the actual path to your image
          alt="Urban Gardening"
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />

        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Berkebun di perkotaan telah menjadi tren populer dalam beberapa tahun
          terakhir karena semakin banyak orang yang tinggal di kota menyadari
          manfaat menanam makanan mereka sendiri. Apakah Anda&apos;Jika Anda
          ingin menanam sayuran segar, rempah-rempah, atau sekadar ingin
          menghadirkan sentuhan alam ke dalam hunian perkotaan Anda, belajar
          berkebun di kota merupakan kegiatan yang bermanfaat dan praktis.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Mengapa Berkebun di Kota?
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Berkebun di daerah perkotaan menawarkan banyak manfaat. Berkebun
          memungkinkan Anda untuk terhubung kembali dengan alam, bahkan di
          tengah hutan beton. Anda dapat menanam makanan organik segar tepat di
          balkon, atap, atau di halaman belakang rumah Anda yang kecil. Berkebun
          di perkotaan juga dapat membantu mengurangi jejak karbon Anda dengan
          mengurangi kebutuhan untuk mengangkut makanan.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Memulai Berkebun di Perkotaan
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-4">
          Berikut beberapa tips untuk memulai:
        </p>

        <ol className="list-decimal list-inside text-gray-600 font-montserrat font-medium mb-6 space-y-4">
          <li>
            <strong>Pilih ruang yang tepat:</strong> Baik Anda memiliki balkon
            kecil atau jendela yang terkena sinar matahari, carilah tempat yang
            mendapat cukup sinar matahari (biasanya 6 jam sehari) untuk memulai
            berkebun.
          </li>
          <li>
            <strong>Pilih tanaman yang tepat:</strong> Pilih tanaman yang tumbuh
            baik di dalam pot, seperti herba (kemangi, daun mint, peterseli),
            sayuran berdaun hijau (selada, bayam), dan sayuran berukuran kecil
            (tomat, paprika).
          </li>
          <li>
            <strong>Gunakan tanah berkualitas baik:</strong> Berinvestasilah
            pada campuran pot atau kompos berkualitas tinggi untuk memastikan
            tanaman Anda memiliki nutrisi yang dibutuhkannya. Berinvestasilah
            pada campuran pot atau kompos berkualitas tinggi untuk memastikan
            tanaman Anda memiliki nutrisi yang dibutuhkannya.
          </li>
          <li>
            <strong>Gunakan air dengan bijak:</strong> Daerah perkotaan
            seringkali memiliki ruang yang terbatas, sehingga&apos;Penting untuk
            menyiram tanaman secara efisien. Pastikan wadah Anda memiliki
            drainase yang baik dan jangan menyiram terlalu banyak.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Berkebun dalam Wadah
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Salah satu metode terbaik untuk berkebun di kota adalah berkebun dalam
          wadah. Anda dapat menanam tanaman dalam berbagai wadah, mulai dari pot
          dan kotak jendela hingga ember dan bak daur ulang. Pastikan wadah yang
          Anda pilih memiliki lubang drainase untuk mencegah air menggenang di
          bagian bawah, yang dapat menyebabkan akar membusuk.
        </p>

        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/6PH32ZV6CYk?si=Bz5hWNPZk4w4bvJ-"
            title="Urban Gardening Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Berkebun Vertikal
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Jika Anda&apos;Jika lahan terbatas, berkebun vertikal adalah pilihan
          yang tepat. Anda dapat menanam tanaman ke atas menggunakan teralis,
          rak, atau keranjang gantung. Metode ini cocok untuk tanaman merambat
          seperti kacang, kacang polong, dan bahkan stroberi.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Taman Atap dan Komunitas
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Jika anda&apos;Jika Anda cukup beruntung memiliki akses ke atap, Anda
          dapat mengubahnya menjadi oasis hijau. Banyak kota juga memiliki kebun
          komunitas tempat Anda dapat menyewa sebidang tanah untuk menanam
          tanaman Anda sendiri. Pilihan ini menyediakan lebih banyak ruang dan
          memungkinkan Anda menanam lebih banyak jenis tanaman.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Manfaat Berkebun di Perkotaan
        </h2>
        <ul className="list-disc list-inside text-gray-600 font-medium font-montserrat mb-6 space-y-2">
          <li>
            Meningkatkan kesejahteraan mental dengan mengurangi stres dan
            meningkatkan relaksasi.
          </li>
          <li>
            Menyediakan makanan organik dan rempah segar di ujung jari Anda.
          </li>
          <li>
            Mempromosikan keberlanjutan dengan mengurangi transportasi dan
            limbah makanan.
          </li>
          <li>
            Berkontribusi terhadap keanekaragaman hayati perkotaan dan
            meningkatkan kualitas udara.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Kesimpulan
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Belajar berkebun di daerah perkotaan mungkin tampak menantang pada
          awalnya, tetapi dengan alat, teknik, dan sedikit kesabaran yang tepat,
          Anda dapat menanam kebun yang subur, tidak peduli seberapa besar ruang
          Anda. Apakah Anda&apos;menanam sayuran, rempah, atau bunga, berkebun
          di perkotaan merupakan cara yang bermanfaat untuk berhubungan kembali
          dengan alam dan menikmati buah (dan sayuran) hasil jerih payah Anda.
        </p>

        <p className="text-gray-600 font-medium font-montserrat">
          Selamat berkebun!
        </p>
      </div>
    </section>
  );
};

export default Article2;
