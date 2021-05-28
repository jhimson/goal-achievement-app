import React from 'react';

// components
import Navbar from './Navbar';
import Footer from './Footer';
import Sidenav from './Sidenav';

const Layout = ({ children, active }) => (
  <div>
    <Sidenav content={children} />
    <Footer />
  </div>
);

export default Layout;
