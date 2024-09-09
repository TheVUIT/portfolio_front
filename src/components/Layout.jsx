/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import NavBar from './NavBar';
import '../css/Layout.css'; 
import '../css/index.css'
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div className="w-screen ">
      <NavBar />
      <div className="max-w-full overflow-x-hidden">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;

