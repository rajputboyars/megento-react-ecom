import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // If using React Router
import AnimatedHeading from "../components/AnimatedHeading";
import axios from "axios";

const SingleProductPage = ({ products }) => {
  const { productId } = useParams(); // Get ID from URL
  const [product, setProduct] = useState(null);
  const encodedSku = decodeURIComponent(productId);
  console.log(encodedSku,"encoded");
  
  useEffect(() => {
    const fetchProductBySku = async () => {
      try {
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/http://38.242.148.71:9084/rest/test_view/V1/products/${encodedSku}`,
          {
            headers: {
              Authorization: import.meta.env.AUTH_TOKEN,
            },
          }
        );
        setProduct(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProductBySku()
    // Find product from the array based on ID
    // const foundProduct = products.find((p) => p.sku === encodedSku);
    // setProduct(foundProduct);
    // console.log(foundProduct,"filteredproduct");
    
  }, [productId, products]);

  if (!product) return <AnimatedHeading texts={["Loading...."]} />;

  // Extract the main image from custom_attributes
  const imageAttr = product.custom_attributes.find(
    (attr) => attr.attribute_code === "image"
  );
  const imageUrl = imageAttr ? imageAttr.value : "/placeholder.jpg";

  // Extract other details
  const shelfLifeAttr = product.custom_attributes.find(
    (attr) => attr.attribute_code === "shelf_life"
  );
  const shelfLife = shelfLifeAttr ? shelfLifeAttr.value : "N/A";

  const ingredientsAttr = product.custom_attributes.find(
    (attr) => attr.attribute_code === "ingredients"
  );
  const ingredients = ingredientsAttr ? ingredientsAttr.value : "Not specified";

  const descriptionAttr = product.custom_attributes.find(
    (attr) => attr.attribute_code === "short_description"
  );
  const description = descriptionAttr ? descriptionAttr.value : "No description available.";

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Image & Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center flex-col">
          <img src={`http://38.242.148.71:9084/media/catalog/product/${imageUrl}`} alt={product.name} className="w-[500px] h-auto object-contain" />
          {/* Additional Images */}
          <div className="flex gap-2 mt-4">
            {product.media_gallery_entries.map((img, index) => (
              <img
                key={index}
                src={`http://38.242.148.71:9084/media/catalog/product/${img.file}`}
                alt={`Image ${index}`}
                className="w-20 h-20 object-contain border p-1"
              />
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">₹{product.price}</p>
          <p className="text-sm text-gray-500">Weight: {product.weight}g</p>
          <p className="text-sm text-gray-500">Shelf Life: {shelfLife}</p>

          <h3 className="text-lg font-semibold mt-4">Ingredients</h3>
          <p className="text-gray-700">{ingredients}</p>

          <h3 className="text-lg font-semibold mt-4">Description</h3>
          <div className="text-gray-700">{description}</div>

          <button className="mt-5 bg-[#f58220] text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
            Buy Now
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {product.product_links.map((related, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm">
              <p className="text-center font-semibold">{related.linked_product_sku}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
