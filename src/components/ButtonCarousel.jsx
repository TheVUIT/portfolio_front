import React, { useEffect, useState } from "react";
import '../css/index.css';
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "../components/ui/carousel"; // Assurez-vous que ces chemins sont corrects




const ButtonCarousel = ({categories, onClickOnCarrousel}) => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setCategoriesList(categories);
      onClickOnCarrousel(1);

    }
  }, [categories]);

  const handleOnClick = (categoryId) => {
    onClickOnCarrousel(categoryId);
  };

  return (
    <div className="w-screen">
      {/* Display on large screens */}
      <div className="w-full hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-6">
        {categoriesList
        .sort((a, b) => a.id - b.id)
        .map((category, index) => (
          <button 
            onClick={() => handleOnClick(category.id)} // Fixed here
            key={index}
            className="text-texte_secondary bg-background_primary hover:bg-texte_secondary hover:text-background_primary text-md p-2 rounded-lg font-ubuntu"
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Carousel for small screens */}
      <div className="relative w-full max-w-full overflow-hidden mb-8 lg:hidden">
        <Carousel
          opts={{
            align: "start",
            speed: 200,
          }}
          className="relative w-full"
        >
          <CarouselContent className="w-screen flex flex-row justify-between space-x-0 transition-transform duration-100 ease-out">
            {categoriesList.map((category, index) => (
              <CarouselItem
                key={index}
                className="flex-none w-auto flex-shrink-0"
              >
                <button 
                  onClick={() => handleOnClick(category.id)} // Fixed here too
                  className="w-full bg-background_primary text-texte_secondary text-nowrap text-lg font-ubuntu px-4 py-2 rounded-2xl hover:bg-texte_secondary hover:text-background_primary focus:outline-none focus:ring-2 focus:ring-texte_secondary focus:bg-texte_secondary focus:text-background_primary focus:ring-opacity-50 transition-colors duration-200 overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {category.title}
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
};

export default ButtonCarousel;


// const buttons = [
  //   'Woodworking', 'Electronics', 'Household appliances', 'Glassworks', 'Industrial',
  //   'Blueprints / Prototyping', 'Architecture', 'Logo', 'Others'
  // ];