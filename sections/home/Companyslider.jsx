import React from 'react'
import ImageSlider from '../../components/Slider'

export default function Companyslider() {
  return (
    <div className='bg-[#F5F5F5] py-10 lg:py-5'>
      <div className='lg:px-[8%] mx-auto w-full  px-4'>
        <p className='text-4xl font-bold text-[#05363B]'>We work with…..</p>
        <ImageSlider />
      </div>
    </div>
  )
}
