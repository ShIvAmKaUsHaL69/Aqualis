import React from 'react'

export default function Bulletpoints({title, description}) {
  return (
    <div className='flex gap-5'>
        <img src='/flowerpoints.png' alt='flowepoint' className='w-4 h-4 mt-2'/>
        <p className='font-medium text-black text-lg'>
        {title} - <span className='font-thin'>{description}</span>
        </p>
    </div>
  )
}
