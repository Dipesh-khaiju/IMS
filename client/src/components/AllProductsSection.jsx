import React from "react";
import useGetProducts from "../hooks/useGetProducts";

const AllProductsSection = () => {
    const { products, loading, error } = useGetProducts();
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div  data-theme="cupcake" className="container  px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                {products.map((product,index)=> (
                    <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-60 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.images[0]}/>
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                            <p className="mt-1">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProductsSection;
