/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/nav-logo.png';

const Navbar = () => {
  const history = useHistory();
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);
  return (
    <nav className="font-bold bg-gray-900">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div className="py-2">
              <a href="#">
                <img src={logo} alt="" className="w-64 h-15" />
              </a>
            </div>

            {/* primary nav */}
          </div>
          {/* secondary nav */}
          <div className="items-center hidden space-x-1 md:flex">
            <a
              href="#"
              className="px-3 py-5 text-gray-200"
              onClick={(e) => {
                e.preventDefault();
                history.push('/');
              }}
            >
              Login
            </a>
            <a
              href="#"
              className="px-3 py-2 text-yellow-900 transition duration-300 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yellow-800"
              onClick={(e) => {
                e.preventDefault();
                history.push('/register');
              }}
            >
              Signup
            </a>
          </div>
          {/* mobile button goes here */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuIsVisible(!mobileMenuIsVisible)}
            >
              <svg
                className="w-6 h-6 text-gray-200 focus:outline-none"
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
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden ${
          mobileMenuIsVisible ? null : 'hidden'
        } px-2 pb-3 space-y-2`}
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-200 transition duration-200 rounded hover:bg-blue-600 "
          onClick={(e) => {
            e.preventDefault();
            history.push('/');
          }}
        >
          Login
        </a>
        <a
          href="#"
          className="inline-block px-2 py-1 text-sm text-yellow-900 transition duration-300 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yellow-800"
          onClick={(e) => {
            e.preventDefault();
            history.push('/register');
          }}
        >
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
