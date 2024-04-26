import React from "react";
import AllProductsSection from "../components/AllProductsSection";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AddProductsModal } from "../components/Modal/AddProductsModal";

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
           <AddProductsModal />
          </div>
        </div>
      </section>
      <AllProductsSection />
    </>
  );
};

export default DashBoard;
