import { motion } from "framer-motion";
import React from "react";

const Aboutme = () => {
  return (
    <div>
      <div
        data-scroll
        data-scroll-speed=".1"
        data-scroll-section
        id="grid-container"
        className="bg-black grid gap-5 grid-cols-4 mix-blend-difference h-[100vh] w-[100vw] p-10 mt-24"
      >
        <div className="h-[40vh] flex place-items-center justify-center ml-10 mt-10" id="img-cont">
          <img
            src="../download (4).jpeg"
            alt="Error Loading Image"
            className="rounded-full"
          />
        </div>
        <div className="h-[40vh] col-span-3 flex items-center justify-center flex-col ml-20" id="lil-text">
          <h1 className="font-Poppins text-5xl text-white font-light mb-10" id="highlight">
            A Little About me
          </h1>
          <p className="font-Poppins text-lg text-white font-light w-3/4 text-center"id="highlight-2" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            saepe culpa rem magni itaque ducimus necessitatibus voluptatem cum
            adipisci dicta dolor hic nisi rerum nemo velit officia a, repellat
            quia magnam quasi consequatur placeat porro 
          </p>
        </div>

        <div className="h-[40vh] col-span-3 flex items-center justify-center flex-col mt-10" id="skills">
          <h1 className="text-3xl font-Poppins font-light text-center mt-6 text-white">
            Things I'm <span className="text-green-500 font-light">Good</span> At
          </h1>
          <div
            id="tg"
            className="mt-4 overflow-hidden"
          >
            <h1 className="text-xl font-Poppins font-extralight text-white text-center">Html</h1>
            <h1 className="text-xl font-Poppins font-extralight text-white text-center">CSS</h1>
            <h1 className="text-xl font-Poppins font-extralight text-white text-center">Javascript</h1>
            <h1 className="text-xl font-Poppins font-extralight text-white text-center">React</h1>
            <h1 className="text-xl font-Poppins font-extralight text-white text-center">Locomotive</h1>
            <h1 className="text-xl font-Poppins font-extralight text-white text-center">Responsiveness</h1>
            <h1 className="text-xl font-Poppins font-extralight text-white text-center">GSAP</h1>
            <h1 className="text-xl font-Poppins font-extralight text-white text-center">Framer Motion</h1>
          </div>
        </div>
        <div className="h-[25vh] mt-20 flex flex-col rounded-lg text-white" id="cntc">
          <h1 className=" font-light text-4xl font-Poppins mt-5 ml-6">Contact Me</h1>
          <div id="wrapper" className="ml-7 mt-4">
          <h2 className=" font-light text-xl font-Poppins"> <i class="ri-phone-line  text-2xl mr-4"></i>017XXXXXXX</h2>
          <h2 className=" font-light text-xl font-Poppins"><i class="ri-map-pin-line text-2xl mr-4" ></i>Chicago, USA</h2>
          <h2 className=" font-light text-xl font-Poppins"  ><i class="ri-mail-line text-2xl mr-4"></i>zuhayer01@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
