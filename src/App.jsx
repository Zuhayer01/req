import React, { useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Loader from '../Components/Loader';
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import Marqee from '../Components/Marqee';
import Aboutme from '../Components/Aboutme';
import Works from '../Components/Works';
import Contact from '../Components/Contact';
// import Cursor from '../Components/Cursor';
import Test from '../Components/Test';

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <div data-scroll-container id='Grand-parent'>
      {/* <Cursor /> */}
      <Loader />
      <Nav />
      <Hero />
      <Marqee />
      <Test/>
      {/* <Works /> */}
      <Aboutme />
      <Contact />
    </div>
  );
};

export default App;
