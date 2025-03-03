export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-end text-white text-center"
        style={{
          backgroundImage:
            "url('https://wholefoods.co.in/cdn/shop/files/Banner2_1920x570.png?v=1679653252')",
        }}
      >
        <div className="text-[#f58220] p-6 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to MyEcom</h1>
          <p className="mt-4 text-lg md:text-xl">
            Discover amazing products at unbeatable prices!
          </p>
          <button className="mt-6 px-6 py-3 bg-[#f58220] text-white font-semibold rounded-lg hover:bg-[#e5701c] transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#f58220]">Featured Products</h2>
        <p className="mt-2 text-gray-600">Check out our latest arrivals.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product Cards */}
          {["https://cdn.shopify.com/s/files/1/0272/6271/3908/files/Ct_842cff12-8307-4e0b-8f29-b873e8988e18.png?v=1679649076", "https://cdn.shopify.com/s/files/1/0272/6271/3908/files/Savoury_Snacks_png.jpg?v=1695812309", "https://cdn.shopify.com/s/files/1/0272/6271/3908/files/Nuts_56965762-3f68-40e2-aa77-128c2e597399.png?v=1679649076"].map((img, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg">
              <img
                src={img}
                alt="Product"
                className="w-full rounded"
              />
              <h3 className="mt-4 text-lg font-bold">Product Name</h3>
              <p className="text-gray-600">$99.99</p>
              <button className="mt-4 px-4 py-2 bg-[#28a745] text-white rounded hover:bg-[#23913a] transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-[#f58220]">Why Choose Us?</h2>
        <p className="mt-2 text-gray-600">
          We offer the best deals and quality products.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🚀",
              title: "Fast Shipping",
              desc: "Get your orders quickly.",
            },
            { icon: "💰", title: "Best Prices", desc: "Unbeatable discounts." },
            {
              icon: "📞",
              title: "24/7 Support",
              desc: "Help anytime you need.",
            },
          ].map((feature, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-bold">
                {feature.icon} {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#f58220]">
          What Our Customers Say
        </h2>
        <p className="mt-2 text-gray-600">Real reviews from happy customers.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { text: "Amazing products and fast delivery!", name: "John Doe" },
            { text: "Great customer service and prices!", name: "Jane Smith" },
          ].map((review, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg">
              <p className="text-gray-600">"{review.text}"</p>
              <h3 className="mt-2 font-bold">{review.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
