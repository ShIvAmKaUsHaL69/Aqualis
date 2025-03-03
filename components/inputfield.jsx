import React from 'react'

export default function Inputfield({ field, placeholder , type}) {
  return (
    <input name={field} placeholder={`${placeholder}*`} type={type} className='border border-black py-4 px-5 rounded-lg bg-transparent text-black placeholder:text-black placeholder:text-sm'/>
  )
}
