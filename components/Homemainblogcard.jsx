import React from 'react'

export default function Homemainblogcard({title, description, image}) {
  return (
    <div className={`bg-cover bg-center min-h-[28rem] h-full rounded-lg px-5 lg:px-8 flex flex-col justify-end py-10 gap-3`}  style={{ backgroundImage: `url(${image})` }}>
        <p className='text-white text-sm xxl:text-base   font-medium'>{title}</p>
        <p className='text-white text-xs xxl:text-sm  lg:w-2/3 w-full'>{description}</p>
    </div>
  )
}
