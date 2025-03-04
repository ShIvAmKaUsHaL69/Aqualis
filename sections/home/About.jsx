import React from 'react'

export default function About() {
  return (
    <div className='bg-[url(/Aboutbackground.png)] bg-center min-h-[100vh] flex items-center bg-no-repeat bg-cover pt-10 lg:pt-0' id='about'>
      <div className='lg:px-[12%] mx-auto w-full flex flex-col items-start gap-3 px-5'>
      <div className="block lg:flex flex-row w-full gap-20">
        <div className="relative w-full lg:w-[60%]">
            <img src="/aboutusbgimg.png" alt='shipsailing' className="w-full h-full" />
        </div>
        <div className="flex w-full lg:w-1/2 lg:mt-0 mt-10 flex-col gap-7">
            <p className="text-4xl pb-2 font-bold text-[#05363B] ">About Us</p>
            <p className='text-[#00000099] xxl:text-base text-sm'>At Aqualis Marine, our name reflects our ethos. "Aqualis," meaning "water-like," symbolizes adaptability and resilience.</p>
            <p className='text-[#00000099] xxl:text-base text-sm'>Specializing in transparent bunker broking, we provide expert fuel procurement across Singapore, Asia-Pacific and Indian Subcontinent. <span className='font-semibold'>We bridge the gap for shipowners and traders in different time zones</span>, ensuring access to reliable, cost-effective, and compliant bunkers with real-time market insights.</p>
            <p className='text-[#00000099] xxl:text-base text-sm'>With deep industry expertise and an extensive supplier network, we simplify procurement, mitigate risks, and optimize costs, making us the trusted partner for shipowners and traders.</p>
        </div>
        </div>
      </div>
    </div>
  )
}
