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







// import { useEffect, useRef } from 'react';

// const Banner = () => {

//     const {banner} = imagesPack

//     const mainRef = useRef(null);

//     useEffect(() => {
//         if (mainRef.current) {
//             const handleResize = () => {
//                 const image = new Image();
//                 image.src = imagesPack.BANNER_IMAGE;
//                 image.onload = () => {
//                     const aspectRatio = image.height / image.width;
//                     const containerWidth = mainRef.current.offsetWidth;
//                     mainRef.current.style.height = `${containerWidth * aspectRatio}px`;
//                 };
//             };

//             // Appeler handleResize pour définir la hauteur initiale
//             handleResize();

//             // Ajouter un écouteur d'événements pour redimensionner
//             window.addEventListener('resize', handleResize);

//             // Nettoyer l'écouteur d'événements au démontage
//             return () => window.removeEventListener('resize', handleResize);
//         }
//     }, []);

//     return (
//         <div className='mt-16 lg:mt-10 w-full p-4 md:p-10 overflow-hidden'>
//             <main 
//                 ref={mainRef}
//                 className="w-full bg-cover bg-top"
//                 style={{ 
//                     backgroundImage: `url(${imagesPack.BANNER_IMAGE})`, 
//                     backgroundSize: 'contain',  
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'top'  
//                 }}
//             >
//             </main>
//         </div>
//     );
// };

// export default Banner;





// import { useEffect, useRef, useState } from 'react';

// const Banner = () => {
//     const { banner } = imagesPack;  // Extraire le tableau d'images
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);  // État pour l'image courante
//     const [nextImageIndex, setNextImageIndex] = useState(1);  // État pour l'image suivante
//     const [transition, setTransition] = useState(false);  // État pour gérer l'opacité et la transition
//     const mainRef = useRef(null);

//     useEffect(() => {
//         if (mainRef.current) {
//             const handleResize = () => {
//                 const image = new Image();
//                 image.src = banner[currentImageIndex];  // Utiliser l'image courante
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
//     }, [currentImageIndex, banner]);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setTransition(true);  // Déclencher la transition
//             setTimeout(() => {
//                 setCurrentImageIndex(nextImageIndex);  // Passer à l'image suivante
//                 setNextImageIndex((prevIndex) => (prevIndex + 1) % banner.length);
//                 setTransition(false);  // Réinitialiser la transition
//             }, 500);  // Durée de la transition (en millisecondes)
//         }, 5000);  // Changer d'image toutes les 5 secondes

//         return () => clearInterval(intervalId);
//     }, [nextImageIndex, banner.length]);

//     return (
//         <div className='mt-16 lg:mt-10 w-full p-4 md:p-10 overflow-hidden relative'>
//             <main
//                 ref={mainRef}
//                 className={`w-full h-full bg-cover bg-top transition-opacity duration-500 ${transition ? 'opacity-0' : 'opacity-100'}`}
//                 style={{
//                     backgroundImage: `url(${banner[currentImageIndex]})`,
//                     backgroundSize: 'cover',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center',
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0
//                 }}
//             ></main>
//             <main
//                 className={`w-full h-full bg-cover bg-top transition-opacity duration-500 ${transition ? 'opacity-100' : 'opacity-0'}`}
//                 style={{
//                     backgroundImage: `url(${banner[nextImageIndex]})`,
//                     backgroundSize: 'cover',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center',
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0
//                 }}
//             ></main>
//         </div>
//     );
// };

// export default Banner;




import { useEffect, useRef, useState } from 'react';

const Banner = () => {
    const { banner } = imagesPack;
    const mainRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // État pour l'image actuelle

    useEffect(() => {
        if (mainRef.current) {
            const handleResize = () => {
                const image = new Image();
                image.src = banner[currentImageIndex]; // Utiliser l'image actuelle pour calculer la hauteur
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
    }, [currentImageIndex]); // Recalculer lors du changement d'image

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banner.length); // Changer d'image toutes les 3 secondes
        }, 3000); // Temps de changement d'image (3000ms = 3s)

        return () => clearInterval(intervalId); // Nettoyer l'intervalle au démontage
    }, [banner.length]);

    return (
        <div className='mt-16 lg:mt-10 w-full p-4 md:p-10 overflow-hidden'>
            <main 
                ref={mainRef}
                className="w-full bg-cover bg-top transition-all duration-700 ease-in-out" // Ajout de transitions CSS
                style={{ 
                    backgroundImage: `url(${banner[currentImageIndex]})`, // Utiliser l'image actuelle
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


