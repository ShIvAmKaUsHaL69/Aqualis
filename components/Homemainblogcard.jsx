import React from 'react'

export default function Homemainblogcard({title, description, image}) {
  return (
    <div className={`bg-cover bg-center min-h-[500px] h-full rounded-lg px-5 flex flex-col justify-end py-10 gap-3`}  style={{ backgroundImage: `url(${image})` }}>
        <p className='text-white text-lg font-medium'>{title}</p>
        <p className='text-white text-sm lg:w-2/3 w-full'>{description}</p>
    </div>
  )
}
