import React from 'react'
import Homemainblogcard from '../../components/Homemainblogcard'
import Homeblogcard from '../../components/Homeblogcard'

export default function Blogsectionhome() {
  return (
    <div className='py-20'>
    <div className='max-w-[1280px] mx-auto w-full px-3'>
      <p className='text-4xl font-bold text-[#05363B]'>Blogs</p>
      <div className='flex mt-10 flex-col lg:flex-row gap-10'>
            <div className='lg:w-1/2 w-full h-full'>
                <Homemainblogcard image='/mainblogdemo.jpg' title='Lorem ipsum dolor sit amet' description='Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Suspendisse vel.'/>
            </div>
            <div className='lg:w-1/2 w-full gap-10 flex flex-col'>
                <Homeblogcard title='Blog 1' image='/blog1.jpg' description='Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Suspendisse vel'/>
                <Homeblogcard title='Blog 2' image='/blog2.jpg' description='Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Suspendisse vel'/>
            </div>
      </div>
    </div>
  </div>
  )
}
