import React from 'react'
import { useEffect, useRef } from 'react'
import ServicePng from '../components/ServicePng'
import ServiceProductAds from '../components/ServiceProductAds'
import Service3dModel from '../components/Service3dModel'
import {imagesPack} from 'src/utils/ImagesContant'

const Services = () => {

 
  const sectionRef = useRef(null); // Créer une référence à la section

  
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
        className="border-2 border-yellow-500 w-full flex flex-col items-center lg:items-start lg:flex-row mt-10 bg-no-repeat bg-cover">    
            
      <div className='lg:mt-8 w-auto flex flex-col items-center border-2 border-red-600 lg:pr-9 lg:pl-9'>
          <div className='h-auto w-auto mt-0 lg:mt-[40px] p-2 bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-xl rounded-3xl'>
            24 PNG 4K
          </div>
          <p className='mt-6 font-ubuntu text-base text-nowrap'>
            4096px X 4096px
          </p>
        </div>

      {/* THE Lateral Line */}
        <div className='w-1/12 flex flex-col items-start justify-center lg:block border-2 border-red-600 '>
          <div className='mb-8 mt-10 lg:mt-[95px] w-full h-[1px]  bg-texte_secondary transform rotate-90 lg:rotate-0 lg:h-[-1px] lg:rounded-1xl '>

          </div>
        </div>

        <ServicePng
        />
      </section>


      {/* For Product Ads */}
      <section className='border-2 border-yellow-500 w-full  flex flex-col items-center lg:items-start lg:flex-row mt-10'>

      <div className='lg:mt-8 w-auto flex-shrink-0 flex flex-col items-center lg:items-start border-2 border-red-600 lg:pr-3 lg:pl-3'>
      {/* <div className='lg:mt-8 w-auto flex flex-col items-center lg:items-start border-2 border-red-600'> */}
          <div className='p-2 flex flex-col items-center justify-center h-auto w-auto bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-base lg:text-xl rounded-3xl'>
            <p className='mb-0'>PRODUCT</p>
            <p className='mb-0'>VISUALIZATION</p>
            <p className='mb-0'>/</p>
            <p>PRODUCTS ADS</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
          <p className='mt-6 font-montserrat text-base font-extralight text-nowrap'>
            Ratio
          </p>
          <p className='font-montserrat font-extralight text-sm text-nowrap text-center'>
            3840px X 2160px by default;
          </p>
          <p className='font-montserrat font-extralight text-sm text-nowrap text-center'>
             According to your needs
          </p>
          </div>
          
        </div>

        <div className='w-1/12 flex-grow border-2 border-red-600'>
        {/* <div className='w-1/12 border-2 border-red-600'> */}
          <div className='mb-8 mt-8 lg:mt-[95px] w-full flex flex-row h-[1px]  bg-texte_secondary transform rotate-90 lg:rotate-0 lg:h-[-1px] lg:rounded-1xl lg:'>

          </div>
        </div>

        <ServiceProductAds
        className="flex-shrink-0"
        />

      </section>


      {/* For 3D Modelling */}
      <section className='border-2 border-yellow-500 w-full  flex flex-col items-center lg:items-start lg:flex-row mt-10'>
        <div className='lg:mt-8 w-auto flex flex-col items-center lg:items-start border-2 border-red-600'>
          <div className='h-auto w-auto p-2 bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-xl lg:text-2xl rounded-3xl'>
            3D Modelisation
          </div>
          <div className='mt-6 flex flex-col items-center lg:text-wrap'>
            <p className='font-ubuntu font-custom text-base text-nowrap text-red-600' >HARD-SURFACE &</p>
            <p className='font-ubuntu font-custom text-base text-nowrap text-red-600'> SURFACE MODELING</p>
          </div>
        </div>

        <div className='w-1/12 border-2 border-red-600'>
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





































// import React, { useEffect, useRef, useState } from 'react';
// import ServicePng from '../components/ServicePng';
// import ServiceProductAds from '../components/ServiceProductAds';
// import Service3dModel from '../components/Service3dModel';
// import { imagesPack } from 'src/utils/ImagesContant';

// const Services = () => {
//   const sectionRef = useRef(null); // Référence pour la section
//   const pngRef = useRef(null);
//   const adsRef = useRef(null);
//   const modelRef = useRef(null);
//   const [maxWidth, setMaxWidth] = useState(0);

//   useEffect(() => {
//     const updateBackgroundImage = () => {
//       if (window.innerWidth >= 1024) {
//         if (sectionRef.current) {
//           sectionRef.current.style.backgroundImage = 'none';
//         }
//       } else {
//         if (sectionRef.current) {
//           sectionRef.current.style.backgroundImage = `url(${imagesPack.CONTACT_PROFILE_BACKGROUND})`;
//           sectionRef.current.style.backgroundSize = 'cover';
//           sectionRef.current.style.backgroundRepeat = 'no-repeat';
//           sectionRef.current.classList.add('rotate-background');
//         }
//       }
//     };

//     updateBackgroundImage();
//     window.addEventListener('resize', updateBackgroundImage);
//     return () => window.removeEventListener('resize', updateBackgroundImage);
//   }, []);

//   useEffect(() => {
//     const adjustWidths = () => {
//       if (window.innerWidth >= 1024) { // lg breakpoint
//         const widths = [
//           pngRef.current.offsetWidth,
//           adsRef.current.offsetWidth,
//           modelRef.current.offsetWidth
//         ];
//         const maxW = Math.max(...widths);
//         setMaxWidth(maxW);
//       }
//     };

//     adjustWidths();
//     window.addEventListener('resize', adjustWidths);
//     return () => window.removeEventListener('resize', adjustWidths);
//   }, []);

//   return (
//     <main className='w-full pt-28 pr-8 pl-8 lg:pr-12 lg:pl-12 flex flex-col items-start justify-center bg-background_primary lg:bg-backgroung_secondary lg:pt-32'>
//       <p className='h-auto w-auto text-4xl font-ubuntu font-bold lg:text-6xl'>
//         Services & Prices
//       </p>
//       <p className='h-auto w-auto mt-3 text-base lg:text-lg lg:mt-7'>
//         Are you a Graphic designer, Web designer, Comms, Video game designer, Artistic director, Technical illustrator, Model maker, Designer or even Computer graphics designer wishing to raise the quality level of your work?
//       </p>
//       <p className='h-auto w-auto mt-2 text-base lg:text-lg lg:mt-5'>
//         Discover the packs adapted to your needs.
//       </p>

//       {/* The Line */}
//       <div className='w-full h-0.5 flex flex-row bg-texte_secondary bg-opacity-25 lg:hidden mb-4 mt-10 pr-4 pl-4'></div>

//       {/* For PNG Product */}
//       <section
//         ref={sectionRef}
//         className="w-full flex flex-col items-center lg:items-start lg:flex-row mt-10 bg-no-repeat bg-cover"
//       >
//         <div ref={pngRef} style={{ width: maxWidth }} className='lg:mt-8 w-auto flex flex-col items-center'>
//           <div className='h-auto w-auto mt-0 lg:mt-[40px] p-2 bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-xl rounded-3xl'>
//             24 PNG 4K
//           </div>
//           <p className='mt-6 font-ubuntu text-base text-nowrap'>
//             4096px X 4096px
//           </p>
//         </div>

//         {/* THE Lateral Line */}
//         <div className='w-1/12 flex flex-col items-start justify-center lg:block '>
//           <div className='mb-8 mt-10 lg:mt-[95px] w-full h-[1px] bg-texte_secondary transform rotate-90 lg:rotate-0 lg:h-[-1px] lg:rounded-1xl'></div>
//         </div>

//         <ServicePng />
//       </section>

//       {/* For Product Ads */}
//       <section className='w-full flex flex-col items-center lg:items-start lg:flex-row mt-10'>
//         <div ref={adsRef} style={{ width: maxWidth }} className='lg:mt-8 w-auto flex flex-col items-center lg:items-start'>
//           <div className='p-2 flex flex-col items-center justify-center h-auto w-auto bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-base lg:text-xl rounded-3xl'>
//             <p className='mb-0'>PRODUCT</p>
//             <p className='mb-0'>VISUALIZATION</p>
//             <p className='mb-0'>/</p>
//             <p>PRODUCTS ADS</p>
//           </div>
//           <div className='flex flex-col items-center justify-center'>
//             <p className='mt-6 font-montserrat text-base font-extralight text-nowrap'>
//               Ratio
//             </p>
//             <p className='font-montserrat font-extralight text-sm text-nowrap text-center'>
//               3840px X 2160px by default;
//             </p>
//             <p className='font-montserrat font-extralight text-sm text-nowrap text-center'>
//               According to your needs
//             </p>
//           </div>
//         </div>

//         <div className='w-1/12'>
//           <div className='mb-8 mt-8 lg:mt-[95px] w-full flex flex-row h-[1px] bg-texte_secondary transform rotate-90 lg:rotate-0 lg:h-[-1px] lg:rounded-1xl lg:'></div>
//         </div>

//         <ServiceProductAds />
//       </section>

//       {/* For 3D Modelling */}
//       <section className='w-full flex flex-col items-center lg:items-start lg:flex-row mt-10'>
//         <div ref={modelRef} style={{ width: maxWidth }} className='lg:mt-8 w-auto flex flex-col items-center lg:items-start'>
//           <div className='h-auto w-auto p-2 bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-xl lg:text-2xl rounded-3xl'>
//             3D Modelisation
//           </div>
//           <div className='mt-6 flex flex-col items-center lg:text-wrap lg:flex-row'>
//             <p className='font-ubuntu font-custom text-base text-nowrap text-red-600'>HARD-SURFACE &</p>
//             <p className='font-ubuntu font-custom text-base text-nowrap text-red-600'> SURFACE MODELING</p>
//           </div>
//         </div>

//         <div className='w-1/12'>
//           <div className='mb-10 mt-10 lg:mt-[52px] w-full flex flex-row h-[1px] bg-texte_secondary transform rotate-90 lg:rotate-0 lg:h-[-1px] lg:rounded-1xl'></div>
//         </div>

//         <Service3dModel />
//       </section>
//     </main>
//   );
// };

// export default Services;





















// import React, { useEffect, useRef, useState } from 'react';
// import ServicePng from '../components/ServicePng';
// import ServiceProductAds from '../components/ServiceProductAds';
// import Service3dModel from '../components/Service3dModel';

// const Services = () => {
//   const modelRef = useRef(null);
//   const [maxWidth, setMaxWidth] = useState('auto');

//   useEffect(() => {
//     const updateMaxWidth = () => {
//       if (window.innerWidth >= 1024) { // lg size
//         if (modelRef.current) {
//           const modelWidth = modelRef.current.offsetWidth;
//           setMaxWidth(`${modelWidth}px`);
//         }
//       } else {
//         setMaxWidth('auto'); // Reset when not in lg screen
//       }
//     };

//     updateMaxWidth(); // Initial width calculation
//     window.addEventListener('resize', updateMaxWidth); // Update width on window resize

//     return () => {
//       window.removeEventListener('resize', updateMaxWidth);
//     };
//   }, []);

//   return (
//     <main className='w-full pt-28 pr-8 pl-8 lg:pr-12 lg:pl-12 flex flex-col items-start justify-center bg-background_primary lg:bg-backgroung_secondary lg:pt-32'>
//       <p className='h-auto w-auto text-4xl font-ubuntu font-bold lg:text-6xl'>
//         Services & Prices
//       </p>
//       <p className='h-auto w-auto mt-3 text-base lg:text-lg lg:mt-7'>
//         Are you a Graphic designer, Web designer, Comms, Video game designer, Artistic director, Technical illustrator, Model maker, Designer or even Computer graphics designer wishing to raise the quality level of your work?
//       </p>
//       <p className='h-auto w-auto mt-2 text-base lg:text-lg lg:mt-5'>
//         Discover the packs adapted to your needs.
//       </p>

//       {/* The Line */}
//       <div className='w-full h-0.5 flex flex-row bg-texte_secondary bg-opacity-25 lg:hidden mb-4 mt-10 pr-4 pl-4'></div>

//       {/* For PNG Product */}
//       <section
//         className="w-full flex flex-col items-center lg:items-start lg:flex-row mt-10"
//         style={{ width: maxWidth }} // Apply calculated width in lg
//       >
//         <div className='lg:mt-8 w-auto flex flex-col items-center'>
//           <div className='h-auto w-auto mt-0 lg:mt-[40px] p-2 bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-xl rounded-3xl'>
//             24 PNG 4K
//           </div>
//           <p className='mt-6 font-ubuntu text-base text-nowrap'>
//             4096px X 4096px
//           </p>
//         </div>
//         <ServicePng />
//       </section>

//       {/* For Product Ads */}
//       <section
//         className="w-full flex flex-col items-center lg:items-start lg:flex-row mt-10"
//         style={{ width: maxWidth }} // Apply calculated width in lg
//       >
//         <div className='lg:mt-8 w-auto flex flex-col items-center lg:items-start'>
//           <div className='p-2 flex flex-col items-center justify-center h-auto w-auto bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-base lg:text-xl rounded-3xl'>
//             <p className='mb-0'>PRODUCT</p>
//             <p className='mb-0'>VISUALIZATION</p>
//             <p className='mb-0'>/</p>
//             <p>PRODUCTS ADS</p>
//           </div>
//           <div className='flex flex-col items-center justify-center'>
//             <p className='mt-6 font-montserrat text-base font-extralight text-nowrap'>
//               Ratio
//             </p>
//             <p className='font-montserrat font-extralight text-sm text-nowrap text-center'>
//               3840px X 2160px by default;
//             </p>
//             <p className='font-montserrat font-extralight text-sm text-nowrap text-center'>
//               According to your needs
//             </p>
//           </div>
//         </div>
//         <ServiceProductAds />
//       </section>

//       {/* For 3D Modelling */}
//       <section className='w-full flex flex-col items-center lg:items-start lg:flex-row mt-10'>
//         <div ref={modelRef} className='lg:mt-8 w-auto flex flex-col items-center lg:items-start'>
//           <div className='h-auto w-auto p-2 bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-xl lg:text-2xl rounded-3xl'>
//             3D Modelisation
//           </div>
//           <div className='mt-6 flex flex-col items-center lg:text-wrap lg:flex-row'>
//             <p className='font-ubuntu font-custom text-base text-nowrap text-red-600'>HARD-SURFACE &</p>
//             <p className='font-ubuntu font-custom text-base text-nowrap text-red-600'> SURFACE MODELING</p>
//           </div>
//         </div>
//         <Service3dModel />
//       </section>
//     </main>
//   );
// };

// export default Services;


























// import React, { useEffect, useRef, useState } from 'react';
// import ServicePng from '../components/ServicePng';
// import ServiceProductAds from '../components/ServiceProductAds';
// import Service3dModel from '../components/Service3dModel';
// import { Link } from 'react-router-dom';


// const Services = () => {
//   const modelRef = useRef(null); // Référence pour Service3dModel
//   const [modelWidth, setModelWidth] = useState('auto'); // Largeur calculée en lg

//   useEffect(() => {
//     const updateModelWidth = () => {
//       if (window.innerWidth >= 1024) { // lg size
//         if (modelRef.current) {
//           // Calculer la largeur naturelle de Service3dModel en lg
//           const width = modelRef.current.offsetWidth;
//           setModelWidth(`${width}px`);
//         }
//       } else {
//         setModelWidth('auto'); // Réinitialiser pour les écrans plus petits
//       }
//     };

//     updateModelWidth(); // Calcul initial de la largeur
//     window.addEventListener('resize', updateModelWidth); // Mettre à jour lors du redimensionnement de la fenêtre

//     return () => {
//       window.removeEventListener('resize', updateModelWidth);
//     };
//   }, []);

//   return (
//     <main className='w-full pt-28 pr-8 pl-8 lg:pr-12 lg:pl-12 flex flex-col items-start justify-center bg-background_primary lg:bg-backgroung_secondary lg:pt-32'>
//       <p className='h-auto w-auto text-4xl font-ubuntu font-bold lg:text-6xl'>
//         Services & Prices
//       </p>
//       <p className='h-auto w-auto mt-3 text-base lg:text-lg lg:mt-7'>
//         Are you a Graphic designer, Web designer, Comms, Video game designer, Artistic director, Technical illustrator, Model maker, Designer or even Computer graphics designer wishing to raise the quality level of your work?
//       </p>
//       <p className='h-auto w-auto mt-2 text-base lg:text-lg lg:mt-5'>
//         Discover the packs adapted to your needs.
//       </p>

//       {/* The Line */}
//       <div className='w-full h-0.5 flex flex-row bg-texte_secondary bg-opacity-25 lg:hidden mb-4 mt-10 pr-4 pl-4'></div>

//       {/* For PNG Product */}
//       <section
//         className="w-full flex flex-col items-center lg:items-start lg:flex-row mt-10"
//         style={{ width: modelWidth }} // Appliquer la largeur calculée en lg
//       >
//         <div className='lg:mt-8 w-auto flex flex-col items-center'>
//           <div className='h-auto w-auto mt-0 lg:mt-[40px] p-2 bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-xl rounded-3xl'>
//             24 PNG 4K
//           </div>
//           <p className='mt-6 font-ubuntu text-base text-nowrap'>
//             4096px X 4096px
//           </p>
//         </div>
//         <ServicePng />
//       </section>

//       {/* For Product Ads */}
//       <section
//         className="w-full flex flex-col items-center lg:items-start lg:flex-row mt-10"
//         style={{ width: modelWidth }} // Appliquer la largeur calculée en lg
//       >
//         <div className='lg:mt-8 w-auto flex flex-col items-center lg:items-start'>
//           <div className='p-2 flex flex-col items-center justify-center h-auto w-auto bg-texte_secondary text-nowrap text-backgroung_secondary font-ubuntu text-base lg:text-xl rounded-3xl'>
//             <p className='mb-0'>PRODUCT</p>
//             <p className='mb-0'>VISUALIZATION</p>
//             <p className='mb-0'>/</p>
//             <p>PRODUCTS ADS</p>
//           </div>
//           <div className='flex flex-col items-center justify-center'>
//             <p className='mt-6 font-montserrat text-base font-extralight text-nowrap'>
//               Ratio
//             </p>
//             <p className='font-montserrat font-extralight text-sm text-nowrap text-center'>
//               3840px X 2160px by default;
//             </p>
//             <p className='font-montserrat font-extralight text-sm text-nowrap text-center'>
//               According to your needs
//             </p>
//           </div>
//         </div>
//         <ServiceProductAds />
//       </section>

//       {/* For 3D Modelling */}
//       <section className='w-full flex flex-col items-center lg:items-start lg:flex-row mt-10'>
//         <div ref={modelRef} className='lg:w-11/12 bg-background_primary m-4 p-2 flex flex-col items-center justify-between rounded-xl lg:ml-0 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
//           <p className='mt-6 font-montserrat font-extralight text-center'>
//             A pack exclusively dedicated to 3D artists / designers / animators or any actor wishing to free themselves from the modeling stage while having an advanced and professional level of topology
//           </p>
//           <div className='mt-8 w-full flex flex-row justify-center items-start border-b border-texte_secondary'>
//             <p className='mb-2 text-texte_secondary text-lg font-ubuntu font-bold'>
//               FEATURES
//             </p>
//           </div>
//           <div className='flex flex-col items-center justify-center mt-8 mb-8'>
//             <p className='font-ubuntu font-bold text-sm text-center'>
//               Your professional 3D modeling without texture or material in the desired file format with the choice of topology
//             </p>
//             <p className='font-montserrat font-extralight text-sm text-center'>
//               NGONs, TRIS or QUAD
//             </p>
//             <p className='font-montserrat font-extralight text-sm text-center'>
//               In .OBJ / .STL / .STEP / .STP / Parasolid (.x_b or x_t)
//             </p>
//             <p className='font-montserrat font-extralight text-sm text-center'>
//               As you wish
//             </p>
//             <p className='font-montserrat font-extralight text-sm text-center'>
//               (By default it will be NGON in wavefront (.OBJ))
//             </p>
//           </div>
//           <div className="mt-10 w-full flex flex-row justify-center items-start">
//             <div className="w-4/5 border-b border-texte_secondary border-opacity-15 flex justify-center">
//               <p className="mb-2 text-texte_secondary text-lg font-ubuntu font-extrabold">
//                 PRICES
//               </p>
//             </div>
//           </div>
//           <div className='mt-4 flex flex-row items-center justify-center gap-10'>
//             <div>
//               <p className='font-montserrat mb-4'>Simple product</p>
//               <p><b className='font-custom text-2xl'>$ 199</b> USD</p>
//             </div>
//             <div>
//               <p className='font-montserrat mb-4'>Complex product</p>
//               <p>from <b className='font-custom text-2xl'> $ 499 </b> USD</p>
//             </div>
//           </div>
//           <div className='mt-8 w-full flex flex-row justify-center items-start border-t border-texte_secondary border-opacity-10'>
//             <p className='mt-4 mb-6 text-texte_secondary text-lg font-ubuntu font-custom'>
//               ADDITIONAL OPTIONS
//             </p>
//           </div>
//           {/* The Line */}
//           <div className='w-1/12 flex flex-col items-start justify-center lg:block'>
//             <div className='mb-2 mt-2 lg:mt-[52px] w-full h-[1px] bg-texte_secondary bg-opacity-30 transform rotate-90 lg:opacity-20'></div>
//           </div>
//           <div className='flex flex-col items-center justify-center mt-4'>
//             <p className='font-montserrat font-extralight text-sm text-center'>
//               *You will have to provide all the necessary details according to the results you wish to obtain
//             </p>
//           </div>
//           <div className='mt-4 mb-5 w-full flex flex-row justify-center items-start border-b border-texte_secondary border-opacity-20'></div>
//           <Link to={'/contact'} className="mb-4 bg-background_primary text-texte_secondary font-ubuntu px-6 py-3 rounded-lg transition-colors duration-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
//             Contact / Collab
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Services;
