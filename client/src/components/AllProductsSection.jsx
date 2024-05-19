import React, { useState, useEffect } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { EditModal } from "./Modal/EditModal";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useProducts } from "../context/ProductsContext";

const AllProductsSection = () => {
  const { products: fetchedProducts, loading, error } = useProducts();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setProducts(fetchedProducts);
    }
  }, [fetchedProducts, loading, error]);

  const fetchProducts = async () => {
    try {
      const url = "https://ims-j0w2.onrender.com/api/products/getProducts";
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `https://ims-j0w2.onrender.com/api/products/deleteProduct/${productId}`
      );
      setProducts(products.filter((product) => product._id !== productId));
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
      console.log("Response data:", error.response.data);
      console.log("Response headers:", error.response.headers);
      toast.error("Failed to delete product");
    }
  };
  const handleIncrease = async (productId) => {
    try {
      await axios.put(
        `https://ims-j0w2.onrender.com/api/products/increase/${productId}`
      );
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === productId
            ? { ...product, stock: product.stock + 1 }
            : product
        )
      );
      toast.success("Stock Increased successfully");
    } catch (error) {
      console.error("Error increasing stock:", error);
      console.log("Response data:", error.response.data);
      console.log("Response headers:", error.response.headers);
      toast.error("Failed to increase stock");
    }
  };
  const handleDecrease = async (productId) => {
    try {
      await axios.put(
        `https://ims-j0w2.onrender.com/api/products/decrease/${productId}`
      );
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === productId
            ? { ...product, stock: product.stock - 1 }
            : product
        )
      );
      toast.success("Stock Decreased successfully");
    } catch (error) {
      console.error("Error decreasing stock:", error);
      console.log("Response data:", error.response.data);
      console.log("Response headers:", error.response.headers);
      toast.error("Failed to decrease stock");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-40 text-5xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div data-theme="cupcake" className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {products.map((product, index) => (
          <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-60 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={product.images[0]}
              />
            </a>
            <div className="mt-4 relative">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                Category : {product.category}
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Title : {product.title}
              </h2>
              <p className="mt-1">Price : ${product.price}</p>

              <div className="relative">
                <p className="mt-4">Stock : {product.stock}</p>
                <div className="absolute items-center justify-center top-0 left-24 flex">
                  <button
                    type="button"
                    className="text-gray-700 border border-gray-700 hover:text-blue-400 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center me-2 "
                  >
                    <FaPlus
                      onClick={() => handleIncrease(product._id)}
                      size={15}
                    />
                  </button>
                  <button
                    type="button"
                    className="text-gray-700 border border-gray-700 hover:text-blue-400 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center me-2 "
                  >
                    <FiMinus
                      onClick={() => handleDecrease(product._id)}
                      size={15}
                    />
                  </button>
                </div>
              </div>

              <div className="absolute flex gap-4 right-3 bottom-0">
                <EditModal
                  productId={product._id}
                  onEditSuccess={fetchProducts}
                />
                <AiTwotoneDelete
                  className="cursor-pointer"
                  onClick={() => handleDelete(product._id)}
                  size={25}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsSection;
