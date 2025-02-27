import React from 'react'

export default function Bulletpoints({title, description , color}) {
  if(!color) {
    color = 'black'
  }
  return (
    <div className='flex gap-5'>
        <img src='/flowerpoints.png' alt='flowepoint' className='w-4 h-4 mt-2'/>
        <p className={`font-semibold text-${color} text-lg`}>
        {title} - <span className='font-normal text-sm'>{description}</span>
        </p>
    </div>
  )
}
