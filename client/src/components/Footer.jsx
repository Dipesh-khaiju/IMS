import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer data-theme="cupcake" className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg
          fill="#000000"
          height="50px"
          width="50px"
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
            <span className="ml-3 text-xl">IMS</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Dipesh Khaiju
            <a
              href="https://dipeshkhaiju.netlify.app/"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @khai_dipesh
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 gap-3 justify-center sm:justify-start">
            <a href="https://github.com/Dipesh-khaiju" className="text-gray-500 cursor-pointer ">
            <FaGithub  size={25}/>
            </a>
            <a href=" https://www.linkedin.com/in/dipesh-khaiju-385b63243/" className="ml-3 text-gray-500 cursor-pointer">
              <FaLinkedin size={25} />
            </a>
            <a href="https://www.instagram.com/khai_dipesh/" className="ml-3 text-gray-500 cursor-pointer">
              <FaInstagram size={25} />
            </a>
            <a  href="https://www.facebook.com/deepeshkhaiju" className="ml-3 text-gray-500 cursor-pointer">
            <FaFacebook size={25} />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
