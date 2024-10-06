import React, { useEffect, useState } from 'react';
import { imagesPack } from '../utils/ImagesContant';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion
import {getUserData} from "../services/userService"



const About = () => {
  const [userData, setUserData] = useState({})

  useEffect(()=> {
    const fetchAboutImformation = async () => {
      const userDataFromFireStore = await  getUserData()
      setUserData(userDataFromFireStore)
    };
    fetchAboutImformation();


  }, [])


  return (
    <>
      <section className="h-auto lg:h-[95vh] mt-20 flex flex-col-reverse lg:flex-row bg-backgroung_secondary">
        {/* Div pour la photo de profil */}
        <motion.div
          className="flex-shrink-0 lg:w-1/2 flex items-center justify-center bg-cover bg-center"
          // style={{ backgroundImage: `url(${imagesPack.CONTACT_PROFILE_BACKGROUND})` }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={userData.aboutImage}
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
            {userData.textAboutFirst}
          </p>
          {/* <p className="text-lg mb-8 font-montserrat">
            My ability to combine artistic vision with technical mastery allows me to deliver exceptional results that exceed client expectations.
          </p> */}
          <p className="text-lg mb-8 font-montserrat">
          {userData.textAboutSecond}
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
