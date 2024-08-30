import React from 'react'
import ServicePng from '../components/ServicePng'


const Services = () => {
  return (
    <main className='w-screen pt-28 pr-8 pl-8 flex flex-col items-start justify-center bg-background_primary lg:bg-backgroung_secondary lg:pt-32'>
      <p className='h-auto w-auto text-4xl font-ubuntu font-bold lg:text-6xl'>
        Services & Prices
      </p>
      <p className='h-auto w-auto mt-3 text-sm lg:text-lg lg:mt-7'>
        Are you a Graphic designer, Web designer, Comms, Video game designer, Artistic director, Technical illustrator, Model maker, Designer or even Computer graphics designer wishing to raise the quality level of your work ?
      </p>
      <p className='h-auto w-auto mt-2 text-sm lg:text-lg lg:mt-5'>
        Discover the packs adapted to your needs.
      </p>

    {/* The Line */}
      <div className='w-full h-0.5 flex flex-row bg-texte_secondary bg-opacity-25 lg:hidden  mb-12 mt-10 pr-4 pl-4'>

      </div>

      {/* For PNG Product */}
      <section className='w-full flex flex-col lg:flex-row mt-10'>
        <div className='lg:mt-8 w-auto flex flex-col items-center'>
          <div className='h-auto w-auto p-1 bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-2xl rounded-3xl'>
            24 PNG 4K
          </div>
          <p className='font-ubuntu text-base text-nowrap'>
            4096px X 4096px
          </p>
        </div>

        <div className='w-1/12'>
          <div className='mt-[52px] w-full flex flex-row h-[1px]  bg-texte_secondary transform rotate-90 lg:rotate-0 lg:h-[-1px] lg:rounded-1xl'>
              
          </div>
        </div>

        <ServicePng
        />


      </section>
      
      <section className='w-full flex flex-col lg:flex-row mt-10'>
        <div className='lg:mt-8 w-auto flex flex-col items-center'>
          <div className='h-auto w-auto p-1 bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-2xl rounded-3xl'>
            24 PNG 4K
          </div>
          <p className='font-ubuntu text-base text-nowrap'>
            4096px X 4096px
          </p>
        </div>

        <div className='w-1/12'>
          <div className='mt-[52px] w-full flex flex-row h-[1px]  bg-texte_secondary transform rotate-90 lg:rotate-0 lg:h-[-1px] lg:rounded-1xl'>
              
          </div>
        </div>

        <ServicePng
        />


      </section>



      {/* For Product Ads */}
      <section>

      </section>

      {/* For 3D Modelling */}
      <section>

      </section>

    </main>
  )
}

export default Services