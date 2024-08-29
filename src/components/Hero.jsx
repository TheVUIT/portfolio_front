/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Hero() {
  return (
    <div className='w-screen flex flex-col items-start bg-backgroung_secondary'>


      <div className='w-full flex justify-center items-center text-center mb-12'>
        <p className='flex flex-row items-center justify-center text-center text-6xl font-montserrat font-bold md:text-5xl sm:text-4xl'>
          A unique and tailor-made 3D universe for each client
        </p>
      </div>


      <div className='w-full flex justify-center items-center text-center mb-12'>
        <p className='text-2xl font-montserrat font-bold'>
          Elevate your designs and captivate your audience
        </p>
      </div>

      <div className='w-full hidden lg:flex lg:flex-row justify-center items-center text-center'>
        <p className='text-xl font-montserrat'>
          4K PNGs & PRODUCT VISUALIZATION FOR
        </p>
      </div>

    </div>
  );
};

export default Hero;