import React from 'react'

export default function Bunkering() {
  return (
    <div className='relative lg:pb-20' id='bunkering'>
    <div className='py-20 mt-10 bg-[#1E7179] bg-[url(/Bunkeringbg.png)] bg-no-repeat bg-cover '>
        <div className='max-w-[1280px] mx-auto w-full px-3 '>
            <div className='flex flex-col lg:flex-row lg:gap-40 gap-10'>
                <div className='text-white w-full lg:w-1/2'>
                    <p className='text-4xl font-bold'>Bunkering</p>
                    <p className='mt-10 font-thin'>Bunkering is a critical aspect of vessel operations, with fuel pricing significantly impacting a vessel's Time Charter Equivalent (TCE). Far from being a routine service, it demands strategic planning, precise execution, and access to quality fuel to ensure smooth operations and cost efficiency.</p>
                </div>
                <div>
                    <img src='Bebunkingimg.jpg' alt='Bunking' />
                </div>
            </div>
            <img src='/arrow.png' alt='arrow' className='absolute lg:block hidden -bottom-[10%] left-[25%]' />
        </div>
    </div>
    </div>
  )
}
