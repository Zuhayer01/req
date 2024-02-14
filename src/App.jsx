"use client"
import React, { useEffect, useRef } from 'react'
import "./css/loco.css"
import LocomotiveScroll from 'locomotive-scroll'
import gsap from 'gsap'


const App = () => {
  const scrollRef = useRef(null)
  const text = useRef(null);
  // useEffect(() => {

  //   gsap.from(text.current, 
  //     { y: 100, duration: 1, opacity: 1,stagger: 0.4, })

  // }, [])
  useEffect(() => {
    requestAnimationFrame(() => {
      gsap.from(text.current, {
        y: 100,
        opacity: 1,
        stagger: 0.4,
        duration: 1
      });
    });
  }, []);
  
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true
    })
    return () => {
      scroll.destroy()
    }
  }, [])
  return (
    <main className='overflow-hidden' ref={scrollRef}>
      <div className="h-[100vh] w-screen bg-gray-400 flex place-items-center justify-center" id='page1'><h1 className='text-9xl font-Zuhayer text-white opacity-0' ref={text}>Welcome</h1></div>
      <div className="h-[100vh] w-screen bg-gray-400 ">App</div>
    </main>
  )
}

export default App