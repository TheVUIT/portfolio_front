// import React from 'react';

// const ButtonCarousel = () => {
//   const buttons = Array.from({ length: 9 }, (_, i) => `Button ${i + 1}`);

//   return (
//     <div className="lg:flex lg:justify-center lg:space-x-4 overflow-hidden">
//       {/* Wrapper pour le carrousel en sm et md */}
//       <div className="flex lg:flex-none overflow-x-auto space-x-4 p-4 lg:overflow-visible">
//         {buttons.map((button, index) => (
//           <button
//             key={index}
//             className="flex-shrink-0 bg-background_primary text-texte_secondary py-2 px-4 rounded-lg hover:bg-texte_secondary hover:text-backgroung_secondary transition"
//           >
//             {button}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ButtonCarousel;






// import React, { useState } from 'react';

// const ButtonCarousel = () => {
//   const buttons = [
//     'Button 1', 'Button 2', 'Button 3', 'Button 4',
//     'Button 5', 'Button 6', 'Button 7', 'Button 8', 'Button 9'
//   ];

//   const [startIndex, setStartIndex] = useState(0);

//   // Calcule le nombre de boutons visibles en fonction de la taille de l'écran
//   const getVisibleButtons = () => {
//     if (window.innerWidth >= 1024) return buttons.length; // lg and above: all buttons
//     if (window.innerWidth >= 768) return 4; // md: 4 buttons
//     return 3; // sm and below: 3 buttons
//   };

//   const [visibleButtons, setVisibleButtons] = useState(getVisibleButtons());

//   // Mettre à jour le nombre de boutons visibles lorsque la fenêtre est redimensionnée
//   React.useEffect(() => {
//     const handleResize = () => {
//       setVisibleButtons(getVisibleButtons());
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const endIndex = startIndex + visibleButtons;

//   const handlePrev = () => {
//     setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const handleNext = () => {
//     setStartIndex((prevIndex) => Math.min(prevIndex + 1, buttons.length - visibleButtons));
//   };

//   return (
//     <div className="flex items-center space-x-2">
//       {/* Bouton Précédent */}
//       {startIndex > 0 && (
//         <button
//           className="p-2 bg-gray-300 rounded-full"
//           onClick={handlePrev}
//         >
//           &#8249;
//         </button>
//       )}

//       {/* Boutons du carrousel */}
//       <div className="flex overflow-hidden">
//         {buttons.slice(startIndex, endIndex).map((button, index) => (
//           <button
//             key={index}
//             className="bg-blue-500 text-white px-4 py-2 rounded-full mx-1"
//           >
//             {button}
//           </button>
//         ))}
//       </div>

//       {/* Bouton Suivant */}
//       {endIndex < buttons.length && (
//         <button
//           className="p-2 bg-gray-300 rounded-full"
//           onClick={handleNext}
//         >
//           &#8250;
//         </button>
//       )}
//     </div>
//   );
// };

// export default ButtonCarousel;



















// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Importez les modules requis de Swiper
// import { Navigation, Pagination, A11y } from 'swiper/modules';

// const ButtonCarousel = () => {
//   const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7', 'Button 8', 'Button 9'];

//   return (
//     <Swiper
//       modules={[Navigation, Pagination, A11y]} // Ajouter les modules nécessaires ici
//       spaceBetween={10}
//       slidesPerView={window.innerWidth >= 768 ? 4 : 3} // Affiche 4 boutons pour 'md', 3 pour 'sm'
//       navigation // Active les flèches de navigation
//       pagination={{ clickable: true }} // Active la pagination avec les points cliquables
//       style={{ width: '100%' }}
//       breakpoints={{
//         640: {
//           slidesPerView: 3, // Configurations pour sm
//         },
//         768: {
//           slidesPerView: 4, // Configurations pour md
//         },
//         1024: {
//           slidesPerView: 9, // Configurations pour lg
//         },
//       }}
//       grabCursor={true} // Change le curseur de la souris pour indiquer que l'on peut glisser
//       touchRatio={1} // Permet le glissement tactile
//     >
//       {buttons.map((button, index) => (
//         <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
//             {button}
//           </button>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default ButtonCarousel;

















// import * as React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// const ButtonCarousel=()=> {
//   const buttons = [
//     'Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 
//     'Button 6', 'Button 7', 'Button 8', 'Button 9'
//   ];

//   return (
//     <Carousel className="w-full max-w-sm">
//       <CarouselContent className="-ml-1 flex">
//         {buttons.map((button, index) => (
//           <CarouselItem key={index} className="pl-1 md:basis-1/4 sm:basis-1/3">
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex items-center justify-center p-4">
//                   <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
//                     {button}
//                   </button>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }
// export default ButtonCarousel
















import React from "react";
import '../css/index.css'
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "../components/ui/carousel"; // Assurez-vous que ces chemins sont corrects

// const ButtonCarousel = () => {
//     const buttons = [
//         'Woodworking', 'Electronics', 'Household appliances', 'Glassworks', 'Industrial',
//         'Blueprints / Prototyping', 'Architecture', 'Logo', 'Others'
//     ];

//     return (
//         <Carousel
//             opts={{
//                 align: "center",
//                 loop: false,
//                 autoplay: false,
//                 speed: 50,
//                 slidesToShow: 4, // Ajuster pour afficher plus de boutons sur les grands écrans
//                 slidesToScroll: 2
//                 //   breakpoints: {
//                 //     640: {
//                 //       slidesToShow: 1, // Afficher 1 bouton sur les petits écrans
//                 //     },
//                 //     768: {
//                 //       slidesToShow: 2, // Afficher 2 boutons sur les écrans moyens
//                 //     },
//                 //     1024: {
//                 //       slidesToShow: 3, // Afficher 3 boutons sur les écrans plus grands
//                 //     },
//                 //   },
//             }}
//             className="relative w-screen max-w-full overflow-hidden mb-8"
//         >
//             <CarouselContent className="flex flex-row space-x-4 transition-transform duration-100 ease-out">
//                 {buttons.map((button, index) => (
//                     // <CarouselItem key={index} className="w-1/3 flex-none lg:w-auto lg:flex-none lg:space-x-4">
//                     <CarouselItem key={index} className="flex-none w-32 lg:w-32 xl:w-32 2xl:w-32 px-2">
//                         {/* <button className="w-auto bg-background_primary text-texte_secondary text-nowrap text-lg font-ubuntu px-4 py-2 rounded-2xl hover:bg-texte_secondary hover:text-background_primary focus:outline-none focus:ring-2 focus:ring-texte_secondary focus:bg-texte_secondary focus:text-background_primary focus:ring-opacity-50 transition-colors duration-200">
//                                 {button}
//                             </button> */}
//                         <button className="w-auto bg-background_primary text-texte_secondary text-nowrap text-lg font-ubuntu px-4 py-2 rounded-2xl hover:bg-texte_secondary hover:text-background_primary focus:outline-none focus:ring-2 focus:ring-texte_secondary focus:bg-texte_secondary focus:text-background_primary focus:ring-opacity-50 transition-colors duration-200 overflow-hidden text-ellipsis whitespace-nowrap">
//                             {button}
//                         </button>

//                     </CarouselItem>
//                 ))}
//             </CarouselContent>
//             <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-backgroung_secondary text-texte_secondary font-ubuntu font-bold rounded-full p-2 cursor-pointer lg:hidden" />
//             <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-backgroung_secondary text-texte_secondary rounded-full p-2 cursor-pointer lg:hidden" />
//         </Carousel>
//     );
// }







// const ButtonCarousel = () => {
//     const buttons = [
//         'Woodworking', 'Electronics', 'Household appliances', 'Glassworks', 'Industrial',
//         'Blueprints / Prototyping', 'Architecture', 'Logo', 'Others'
//     ];
  
//     return (
//         <div className="w-screen">
//         <div className="w-full hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-6" >
//             {buttons.map((button, index)=> (
//                 <button key={index} className="text-texte_secondary bg-background_primary hover:bg-texte_secondary hover:text-background_primary text-md p-2 rounded-lg font-ubuntu">
//                     {button}
//                 </button>
//             ))}
//         </div>
//       <div className="relative w-full max-w-full overflow-hidden mb-8 lg:hidden">
//         <Carousel
//           opts={{
//             align: "start",
//             speed: 200, 
//           }}
//           className="relative w-full"
//         >
//           <CarouselContent className="w-screen flex flex-row justify-between space-x-2 transition-transform duration-100 ease-out">
//             {buttons.map((button, index) => (
//               <CarouselItem
//                 key={index}
//                 // className="flex-none w-32 flex-shrink-0"
//                 className="w-auto flex flex-row gap-2 cursor-pointer hover:bg-texte_secondary hover:text-background_primary"
//               >
//                 {/* <button className="w-1/2 bg-background_primary text-texte_secondary text-nowrap text-lg font-ubuntu px-4 py-2 rounded-2xl hover:bg-texte_secondary hover:text-background_primary focus:outline-none focus:ring-2 focus:ring-texte_secondary focus:bg-texte_secondary focus:text-background_primary focus:ring-opacity-50 transition-colors duration-200 overflow-hidden text-ellipsis whitespace-nowrap"> */}
//                   {button}
//                 {/* </button> */}
//                 {/* <button className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
//                     <span className="">
//                     {button}
//                     </span>
//                 </button> */}
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
//           <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
//         </Carousel>
//       </div>
//       </div>
//     );
//   };
  



const ButtonCarousel = () => {
       const buttons = [
        'Woodworking', 'Electronics', 'Household appliances', 'Glassworks', 'Industrial',
        'Blueprints / Prototyping', 'Architecture', 'Logo', 'Others'
    ];
  
    return (
      <Carousel
        opts={{
          align: "start",
          speed: 500, // Augmente la vitesse pour un défilement plus rapide
          loop: true, // Ajoute l'effet de boucle pour une meilleure UX
        }}
        className="w-full max-w-2xl overflow-hidden mb-8"
      >
        <CarouselContent className="flex space-x-4 px-4">
          {buttons.map((button, index) => (
            <CarouselItem key={index} className="flex-none w-1/3 md:w-1/4 lg:w-1/5">
              <button className="w-full bg-background_primary text-texte_secondary text-lg font-ubuntu px-4 py-2 rounded-2xl hover:bg-texte_secondary hover:text-background_primary focus:outline-none focus:ring-2 focus:ring-texte_secondary focus:bg-texte_secondary focus:text-background_primary focus:ring-opacity-50 transition-all duration-200 whitespace-nowrap">
                {button}
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors duration-300" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors duration-300" />
      </Carousel>
    );
  };
  
export default ButtonCarousel;