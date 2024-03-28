import { motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'

const Aboutme = () => {
  return (
    <div data-scroll data-scroll-speed=".1" id="marqee" className='mt-40 mix-blend-exclusion bg-white z-50 '>
      <div className='h-[25vh] bg-black w-[100vw] overflow-hidden flex items-center justify-start rounded-t-lg border-b-2'>
        <motion.h1 initial={{x:"0%"}} animate={{x:"-100%"}} transition={{duration: 5.5, delay:9, repeat:Infinity, ease:"linear"}} className='text-white text-8xl font-Zuhayer font-extralight uppercase whitespace-nowrap py-5'>Create Websites That turn heads, not just pages.</motion.h1>
        <motion.h1 initial={{x:"0%"}} animate={{x:"-100%"}} transition={{duration: 5.5, delay:9, repeat:Infinity, ease:"linear"}} className='text-white text-8xl font-Zuhayer font-extralight uppercase whitespace-nowrap py-5'>Create Websites That turn heads, not just pages.</motion.h1>
      </div>
    </div>
  )
}

export default Aboutme