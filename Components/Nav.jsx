import { motion } from 'framer-motion'
import React from 'react'

const Nav = () => {
    return (
        <div className='h-[10vh] w-full flex items-center justify-around' id='header'>
            <div id="logo" className='w-[20vw] flex items-center justify-center overflow-hidden'>

                <motion.h1 initial={{y:-100}} animate={{y: 0}} transition={{delay:7, duration:1, ease: [0.76, 0, 0.24, 1]}} className='font-Poppins text-2xl ml-2 '>Zuhayer</motion.h1>
            </div>
            <div id="navigation" className='w-[40vw] h-[4vh] flex items-center justify-center font-Poppins overflow-hidden'>
                <motion.a className='w-[5vw] ' initial={{y:-100}} animate={{y: 0}} transition={{delay:7.4, duration:1, ease: [0.76, 0, 0.24, 1]}} href="#fuck">Portfolio</motion.a>
                <motion.a className='w-[5vw] ' initial={{y:-100}} animate={{y: 0}} transition={{delay:7.6, duration:1, ease: [0.76, 0, 0.24, 1]}} href="#fuck">Contact</motion.a>
                <motion.a initial={{y:-100}} animate={{y: 0}} transition={{delay:7.8, duration:1, ease: [0.76, 0, 0.24, 1]}} href="#fuck"  className='bg-black text-white h-[5vh] flex items-center justify-center rounded-lg w-[8vw] text-sm'>Say Hello</motion.a>
            </div>
        </div>
    )
}

export default Nav