

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
          const heightResultCalutation = containerWidth * aspectRatio;
          // mainRef.current.style.width = `${containerWidth * 0.8}px`
          mainRef.current.style.height = `${heightResultCalutation }px`;
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
        }, 250); // Temps de transition
      }, 4500);

      return () => clearInterval(intervalId);
    }
  }, [imagesLoaded, banner.length]);



  return (
    <div className='mt-16 lg:mt-16 w-full p-4 lg:pl-16 lg:pr-16  md:p-0 overflow-hidden'>
      <main
        ref={mainRef}
        className={`lg:mt-4 w-full bg-cover bg-top transition-opacity duration-200 ease-in ${isTransitioning ? 'opacity-100' : 'opacity-100'}`}
        style={{
          backgroundImage: imagesLoaded ? `url(${banner[currentImageIndex].src})` : 'none',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: imagesLoaded ? 'auto' : '600px',
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



