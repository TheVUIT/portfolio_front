/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function Newsletter() {
    return (
        <div className="lg:max-w-7xl w-full mx-auto items-center justify-center flex relative">
          <div className="w-full h-full absolute bg-cyan-700 bg-opacity-60 rounded-2xl"></div>
          <img 
            src="https://pagedone.io/asset/uploads/1705400194.png" 
            alt="Inline CTAs image" 
            className="w-full h-96 rounded-2xl object-cover" 
          />
          <div className="absolute flex items-center justify-center px-12">
            <div className="grid lg:gap-7 gap-4">
              <div className="grid gap-3">
                <h2 className="text-center text-white text-3xl font-bold font-manrope leading-10">
                  Rester au courant de nos dernières actualités
                </h2>
                <p className="xl:max-w-2xl w-auto mx-auto text-center text-white text-base font-normal leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                </p>
              </div>
              <div className="gap-5 flex flex-wrap justify-center">
                {/* <button className="w-80 px-7 lg:py-4 py-2 bg-white hover:bg-gray-50 transition-all duration-500 rounded-full">
                  <span className="px-2 text-indigo-600 text-xl font-semibold leading-relaxed">
                    Dismiss
                  </span>
                </button> */}
                <button className="w-80 px-7 lg:py-4 py-2 bg-indigo-600 hover:bg-indigo-700 transition-all duration-500 rounded-full">
                  <span className="px-2 text-white text-xl font-semibold leading-relaxed">
                    S'abonner
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
};
export default Newsletter