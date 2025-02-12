import React, { useEffect } from 'react';
import { scroller } from "react-scroll";
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Tools from '../components/sections/Tools';

const Home = () => {

  useEffect(() => {
    // Scroll to the top when the page refreshes
    // Scroll to the "home" section when the page refreshes
    scroller.scrollTo("home", {
      duration: 500,
      smooth: "easeInOutQuart",
      offset: -50, // Adjust for fixed headers
    });
  }, [])

  return (
    <>
      <Hero id="home" className="illustration-section-01" />
      {/* <Whoweare id="whoweare" topDivider /> */}
      <FeaturesTiles id="our-services" topDivider />
      <FeaturesSplit id="our-process" invertMobile topDivider imageFill/>
      <Tools id="tech-stack" topDivider/>
      <Testimonial topDivider />
      {/* <Cta split /> */}
    </>
  );
}

export default Home;