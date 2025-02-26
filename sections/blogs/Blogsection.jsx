import React from 'react'
import Blogcard from '../../components/Blogcard'

export default function Blogsection() {
  return (
    <div className='pt-10'>
      <div className='max-w-[1280px] mx-auto w-full gap-3 px-3'>
        <div className='flex justify-between w-full'>
            <h2 className='text-4xl font-bold'>All Blogs</h2>
            <p>Search</p>
        </div>
        <div className='my-10 flex md:flex-row flex-col gap-8 md:justify-between w-full'>
            <Blogcard />
            <Blogcard />
            <Blogcard />
        </div>
      </div>
    </div>
  )
}
