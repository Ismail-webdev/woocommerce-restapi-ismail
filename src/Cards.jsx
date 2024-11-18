import axios from "axios";
import { useEffect, useState } from "react";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://ismail082.ct.ws/wp-json/wc/v3/products",
          {
            auth: {
              username: "ck_9ad814f6105385f8212fa9825148b89304754eeb", // Replace with your Consumer Key
              password: "cs_334e63349b13f4a6716dbe73a51e5c8d425af087", // Replace with your Consumer Secret
            },
          }
        );
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div class="w-60 h-80 bg-gray-900 p-3 flex flex-col gap-1">
      <div class="h-48">
        <img
          src="https://via.placeholder.com/200"
          alt="Product Image"
          class="w-full h-full object-cover duration-500 hover:contrast-100 contrast-50"
        />
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between">
          <div class="flex flex-col">
            <span class="text-xl font-bold text-white">{products.name}</span>
            <p class="text-xs text-gray-700">ID: {products.id}</p>
          </div>
          <span class="font-bold text-red-600">{products.price}</span>
        </div>
        <button class="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2">
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default Cards;
