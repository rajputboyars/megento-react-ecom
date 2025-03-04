import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import AnimatedHeading from "../components/AnimatedHeading";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async (store_type,store_id) => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          // "http://38.242.148.71:9084/rest/V1/products?searchCriteria=",
          `http://38.242.148.71:9084/rest/${store_type}/V1/products?searchCriteria[filterGroups][0][filters][0][field]=store_id&searchCriteria[filterGroups][0][filters][0][value]=${store_id}`,
          {
            headers: {
              Authorization: import.meta.env.AUTH_TOKEN,
            },
          }
        );
        setProducts(data.items);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts("default",0);
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name && product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );
  // console.log(displayedProducts);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Controls (Search & Per Page Select) */}
      <div className="flex justify-between items-center mb-6">
        <select
          value={perPage}
          onChange={(e) => {
            setPerPage(Number(e.target.value));
            setCurrentPage(1); // Reset to first page
          }}
          className="p-2 border border-[#f58220] rounded-md"
        >
          <option value="20">20 per page</option>
          <option value="50">50 per page</option>
          <option value="100">100 per page</option>
        </select>
        <div className="rounded-full max-md:hidden overflow-hidden pl-4 bg-white font-extralight text-black text-sm flex justify-center items-center border border-primary">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="outline-none py-2 md:w-60 max-md:hidden"
          />
          {/* <span className="bg-[#f58220] rounded-full h-full flex cursor-pointer justify-center items-center px-4 py-1 text-white border border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span> */}
        </div>
      </div>

      {/* Products Grid */}
      {isLoading ? (
        <AnimatedHeading texts={["Loading...."]} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <Link key={product.id} to={`/products/${product.sku}`}>
                <ProductCard  product={product} />
              </Link>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 text-lg">
              No products found.
            </p>
          )}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-3">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
          >
            Prev
          </button>
          <span className="font-semibold text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
