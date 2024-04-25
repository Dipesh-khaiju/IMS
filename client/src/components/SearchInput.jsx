import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form>
      <div className="flex items-center justify-center relative">
        <div className="form-control  mr-5">
          <input
            type="text"
            placeholder="Search Products"
            className="input input-bordered border-red-600 w-24 md:w-auto"
          />
        </div>
        
        <IoSearchOutline className="absolute right-7 cursor-pointer text-gray-400 hover:text-gray-800" size={30} />
      </div>
    </form>
  );
};

export default SearchInput;
