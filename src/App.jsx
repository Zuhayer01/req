import React from 'react'
import Loader from '../Components/Loader'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Marqee from '../Components/Marqee'
import LocomotiveScroll from 'locomotive-scroll';
import Aboutme from '../Components/Aboutme'


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div data-scroll-container>
      <Loader />
      <Nav />
      <Hero />
      <Marqee/>
      <Aboutme/>
    </div>
  )
}

export default App