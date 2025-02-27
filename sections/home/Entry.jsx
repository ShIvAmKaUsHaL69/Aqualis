import Link from 'next/link'
import React from 'react'
import Videobg from '../../components/Videobg'

export default function Entry() {
  return (
    <div className='min-h-[90vh] overflow-hidden relative w-full flex items-end pb-24'>       
        <Videobg />
      <div className='max-w-[1280px] mx-auto w-full flex flex-col items-start gap-3 px-4 relative z-10'>
        <p className='px-3 py-2 bg-[#00000066] text-3xl text-white rounded-md'>Offering Efficient and Reliable Fueling Services</p>
        <Link href='/#bunkering' className='bg-[#05363B] text-white text-xl px-10 py-3 rounded-md'>Learn More</Link>
      </div>
    </div>
  )
}
