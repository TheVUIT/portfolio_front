import React from 'react'
import imagesPack from '../utils/ImagesContant';


// const Banner = () => {
//     return (

//         <div className='mt-16 lg:mt-10 h-screen w-full p-4 md:p-10'>
//             <main className="flex h-5/6 w-full bg-cover bg-re bg-center" style={{ backgroundImage: `url(${imagesPack.BANNER_IMAGE})` }}>

//             </main>
//         </div>
//     );
// };

// export default Banner;

// const Banner = () => {
//     return (
//         <div className='lg:mt-10 h-screen w-full p-4 md:p-10'>
//             <main 
//                 className="flex h-5/6 w-full bg-cover bg-center" 
//                 style={{ 
//                     backgroundImage: `url(${imagesPack.BANNER_IMAGE})`, 
//                     backgroundSize: 'contain',  // Utilisez 'contain' pour conserver la taille et le format de l'image
//                     backgroundRepeat: 'no-repeat' // Empêche la répétition de l'image
//                 }}
//             >
//             </main>
//         </div>
//     );
// };

// export default Banner;



import { useEffect, useRef } from 'react';

const Banner = () => {
    const mainRef = useRef(null);

    useEffect(() => {
        if (mainRef.current) {
            const handleResize = () => {
                const image = new Image();
                image.src = imagesPack.BANNER_IMAGE;
                image.onload = () => {
                    const aspectRatio = image.height / image.width;
                    const containerWidth = mainRef.current.offsetWidth;
                    mainRef.current.style.height = `${containerWidth * aspectRatio}px`;
                };
            };

            // Appeler handleResize pour définir la hauteur initiale
            handleResize();

            // Ajouter un écouteur d'événements pour redimensionner
            window.addEventListener('resize', handleResize);

            // Nettoyer l'écouteur d'événements au démontage
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className='mt-16 lg:mt-10 w-full p-4 md:p-10 overflow-hidden'>
            <main 
                ref={mainRef}
                className="w-full bg-cover bg-top"
                style={{ 
                    backgroundImage: `url(${imagesPack.BANNER_IMAGE})`, 
                    backgroundSize: 'contain',  
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top'  
                }}
            >
            </main>
        </div>
    );
};

export default Banner;

