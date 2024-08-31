/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'



function Hero() {

  const items = [
    'Producers', 'Graphic designer', 'Web designer', 'Packaging designers', 'Products presentations',
    'Artistic director', 'Video game designer', 'Technical illustrator', 'Model maker', 'Designers', 'Computer graphics designers', 'Etc'
  ];

  return (
    <div className='mt-8 w-screen flex flex-col items-center bg-backgroung_secondary'>

      <div className='w-full flex justify-center items-center text-center mt-8 lg:mt-16 mb-4'>
        <p className='flex flex-row items-center justify-center text-center text-4xl lg:text-6xl md:text-5xl font-montserrat font-bold'>
          A unique and tailor-made 3D universe for each client
        </p>
      </div>

      <div className='w-full flex justify-center items-center text-center mb-12'>
        <p className='text-2xl font-montserrat font-extralight'>
          Elevate your designs and captivate your audience
        </p>
      </div>

      <div className='w-full hidden lg:flex lg:flex-row justify-center items-center text-center'>
        <p className='text-base font-montserrat'>
          4K PNGs & PRODUCT VISUALIZATION FOR
        </p>
      </div>

      <div className='w-full hidden lg:flex lg:flex-row justify-between items-center gap-2 p-8'>
        {items.map((item, index) =>(
          <div key={index} className='text-xs font-extralight font-montserrat'> <b className=''>&bull;</b> {item}</div>
        ))}
      </div>

    </div>
  );
};

export default Hero;