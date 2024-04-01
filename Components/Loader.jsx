"use client";
import { motion } from "framer-motion";
import React from "react";

const Loader = () => {
  return (
    <motion.div>
      <motion.div initial={{ y: 0, opacity: 1 }} animate={{ y: "-100%", opacity: 1 }} transition={{ delay: 5, duration: 2.1, ease: [0.65, 0, 0.35, 1] }} id="loader-wrapper" className="flex flex-col items-center justify-center h-[100vh] w-full bg-black absolute">
        <div id="h1-container" className="flex items-center justify-center">
          <div id="first-elem" className="mx-2  h-20 flex items-center justify-center overflow-hidden ">
            <motion.h1 initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 2, delay: 1, ease: [0.76, 0, 0.24, 1] }} className="font-Poppins text-5xl text-white" >Stand</motion.h1>
          </div>
          <div id="second-elem" className="mx-2  h-20 flex items-center justify-center overflow-hidden">
            <motion.h1 initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 2, delay: 1.2, ease: [0.76, 0, 0.24, 1] }} className="font-Poppins text-5xl text-white" >By</motion.h1>
          </div>
          <div id="third-elem" className="mx-2  h-20 flex items-center justify-center overflow-hidden">
            <motion.h1 initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 2, delay: 1.4, ease: [0.76, 0, 0.24, 1] }} className="font-Poppins text-5xl text-white" >...</motion.h1>
          </div>

        </div>
        <div id="progress-bar" className="h-[5px] w-[20vw] bg-gray-100 mt-5 overflow-hidden">
          <motion.div initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:3, delay:2, ease:[0.22, 1, 0.36, 1]}} id="in-progress" className="h-[5px] w-[20vw] bg-black"></motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
