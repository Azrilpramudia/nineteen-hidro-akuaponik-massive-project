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
          Mengelola Tanaman di Rumah
        </h1>

        {/* Image Section */}
        <img
          src="card_img3.jpg" // Ganti dengan path gambar yang sesuai
          alt="Mengelola Tanaman di Rumah"
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />

        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Memiliki tanaman di rumah tidak hanya mempercantik ruang, tetapi juga membantu meningkatkan kualitas udara dan menciptakan suasana yang lebih menyegarkan. Namun, mengelola tanaman dengan baik membutuhkan perhatian dan perawatan rutin. Berikut adalah beberapa tips untuk mengelola tanaman di rumah dengan efektif.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Mengapa Memiliki Tanaman di Rumah?
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Tanaman di rumah tidak hanya memberikan manfaat estetika tetapi juga meningkatkan kesejahteraan mental. Mereka dapat membantu mengurangi stres, meningkatkan konsentrasi, dan memperbaiki kualitas udara dengan menyaring polutan.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Tips Mengelola Tanaman di Rumah
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-4">
          Berikut adalah beberapa tips untuk merawat tanaman di rumah dengan baik:
        </p>

        <ol className="list-decimal list-inside text-gray-600 font-montserrat font-medium mb-6 space-y-4">
          <li>
            <strong>Pilih Tanaman yang Tepat:</strong> Pilih tanaman yang sesuai dengan kondisi di rumah Anda. Tanaman seperti lidah mertua, aloe vera, atau pothos sangat cocok untuk pemula karena mudah dirawat dan tahan terhadap perubahan suhu.
          </li>
          <li>
            <strong>Pilih Lokasi yang Tepat:</strong> Tanaman membutuhkan cahaya yang cukup, namun tidak semua tanaman sama. Beberapa tanaman membutuhkan sinar matahari langsung, sementara yang lain lebih cocok di tempat teduh. Pastikan Anda menempatkan tanaman sesuai dengan kebutuhan cahaya mereka.
          </li>
          <li>
            <strong>Penyiraman yang Tepat:</strong> Salah satu hal yang paling penting dalam merawat tanaman adalah penyiraman yang tepat. Jangan biarkan tanaman Anda terlalu kering atau tergenang air. Gunakan metode penyiraman yang sesuai untuk setiap jenis tanaman.
          </li>
          <li>
            <strong>Gunakan Pot dengan Drainase:</strong> Pastikan setiap pot tanaman Anda memiliki lubang drainase untuk mencegah air tergenang. Hal ini membantu mencegah akar membusuk dan memastikan tanaman tumbuh dengan sehat.
          </li>
          <li>
            <strong>Pemupukan Rutin:</strong> Berikan pupuk yang tepat untuk tanaman Anda, terutama selama musim pertumbuhan. Gunakan pupuk organik atau pupuk cair yang dapat memberikan nutrisi yang dibutuhkan tanaman.
          </li>
        </ol>

        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed//IHGNIQYVUV8?si=G2TKxaua1RY9SPAD"
            title="Belajar Menanam di Kawasan Kota"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Menjaga Kesehatan Tanaman
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Untuk menjaga tanaman tetap sehat, penting untuk secara rutin memeriksa tanda-tanda masalah seperti daun yang menguning, serangan hama, atau tanda-tanda penyakit. Jika diperlukan, lakukan perawatan khusus seperti pemangkasan atau penggantian tanah untuk memberikan lingkungan yang optimal bagi tanaman.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Tanaman Hias di Dalam Rumah
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Tanaman hias tidak hanya meningkatkan tampilan ruangan, tetapi juga memberikan kesan alami yang menenangkan. Anda bisa memilih tanaman dengan berbagai ukuran dan bentuk sesuai dengan desain interior rumah Anda, seperti tanaman gantung atau tanaman meja kecil.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Manfaat Mengelola Tanaman di Rumah
        </h2>
        <ul className="list-disc list-inside text-gray-600 font-medium font-montserrat mb-6 space-y-2">
          <li>Meningkatkan kualitas udara dengan menyerap polutan dan menghasilkan oksigen.</li>
          <li>Menurunkan stres dan meningkatkan kesehatan mental dengan memberikan suasana yang lebih hijau dan menyegarkan.</li>
          <li>Menambah keindahan rumah dan menciptakan ruang yang lebih hidup dan asri.</li>
        </ul>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Kesimpulan
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Mengelola tanaman di rumah bukan hanya tentang merawat tanaman, tetapi juga tentang menikmati manfaatnya bagi kesehatan dan keindahan rumah Anda. Dengan perawatan yang tepat, tanaman Anda dapat tumbuh subur dan memberikan kebahagiaan bagi Anda sekeluarga.
        </p>

        <p className="text-gray-600 font-medium font-montserrat">
          Selamat merawat tanaman Anda!
        </p>
      </div>
    </section>
  );
};

export default Article3;
