import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:3000/api/products/getProducts";
            try {
                const response = await axios.get(url);
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();

        return () => {};
    }, []);

    const fetchProducts = async () => {
        fetchData();
    };

    return (
        <ProductsContext.Provider value={{ products, loading, error, fetchProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    return useContext(ProductsContext);
};
