import { useEffect, useState } from "react";
<<<<<<< HEAD
import Product from "../Components/auth/Product";
import NavBar from "../Components/auth/nav";
=======
import NavBar from "../component/auth/nav";
import Product from "../component/auth/Product";
>>>>>>> 5d43ec0be4a0bade14628e22b59065f6de8e3c7e

export default function Home() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true); // For loading state
const [error, setError] = useState(null); // For error handling

useEffect(() => {
<<<<<<< HEAD
  fetch("http://localhost:8000/api/v2/product/get-products")
=======
  fetch("http://localhost:3000/api/v2/product/get-products")
>>>>>>> 5d43ec0be4a0bade14628e22b59065f6de8e3c7e
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      setProducts(data.products);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
      setError(err.message);
      setLoading(false);
    });
}, []);
if (loading) {
  return (
    <div className="text-center text-white mt-10">Loading products...</div>
  );
}
if (error) {
  return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
}

  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen bg-neutral-800">
        <h1 className="text-3xl text-center text-white py-6">Product Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {products.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}