import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[url(/footerbackgroundimage.jpg)] h-96 '>
        <div className='max-w-[1280px] mx-auto w-full h-full px-3 py-10 flex items-end lg:justify-end justify-center'>
            <form className='border-white border-2 rounded-lg flex flex-col lg:flex-row'>
                <input className='bg-transparent border-0  placeholder:text-white py-3 text-white px-5' type='email' name='email' placeholder='Email here*'/>
                <Link type='submit' href='#' className='bg-[#05363b] text-white py-4 px-5 border-0 lg:border-l-2 rounded-r-lg'>Subscribe To News And Update</Link>
            </form>
        </div>
    </div>
  )
}
