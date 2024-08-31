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
      <div className='h-[90px] bg-background_primary'>

      </div>
      <Hero />
      {/* <Faqs /> */}
      {/* <div className='bg-transparent h-28 flex flex-col'>

      </div> */}
      {/* <GridSection/> */}
      <GridSectionSecond/>
      {/* <Newsletter/> */}
    </main>
  );
};

export default Home;
