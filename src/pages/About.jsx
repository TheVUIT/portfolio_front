import React from 'react'
import imagesPack from '../utils/ImagesContant';

const About = () => {
  // return (
  //   <div className='flex flex-row '>
  //       <>
  //           <div className='h-8 w-screen bg-background_primary'>

  //           </div>
  //           <div className='h-screen w-full p-16 md:p-10 sm:p-4'>
  //               <main className=" flex h-5/6 w-full bg-cover bg-re bg-center" style={{ backgroundImage: `url(${imagesPack.BANNERIMAGE})` }}>

  //               </main>
  //           </div>
  //       </>
  //   </div>
  // )

  return (
    <> 
    <section className="mt-20 flex flex-col lg:flex-row h-[95vh] bg-backgroung_secondary">
      {/* Div pour la photo de profil */}
      <div className="flex-shrink-0 lg:w-1/2 h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${imagesPack.CONTACTPROFILEBACKGROUND})` }}>
        <img
          src={imagesPack.CONTACTPROFILE}
          alt="Profile"
          className="max-w-full max-h-full object-cover"
        />
      </div>


      {/* Div pour la description et les boutons */}
      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Hi, i’m Tony</h1>
        <p className="text-lg mb-8 font-montserrat">
          As a seasoned 3D designer, I posses a keen eye for detail and a passion for transforming concepts into visually stunning realities.
          With a solid foundation in some 3D software like Blender and Substance 3d Painter, I specialize in professional product design and visualization.
          My ability to combine artistic vision with technical mastery allows me to deliver exceptional results that exceed client expectations        </p>
        <div className="flex flex-row justify-between lg:flex-row lg:justify-between gap-4">
          <button className="bg-background_primary text-texte_secondary font-ubuntu px-6 py-3 rounded-lg hover:bg-texte_secondary hover:text-background_primary transition-colors duration-400 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
            Check the portfolio
          </button>
          <button className="bg-background_primary text-texte_secondary font-ubuntu px-6 py-3 rounded-lg hover:bg-texte_secondary hover:text-background_primary transition-colors duration-400 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
            Hire me for project
          </button>
        </div>
      </div>
    </section>
    </>
  );
}

export default About