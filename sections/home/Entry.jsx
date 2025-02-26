import Link from 'next/link'
import React from 'react'

export default function Entry() {
  return (
    <div className='min-h-[90vh] w-full bg-[url(/backgroundhero.png)] bg-cover bg-no-repeat bg-center flex items-end pb-24'>
      <img src='/play.png' className='absolute top-1/3 sm:left-2/4 left-[34%]' />
      <div className='max-w-[1280px] mx-auto w-full flex flex-col items-start gap-3 px-4'>
        <p className='px-3 py-2 bg-[#00000066] text-3xl text-white rounded-md'>Offering Efficient and Reliable Fueling Services</p>
        <Link href='#' className='bg-[#05363B] text-white text-xl px-10 py-3 rounded-md'>Learn More</Link>
      </div>
    </div>
  )
}
