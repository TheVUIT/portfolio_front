import React from 'react';
import { imagesPack } from '../utils/ImagesContant';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion

const About = () => {
  return (
    <>
      <section className="h-auto lg:h-[95vh] mt-20 flex flex-col-reverse lg:flex-row bg-backgroung_secondary">
        {/* Div pour la photo de profil */}
        <motion.div
          className="flex-shrink-0 lg:w-1/2 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${imagesPack.CONTACT_PROFILE_BACKGROUND})` }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={imagesPack.CONTACT_PROFILE}
            alt="Profile"
            className="max-w-full max-h-full object-cover"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Div pour la description et les boutons */}
        <motion.div
          className="lg:w-1/2 p-8 flex flex-col justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold mb-4">Hi, I’m Tony</h1>
          <p className="text-lg mb-8 font-montserrat">
            As a seasoned 3D designer, I posses a keen eye for detail and a passion for transforming concepts into visually stunning realities.
            With a solid foundation in some 3D software like Blender and Substance 3d Painter, I specialize in professional product design and visualization.
            My ability to combine artistic vision with technical mastery allows me to deliver exceptional results that exceed client expectations.
          </p>
          <p className="text-lg mb-8 font-montserrat">
            My ability to combine artistic vision with technical mastery allows me to deliver exceptional results that exceed client expectations.
          </p>
          <p className="text-lg mb-8 font-montserrat">
            Associated with this, my skills as a graphic designer and UI allow me to better understand the interests of the target audience to use my productions for their various projects.
            Thus, in the sections of each project of the portfolio, you will see visuals illustrating use cases of 3D renderings png 4K.
          </p>
          <motion.div
            className="flex flex-row justify-between lg:flex-row lg:justify-between gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              to={'/'}
              className="bg-background_primary text-nowrap text-texte_secondary font-ubuntu px-6 py-3 rounded-lg hover:bg-texte_secondary hover:text-background_primary transition-colors duration-400 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
            >
              Check portfolio
            </Link>
            <Link
              to={'/contact'}
              className="bg-background_primary text-texte_secondary font-ubuntu px-6 py-3 rounded-lg hover:bg-texte_secondary hover:text-background_primary transition-colors duration-400 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
            >
              Hire for project
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default About;
