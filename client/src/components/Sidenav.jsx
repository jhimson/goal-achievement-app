/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  AiOutlinePoweroff,
  AiOutlineHistory,
  AiOutlineLineChart,
  AiOutlineTrophy,
  AiOutlineBulb,
} from 'react-icons/ai';
import { HiOutlineExclamation } from 'react-icons/hi';
import { IoBuildOutline } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import logo from '../assets/images/nav-logo.png';

//! ACTIONS
import { userLogout } from '../redux/actions/userActions';
// !------------------------------------------------------------------------>

const Sidenav = ({ content, active }) => {
  //! COMPONENT STATE
  const [sideNavIsVisible, setSideNavIsVisible] = useState(false);
  // !---------------------------------------------------------------------->
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="relative min-h-screen md:flex">
      {/* mobile menu bar */}
      <div className="flex justify-between text-gray-100 bg-gray-800 md:hidden">
        {/* logo */}
        <a href="#" className="py-2">
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
        className={`absolute z-50 inset-y-0 left-0 w-64 px-2 space-y-6 text-blue-100 transition duration-200 ease-in-out transform ${
          sideNavIsVisible ? null : '-translate-x-full'
        } bg-gray-900 py-7 md:relative md:translate-x-0`}
      >
        {/* logo */}
        <a href="#" className="flex items-center px-4 space-x-2 text-white">
          <img src={logo} alt="" />
        </a>
        {/* nav */}
        <nav className="space-y-2">
          <a
            href="#"
            className={`flex items-center space-x-2 px-4 py-2.5 ${
              active === 'dashboardPage' ? 'bg-blue-700' : null
            } hover:bg-blue-700 rounded hover:text-white transition duration-200`}
            onClick={(e) => {
              e.preventDefault();
              history.push('/dashboard');
            }}
          >
            <MdDashboard size="2em" />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className={`flex items-center space-x-2 px-4 py-2.5 ${
              active === 'shortTermGoalsPage' ? 'bg-blue-700' : null
            } hover:bg-blue-700 rounded hover:text-white transition duration-200`}
            onClick={(e) => {
              e.preventDefault();
              history.push('/short-term-goals');
            }}
          >
            <AiOutlineHistory size="2em" />
            <span>Short term goals</span>
          </a>
          <a
            href=""
            className="flex items-center space-x-2 px-4 py-2.5 hover:bg-blue-700 rounded hover:text-white transition duration-200"
          >
            <AiOutlineLineChart size="2em" />
            <span>Long term goals</span>
          </a>
          <a
            href=""
            className="flex items-center space-x-2 px-4 py-2.5 hover:bg-blue-700 rounded hover:text-white transition duration-200"
          >
            <AiOutlineTrophy size="2em" />
            <span>Achievements</span>
          </a>
          <a
            href=""
            className="flex items-center space-x-2 px-4 py-2.5 hover:bg-blue-700 rounded hover:text-white transition duration-200"
          >
            <IoBuildOutline size="2em" />
            <span>Needs to improve</span>
          </a>
          <a
            href=""
            className="flex items-center space-x-2 px-4 py-2.5 hover:bg-blue-700 rounded hover:text-white transition duration-200"
          >
            <HiOutlineExclamation size="2em" />
            <span>Mistakes/Regrets in life</span>
          </a>
          <a
            href=""
            className="flex items-center space-x-2 px-4 py-2.5 hover:bg-blue-700 rounded hover:text-white transition duration-200"
          >
            <AiOutlineBulb size="2em" />
            <span>Lesson learned</span>
          </a>
          <a
            href=""
            className="text-red-500 flex items-center space-x-2 px-4 py-2.5 hover:bg-red-700 rounded hover:text-white transition duration-200"
            onClick={() => dispatch(userLogout())}
          >
            <AiOutlinePoweroff size="2em" />
            <span>Logout</span>
          </a>
        </nav>
      </div>

      {/* content */}
      <div className="flex-1 min-h-screen text-2xl font-bold bg-gray-200">
        {content}
      </div>
    </div>
  );
};

export default Sidenav;
