/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
// NavBar.js
import { useState } from 'react';

import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import React from 'react';
import '../css/navbar/NavBar.css';
import '../css/index.css'
import '../css/styles.css'
import logo from "../assets/images/email.png"
import imagesPack from "../utils/ImagesContant"
import { Link } from 'react-router-dom';

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiFacebookBoxLine,
  RiLinkedinLine,
  RiGithubLine
} from 'react-icons/ri'


const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }


  return (
    // <div className=" inset-x-0 top-0 mt-0.5 h-1 bg-red-500" style={{ width: `${percent}%` }}>

    //     </div>

    <nav className="fixed left-0 right-0 top-0 z-10 flex flex-row h-20 w-full justify-between items-center bg-white py-4 shadow-md backdrop-blur-md">

      {/* Logo Container */}
      <div className='flex flex-row justify-start ml-14'>

        <div className="flex justify-start items-left w-full">
          <a className="cursor-pointer">
            <img className="h-10 object-cover" src={imagesPack.TONYLOGO} alt="Tony Logo" />
          </a>
        </div>

      </div>

      <div className='h-full flex flex-row gap-10'>
        
        
        {/* Large screen Link pagging container */}

        <div className="hidden items-center space-x-5 gap-2 lg:flex lg:items-center">

          <Link to="/about" className="p-3 h-full w-full flex flex-row items-center text-center rounded-xl font-ubuntu text-navbar_base font-navbar_bold cursor-pointer text-texte_secondary transition-colors duration-150 hover:bg-texte_secondary hover:text-backgroung_secondary">
            About
          </Link>

          <div className="flex flex-row items-center justify-center">
            <div className="w-1 h-2 rounded-sm bg-texte_secondary"></div>
          </div>

          <Link to="/about" className="p-3 h-full w-full flex flex-row items-center text-center rounded-xl font-ubuntu text-navbar_base font-navbar_bold cursor-pointer text-texte_secondary transition-colors duration-150 hover:bg-texte_secondary hover:text-backgroung_secondary">
            Portfolio
          </Link>

          <div className="flex flex-row items-center justify-center">
            <div className="w-1 h-2 rounded-sm bg-texte_secondary"></div>
          </div>

          <Link to="/about" className="p-3 h-full w-full flex flex-row items-center text-center rounded-xl font-ubuntu text-navbar_base font-navbar_bold cursor-pointer text-texte_secondary transition-colors duration-150 hover:bg-texte_secondary hover:text-backgroung_secondary">
            Service
          </Link>
          <div className="flex flex-row items-center justify-center">
            <div className="w-1 h-2 rounded-sm bg-texte_secondary"></div>
          </div>

          <Link to="/about" className="p-3 h-full w-full flex flex-row items-center text-center rounded-xl font-ubuntu text-navbar_base font-navbar_bold cursor-pointer text-texte_secondary transition-colors duration-150 hover:bg-texte_secondary hover:text-backgroung_secondary">
            Contact
          </Link>
          <div className="flex flex-row items-center justify-center">
            <div className="w-1 h-2 rounded-sm bg-texte_secondary"></div>
          </div>

        </div>

            {/* Social Links And Directions */}
        <div className="hidden lg:flex lg:items-center space-x-2">
          <Link className="p-4 h-full w-full rounded-full bg-texte_secondary flex cursor-pointer text-background_primary transition-colors duration-300 hover:bg-background_primary hover:text-texte_secondary">
            <RiBehanceLine className='h-full' />
          </Link>

          <Link className="p-4 h-full w-full flex rounded-full bg-texte_secondary text-background_primary  cursor-pointer transition-colors duration-300 hover:bg-background_primary hover:text-texte_secondary">
            <RiInstagramLine className='h-full' />
          </Link>

          <Link className="p-4 h-full w-full flex cursor-pointer rounded-full bg-texte_secondary text-background_primary font-bold transition-colors duration-300 hover:bg-background_primary hover:text-texte_secondary">
            <RiLinkedinLine className='h-full' />
          </Link>
        </div>

        
         {/* Header menu links and small screen hamburger menu */}
        <div className="flex items-center justify-between px-4 sm:px-0">
          {/* <div>
              <Link to="/">
                {activeTheme === 'dark' ? (
                  <img
                    src={logoDark}
                    className="w-36"
                    alt="Dark Logo"
                  />
                ) : (
                  <img
                    src={logoLight}
                    className="w-36"
                    alt="Dark Logo"
                  />
                )}
              </Link>
            </div> */}

          {/* Theme switcher small screen */}
          {/* <div
              onClick={() => setTheme(activeTheme)}
              aria-label="Theme Switcher"
              className="block p-3 ml-0 shadow-sm cursor-pointer sm:hidden bg-primary-light dark:bg-ternary-dark rounded-xl"
            >
              {activeTheme === 'dark' ? (
                <FiMoon className="text-xl text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light" />
              ) : (
                <FiSun className="text-xl text-gray-200 hover:text-gray-50" />
              )}
            </div> */}

          {/* Small screen hamburger menu */}
          <div className="md:hidden mr-6">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current h-7 w-7 text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>


        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? 'absolute left-0 right-0 top-20 flex flex-col z-70 m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
              : 'hidden'
          }
        >
          <Link
            to="/projects"
            className="flex flex-row mb-2 text-lg text-left text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2"
            aria-label="Projects"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="flex flex-row pt-3 mb-2 text-lg text-left border-t-2 text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="About Me"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="flex flex-row pt-3 mb-2 text-lg text-left border-t-2 text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="Contact"
          >
            Contact
          </Link>

        </div>


      </div>


    </nav>

);
}



export default NavBar;