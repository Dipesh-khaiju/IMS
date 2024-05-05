import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData1 = async () => {
            const url = "http://localhost:3000/api/products/getProducts"; // Define the URL here
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

      
            fetchData1();
     

        return () => {};
    }, []);

    return { products, loading, error  };
};

export default useGetProducts;
