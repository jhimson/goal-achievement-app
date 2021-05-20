/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegUserCircle } from 'react-icons/fa';
import LOGO from '../assets/images/j•p.svg';
// import {Link as ScrollLink} from 'react-scroll'

//! ACTIONS
import { userLogout } from '../redux/actions/userActions';
// !------------------------------------------------------------------------>

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();

  //! COMPONENT STATE
  const [toggle, setToggle] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  // !---------------------------------------------------------------------->

  // ! GLOBAL STATE VARIABLES
  const email = useSelector((state) => state.userLogin.userLoginInfo.email);
  // !---------------------------------------------------------------------->

  useEffect(() => {
    if (email !== null) setUserEmail(email);
  }, [email]);
  return (
    //! Main navbar wrapper ~~~START
    <div className="flex flex-col justify-between py-3 mx-auto bg-black lg:flex-row lg:p-0 navbar-container">
      <div className="flex items-center justify-between lg:mx-21">
        <div className="flex cursor-pointer lg:animate-float">
          <Link to="/">
            <img src={LOGO} alt="" className="w-24 h-24 lg:h-32 lg:w-32" />
          </Link>
        </div>
        {location.pathname !== '/' ? (
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } flex-col justify-center lg:items-center pb-4 lg:pb-0 lg:flex`}
          >
            <nav>
              <ul className="flex flex-col gap-5 px-8 text-white lg:flex-row">
                {/* <li><ScrollLink to='projects' smooth={true}><a href="" className='nav-item'>Projects</a></ScrollLink></li> */}
                {location.pathname !== '/dashboard' ? (
                  <li>
                    <a href="" className="text-2xl nav-item">
                      Dashboard
                    </a>
                  </li>
                ) : null}
              </ul>
            </nav>
          </div>
        ) : null}
        <div className="flex mr-4 lg:hidden">
          {toggle ? (
            <AiOutlineClose
              size="3em"
              className="font-bold text-red-600 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <GiHamburgerMenu
              size="3em"
              className="font-extrabold text-white cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>

      {location.pathname !== '/' ? (
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } flex-col justify-center lg:items-center pb-4 lg:pb-0 lg:flex`}
        >
          <nav>
            <ul className="flex flex-col items-center px-8 space-x-5 text-white lg:flex-row">
              {/* <li><ScrollLink to='projects' smooth={true}><a href="" className='nav-item'>Projects</a></ScrollLink></li> */}
              <li>
                <span className="flex space-x-2">
                  <FaRegUserCircle size="3em" />
                  {userEmail !== null ? (
                    <p className="self-center">{userEmail}</p>
                  ) : null}
                </span>
              </li>
              <li>
                <button
                  className="text-2xl text-red-500 nav-item"
                  onClick={() => dispatch(userLogout())}
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </div> //! Main navbar wrapper ~~~END
  );
};

export default Navbar;
