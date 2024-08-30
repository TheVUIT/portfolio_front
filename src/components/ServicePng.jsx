import React from 'react'

const ServicePng = () => {
  return (
    <div className='bg-background_primary m-4 p-2 flex flex-col items-center justify-between rounded-xl  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
      <p>
        A pack dedicated to graphic designers, ui, layout artists and any actors looking to use qualitative 3D renderings without background for various projects
      </p>

      <div className='mt-8 w-full flex flex-row justify-center items-start border-b border-texte_secondary'>
        <p className='mb-6 text-texte_secondary text-lg font-ubuntu font-bold'>
          FEATURES
        </p>
      </div>

      <div className='flex flex-col items-center justify-center mt-8 mb-8'>
        <p className='font-ubuntu font-bold text-sm text-center' >
          20 viewing angles png
        </p>
        <p className='text-sm text-center'>
          (18 different angle png renders, no background, 4K, full textured + 02 in gray mode)
        </p>
      </div>


      <div className='flex flex-col items-center justify-center mt-8 mb-8'>
        <p className='font-ubuntu font-bold text-sm text-center'>
          02 png in wireframe mode with the same angles as the grays
        </p>
        <p className='text-sm text-center'>
          (Very useful for certain types of design)
        </p>
      </div>

      <div className='flex flex-col items-center justify-center mt-8 mb-8'>
        <p className='font-ubuntu font-bold text-sm text-center'>
          02 others png to illustrate product color variations
        </p>
        <p className='text-sm text-center'>
          (Random viewing angles)
        </p>
      </div>


      <div className='mt-8  w-full flex flex-row justify-center items-start border-b border-texte_secondary'>
        <p className='mb-6 text-texte_secondary text-lg font-ubuntu font-bold'>
          PRICES
        </p>
      </div>


      <div className='flex flex-row items-center justify-center gap-10'>
        <div >
          <p className=''>Simple product</p>
          <p> <b>$ 199</b> </p>
        </div>

        <div>
          <p className=''>Complex product</p>
          <p>from <b> $ 499</b></p>
        </div>
      </div>


      <div className='mt-8  w-full flex flex-row justify-center items-start'>
        <p className='mb-6 text-texte_secondary text-lg font-ubuntu font-bold'>
          ADDITIONAL OPTIONS
        </p>
      </div>

      <div className='mt-8  w-full flex flex-row justify-center items-start border-b border-texte_secondary'>

      </div>

      <div className='mt-8  w-full flex flex-row justify-center items-start border-b border-texte_secondary'>

      </div>

      <button className="bg-background_primary text-texte_secondary font-ubuntu px-6 py-3 rounded-lg transition-colors duration-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
        Contact / Collab
      </button>

    </div>
  )
}

export default ServicePng