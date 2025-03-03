import React from 'react'

export default function About() {
  return (
    <div className='bg-[url(/Aboutbackground.png)] bg-no-repeat bg-cover pt-20' id='about'>
      <div className='max-w-[1280px] mx-auto w-full flex flex-col lg:pb-48 items-start gap-3 px-3'>
      <div className="block lg:flex flex-row w-full gap-80">
        <div className="relative w-full lg:w-1/2">
            <img src="/aboutimage.jpg" alt='shipsailing' className="w-full h-auto" />
            <img
            src="/shipfromtop.jpg"
            alt='shipfromtop'
            className="lg:block hidden absolute -bottom-24 -right-64 border-4 border-white shadow-lg"
            />
        </div>
        <div className="flex w-full lg:w-1/2 lg:mt-0 mt-10 flex-col gap-10">
            <p className="text-4xl font-bold text-[#05363B]">About Us</p>
            <p className='text-[#00000099]'>At Aqualis Marine, our name reflects our ethos. "Aqualis," meaning "water-like," symbolizes adaptability and resilience.</p>
            <p className='text-[#00000099]'>Specializing in transparent bunker broking, we provide expert fuel procurement across Singapore, Asia-Pacific and Indian Subcontinent. <span className='font-semibold'>We bridge the gap for shipowners and traders in different time zones</span>, ensuring access to reliable, cost-effective, and compliant bunkers with real-time market insights.</p>
            <p className='text-[#00000099]'>With deep industry expertise and an extensive supplier network, we simplify procurement, mitigate risks, and optimize costs, making us the trusted partner for shipowners and traders.</p>
        </div>
        </div>
      </div>
    </div>
  )
}
