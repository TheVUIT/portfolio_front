import React from 'react'
import ButtonCarousel from './ButtonCarousel';



const GridSectionSecond = () => {
  const gridItems = [
    { id: 1, imageUrl1: 'url_to_face1.jpg', imageUrl2: 'url_to_face2.jpg', title: 'Modèle 3D 1' },
    { id: 2, imageUrl1: 'url_to_face1.jpg', imageUrl2: 'url_to_face2.jpg', title: 'Modèle 3D 2' },
    { id: 3, imageUrl1: 'url_to_face1.jpg', imageUrl2: 'url_to_face2.jpg', title: 'Modèle 3D 3' },
    // Ajoute les autres éléments avec leurs deux images correspondantes
  ];

  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <ButtonCarousel />

<section className="flex flex-col items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gridItems.map((item) => (
          <div key={item.id} className="relative group cursor-pointer w-64 h-64">
            {/* Conteneur pour les images */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              {/* Image par défaut */}
              <img
                src={item.imageUrl1}
                alt={item.title}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              {/* Image au survol */}
              <img
                src={item.imageUrl2}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            {/* Titre affiché au survol */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-white text-lg">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>

   
  );
};

export default GridSectionSecond;
