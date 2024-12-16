import React from "react";

const Article3 = () => {
  return (
    <section
      className="bg-cover bg-center text-left py-36"
      style={{
        backgroundImage: 'url("cover_bg.jpg")', // Ubah path sesuai dengan image Anda
      }}
    >
      <div className="container mx-auto max-w-4xl bg-green-50 p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold font-montserrat text-gray-900 mb-6">
          Learning to Garden in Urban Areas
        </h1>

        {/* Image Section */}
        <img
          src="card_img3.jpg" // Replace this with the actual path to your image
          alt="Urban Gardening"
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />

        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Urban gardening has become a popular trend in recent years as more
          people living in cities are realizing the benefits of growing their
          own food. Whether you&apos;re looking to grow fresh vegetables, herbs,
          or just want to bring a touch of nature to your urban dwelling,
          learning to garden in the city is both rewarding and practical.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Why Garden in the City?
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Gardening in urban areas offers numerous benefits. It allows you to
          reconnect with nature, even in the middle of a concrete jungle. You
          can grow fresh, organic food right on your balcony, rooftop, or in a
          small backyard. Urban gardening can also help reduce your carbon
          footprint by reducing the need for transportation of food.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Getting Started with Urban Gardening
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-4">
          Here are some tips for getting started:
        </p>

        <ol className="list-decimal list-inside text-gray-600 font-montserrat font-medium mb-6 space-y-4">
          <li>
            <strong>Choose the right space:</strong> Whether you have a small
            balcony or a sunny window, find a spot that gets enough sunlight
            (usually 6 hours a day) to start your garden.
          </li>
          <li>
            <strong>Select the right plants:</strong> Choose plants that grow
            well in containers, such as herbs (basil, mint, parsley), leafy
            greens (lettuce, spinach), and smaller vegetables (tomatoes,
            peppers).
          </li>
          <li>
            <strong>Use good quality soil:</strong> Invest in high-quality
            potting mix or compost to ensure your plants have the nutrients they
            need.
          </li>
          <li>
            <strong>Water wisely:</strong> Urban areas often have limited space,
            so it&apos;s important to water your plants efficiently. Make sure
            your containers have good drainage and be mindful not to overwater.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Container Gardening
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          One of the best methods for urban gardening is container gardening.
          You can grow plants in a variety of containers, from pots and window
          boxes to recycled buckets and tubs. Make sure the containers you
          choose have drainage holes to prevent water from pooling at the
          bottom, which can lead to root rot.
        </p>

        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://youtu.be/6PH32ZV6CYk?si=azwa-OXfRayB1r9Khttps://youtube.com/shorts/oTzyFpVXYmY?si=HxyENufBCGb_wheX"
            title="Urban Gardening Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Vertical Gardening
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          If you&apos;re short on space, vertical gardening is a great option.
          You can grow plants upward using trellises, shelves, or hanging
          baskets. This method works well for climbing plants like beans, peas,
          and even strawberries.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Rooftop and Community Gardens
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          If you&apos;re lucky enough to have access to a rooftop, you can turn
          it into a green oasis. Many cities also have community gardens where
          you can rent a plot of land to grow your own crops. These options
          provide more space and allow you to grow a wider variety of plants.
        </p>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Benefits of Urban Gardening
        </h2>
        <ul className="list-disc list-inside text-gray-600 font-medium font-montserrat mb-6 space-y-2">
          <li>
            Improves mental well-being by reducing stress and promoting
            relaxation.
          </li>
          <li>Provides fresh, organic food and herbs at your fingertips.</li>
          <li>
            Promotes sustainability by reducing food transportation and waste.
          </li>
          <li>Contributes to urban biodiversity and improves air quality.</li>
        </ul>

        <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-4">
          Conclusion
        </h2>
        <p className="text-gray-600 font-medium font-montserrat mb-6">
          Learning to garden in urban areas may seem challenging at first, but
          with the right tools, techniques, and a bit of patience, you can grow
          a thriving garden, no matter the size of your space. Whether
          you&apos;re growing vegetables, herbs, or flowers, urban gardening is
          a rewarding way to reconnect with nature and enjoy the fruits (and
          vegetables) of your labor.
        </p>

        <p className="text-gray-600 font-medium font-montserrat">
          Happy gardening!
        </p>
      </div>
    </section>
  );
};

export default Article3;
