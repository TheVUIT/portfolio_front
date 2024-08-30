import React from 'react'

const ServiceProductAds = () => {
  return (
    <div className='bg-background_primary m-4 p-2 flex flex-col items-center justify-between rounded-xl lg:ml-0 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
      <p>
      A pack that can be used not only by graphic designers, UI, layout artists but also by salespeople, comms, producers/designers themselves for their work      </p>

      <div className='mt-8 w-full flex flex-row justify-center items-start border-b border-texte_secondary'>
        <p className='mb-6 text-texte_secondary text-lg font-ubuntu font-bold'>
          FEATURES
        </p>
      </div>

      <div className='flex flex-col items-center justify-center mt-8 mb-8'>
        <p className='font-ubuntu font-bold text-sm text-center' >
        02 different scene renderings (16:9 ratio)
        </p>
        <p className='text-sm text-center'>
        Visualisation, Product + Sets and background with texts (or without) according to your description / script
        (if this is specified)
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
          <p> <b>$ 199 </b>USD</p>
        </div>

        <div>
          <p className=''>Complex product</p>
          <p>from <b> $ 499 </b>USD</p>
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

export default ServiceProductAds