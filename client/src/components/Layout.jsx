import React from 'react';

// components
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidenav from './Sidenav';
import Sidebar from './Sidebar';

const Layout = ({ children, active }) => {
  // ! GLOBAL STATE VARIABLE (STORE)
  const token = useSelector(
    (state) => state.userLoggedIn.userLoggedInInfo.token
  );
  // ! -------------------------------------------->
  return (
    <>
      {token === null ? (
        <div>
          <Navbar /> {children} <Footer />
        </div>
      ) : (
        <div>
          <Sidenav content={children} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
