import React from "react";
import SearchInput from "./SearchInput";
import { CiLogout } from "react-icons/ci";

const Header = () => {
  return (
    <div data-theme="cupcake" className="navbar shadow-lg border-b-4 rounded-lg border-gray-300  ">
      <div className="flex-1">
        <svg
          fill="#000000"
          height="80px"
          width="80px"
          version="1.2"
          baseProfile="tiny"
          id="inventory"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="-53.76 -53.76 363.52 363.52"
          xml:space="preserve"
          stroke="#000000"
          stroke-width="0.00256"
          transform="matrix(1, 0, 0, 1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0">
            <rect
              x="-53.76"
              y="-53.76"
              width="363.52"
              height="363.52"
              rx="181.76"
              fill="#7ed0ec"
              strokewidth="0"
            ></rect>
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="0.512"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M118.8,209.6h-59v-59h22.7v18.8h13.5v-18.8h22.7V209.6z M195.9,209.6h-59v-59h22.7v18.8h13.5v-18.8h22.7V209.6z M157.8,132.5h-59v-59h22.7v18.8h13.5V73.5h22.7V132.5z M246.6,78.9l-16.1-7.5v139.9h-18.2V62.6l-84.5-39.9L43.5,62.6v148.5H25.3 V71.3L9.2,78.9L1.4,62.4L127.8,2.7l126.7,59.6L246.6,78.9z"></path>{" "}
          </g>
        </svg>
        <a className=" ml-4 text-2xl">INVENTORY MANAGEMENT SYSTEM</a>
      </div>
      <div className="flex-none gap-6">
        <SearchInput />

        <div className="dropdown dropdown-end ml-5">
          <div tabIndex={0} role="button" className="avatar">
            <div className="w-8 mr-8 flex items-center justify-center   rounded-full ring ring-gray-700 ring-offset-base-100 ring-offset-2">
              <svg
                class="absolute w-8 h-8 text-gray-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li className="flex  justify-center">
              <a>
                Logout <CiLogout className="ml-14" size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
