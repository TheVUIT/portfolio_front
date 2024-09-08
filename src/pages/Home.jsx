import '../css/index.css';
import "@mantine/core/styles.css";
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import GridSectionSecond from '../components/GridSectionSecond';
import React from "react";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main >
      {/* Ajout d'une animation de fade-in pour le Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Banner />
      </motion.div>

      {/* Animation pour la section de séparation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='h-[90px] hidden bg-background_primary lg:flex lg:flex-row'
      >
      </motion.div>

      {/* Animation pour le composant Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Hero />
      </motion.div>

      {/* Deuxième section de séparation avec animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className='h-[150px] hidden bg-background_primary lg:flex lg:flex-row'
      >
      </motion.div>

      {/* Animation pour GridSectionSecond */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <GridSectionSecond />
      </motion.div>
    </main>
  );
};

export default Home;
