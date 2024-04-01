import React from 'react'

const Contact = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <div id='empty-sidebar' className='w-1/2 h-full'></div>
      <div id='r-wrapper' className='w-1/2 h-full  flex items-center justify-center flex-col'>
        <div id="title" className='w-[50vw]  h-[10vh] flex items-center justify-start '>
          <h1 className='text-4xl font-Poppins ml-28'>Leave a Comment</h1>
        </div>
        <form action="" id='single-wrapped' className=' w-full mt-6 flex items-center justify-center'>
          <div id="inp-box-1" className='flex items-center justify-center flex-col mx-10 w-[33.33%]'>
            <span className='w-full text-left '>Name</span>
            <input type="text" placeholder='Barry Allen' />
          </div>
          <div id="inp-box-2" className='mx-10 flex items-center justify-center flex-col w-[33.33%]'>
            <span className='w-full text-left '>Email</span>
            <input type="email" placeholder='barryallen@company.com' />
          </div>
        </form>
        <form action="" id='com-pon' className='flex items-center justify-center flex-col  w-full mt-6'>
          <div id="inp-box-3" className='flex flex-col items-center justify-start w-[75%] '>
            <span className='w-full text-left '>Phone</span>
            <input type="text" placeholder='999 999 999' className='w-full px-4 py-5 bg-transparent border-[1px] border-black rounded-xl mt-3' />
          </div>
          
          <div id="inp-box-4" className='flex flex-col items-center justify-start w-[75%] mt-4 '>
            <span className='w-full text-left '>Query</span>
            <textarea name="" id="" cols="25" rows="4" placeholder='Leave a Comment' className='w-full px-4 py-5 bg-transparent border-[1px] border-black rounded-xl mt-3'></textarea>
          </div>
          <div className='border-[1px] border-black px-8 mt-5 rounded-lg py-4'>
            <input type="submit" value="Share Message " /><i class="ri-send-plane-2-line"></i>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact