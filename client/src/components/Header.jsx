import React from "react";

const Header = () => {
  return (
    <div data-theme="cupcake" className="navbar ">
      <div className="flex-1">
        <a className=" text-2xl">Inventory Management</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control mr-5">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered border-red-600 w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end ml-5">
          <div tabIndex={0} role="button" className="avatar">
            <div className="w-10 items-center justify-center   rounded-full ring ring-gray-700 ring-offset-base-100 ring-offset-2">
              <svg
                class="absolute w-10 h-10 text-gray-400 "
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
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
