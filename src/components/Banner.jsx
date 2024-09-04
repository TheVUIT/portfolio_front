// import React from 'react'
// import {imagesPack} from '../utils/ImagesContant';

// import { useEffect, useRef, useState } from 'react';

// const Banner = () => {
//     const { banner } = imagesPack;
//     const mainRef = useRef(null);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0); // State of this image

//     useEffect(() => {
//         if (mainRef.current && banner.length > 0) {

//             const handleResize = () => {
//                 const image = new Image();
//                 image.src = banner[currentImageIndex].src; // Utiliser la source de l'image actuelle pour calculer la hauteur
//                 image.onload = () => {
//                     const aspectRatio = image.height / image.width;
//                     const containerWidth = mainRef.current.offsetWidth;
//                     mainRef.current.style.height = `${containerWidth * aspectRatio}px`;
//                 };
//             };

//             handleResize();

//             window.addEventListener('resize', handleResize);

//             return () => window.removeEventListener('resize', handleResize);
//         }
//     }, [currentImageIndex, banner]); // Recalculer lors du changement d'image

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banner.length); 
//         }, 3000); 
//         return () => clearInterval(intervalId); // Cleaning intervalle
//     }, [banner.length]);

//     return (
//         <div className='mt-16 lg:mt-10 w-full p-4 md:p-10 overflow-hidden'>
//             <main 
//                 ref={mainRef}
//                 className="w-full bg-cover bg-top transition-all duration-700 ease-in-out"
//                 style={{ 
//                     backgroundImage: `url(${banner[currentImageIndex].src})`, // Utiliser la source de l'image actuelle
//                     backgroundSize: 'cover', // Ajuster la taille de l'image pour couvrir le conteneur
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center' // Centrer l'image
//                 }}
//             >
//             </main>
//         </div>
//     );
// };

// export default Banner;








// import React, { useEffect, useRef, useState } from 'react';
// import { imagesPack } from '../utils/ImagesContant';

// const Banner = () => {
//   const { banner } = imagesPack;
//   const mainRef = useRef(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [imagesLoaded, setImagesLoaded] = useState(false); // État pour suivre si toutes les images sont chargées

//   useEffect(() => {
//     const preloadImages = () => {
//       let loadedImagesCount = 0;
//       banner.forEach((imageData) => {
//         const img = new Image();
//         img.src = imageData.src;
//         img.onload = () => {
//           loadedImagesCount += 1;
//           if (loadedImagesCount === banner.length) {
//             setImagesLoaded(true); // Toutes les images sont chargées
//           }
//         };
//         img.onerror = () => {
//           loadedImagesCount += 1;
//           if (loadedImagesCount === banner.length) {
//             setImagesLoaded(true); // Considérez les erreurs comme des chargements pour éviter les blocages
//           }
//         };
//       });
//     };

//     preloadImages();
//   }, [banner]);

//   useEffect(() => {
//     if (imagesLoaded) {
//       const handleResize = () => {
//         const image = new Image();
//         image.src = banner[currentImageIndex].src;
//         image.onload = () => {
//           const aspectRatio = image.height / image.width;
//           const containerWidth = mainRef.current.offsetWidth;
//           mainRef.current.style.height = `${containerWidth * aspectRatio}px`;
//         };
//       };

//       handleResize();
//       window.addEventListener('resize', handleResize);

//       return () => window.removeEventListener('resize', handleResize);
//     }
//   }, [currentImageIndex, imagesLoaded, banner]);

//   useEffect(() => {
//     if (imagesLoaded) {
//       const intervalId = setInterval(() => {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banner.length);
//       }, 3000); // Change d'image toutes les 3 secondes

//       return () => clearInterval(intervalId); // Nettoyage de l'intervalle
//     }
//   }, [imagesLoaded, banner.length]);

//   return (
//     <div className='mt-16 lg:mt-10 w-full p-4 md:p-10 overflow-hidden'>
//       <main
//         ref={mainRef}
//         className="w-full bg-cover bg-top transition-all duration-700 ease-in-out"
//         style={{
//           backgroundImage: imagesLoaded ? `url(${banner[currentImageIndex].src})` : 'none', // N'affiche l'image que si elle est chargée
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center'
//         }}
//       >
//         {!imagesLoaded && <p>Loading images...</p>} {/* Message de chargement (optionnel) */}
//       </main>
//     </div>
//   );
// };

// export default Banner;











import React, { useEffect, useRef, useState } from 'react';
import { imagesPack } from '../utils/ImagesContant';

const Banner = () => {
  const { banner } = imagesPack;
  const mainRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      let loadedImagesCount = 0;
      banner.forEach((imageData) => {
        const img = new Image();
        img.src = imageData.src;
        img.onload = () => {
          loadedImagesCount += 1;
          if (loadedImagesCount === banner.length) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedImagesCount += 1;
          if (loadedImagesCount === banner.length) {
            setImagesLoaded(true);
          }
        };
      });
    };

    preloadImages();
  }, [banner]);

  useEffect(() => {
    if (imagesLoaded) {
      const handleResize = () => {
        const image = new Image();
        image.src = banner[currentImageIndex].src;
        image.onload = () => {
          const aspectRatio = image.height / image.width;
          const containerWidth = mainRef.current.offsetWidth;
          mainRef.current.style.height = `${containerWidth * aspectRatio}px`;
        };
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [currentImageIndex, imagesLoaded, banner]);

  useEffect(() => {
    if (imagesLoaded) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banner.length);
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [imagesLoaded, banner.length]);

  return (
    <div className='mt-16 lg:mt-10 w-full p-4 md:p-10 overflow-hidden'>
      <main
        ref={mainRef}
        className="w-full bg-cover bg-top transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: imagesLoaded ? `url(${banner[currentImageIndex].src})` : 'none',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: imagesLoaded ? 'auto' : '400px', // Hauteur par défaut pour le skeleton
        }}
      >
        {!imagesLoaded && (
          <div className="skeleton-loader w-full h-full bg-gray-300 animate-pulse"></div>
        )}
      </main>
    </div>
  );
};

export default Banner;
