import React from 'react'

export default function Homeblogcard({title, description, imge}) {
  return (
    <div className='flex lg:flex-row flex-col bg-[#F1F1F1] rounded-lg gap-4'>
        <img src={imge} alt={title} className='lg:w-64 h-[235px] w-full rounded-lg'/>
        <div className='pt-8 px-3 '>
         <p className='text-base xxl:text-lg font-medium'>{title}</p>
         <p className='py-5 text-sm xxl:text-base'>{description}
        </p>
        </div>      
    </div>
  )
}
