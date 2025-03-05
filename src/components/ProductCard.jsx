const ProductCard = ({ product }) => {
  // Extracting image from custom attributes
  const imageAttribute = product.custom_attributes.find(
    (attr) => attr.attribute_code === "image"
  );
  const imageUrl = imageAttribute ? imageAttribute.value : "/placeholder.jpg"; // Fallback image

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition">
      <img
        src={`http://38.242.148.71:9084/media/catalog/product/${imageUrl}`}
        alt={product.name} // Use 'name' instead of 'title'
        className="w-full h-60 object-contain"
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>{" "}
      {/* Use 'name' */}
      <p className="text-gray-500 text-sm mt-1">₹{product.price}</p>
      <button className="mt-3 bg-[#f58220] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
