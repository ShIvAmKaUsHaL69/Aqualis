import React from 'react'

export default function Homeblogcard({title, description, imge}) {
  return (
    <div className='flex lg:flex-row flex-col bg-[#F1F1F1] rounded-lg gap-4'>
        <img src={imge} alt={title} className='lg:w-36 xl:w-52 xxl:w-64 h-[200px] w-full rounded-lg'/>
        <div className='pt-8 px-3 '>
         <p className='text-sm xxl:text-base font-medium'>{title}</p>
         <p className='py-5 text-xs xxl:text-sm'>{description}
        </p>
        </div>      
    </div>
  )
}
