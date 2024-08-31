/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../css/Layout.css'; // Ensure you're importing the CSS
import heroBackground from '../assets/images/hero-background.png';
import manBackground from '../assets/images/man-background.jpg';
import '../css/index.css'

      {/* <main className='layout-background h-full'>
      <div className='bg-gray-400 h-32'> */}

const Layout = ({ children }) => {
  return (
    <div>
     <NavBar/>
     <div className='w-screen'>
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