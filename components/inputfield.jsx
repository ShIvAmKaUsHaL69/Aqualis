import React from 'react'

export default function Inputfield({ field, placeholder , type}) {
  return (
    <input name={field} placeholder={`${placeholder}*`} type={type} className='border border-black py-5 lg:p-4 xxl:py-5 px-8  w-auto xl:w-52 lg:w-36 xxl:w-[16rem] rounded-lg bg-transparent text-black placeholder:text-black xxl:placeholder:text-sm placeholder:text-xs'/>
  )
}
