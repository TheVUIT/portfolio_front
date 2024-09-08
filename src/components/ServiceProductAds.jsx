import React from 'react'
import { Link } from 'react-router-dom';


const ServiceProductAds = () => {
  return (
    <div className='lg:w-11/12 bg-background_primary m-4 p-2 flex flex-col items-center justify-between rounded-xl lg:ml-0 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
      <p className='mt-6 font-montserrat font-extralight text-center p-5'>
      A pack that can be used not only by graphic designers, UI, layout artists but also by salespeople, comms, producers/designers themselves for their work      </p>

      <div className='mt-8 w-full flex flex-row justify-center items-start border-b border-texte_secondary border-opacity-20'>
        <p className='mb-2 text-texte_secondary text-lg font-ubuntu font-bold'>
          FEATURES
        </p>
      </div>

      <div className='flex flex-col items-center justify-center mt-4 mb-8'>
        <p className='font-ubuntu font-bold text-sm text-center' >
        02 different scene renderings (16:9 ratio)
        </p>
        <p className='font-montserrat font-extralight text-sm text-center'>
        Visualisation, Product + Sets and background with texts (or without) according to your description / script
        (if this is specified)
        </p>
      </div>


      <div className='mt-6  w-full flex flex-row justify-center items-start border-b border-texte_secondary border-opacity-20'>
        <p className='mb-2 text-texte_secondary text-lg font-ubuntu font-bold'>
          PRICES
        </p>
      </div>


      <div className='mt-6 flex flex-row items-center justify-center gap-10 lg:w-full lg:justify-around'>
        <div className='flex flex-col items-start'>
          <p className='font-montserrat mb-4 lg: lg:text-lg lg:font-ubuntu'>Simple product <b className=' hidden lg:flex text-lg font-ubuntu'>presentation</b></p>
          <p className='hidden lg:flex'>No Script</p>
          <p className='hidden lg:flex'>(Gray Screen or Minimalist background</p>
          <p className='hidden lg:flex'>You can also choose a color theme)</p>
          <p> <b className='font-custom text-2xl'>$99 </b>USD</p>
        </div>

        <div className='flex flex-col items-end'>
          <p className='font-montserrat mb-4 lg: lg:text-lg lg:font-ubuntu'>Complex product  <b className=' hidden lg:flex text-lg font-ubuntu'>visualisation</b></p>
          <p className='hidden lg:flex'>Detailed scene as desired</p>
          <p className='hidden lg:flex' >(Complex furniture, Vehicles,</p>
          <p className='hidden lg:flex'>Object association with complex scene,...)</p>
          <p>from <b className='font-custom text-2xl'> $199 </b>USD</p>
        </div>
      </div>


      <div className='mt-8  w-full flex flex-row justify-center items-start border-t border-texte_secondary border-opacity-25'>
        <p className='mt-4 mb-6 text-texte_secondary text-lg font-ubuntu font-extrabold'>
          ADDITIONAL OPTIONS
        </p>
      </div>

       {/* The Line */}
       <div className='w-1/12 flex flex-col items-start justify-center lg:block '>
        <div className='mb-2 mt-2 lg:mt-[52px] w-full h-[1px]  bg-texte_secondary bg-opacity-30 transform rotate-90 lg:opacity-15'>

        </div>
      </div> 

      <div className='flex flex-col items-center justify-center mt-5 mb-2'>
        <p className='font-montserrat font-extralight text-sm text-center'>
          &#10004; 3D model usable in the format chosen during discussions (obj, fbx, stl, dae, etc.)
        </p>

        <p className='font-ubuntu font-bold text-sm text-center'>
          + $100 (Simple)
        </p>
        <p className='font-ubuntu font-bold text-sm text-center'>
          from + $200 (Complex)
        </p>

      </div>

    

      <div className='flex flex-col items-center justify-center mt-8'>
        <p className='font-montserrat font-extralight text-sm text-center'>
          *You will have to provide all the necessary details according to the results you wish to obtain </p>

      </div>

      <div className='mt-2 mb-5  w-full flex flex-row justify-center items-start border-b border-texte_secondary border-opacity-20'>

      </div>

      <Link to={'/contact'} className="mb-4 bg-background_primary text-texte_secondary font-ubuntu px-6 py-3 rounded-lg transition-colors duration-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:text-backgroung_secondary hover:bg-texte_secondary">
        Contact / Collab
      </Link>

    </div>
  )
}

export default ServiceProductAds