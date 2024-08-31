/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import NavBar from './NavBar';
import '../css/Layout.css'; 
import '../css/index.css'


const Layout = ({ children }) => {
  return (
    <div className="w-screen overflow-x-hidden">
      <NavBar />
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;




{/* <div className="inline-block">
<img  
    src={manBackground} 
    alt="Second Image" 
    className="w-full h-1/2" 
    layout="fill" 
  />
  <img  
    src={heroBackground}
    alt="First Image" 
    className="w-full h-1/2" 
    layout="fill" // Utilisé par Next.js pour remplir l'espace parent
  />
  
</div> */}