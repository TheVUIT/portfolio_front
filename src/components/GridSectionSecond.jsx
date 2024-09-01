import React from 'react';
import ButtonCarousel from './ButtonCarousel';
import imagesPack from 'src/utils/ImagesContant';

const GridSectionSecond = () => {
  const { home_grid } = imagesPack;

  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <ButtonCarousel />

      <section className="mt-10 flex flex-col items-center justify-center p-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {home_grid.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer w-full aspect-square bg-gray-200" // Ajouter une couleur de fond pour vérifier si les divs apparaissent
            >
              {/* Container for the images */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                {/* Default image */}
                <img
                  src={item.imageUrl1}
                  alt={item.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Hover image */}
                <img
                  src={item.imageUrl2}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              {/* Title shown on hover */}
              <div className="p-7 absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                {/* <span className="text-white text-lg">{item.title}</span>
                <span className="text-white text-lg">{item.description}</span> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GridSectionSecond;
