import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </div>
      {/* Products table or grid */}
    </div>
  );
};