import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='bg-[url(/footerbackgroundimage.jpg)] bg-bottom bg-cover h-96  '>
        <div className='bg-gradient-to-t from-black/70 to-black/10 h-96'>
        <div className='lg:px-[8%] mx-auto w-full h-full px-4 py-5 flex items-end lg:justify-end justify-center'>
            <form className='border-white border-0 lg:border-2 rounded-lg flex flex-col gap-2 lg:gap-0 lg:flex-row'>
                <input className='bg-transparent border-2 lg:border-0 rounded-lg text-sm placeholder:text-white placeholder:text-sm py-1 text-white px-3 lg:w-[20rem] w-full' type='email' name='email' placeholder='Email here*'/>
                <button aria-label="newsletter button" type='submit' href='#' className='bg-[#05363b] text-sm text-white py-2 px-5 border-0 lg:border-l-2 rounded-r-lg'>Subscribe To News And Update</button>
            </form>
        </div>
        </div>
      </div>
      <div className='bg-[#1E7179]'>
        <div className='lg:px-[8%] mx-auto w-full h-full px-4 py-20 flex flex-col gap-10 lg:gap-0 lg:flex-row xl:justify-between sm:justify-around'>
          <div>
            <img src='/whitelogo.png' alt='white-logo' />
            <p className='text-white w-full lg:max-w-[300px] mt-7 text-xs'>Aqualis Marine leverages an agile and strategic approach to deliver transparent, customized maritime solutions, enhancing efficiency and value for our clients</p>
          </div>
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-32 xxl:gap-52'>
            <div className=''>
              <p className='font-bold text-white text-sm'>PAGES</p>
              <div className='lg:mt-10 mt-2 text-xs text-white flex flex-col gap-2'>
                <Link href='/#about'>About us</Link>
                <Link href='/#bunkering'>Bunkering</Link>
                <Link href='/#services'>Other Services</Link>
                <Link href='/#blog'>News & Blog</Link>
                <Link href='/#contact'>Contact us</Link>
              </div>
            </div>
            <div className=''>
              <p className='font-bold text-white text-sm'>IMPORANT LINKS</p>
              <div className='lg:mt-10 mt-2 text-white text-xs flex flex-col gap-2'>
                <Link href='#about'>Terms & Conditions</Link>
                <Link href='#about'>Privacy Policy</Link>
                <Link href='#about'>Legal Disclaimer</Link>
                <Link href='#about'>Data Policy</Link>
              </div>
            </div>
            <div className=''>
              <p className='font-bold text-white text-sm'>CONTACT INFORMATION</p>
              <div className='lg:mt-10 mt-2 text-white flex flex-col text-xs gap-2'>
                <Link href='mailto:contact@aqualismarine.com'>Email :       contact@aqualismarine.com</Link>
                <Link href='tel:+6597399507'>Phone :     (65) 97399507</Link>
                <Link href='#about'>linkdin</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#1E7179] relative'>
        <div className='lg:px-[8%] mx-auto w-full h-full px-4 py-10 text-xs text-white'>
          <p >CopyRights : Aqualis Marine@2025</p>
          <Link href='https://api.whatsapp.com/send/?phone=6597399507&text=Hello+%2C+i+am+interested&type=phone_number&app_absent=0' className='fixed bottom-6 right-6'>
          <img src='/whatsapp.png' alt='Whatsapp-icon' />
          </Link>
        </div>
      </div>
    </div>
  )
}
