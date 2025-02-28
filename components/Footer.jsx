import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='bg-[url(/footerbackgroundimage.jpg)] h-96  '>
        <div className='bg-gradient-to-t from-black/70 to-black/10 h-96'>
        <div className='max-w-[1280px] mx-auto w-full h-full px-3 py-10 flex items-end lg:justify-end justify-center'>
            <form className='border-white border-2 rounded-lg flex flex-col lg:flex-row'>
                <input className='bg-transparent border-0  placeholder:text-white py-3 text-white px-5' type='email' name='email' placeholder='Email here*'/>
                <button type='submit' href='#' className='bg-[#05363b] text-white py-4 px-5 border-0 lg:border-l-2 rounded-r-lg'>Subscribe To News And Update</button>
            </form>
        </div>
        </div>
      </div>
      <div className='bg-[#05363B]'>
        <div className='max-w-[1280px] mx-auto w-full h-full px-3 py-20 flex flex-col gap-10 lg:gap-0 lg:flex-row xl:justify-between sm:justify-around'>
          <div>
            <img src='/whitelogo.png' alt='white-logo' />
            <p className='text-white w-full lg:max-w-[300px] mt-7'>Aqualis Marine leverages an agile and strategic approach to deliver transparent, customized maritime solutions, enhancing efficiency and value for our clients</p>
          </div>
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-32'>
            <div className=''>
              <p className='font-bold text-white'>PAGES</p>
              <div className='lg:mt-10 mt-2 text-white flex flex-col gap-2'>
                <Link href='/#about'>About us</Link>
                <Link href='/#bunkering'>Bunkering</Link>
                <Link href='/#services'>Other Services</Link>
                <Link href='/#blog'>News & Blog</Link>
                <Link href='/#contact'>Contact us</Link>
              </div>
            </div>
            <div className=''>
              <p className='font-bold text-white'>IMPORANT LINKS</p>
              <div className='lg:mt-10 mt-2 text-white flex flex-col gap-2'>
                <Link href='#about'>Terms & Conditions</Link>
                <Link href='#about'>Privacy Policy</Link>
                <Link href='#about'>Legal Disclaimer</Link>
                <Link href='#about'>Data Policy</Link>
              </div>
            </div>
            <div className=''>
              <p className='font-bold text-white'>CONTACT INFORMATION</p>
              <div className='lg:mt-10 mt-2 text-white flex flex-col gap-2'>
                <Link href='mailto:contact@aqualismarine.com'>Email :       contact@aqualismarine.com</Link>
                <Link href='tel:+6597399507'>Phone :     (65) 97399507</Link>
                <Link href='#about'>linkdin</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#05363B] relative'>
        <div className='max-w-[1280px] mx-auto w-full h-full px-3 py-10 text-white'>
          <p>CopyRights : Aqualis Marine@2025</p>
          <Link href='https://api.whatsapp.com/send/?phone=6597399507&text=Hello+%2C+i+am+interested&type=phone_number&app_absent=0' className='absolute top-[20%] right-[5%]'>
          <img src='/whatsapp.png' alt='Whatsapp-icon' />
          </Link>
        </div>
      </div>
    </div>
  )
}
