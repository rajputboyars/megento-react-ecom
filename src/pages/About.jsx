export default function About() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#f58220]">Our Story</h2>
            <p className="mt-4 text-gray-700">
              We started with a mission to provide high-quality products at
              affordable prices. Our journey began with a simple idea—to make
              shopping easy and accessible for everyone.
            </p>
          </div>
          <img
            src="https://cdn.shopify.com/s/files/1/0272/6271/3908/files/thewholestory.png?30761574154252"
            alt="Our Story"
            className="rounded-lg p-20"
          />
        </div>
      </section>
      {/* Hero Section */}

      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-end text-white text-center"
        style={{
          backgroundImage:
            "url('https://wholefoods.co.in/cdn/shop/files/story-banner-min.png?v=1675769302')",
        }}
      >
       
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#f58220]">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            <div className="p-6 shadow-lg rounded-lg border-t-4 border-[#28a745] bg-gray-50">
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="mt-2 text-gray-700">
                We ensure every product meets high standards.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg border-t-4 border-[#28a745] bg-gray-50">
              <h3 className="text-xl font-semibold">Trust</h3>
              <p className="mt-2 text-gray-700">
                Customer trust is at the heart of everything we do.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg border-t-4 border-[#28a745] bg-gray-50">
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="mt-2 text-gray-700">
                We continuously improve to serve you better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#f58220] text-center">
          Why Choose Us?
        </h2>
        <div className=" mt-10">
          <ul className="grid  items-center grid-cols-1 md:grid-cols-2 place-items-center space-y-4">
            <li className="flex items-center space-x-3">
              <span className="w-4 h-4 bg-[#28a745] rounded-full"></span>
              <span>Fast & Secure Delivery</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-4 h-4 bg-[#28a745] rounded-full"></span>
              <span>24/7 Customer Support</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-4 h-4 bg-[#28a745] rounded-full"></span>
              <span>Best Price Guarantee</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-4 h-4 bg-[#28a745] rounded-full"></span>
              <span>Easy Returns & Refunds</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
