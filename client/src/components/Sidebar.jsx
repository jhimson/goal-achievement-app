/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import { IoMdAddCircle } from 'react-icons/io';
import { FaRegListAlt } from 'react-icons/fa';
import { MdPlaylistAdd, MdDashboard } from 'react-icons/md';
import { CgExtensionAdd } from 'react-icons/cg';
import {
  AiOutlineUserAdd,
  AiFillFolder,
  AiOutlineHourglass,
  AiOutlineLineChart,
  AiOutlineBulb,
  AiOutlineExperiment,
  AiOutlineAlert,
  AiOutlinePushpin,
} from 'react-icons/ai';
import { ImUsers } from 'react-icons/im';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

//! ACTIONS

//! ----------------------------------------------------->

const Sidebar = ({ active }) => {
  //! COMPONENT STATE
  //! ----------------------------------------------------->
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="h-screen bg-gray-300 border-2 border-gray-400 w-72">
      <ul className="flex flex-col px-5 py-10 space-y-5">
        <button
          onClick={() => {
            history.push('/dashboard');
          }}
          className="focus-within:outline-none"
        >
          <li
            className={`flex items-center px-2 py-2 space-x-3 rounded-lg cursor-pointer justify-items-center hover:bg-black hover:text-white ${
              active === 'dashboard' ? 'bg-black text-white' : null
            }`}
          >
            <span>
              <MdDashboard size="2em" />
            </span>{' '}
            <span className="font-mono text-lg font-semibold">Dashboard</span>
          </li>
        </button>
        <button
          onClick={() => {
            history.push('/add-player');
          }}
          className="focus-within:outline-none"
        >
          <li
            className={`flex items-center px-2 py-2 space-x-3 rounded-lg cursor-pointer justify-items-center hover:bg-black hover:text-white ${
              active === 'add-player' ? 'bg-black text-white' : null
            } `}
          >
            <span>
              <AiOutlineHourglass size="2em" />
            </span>{' '}
            <span className="font-mono text-lg font-semibold">
              Short Term Goals
            </span>
          </li>
        </button>
        <button
          onClick={() => {
            history.push('/add-combination');
          }}
          className="focus-within:outline-none"
        >
          <li
            className={`flex items-center px-2 py-2 space-x-3 rounded-lg cursor-pointer justify-items-center hover:bg-black hover:text-white ${
              active === 'add-combination' ? 'bg-black text-white' : null
            } `}
          >
            <span>
              <AiOutlineLineChart size="2em" />
            </span>{' '}
            <span className="font-mono text-lg font-semibold">
              Long Term Goals
            </span>
          </li>
        </button>
        <button
          onClick={() => {
            history.push('/assign-combination');
          }}
          className="focus-within:outline-none"
        >
          {' '}
          <li
            className={`flex items-center px-2 py-2 space-x-3 rounded-lg cursor-pointer justify-items-center hover:bg-black hover:text-white ${
              active === 'assign-combination' ? 'bg-black text-white' : null
            }`}
          >
            <span>
              <AiOutlineBulb size="2em" />
            </span>{' '}
            <span className="font-mono text-lg font-semibold">
              Daily Achievements
            </span>
          </li>
        </button>
        <button
          onClick={() => {
            history.push('/add-bets');
          }}
          className="focus-within:outline-none"
        >
          {' '}
          <li
            className={`flex items-center px-2 py-2 space-x-3 rounded-lg cursor-pointer justify-items-center hover:bg-black hover:text-white ${
              active === 'add-bets' ? 'bg-black text-white' : null
            }`}
          >
            <span>
              <AiOutlineExperiment size="2em" />
            </span>{' '}
            <span className="font-mono text-lg font-semibold">
              Needs Improvements
            </span>
          </li>
        </button>

        <button
          onClick={() => {
            history.push('/view-players');
          }}
          className="focus-within:outline-none"
        >
          <li
            className={`flex items-center px-2 py-2 space-x-3 rounded-lg cursor-pointer justify-items-center hover:bg-black hover:text-white ${
              active === 'view-players' ? 'bg-black text-white' : null
            }`}
          >
            <span>
              <AiOutlineAlert size="2em" />
            </span>{' '}
            <span className="font-mono text-lg font-semibold">
              Mistakes / Regrets
            </span>
          </li>
        </button>

        <button
          onClick={() => {
            history.push('/view-players');
          }}
          className="focus-within:outline-none"
        >
          <li
            className={`flex items-center px-2 py-2 space-x-3 rounded-lg cursor-pointer justify-items-center hover:bg-black hover:text-white ${
              active === 'view-players' ? 'bg-black text-white' : null
            }`}
          >
            <span>
              <AiOutlinePushpin size="2em" />
            </span>{' '}
            <span className="font-mono text-lg font-semibold">
              Lesson Learned
            </span>
          </li>
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
