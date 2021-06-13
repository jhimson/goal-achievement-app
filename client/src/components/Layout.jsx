import React from 'react';

// components
import { useSelector } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

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
          <ToastProvider>
            <Sidenav content={children} active={active} />
            <Footer />
          </ToastProvider>
        </div>
      )}
    </>
  );
};

export default Layout;
