import React from 'react'

export default function Bulletpoints({title, description , color}) {
  if(!color) {
    color = 'black'
  }
  return (
    <div className='flex gap-5'>
        <img src='/flowerpoints.png' alt='flowepoint' className='w-4 h-4 mt-2'/>
        <p className={`font-semibold text-${color} `}>
        {title} - <span className={`font-normal ${color == 'black' ? 'text-[#00000099]' : 'text-white/60'} `}>{description}</span>
        </p>
    </div>
  )
}
