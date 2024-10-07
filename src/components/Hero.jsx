/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { getUserData } from "../services/userService"

function Hero() {
  const items = [
    "Producers",
    "Graphic designer",
    "Web designer",
    "Packaging designers",
    "Products presentations",
    "Artistic director",
    "Video game designer",
    "Technical illustrator",
    "Model maker",
    "Designers",
    "Computer graphics designers",
    "Etc"
  ]
  const [userData, setUserData] = useState({})


  useEffect(() => {
    const fectUserData = async () => {
      const actualUser = await getUserData()
      setUserData(actualUser)
    };
    fectUserData();
  }, [])


  return (
    <div className='mt-20 lg:mt-32 mb-5 lg:mb-0 max-w-full flex flex-col items-center bg-backgroung_secondary overflow-x-hidden'>

      <div className='w-full flex justify-center items-center text-center mt-8 lg:mt-16 mb-12'>
        <p className='flex flex-row items-center justify-center text-center text-3xl lg:text-6xl md:text-5xl font-montserrat font-bold'>
          {/* A unique and tailor-made 3D universe for you */}
          {userData.textInHomeFirst}
        </p>
      </div>

      <div className='w-full flex justify-center items-center text-center mb-12 lg:mb-2'>
        <p className='text-xl  lg:text-2xl font-montserrat font-extralight'>
          {/* Elevate your designs and captivate your audience */}
          {userData.textInHomeSecond}
        </p>
      </div>

      <div className='w-full hidden lg:flex lg:flex-row justify-between items-center gap-2 p-4'>
        {items.map((item, index) => (
          <div key={index} className='text-xs font-extralight font-montserrat'> <b className=''>&bull;</b> {item}</div>
        ))}
      </div>

    </div>
  );
};

export default Hero;