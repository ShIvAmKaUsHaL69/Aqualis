import React from 'react'
import Inputfield from '../../components/inputfield';

export default function Contact() {
    const handleformsubmit = () => {
        console.log(hi)
    }
  return (
    <div className='py-20 bg-[#F5F5F5] bg-[url(/contactcircle.png)] bg-no-repeat bg-right-bottom' id='contact'>
        <div className='max-w-[1280px] mx-auto w-full px-3'>
            <p className='text-3xl text-[#05363B]'>Contact Us</p>
            <div className='mt-10 lg:flex-row flex-col flex justify-between'>
                <div>
                    <img src='/contact.jpg' alt='contact' className='w-full h-full' />
                </div>
                <div>
                    <form className='flex flex-col gap-5 items-start mt-10 lg:mt-0'>
                        <div className='flex lg:flex-row flex-col gap-5 w-full'>
                            <Inputfield field='name' placeholder='Your Name' type='text'/>
                            <Inputfield field='email' placeholder='email' type='email'/>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-5 w-full'>
                            <Inputfield field='phone' placeholder='Phone Number' type='text'/>
                            <Inputfield field='city' placeholder='City' type='text'/>
                        </div>
                        <textarea name='message' placeholder='Type your Message here!' type='text' className='h-40 border w-full border-black py-4 px-5 rounded-lg bg-transparent text-black placeholder:text-black'/>
                        <button href='#' type='submit' className='bg-[#05363B] text-white text-xl px-10 py-3 rounded-md'>Submit Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
