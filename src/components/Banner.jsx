import React from 'react'
import {imagesPack} from '../utils/ImagesContant';

import { useEffect, useRef, useState } from 'react';

const Banner = () => {
    const { banner } = imagesPack;
    const mainRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // State of this image

    useEffect(() => {
        if (mainRef.current && banner.length > 0) {

            const handleResize = () => {
                const image = new Image();
                image.src = banner[currentImageIndex].src; // Utiliser la source de l'image actuelle pour calculer la hauteur
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
    }, [currentImageIndex, banner]); // Recalculer lors du changement d'image

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banner.length); 
        }, 3000); 
        return () => clearInterval(intervalId); // Cleaning intervalle
    }, [banner.length]);

    return (
        <div className='mt-16 lg:mt-10 w-full p-4 md:p-10 overflow-hidden'>
            <main 
                ref={mainRef}
                className="w-full bg-cover bg-top transition-all duration-700 ease-in-out"
                style={{ 
                    backgroundImage: `url(${banner[currentImageIndex].src})`, // Utiliser la source de l'image actuelle
                    backgroundSize: 'cover', // Ajuster la taille de l'image pour couvrir le conteneur
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center' // Centrer l'image
                }}
            >
            </main>
        </div>
    );
};

export default Banner;
