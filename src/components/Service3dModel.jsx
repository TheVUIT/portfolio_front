import React from 'react'

const Service3dModel = () => {
  return (
    <div className='bg-background_primary m-4 p-2 flex flex-col items-center justify-between rounded-xl lg:ml-0 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
      <p className='mt-6 font-montserrat font-extralight text-center'>
        A pack exclusively dedicated to 3D artists / designers / animators or any actor wishing to free themselves from the modeling stage while having an advanced and professional level of topology      </p>

      <div className='mt-8 w-full flex flex-row justify-center items-start border-b border-texte_secondary'>
        <p className='mb-6 text-texte_secondary text-lg font-ubuntu font-bold'>
          FEATURES
        </p>
      </div>

      <div className='flex flex-col items-center justify-center mt-8 mb-8'>
        <p className='font-ubuntu font-bold text-sm text-center' >
          Your professional 3D modeling without texture or material in the desired file format with the choice of topology
        </p>
        <p className='font-montserrat font-extralight text-sm text-center'>
          NGONs, TRIS or QUAD        </p>
        <p className='font-montserrat font-extralight text-sm text-center'>
          In .OBJ / .STL / .STEP / .STP / Parasolid (.x_b or x_t)        
        </p>
        <p className='font-montserrat font-extralight text-sm text-center'>
          As you wish        </p>
        <p className='font-montserrat font-extralight text-sm text-center'>
          (By default it will be NGON in wavefront (.OBJ))
        </p>
      </div>


      <div className="mt-10 w-full flex flex-row justify-center items-start">
        <div className="w-4/5 border-b border-texte_secondary border-opacity-15 flex justify-center">
          <p className="mb-2 text-texte_secondary text-lg font-ubuntu font-extrabold">
            PRICES
          </p>
        </div>
      </div>



      <div className='mt-4 flex flex-row items-center justify-center gap-10'>
        <div >
          <p className='font-montserrat mb-4'>Simple product</p>
          <p> <b className='font-custom text-2xl'>$ 199</b> USD </p>
        </div>

        <div>
          <p className='font-montserrat mb-4'>Complex product</p>
          <p>from <b className='font-custom text-2xl'> $ 499 </b> USD</p>
        </div>
      </div>


      <div className='mt-8  w-full flex flex-row justify-center items-start border-t border-texte_secondary border-opacity-10'>
        <p className='mt-4 mb-6 text-texte_secondary text-lg font-ubuntu font-custom'>
          ADDITIONAL OPTIONS
        </p>
      </div>

      {/* The Line */}
      <div className='w-1/12 flex flex-col items-start justify-center lg:block '>
        <div className='mb-2 mt-2 lg:mt-[52px] w-full h-[1px]  bg-texte_secondary bg-opacity-30 transform rotate-90 lg:opacity-20'>

        </div>
      </div>

      {/* <div className='flex flex-col items-center justify-center mt-5 mb-2'>
        <p className='font-montserrat font-extralight text-sm text-center'>
          &#10004; 3D model usable in the format chosen during discussions (obj, fbx, stl, dae, etc.)
        </p>

        <p className='font-ubuntu font-bold text-sm text-center'>
          + $100 (Simple)
        </p>
        <p className='font-ubuntu font-bold text-sm text-center'>
          from + $200 (Complex)
        </p>

      </div> */}

      {/* <div className='mt-2  w-full flex flex-row justify-center items-start border-b border-texte_secondary border-opacity-20'>

      </div> */}

      <div className='flex flex-col items-center justify-center mt-4'>
        <p className='font-montserrat font-extralight text-sm text-center'>
          *You will have to provide all the necessary details according to the results you wish to obtain </p>

      </div>

      <div className='mt-4 mb-5  w-full flex flex-row justify-center items-start border-b border-texte_secondary border-opacity-20'>

      </div>

      <button className="mb-4 bg-background_primary text-texte_secondary font-ubuntu px-6 py-3 rounded-lg transition-colors duration-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
        Contact / Collab
      </button>

    </div>
  )
}

export default Service3dModel