import { Link } from "react-router-dom";
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="mx-auto px-6 container">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-[#f58220]">About Us</h2>
            <p className="mt-2 text-gray-400">
              We provide high-quality products at the best prices. Your satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-[#f58220]">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-xl font-bold text-[#f58220]">Subscribe to Our Newsletter</h2>
            <p className="mt-2 text-gray-400">Stay updated with our latest offers and news.</p>
            <div className="mt-4 w-full flex justify-center md:justify-start rounded-full overflow-hidden bg-white">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 text-black focus:outline-none w-full"
              />
              <button className="px-4 py-3 bg-[#f58220] text-white font-semibold hover:bg-[#23913a] transition rounded-full border border-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MyEcom. All Rights Reserved.</p>
          {/* Social Media Links
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-[#f58220]"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-[#f58220]"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-[#f58220]"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-[#f58220]"><FaLinkedinIn /></a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
