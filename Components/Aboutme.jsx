import { motion } from "framer-motion";
import React from "react";

const Aboutme = () => {
  return (
    <div>
      <div
        data-scroll
        data-scroll-speed=".1"
        data-scroll-section
        id="about-me-container"
        className="h-[100vh] w-[100vw] bg-black rounded-3xl flex items-center justify-center"
      >
        <div id="my-image" className="h-full w-1/2 flex items-center justify-center">
          <img src="../zuhayer.webp" alt="" className="h-[60vh] rounded-3xl"/>
        </div>
        <div id="infos" className="h-full flex items-center justify-center flex-col">
          <div id="top-text" className="w-full ">
            <h1 className="text-white font-Poppins text-4xl">Hi,I'm</h1>
          </div>
          <div id="details-text" className="w-[50vw] ">
            <h1 className="text-white w-[40vw] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, temporibus doloremque fugit quaerat, autem exercitationem natus harum fuga nobis dolores minima, excepturi quia atque? Exercitationem, maiores, unde delectus atque odio non quos voluptatum laudantium aut ipsum saepe animi. Officiis labore quisquam aliquid maiores sit illo similique debitis dignissimos, velit inventore.</h1>
          </div>
          <div className="w-[50vw]">
               <h1 className="text-white font-Poppins text-2xl  mt-8 mb-4 text-left">I'm Good with</h1>
            </div>
          <div id="skill-icons" className="w-[50vw] ">
            <div className="bg-white inline-block mr-3 my-3 px-4 py-2 rounded-3xl">
              <img src="../logo.png" alt="" className="h-[1.5vw] inline-block"/>
               <h1 className="inline-block font-Poppins">HTML</h1>
            </div>
            <div className="bg-white inline-block mr-3  my-3 px-4 py-2 rounded-3xl">
              <img src="../pngegg.png" alt="" className="h-[1.5vw] inline-block"/>
               <h1 className="inline-block font-Poppins">CSS</h1>
            </div>
            <div className="bg-white inline-block mr-3  my-3 px-4 py-2 rounded-3xl">
              <img src="../Javascript-logo.png" alt="" className="h-[1.5vw] rounded-md inline-block"/>
               <h1 className="inline-block font-Poppins ml-2">JavaScript</h1>
            </div>
            <div className="bg-white inline-block mr-3  my-3 px-4 py-2 rounded-3xl">
              <img src="../react-1-logo-png-transparent-removebg-preview.png" alt="" className="h-[1.5vw] rounded-md inline-block"/>
               <h1 className="inline-block font-Poppins ml-2">React</h1>
            </div>
            <div className="bg-white inline-block mr-3  my-3 px-4 py-2 rounded-3xl">
              <img src="../greensock_2x-removebg-preview.png" alt="" className="h-[1.5vw] rounded-md inline-block"/>
               <h1 className="inline-block font-Poppins ml-2">Gsap</h1>
            </div>
            <div className="bg-white inline-block mr-3  my-3 px-4 py-2 rounded-3xl">
              <img src="../0_Z-jwqyt2k8NbHaQe-removebg-preview.png" alt="" className="h-[1.5vw] inline-block"/>
               <h1 className="inline-block font-Poppins">Framer Motion</h1>
            </div>
          </div>
          <div id="otherSkills" className="w-[50vw] mt-4 ">
          <div className="w-[50vw]" id="mother">
               <h1 className="text-white font-Poppins text-2xl text-left mb-3">Side Skills</h1>
            </div>
            <div>
            <div className="bg-white inline-block mr-3 px-4 py-2 rounded-3xl">
              <img src="../open-ai-logo-8B9BFEDC26-seeklogo.com.png" alt="" className="h-[1.5vw] rounded-md inline-block"/>
               <h1 className="inline-block font-Poppins ml-2">AI Tools</h1>
            </div>
            <div className="bg-white inline-block mr-3 my-3 px-4 py-2 rounded-3xl">
              <img src="../Microsoft Office.png" alt="" className="h-[1.5vw] inline-block"/>
               <h1 className="inline-block font-Poppins">Office Softwares</h1>
            </div>
            <div className="bg-white inline-block mr-3 my-3 px-4 py-2 rounded-3xl">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="" className="h-[1.3vw] mr-2 inline-block"/>
               <h1 className="inline-block font-Poppins">Github</h1>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
