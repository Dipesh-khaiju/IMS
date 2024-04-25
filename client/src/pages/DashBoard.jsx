import React from "react";
import AllProductsSection from "../components/AllProductsSection";
import { IoIosAddCircleOutline } from "react-icons/io";

const DashBoard = () => {
  return (
    <>
      <section data-theme="cupcake" class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto flex items-center md:flex-row flex-col">
          <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h1 class="md:text-5xl text-4xl font-medium title-font text-gray-900">
              All Products
            </h1>
          </div>
          <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <button class="bg-gray-200 inline-flex mr-40 py-3 px-5 rounded-lg items-center hover:bg-gray-300 focus:outline-none">
              <IoIosAddCircleOutline size={30} />
              <span class="ml-4 flex items-start flex-col leading-none">
                <span class="title-font font-medium">Add Products</span>
              </span>
            </button>
          </div>
        </div>
      </section>
      <AllProductsSection />
    </>
  );
};

export default DashBoard;
