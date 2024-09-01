import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ServicePng from '../components/ServicePng'
import ServiceProductAds from '../components/ServiceProductAds'
import Service3dModel from '../components/Service3dModel'
import imagesPack from 'src/utils/ImagesContant'

const Services = () => {

  // const [backgroundImageClass, setBackgroundImageClass] = useState('bg-no-repeat bg-cover');

  // useEffect(() => {
  //   const updateBackgroundImage = () => {
  //     if (window.matchMedia('(min-width: 1024px)').matches) {
  //       // Si l'écran est large ou plus grand (taille lg ou plus)
  //       setBackgroundImageClass('bg-none');
  //     } else {
  //       // Si l'écran est plus petit que large
  //       setBackgroundImageClass('bg-no-repeat bg-cover');
  //     }
  //   };

  //   // Vérifier au montage initial
  //   updateBackgroundImage();

  //   // Ajouter un écouteur d'événement pour les changements de taille d'écran
  //   window.addEventListener('resize', updateBackgroundImage);

  //   // Nettoyer l'écouteur d'événement lors du démontage
  //   return () => window.removeEventListener('resize', updateBackgroundImage);
  // }, []);
  const sectionRef = useRef(null); // Créer une référence à la section

  // useEffect(() => {
  //   const updateBackgroundImage = () => {
  //     if (window.innerWidth >= 1024) {
  //       // Si la largeur de l'écran est de 1024px ou plus (taille lg)
  //       if (sectionRef.current) {
  //         sectionRef.current.style.backgroundImage = 'none';
  //       }
  //     } else {
  //       // Si la largeur de l'écran est moins de 1024px
  //       if (sectionRef.current) {
  //         sectionRef.current.style.backgroundImage = `url(${imagesPack.CONTACT_PROFILE_BACKGROUND})`;
  //       }
  //     }
  //   };

  //   // Initialement mettre à jour l'image de fond
  //   updateBackgroundImage();

  //   // Ajouter un écouteur d'événement pour les changements de taille de fenêtre
  //   window.addEventListener('resize', updateBackgroundImage);

  //   // Supprimer l'écouteur d'événement lors du démontage du composant
  //   return () => window.removeEventListener('resize', updateBackgroundImage);
  // }, []);
  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth >= 1024) {
        if (sectionRef.current) {
          sectionRef.current.style.backgroundImage = 'none';
        }
      } else {
        if (sectionRef.current) {
          sectionRef.current.style.backgroundImage = `url(${imagesPack.CONTACT_PROFILE_BACKGROUND})`;
          sectionRef.current.style.backgroundSize = 'cover';
          sectionRef.current.style.backgroundRepeat = 'no-repeat';
          // Utilisation d'un pseudo-élément pour appliquer la rotation
          sectionRef.current.classList.add('rotate-background');
        }
      }
    };

    updateBackgroundImage();
    window.addEventListener('resize', updateBackgroundImage);
    return () => window.removeEventListener('resize', updateBackgroundImage);
  }, []);


  return (
    <main className='w-full pt-28 pr-8 pl-8 lg:pr-12 lg:pl-12 flex flex-col items-start justify-center bg-background_primary lg:bg-backgroung_secondary lg:pt-32'>
      <p className='h-auto w-auto text-4xl font-ubuntu font-bold lg:text-6xl'>
        Services & Prices
      </p>
      <p className='h-auto w-auto mt-3 text-base lg:text-lg lg:mt-7'>
        Are you a Graphic designer, Web designer, Comms, Video game designer, Artistic director, Technical illustrator, Model maker, Designer or even Computer graphics designer wishing to raise the quality level of your work ?
      </p>
      <p className='h-auto w-auto mt-2 text-base lg:text-lg lg:mt-5'>
        Discover the packs adapted to your needs.
      </p>

      {/* The Line */}
      <div className='w-full h-0.5 flex flex-row bg-texte_secondary bg-opacity-25 lg:hidden  mb-4 mt-10 pr-4 pl-4'>

      </div>

      {/* For PNG Product */}
      <section
        // className= {`w-full flex flex-col items-center lg:items-start lg:flex-row mt-10 bg-no-repeat bg-cover lg:bg-none ${backgroundImageClass}}`}
        ref={sectionRef}
        className="w-full flex flex-col items-center lg:items-start lg:flex-row mt-10 bg-no-repeat bg-cover"
        // style={{ backgroundImage: `url(${imagesPack.CONTACT_PROFILE_BACKGROUND})` }}
      >        <div className='lg:mt-8 w-auto flex flex-col items-center'>
          <div className='h-auto w-auto p-2 bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-xl rounded-3xl'>
            24 PNG 4K
          </div>
          <p className='mt-6 font-ubuntu text-base text-nowrap'>
            4096px X 4096px
          </p>
        </div>

        <div className='w-1/12 flex flex-col items-start justify-center lg:block '>
          <div className='mb-8 mt-10 lg:mt-[52px] w-full h-[1px]  bg-texte_secondary transform rotate-90 lg:rotate-0 lg:h-[-1px] lg:rounded-1xl '>

          </div>
        </div>

        <ServicePng
        />

      </section>


      {/* For Product Ads */}

      <section className='w-full flex flex-col items-center lg:items-start lg:flex-row mt-10'>
        <div className='lg:mt-8 w-auto flex flex-col items-center'>
          <div className='p-2 flex flex-col items-center justify-center h-auto w-auto bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-base lg:text-xl rounded-3xl'>
            <p className='mb-0'>PRODUCT</p>
            <p className='mb-0'>VISUALIZATION</p>
            <p className='mb-0'>/</p>
            <p>PRODUCTS ADS</p>
          </div>
          <p className='mt-6 font-montserrat text-base font-extralight text-nowrap'>
            Ratio
          </p>
          <p className='font-montserrat font-extralight text-sm text-nowrap text-center'>
            3840px X 2160px by default; According to your needs
          </p>
        </div>

        <div className='w-1/12'>
          <div className='mb-8 mt-8 lg:mt-[95px] w-full flex flex-row h-[1px]  bg-texte_secondary transform rotate-90 lg:rotate-0 lg:h-[-1px] lg:rounded-1xl lg:'>

          </div>
        </div>

        <ServiceProductAds
        />

      </section>


      {/* For 3D Modelling */}
      <section className='w-full flex flex-col items-center lg:items-start lg:flex-row mt-10'>
        <div className='lg:mt-8 w-auto flex flex-col items-center lg:items-start'>
          <div className='h-auto w-auto p-2 bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-xl lg:text-2xl rounded-3xl'>
            3D Modelisation
          </div>
          <div className='mt-6 flex flex-col items-center lg:text-wrap lg:flex-row'>
            <p className='font-ubuntu font-custom text-base text-nowrap text-red-600' >HARD-SURFACE &</p>
            <p className='font-ubuntu font-custom text-base text-nowrap text-red-600'> SURFACE MODELING</p>            
          </div>
        </div>

        <div className='w-1/12'>
          <div className='mb-10 mt-10 lg:mt-[52px] w-full flex flex-row h-[1px]  bg-texte_secondary transform rotate-90 lg:rotate-0 lg:h-[-1px] lg:rounded-1xl '>

          </div>
        </div>

        <Service3dModel
        />

      </section>


    </main>
  )
}

export default Services