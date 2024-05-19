import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";

const SearchInput = ({setProducts}) => {

  const [searchItem, setSearchItem] = useState("");

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://ims-j0w2.onrender.com/api/products/search?query=${searchItem}`);
      console.log('Response data:', response.data);
   
      if(response.data.length === 0){
        toast.error("No product found.")
      }
      else{
        setProducts(response.data);
           console.log('Updated products:', response.data); 
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error("Items did not match your search.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="flex items-center justify-center relative">
          <div className="form-control mr-5">
            <input
              type="text"
              placeholder="Search Products"
              value={searchItem}
              onChange={handleChange}
              className="input input-bordered border-red-600 w-24 md:w-auto"
            />
          </div>
          <button type="submit" className="absolute right-7 cursor-pointer text-gray-400 hover:text-gray-800">
            <IoSearchOutline size={30} />
          </button>
        </div>
      </form>

    </div>
  );
};

export default SearchInput;
