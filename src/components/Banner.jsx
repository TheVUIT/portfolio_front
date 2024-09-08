

// import React, { useEffect, useRef, useState } from 'react';
// import { imagesPack } from '../utils/ImagesContant';

// const Banner = () => {
//   const { banner } = imagesPack;
//   const mainRef = useRef(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [imagesLoaded, setImagesLoaded] = useState(false);

//   useEffect(() => {
//     const preloadImages = () => {
//       let loadedImagesCount = 0;
//       banner.forEach((imageData) => {
//         const img = new Image();
//         img.src = imageData.src;
//         img.onload = () => {
//           loadedImagesCount += 1;
//           if (loadedImagesCount === banner.length) {
//             setImagesLoaded(true);
//           }
//         };
//         img.onerror = () => {
//           loadedImagesCount += 1;
//           if (loadedImagesCount === banner.length) {
//             setImagesLoaded(true);
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
//       }, 3000);

//       return () => clearInterval(intervalId);
//     }
//   }, [imagesLoaded, banner.length]);

//   return (
//     <div className='mt-16 lg:mt-10 w-full p-4 md:p-10 overflow-hidden'>
//       <main
//         ref={mainRef}
//         className="w-full bg-cover bg-top transition-all duration-700 ease-in-out"
//         style={{
//           backgroundImage: imagesLoaded ? `url(${banner[currentImageIndex].src})` : 'none',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center',
//           height: imagesLoaded ? 'auto' : '400px', // Hauteur par défaut pour le skeleton
//         }}
//       >
//         {!imagesLoaded && (
//           <div className="skeleton-loader w-full h-full bg-gray-300 animate-pulse"></div>
//         )}
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
  const [isTransitioning, setIsTransitioning] = useState(false);

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
          mainRef.current.style.height = `${ containerWidth * aspectRatio}px`;
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
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banner.length);
          setIsTransitioning(false);
        }, 500); // Temps de transition
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [imagesLoaded, banner.length]);

  return (
    <div className='mt-16 lg:mt-16 w-full p-4 lg:p-0  md:p-0 overflow-hidden'>
      <main
        ref={mainRef}
        className={`lg:mt-4 w-full bg-cover bg-top transition-all duration-700 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: imagesLoaded ? `url(${banner[currentImageIndex].src})` : 'none',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: imagesLoaded ? 'auto' : '400px',
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















// import React, { useEffect, useRef, useState } from 'react';
// import { imagesPack } from '../utils/ImagesContant';

// const Banner = () => {
//   const { banner } = imagesPack;
//   const mainRef = useRef(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [imagesLoaded, setImagesLoaded] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     const preloadImages = () => {
//       let loadedImagesCount = 0;
//       banner.forEach((imageData) => {
//         const img = new Image();
//         img.src = imageData.src;
//         img.onload = () => {
//           loadedImagesCount += 1;
//           if (loadedImagesCount === banner.length) {
//             setImagesLoaded(true);
//           }
//         };
//         img.onerror = () => {
//           loadedImagesCount += 1;
//           if (loadedImagesCount === banner.length) {
//             setImagesLoaded(true);
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
//         setIsTransitioning(true);
//         setTimeout(() => {
//           setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banner.length);
//           setIsTransitioning(false);
//         }, 500); // Temps de transition
//       }, 3000);

//       return () => clearInterval(intervalId);
//     }
//   }, [imagesLoaded, banner.length]);

//   return (
//     <div className='mt-16 lg:mt-10 w-full p-4 md:p-10 overflow-hidden'>
//       <main
//         ref={mainRef}
//         className={`w-full bg-cover bg-top transition-all duration-700 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
//         style={{
//           backgroundImage: imagesLoaded ? `url(${banner[currentImageIndex].src})` : 'none',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center',
//           height: imagesLoaded ? 'auto' : '400px',
//           maxHeight: '100vh', // par défaut, 100% de la hauteur de l'écran
//           // Taille maximale de 80% de la hauteur de l'écran pour les écrans lg et plus grands
//           '@media (min-width: 1024px)': {
//             maxHeight: '80vh',
//           },
//         }}
//       >
//         {!imagesLoaded && (
//           <div className="skeleton-loader w-full h-full bg-gray-300 animate-pulse"></div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Banner;
