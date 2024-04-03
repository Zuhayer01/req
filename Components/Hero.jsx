import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import React from "react";

const Hero = () => {
  return (
    <div data-scroll="" data-scroll-speed="-.2" className="flex justify-center flex-col items-center -z-10" id="hero-main">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7, duration: 1.3 }}
        id="hero-container"
        className="h-[50vh] w-[55vw] rounded-3xl mt-24  flex items-center justify-center flex-col overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 9.6 }}
          id="hero-text"
          className="mt-1 flex items-center justify-center flex-col overflow-hidden w-full"
        >
          <motion.h1
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 9, ease: [0.76, 0, 0.24, 1] }}
            className="font-Poppins font-medium text-5xl text-center z-20"
          >
           Zuhayer
          </motion.h1>
          <motion.p
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 9.2, ease: [0.76, 0, 0.24, 1] }}
            className="font-Poppins text-sm text-center w-[70%] mt-2 overflow-hidden z-10"
          >
            Hey there, I'm Zuhayer. I've spent the past 2 years spending a huuge time on Web development. Now I can say that you can expect some good stuff from me.
          </motion.p>
          <motion.button
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 9.2, ease: [0.76, 0, 0.24, 1] }}
            className="bg-black text-white px-6 py-3 mt-2 font-Poppins"
          >
            Recent Projects
          </motion.button>
        </motion.div>
        <div
          id="bg-image"
          className="absolute h-[50vh] w-[55vw] flex items-start justify-evenly overflow-hidden"
        >
          <motion.img
          className="-z-10"
            initial={{ top: "-100px" }}
            animate={{ top: "100%" }}
            transition={{ duration: 5, delay: 9, repeat: Infinity, ease: "linear" }}
            src="../pngegg.webp"
            alt=""
          />
          <motion.img
          className="-z-10"
            initial={{ top: "-200px" }}
            animate={{ top: "100%" }}
            transition={{ duration: 7, delay: 9, repeat: Infinity, ease: "linear" }}
            src="../JavaScript-logo.webp"
            alt=""
          />
          <motion.img
            initial={{ top: "-200px" }}
            animate={{ top: "100%" }}
            className="-z-10"
            transition={{ duration: 8, delay: 9, repeat: Infinity, ease: "linear" }}
            src="../logo.webp"
            alt=""
          />
          <motion.img
            initial={{ top: "-200px" }}
            animate={{ top: "100%" }}
            className="-z-10"
            transition={{ duration: 6, delay: 9, repeat: Infinity, ease: "linear" }}
            src="../greensock_2x-removebg-preview.webp"
            alt=""
          />
          <motion.img
            initial={{ top: "-200px" }}
            animate={{ top: "100%" }}
            className="-z-10"
            transition={{ duration: 4, delay: 9, repeat: Infinity, ease: "linear" }}
            src="../react-1-logo-png-transparent-removebg-preview.webp"
            alt=""
          />
          <motion.img
            initial={{ top: "-200px" }}
            animate={{ top: "100%" }}
            className="-z-10"
            transition={{ duration: 9, delay: 9, repeat: Infinity, ease: "linear" }}
            src="../0_Z-jwqyt2k8NbHaQe-removebg-preview.webp"
            alt=""
          />
        </div>
      </motion.div>
      <div
        id="expo"
        className="w-[55vw] h-[20vh] flex items-center justify-between"
      >
        <div
          id="exp-box-1"
          className="w-[14vw] h-[18vh]  flex items-center justify-center flex-col overflow-hidden"
        >
          <motion.h1
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 9, ease: [0.76, 0, 0.24, 1] }}
            className="font-Poppins font-semibold text-4xl"
          >
            50+
          </motion.h1>
          <motion.p
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 9, ease: [0.76, 0, 0.24, 1] }}
            className="font-Poppins"
          >
            Projects Done
          </motion.p>
        </div>
        <div
          id="exp-box-2"
          
          className="w-[14vw] h-[18vh]  flex items-center justify-center flex-col overflow-hidden"
        >
          <motion.h1 initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 9, ease: [0.76, 0, 0.24, 1] }} className="font-Poppins font-semibold text-4xl">
            5 Years
          </motion.h1>
          <motion.p initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 9, ease: [0.76, 0, 0.24, 1] }} className="font-Poppins">Experience</motion.p>
        </div>
        <div
          id="exp-box-3"
          className="w-[14vw] h-[18vh]  flex items-center justify-center flex-col overflow-hidden"
        >
          <motion.h1 initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 9, ease: [0.76, 0, 0.24, 1] }} className="font-Poppins font-semibold text-4xl">
            117
          </motion.h1>
          <motion.p initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 9, ease: [0.76, 0, 0.24, 1] }} className="font-Poppins">Clients Served</motion.p>
        </div>
        <div
          id="exp-box-4"
          className="w-[14vw] h-[18vh]  flex items-center justify-center flex-col overflow-hidden"
        >
          <motion.h1
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 9, ease: [0.76, 0, 0.24, 1] }}
            className="font-Poppins font-semibold text-4xl"
          >
            FCC
          </motion.h1>
          <motion.p
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 9, ease: [0.76, 0, 0.24, 1] }}
            className="font-Poppins"
          >
            Certified
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
