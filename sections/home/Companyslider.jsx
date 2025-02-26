import React from 'react'
import ImageSlider from '../../components/Slider'

export default function Companyslider() {
  return (
    <div className='bg-[#F5F5F5] py-20'>
      <div className='max-w-[1280px] mx-auto w-full  px-3'>
        <p className='text-4xl font-bold text-[#05363B]'>We work with…..</p>
        <ImageSlider />
      </div>
    </div>
  )
}
