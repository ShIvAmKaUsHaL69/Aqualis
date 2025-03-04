import React from 'react'
import Inputfield from '../../components/inputfield';

export default function Contact() {
    const handleformsubmit = () => {
        console.log(hi)
    }
  return (
    <div className='py-10 bg-[#F5F5F5] bg-[url(/contactcircle.png)] bg-no-repeat bg-right-bottom' id='contact'>
        <div className='lg:px-[13.5%] mx-auto w-full px-4'>
            <p className='text-3xl text-[#05363B] font-semibold'>Contact Us.</p>
            <div className='mt-10 lg:flex-row flex-col flex justify-between gap-10'>
                <div className='lg:w-[45%] w-full h-auto'>
                    <img src='/contact.jpg' alt='contact' className='w-full h-full xxl:h-[28rem]' />
                </div>
                <div className='lg:w-1/2 lg:flex justify-end block w-full h-auto'>
                    <form className='flex flex-col gap-5 justify-between items-start mt-10 lg:mt-0'>
                        <div className='flex lg:flex-row flex-col gap-7 w-full'>
                            <Inputfield field='name' placeholder='Your Name' type='text'/>
                            <Inputfield field='email' placeholder='email' type='email'/>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-7 w-full'>
                            <Inputfield field='phone' placeholder='Phone Number' type='text'/>
                            <Inputfield field='city' placeholder='City' type='text'/>
                        </div>
                        <textarea name='message' placeholder='Type your Message here!' type='text' className='h-40 border w-full border-black py-4 px-5 rounded-lg bg-transparent text-black placeholder:text-black xxl:placeholder:text-sm placeholder:text-xs'/>
                        <button aria-label="enquiry submit button" href='#' type='submit' className='bg-[#05363B] text-white text-lg px-5 py-3 rounded-md'>Submit Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
