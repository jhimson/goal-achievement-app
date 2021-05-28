/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import logo from '../assets/images/nav-logo.png';

const Sidenav = ({ content }) => {
  const [sideNavIsVisible, setSideNavIsVisible] = useState(false);
  return (
    <div className="relative min-h-screen md:flex">
      {/* mobile menu bar */}
      <div className="flex justify-between text-gray-100 bg-gray-800 md:hidden">
        {/* logo */}
        <a href="#" className="">
          <img src={logo} alt="" className="w-64 h-15" />
        </a>
        {/* mobile menu button */}
        <button
          className="p-4 focus:outline-none focus:bg-gray-700"
          onClick={() => setSideNavIsVisible(!sideNavIsVisible)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* sidebar */}
      <div
        className={`absolute inset-y-0 left-0 w-64 px-2 space-y-6 text-blue-100 transition duration-200 ease-in-out transform ${
          sideNavIsVisible ? null : '-translate-x-full'
        } bg-gray-900 py-7 md:relative md:translate-x-0`}
      >
        {/* logo */}
        <a href="#" className="flex items-center px-4 space-x-2 text-white">
          <img src={logo} alt="" />
        </a>
        {/* nav */}
        <nav>
          <a
            href=""
            className="block px-4 py-2.5 hover:bg-blue-700 rounded hover:text-white transition duration-200"
          >
            Home
          </a>
          <a
            href=""
            className="block px-4 py-2.5 hover:bg-blue-700 rounded hover:text-white transition duration-200"
          >
            About
          </a>
          <a
            href=""
            className="block px-4 py-2.5 hover:bg-blue-700 rounded hover:text-white transition duration-200"
          >
            Features
          </a>
          <a
            href=""
            className="block px-4 py-2.5 hover:bg-blue-700 rounded hover:text-white transition duration-200"
          >
            Pricing
          </a>
        </nav>
      </div>

      {/* content */}
      <div className="flex-1 text-2xl font-bold">{content}</div>
    </div>
  );
};

export default Sidenav;
