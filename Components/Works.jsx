import React from 'react'

const works = () => {
  return (
    <div className='h-[120vh] w-[100vw]' data-scroll
    data-scroll-speed=".6"
    data-scroll-section>
        <div id="portfolio-header" className='w-full h-[10vh] flex items-center justify-center'>
            <h1 className='text-5xl font-Poppins '>Portfolio</h1>
        </div>
        <div id="portfolio" className='h-[110vh] w-full flex items-center justify-center flex-wrap'>
            <div id="box-1" className=' h-[56vh] w-[750px] rounded-lg overflow-hidden p-5 m-10 bg-black bg-cover bg-no-repeat' >
                <img src="../pics/3.png" alt="" className='h-[40vh] rounded-lg'/>
                <div id="used-materials" className='w-full h-[5vh] flex items-center mt-3'>
                    <div id="um-1" className='mr-3 px-4 py-2 rounded bg-zinc-900 text-white'>
                        Html
                    </div>
                    <div id="um-1" className='mr-3 px-4 py-2 rounded bg-zinc-900 text-white'>
                        CSS
                    </div>
                    <div id="um-1" className='mr-3 px-4 py-2 rounded bg-zinc-900 text-white'>
                        JS
                    </div>
                </div>
                <button className='mt-3 px-6 py-2 bg-zinc-900 text-white rounded-lg'>View On Github</button>
            </div>
            <div id="box-1" className=' h-[56vh] w-[750px] rounded-lg overflow-hidden p-5 m-10 bg-black' >
                <img src="../pics/6.png" alt="" className='h-[40vh] rounded-lg'/>
                <div id="used-materials" className='w-full h-[5vh] flex items-center mt-3'>
                    <div id="um-1" className='mr-3 px-4 py-2 rounded bg-zinc-900 text-white'>
                        Html
                    </div>
                    <div id="um-1" className='mr-3 px-4 py-2 rounded bg-zinc-900 text-white'>
                        CSS
                    </div>
                    <div id="um-1" className='mr-3 px-4 py-2 rounded bg-zinc-900 text-white'>
                        JS
                    </div>
                </div>
                <button className='mt-3 px-6 py-2 bg-zinc-900 text-white rounded-lg'>View On Github</button>
            </div>
            <div id="box-1" className=' h-[56vh] w-[750px] rounded-lg overflow-hidden p-5 m-10 bg-black' >
                <img src="../pics/2.png" alt="" className='h-[40vh] rounded-lg'/>
                <div id="used-materials" className='w-full h-[5vh] flex items-center mt-3'>
                    <div id="um-1" className='mr-3 px-4 py-2 rounded bg-zinc-900 text-white'>
                        Html
                    </div>
                    <div id="um-1" className='mr-3 px-4 py-2 rounded bg-zinc-900 text-white'>
                        CSS
                    </div>
                    <div id="um-1" className='mr-3 px-4 py-2 rounded bg-zinc-900 text-white'>
                        JS
                    </div>
                </div>
                <button className='mt-3 px-6 py-2 bg-zinc-900 text-white rounded-lg'>View On Github</button>
            </div>
            <div id="box-1" className=' h-[56vh] w-[750px] rounded-lg overflow-hidden p-5 m-10 bg-black' >
                <img src="../pics/1.png" alt="" className='h-[40vh] rounded-lg'/>
                <div id="used-materials" className='w-full h-[5vh] flex items-center mt-3'>
                    <div id="um-1" className='mr-3 px-4 py-2 rounded bg-zinc-900 text-white'>
                        Html
                    </div>
                    <div id="um-1" className='mr-3 px-4 py-2 rounded bg-zinc-900 text-white'>
                        CSS
                    </div>
                    <div id="um-1" className='mr-3 px-4 py-2 rounded bg-zinc-900 text-white'>
                        JS
                    </div>
                </div>
                <button className='mt-3 px-6 py-2 bg-zinc-900 text-white rounded-lg'>View On Github</button>
            </div>
           
            
        </div>
    </div>
  )
}

export default works