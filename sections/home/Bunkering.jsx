import React from 'react'

export default function Bunkering() {
  return (
    <div className='relative mt-10' id='bunkering'>
    <div className='py-10 bg-[#1E7179] bg-[url(/Bunkeringbg.png)] bg-no-repeat bg-cover'>
        <div className='lg:px-[12.5%] w-full px-5 '>
            <div className='flex flex-col lg:flex-row justify-between gap-10'>
                <div className='text-white w-full lg:w-[60%]'>
                    <p className='text-4xl font-bold'>Bunkering</p>
                    <p className='mt-10 pb-3 text-xs xxl:text-base font-light'>Bunkering is a critical aspect of vessel operations, with fuel pricing significantly impacting a vessel's Time Charter Equivalent (TCE). Far from being a routine service, it demands strategic planning, precise execution, and access to quality fuel to ensure smooth operations and cost efficiency.</p>
                </div>
                <div className=''>
                    <img src='bunking.jpg' className='w-full h-full lg:w-auto rounded-md' alt='Bunking' />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
