import '../css/index.css'
import "@mantine/core/styles.css";
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import GridSection from '../components/GridSection';
import React from "react";
const Home = () => {
  return (
    <main>
      <Banner/>
      <Hero />
      {/* <Faqs /> */}
      {/* <div className='bg-transparent h-28 flex flex-col'>

      </div> */}
      {/* <GridSection/> */}
      {/* <Newsletter/> */}
    </main>
  );
};

export default Home;
