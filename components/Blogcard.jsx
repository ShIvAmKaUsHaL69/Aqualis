import React from 'react'

export default function Blogcard({title , shortdesc , image , time , category}) {
  return (
    <div className="rounded-lg overflow-hidden bg-white w-full lg:w-[100%] max-w-[389px] ">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="text-gray-600 text-sm mb-2">
          <div className='flex justify-between'>
          <div>
          <span className="font-semibold">Admin</span> • {time}
          </div>
          <div className='bg-[#05363B] text-white rounded-full px-2'>
            {category}
          </div>
          </div>
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{shortdesc}</p>
      </div>
    </div>
  )
}
