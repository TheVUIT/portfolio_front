// import React, { useEffect, useRef, useState } from 'react';
// import { getCarrouselData } from "../services/carrouselService";

// const Banner = () => {
//   const [banner, setBanner] = useState([]);
//   const mainRef = useRef(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [imagesLoaded, setImagesLoaded] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     const preloadImages = async () => {
//       const immagesInCarrousel = await getCarrouselData();
//       setBanner(immagesInCarrousel.images);

//       let loadedImagesCount = 0;
//       const totalImages = immagesInCarrousel.images.length;

//       immagesInCarrousel.images.forEach((imageUrl) => {
//         const img = new Image();
//         img.src = imageUrl;
//         img.onload = () => {
//           loadedImagesCount += 1;
//           if (loadedImagesCount === totalImages) {
//             setImagesLoaded(true);
//           }
//         };
//         img.onerror = () => {
//           console.error(`Failed to load image: ${imageUrl}`);
//           loadedImagesCount += 1;
//           if (loadedImagesCount === totalImages) {
//             setImagesLoaded(true);
//           }
//         };
//       });
//     };

//     preloadImages();
//   }, []);

//   useEffect(() => {
//     if (imagesLoaded) {
//       const handleResize = () => {
//         const image = new Image();
//         image.src = banner[currentImageIndex]; // Correction ici
//         image.onload = () => {
//           const aspectRatio = image.height / image.width;
//           const containerWidth = mainRef.current.offsetWidth;
//           const heightResultCalutation = containerWidth * aspectRatio;
//           mainRef.current.style.height = `${heightResultCalutation}px`;
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
//         }, 250); // Temps de transition
//       }, 4500);

//       return () => clearInterval(intervalId);
//     }
//   }, [imagesLoaded, banner.length]);

//   return (
//     <div className='mt-16 lg:mt-16 w-full p-4 lg:pl-16 lg:pr-16  md:p-0 overflow-hidden'>
//       <main
//         ref={mainRef}
//         className={`lg:mt-4 w-full bg-cover bg-top transition-opacity duration-200 ease-in ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}
//         style={{
//           backgroundImage: imagesLoaded ? `url(${banner[currentImageIndex]})` : 'none', // Correction ici
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center',
//           height: imagesLoaded ? 'auto' : '600px',
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









  //   useEffect(() => {
//     if (imagesLoaded) {
//       const handleResize = () => {
//         const image = new Image();
//         image.src = banner[currentImageIndex]; // Correction ici
//         image.onload = () => {
//           const aspectRatio = image.height / image.width;
//           const containerWidth = mainRef.current.offsetWidth;
//           const heightResultCalutation = containerWidth * aspectRatio;
//           mainRef.current.style.height = `${heightResultCalutation}px`;
//         };
//       };

//       handleResize();
//       window.addEventListener('resize', handleResize);

//       return () => window.removeEventListener('resize', handleResize);
//     }
//   }, [currentImageIndex, imagesLoaded, banner]);











































// import React, { useEffect, useState } from 'react';
// import Slider from "react-slick";
// import { getCarrouselData } from "../services/carrouselService";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css"; 

// const Banner = () => {
//   const [banner, setBanner] = useState([]);
//   const [imagesLoaded, setImagesLoaded] = useState(false);

//   useEffect(() => {
//     const preloadImages = async () => {
//       const immagesInCarrousel = await getCarrouselData();
//       setBanner(immagesInCarrousel.images);

//       let loadedImagesCount = 0;
//       const totalImages = immagesInCarrousel.images.length;

//       immagesInCarrousel.images.forEach((imageUrl) => {
//         const img = new Image();
//         img.src = imageUrl;
//         img.onload = () => {
//           loadedImagesCount += 1;
//           if (loadedImagesCount === totalImages) {
//             setImagesLoaded(true);
//           }
//         };
//         img.onerror = () => {
//           console.error(`Failed to load image: ${imageUrl}`);
//           loadedImagesCount += 1;
//           if (loadedImagesCount === totalImages) {
//             setImagesLoaded(true);
//           }
//         };
//       });
//     };

//     preloadImages();
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500, 
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true, 
//     autoplay: true,
//     autoplaySpeed: 5000, 
//     pauseOnHover: false,
//     cssEase: "ease-in-out" 
//   };

//   return (
//     <div className='mt-16 lg:mt-20 w-full p-4 lg:pl-16 lg:pr-16 md:p-0 overflow-hidden'>
//       {imagesLoaded ? (
//         <Slider {...settings}>
//           {banner.map((imageUrl, index) => (
//             <div key={index}>
//               <div
//                 className='w-full bg-cover bg-top'
//                 style={{
//                   backgroundImage: `url(${imageUrl})`,
//                   backgroundSize: 'cover',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundPosition: 'center',
//                   height: '600px',
//                 }}
//               />
//             </div>
//           ))}
//         </Slider>
//       ) : (
//         <div className="skeleton-loader w-full h-full bg-gray-300 animate-pulse"></div>
//       )}
//     </div>
//   );
// };

// export default Banner;












import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import { getCarrouselData } from "../services/carrouselService";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Banner = () => {
  const [banner, setBanner] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [aspectRatios, setAspectRatios] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    const preloadImages = async () => {
      const immagesInCarrousel = await getCarrouselData();
      setBanner(immagesInCarrousel.images);

      let loadedImagesCount = 0;
      const totalImages = immagesInCarrousel.images.length;
      const ratios = [];

      immagesInCarrousel.images.forEach((imageUrl) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          ratios.push(img.height / img.width);
          loadedImagesCount += 1;
          if (loadedImagesCount === totalImages) {
            setAspectRatios(ratios);
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${imageUrl}`);
          loadedImagesCount += 1;
          if (loadedImagesCount === totalImages) {
            setAspectRatios(ratios);
            setImagesLoaded(true);
          }
        };
      });
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      const intervalId = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banner.length);
          setIsTransitioning(false);
        }, 250); // Temps de transition
      }, 4500);

      return () => clearInterval(intervalId);
    }
  }, [imagesLoaded, banner.length]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    cssEase: "ease-in-out"
  };

  return (
    <div className='mt-16 lg:mt-20 w-full p-4 lg:pl-16 lg:pr-16 md:p-0 overflow-hidden'>
      {imagesLoaded ? (
        <Slider {...settings}>
          {banner.map((imageUrl, index) => (
            <div key={index}>
              <div
                className='w-full bg-cover bg-top'
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  height: aspectRatios[index] ? `${100 / aspectRatios[index]}%` : '600px', // Ajuste la hauteur selon le ratio
                  paddingBottom: aspectRatios[index] ? `${aspectRatios[index] * 100}%` : 'auto', // Utilise le ratio d'aspect pour la hauteur
                }}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="skeleton-loader w-full h-full bg-gray-300 animate-pulse"></div>
      )}
    </div>
  );
};

export default Banner;























