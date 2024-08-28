import '../css/index.css'
import "@mantine/core/styles.css";
import Faqs from "../components/Faqs";
import Hero from "../components/Hero";
import Video from "../components/Video";
import Banner from '../components/Banner';
import GridSection from '../components/GridSection';

import React from "react";
import TeamHome from '../components/TeamHome'
import Newsletter from '../components/Newsletter';
const Home = () => {
  return (
    <main>
      <Banner/>
      <Hero />
      {/* <Video /> */}
      {/* <TeamHome/> */}
      {/* <Faqs /> */}
      {/* <div className='bg-transparent h-28 flex flex-col'>

      </div> */}
      <GridSection/>
      {/* <Newsletter/> */}
    </main>
  );
};

export default Home;
