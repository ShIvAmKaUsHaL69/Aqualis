import React from 'react'

export default function Homeblogcard({title, description, imge}) {
  return (
    <div className='flex lg:flex-row flex-col bg-[#F1F1F1] rounded-lg gap-4'>
        <img src={imge} alt={title} className='lg:w-60 w-full rounded-lg'/>
        <div className='pt-8 px-5 pb-8'>
         <p className='text-lg font-medium'>{title}</p>
         <p className='py-5 text-sm'>{description}
        </p>
        </div>      
    </div>
  )
}
