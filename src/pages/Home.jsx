import '../css/index.css'
import "@mantine/core/styles.css";
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import GridSection from '../components/GridSection';
import GridSectionSecond from '../components/GridSectionSecond';
import React from "react";
const Home = () => {
  return (
    <main>
      <Banner/>
      <div className='h-[90px] hidden bg-background_primary lg:flex lg:flex-row'>

      </div>
      <Hero />
      <div className='h-[150px] hidden bg-background_primary lg:flex lg:flex-row'>

      </div>
     
      <GridSectionSecond/>
    </main>
  );
};

export default Home;
