import React from 'react'
import imagesPack from 'src/utils/ImagesContant'
const ServicePng = () => {
  const { service, service_png_first, service_png_second } = imagesPack;

  return (
    <div className=' bg-background_primary m-4 p-1 flex flex-col items-center justify-between rounded-xl lg:ml-0 lg:mt-6  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
      <p className='mt-6 font-montserrat font-extralight text-center'>
        A pack dedicated to graphic designers, ui, layout artists and any actors looking to use qualitative 3D renderings without background for various projects
      </p>

      <div className='mt-12 w-full flex flex-row justify-center items-start border-b border-texte_secondary border-opacity-20'>
        <p className='mb-2 text-texte_secondary text-lg font-ubuntu font-bold'>
          FEATURES
        </p>
      </div>


      <div className='flex flex-col items-center justify-center mt-4 mb-4'>
        <p className='font-ubuntu font-bold text-sm text-center' >
          20 viewing angles png
        </p>
        <p className='font-montserrat font-extralight text-sm text-center'>
          (18 different angle png renders, no background, 4K, full textured + 02 in gray mode)
        </p>
      </div>

      <div className='hidden lg:flex lg:flex-row justify-center gap-12 flex-wrap w-full'>
        {service.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center m-2" 
            style={{
              width: '54px',
              height: '69px',
            }}
          >
            <div
              className="flex-none"
              style={{
                width: '54px',
                height: '69px',
                backgroundImage: `url(${item.src})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
            <span className="mt-1 text-[12px] text-nowrap text-center">{item.label}</span> 
          </div>
        ))}
      </div>
        
      {/* The Line */}
      <div className='w-1/12 flex flex-col items-start justify-center lg:block '>
        <div className='mb-1 mt-1 lg:mt-[52px] w-full h-[1px]  bg-texte_secondary transform rotate-90 lg:opacity-15'>

        </div>
      </div>


      <div className='flex flex-col items-center justify-center mt-3 mb-3'>
        <p className='font-ubuntu font-bold text-sm text-center'>
          02 png in wireframe mode with the same angles as the grays
        </p>
        <p className='font-montserrat font-extralight text-sm text-center'>
          (Very useful for certain types of design)
        </p>
      </div>

      <div className='hidden lg:flex lg:flex-row justify-center gap-12 flex-wrap w-full'>
        {service_png_first.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center m-2" 
            style={{
              width: '54px',
              height: '69px',
            }}
          >
            <div
              className="flex-none"
              style={{
                width: '54px',
                height: '69px',
                backgroundImage: `url(${item.src})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
            <span className="mt-1 text-[12px] text-nowrap text-center">{item.label}</span> 
          </div>
        ))}
      </div>

      {/* The Line */}
      <div className='w-1/12 flex flex-col items-start justify-center lg:block '>
        <div className='mb-1 mt-1 lg:mt-[52px] w-full h-[1px]  bg-texte_secondary transform rotate-90 lg:opacity-15'>

        </div>
      </div>

      <div className='flex flex-col items-center justify-center mt-3 mb-3'>
        <p className='font-ubuntu font-bold text-sm text-center'>
          02 others png to illustrate product color variations
        </p>
        <p className='font-montserrat font-extralight text-sm text-center'>
          (Random viewing angles)
        </p>
      </div>


      <div className='hidden lg:flex lg:flex-row justify-center gap-12 flex-wrap w-full'>
        {service_png_second.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center m-2" 
            style={{
              width: '54px',
              height: '69px',
            }}
          >
            <div
              className="flex-none"
              style={{
                width: '54px',
                height: '69px',
                backgroundImage: `url(${item.src})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
            <span className="mt-1 text-[12px] text-nowrap text-center">{item.label}</span> 
          </div>
        ))}
      </div>


      <div className="mt-10 w-full flex flex-row justify-center items-start">
        <div className="w-4/5 border-b border-texte_secondary border-opacity-15 flex justify-center">
          <p className="mb-2 text-texte_secondary text-lg font-ubuntu font-extrabold">
            PRICES
          </p>
        </div>
      </div>



      <div className='mt-4 flex flex-row items-center justify-center gap-10 lg:w-full lg:justify-around border-2 border-green-700'>
        <div className='flex flex-col items-start'>
          <p className='font-montserrat mb-4 lg: lg:text-lg lg:font-ubuntu'>Simple product <b className='text-lg font-ubuntu'>presentation</b></p>
          <p className=''>No Script</p>
          <p>(Gray Screen or Minimalist background</p>
          <p>You can also choose a color theme)</p>
          <p> <b className='font-custom text-2xl'>$ 199</b> USD </p>
        </div>

        <div>
          <p className='font-montserrat mb-4 lg:text-lg lg:font-ubuntu'>Complex product <b>visualisation</b></p>
          <p>Detailed scene as desired</p>
          <p>(Complex furniture, Vehicles,</p>
          <p>Object association with complex scene,...)</p>
          <p>from <b className='font-custom text-2xl'> $ 499 </b> USD</p>
        </div>
      </div>


      <div className='mt-8  w-full flex flex-row justify-center items-start border-t border-texte_secondary border-opacity-25'>
        <p className='mt-4 mb-6 text-texte_secondary text-lg font-ubuntu font-custom'>
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

      <div className='mt-2  w-full flex flex-row justify-center items-start border-b border-texte_secondary border-opacity-20'>

      </div>

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

export default ServicePng