import React from "react";
import '../css/index.css'
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "../components/ui/carousel"; // Assurez-vous que ces chemins sont corrects

const ButtonCarousel = () => {
  const buttons = [
    'Woodworking', 'Electronics', 'Household appliances', 'Glassworks', 'Industrial',
    'Blueprints / Prototyping', 'Architecture', 'Logo', 'Others'
  ];

  return (
    <div className="w-screen">

      <div className="w-full hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-6" >
        {buttons.map((button, index) => (
          <button key={index} className="text-texte_secondary bg-background_primary hover:bg-texte_secondary hover:text-background_primary text-md p-2 rounded-lg font-ubuntu">
            {button}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-full overflow-hidden mb-8 lg:hidden">
        <Carousel
          opts={{
            align: "start",
            speed: 200,
          }}
          className="relative w-full"
        >
          <CarouselContent className="w-screen flex flex-row justify-between space-x-2 transition-transform duration-100 ease-out">
            {buttons.map((button, index) => (
              <CarouselItem
                key={index}
                className="flex-none w-32 flex-shrink-0"
                // className="w-auto flex flex-row gap-2 cursor-pointer hover:bg-texte_secondary hover:text-background_primary rounded-md"
              >
                <button className="w-1/2 bg-background_primary text-texte_secondary text-nowrap text-lg font-ubuntu px-4 py-2 rounded-2xl hover:bg-texte_secondary hover:text-background_primary focus:outline-none focus:ring-2 focus:ring-texte_secondary focus:bg-texte_secondary focus:text-background_primary focus:ring-opacity-50 transition-colors duration-200 overflow-hidden text-ellipsis whitespace-nowrap">
                  {button}
                </button>
                {/* <button className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
                    <span className="">
                    {button}
                    </span>
                </button> */}
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



