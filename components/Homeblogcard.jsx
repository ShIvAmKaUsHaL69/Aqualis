import React from 'react'

export default function Homeblogcard({title, description, image}) {
  return (
    <div className='flex lg:flex-row flex-col bg-[#F1F1F1] rounded-lg gap-4'>
        <img src={image} />
        <div className='pt-8 pl-5 lg:pl-0 pb-5 lg:pb-0'>
         <p className='text-2xl font-bold'>{title}</p>
         <p className='pt-5'>{description}
        </p>
        </div>      
    </div>
  )
}
