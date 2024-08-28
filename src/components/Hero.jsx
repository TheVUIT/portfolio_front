/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Hero() {
  return (
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        {/* <div className="w-full h-64 lg:w-1/2 lg:h-auto relative rounded-2xl"> 
          <img 
            className="h-full w-full object-cover rounded-2xl" 
            src="https://picsum.photos/id/1018/2000" 
            alt="Winding mountain road" 
          />
        </div>
        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 rounded-2xl">
          <div className="flex flex-col p-12 md:px-16 "> */}
            <h2 className="text-2xl font-bold uppercase text-primary lg:text-4xl">INTRODUCTION </h2>
            
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>

            {/* <div className="mt-8">
              <a 
                href="#"
                className="rounded-2xl inline-block w-full text-center text-lg font-medium text-gray-100 bg-primary border-solid border-2 border-gray-600 py-4 px-10 hover:bg-sky-600 hover:shadow-md md:w-48">
                Allez à 
              </a>
            </div>
          </div>
        </div> */}
      </div>
  );
};

export default Hero;