'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'



export default function Enquerypopup() {
    const [Popup, Setpopup] = useState(false)
    const router = useRouter();

    const handlepopup = () => {
        if (Popup){ 
            Setpopup(false)
            router.push("/#contact");
        }
        else {
            Setpopup(true)
        }
    }
  return (
    <div className='mt-10'>
    {!Popup ? (
        <button onClick={handlepopup} aria-label="Pop up send enquery" className='bg-[#05363B] text-white text-lg px-7 py-3 rounded-md'>Send Enquiry</button>
    ) : (
        <div>
        <button onClick={handlepopup} aria-label="Pop up send enquery" className='bg-[#05363B] text-white text-lg px-7 py-3 rounded-md'>Send Enquiry</button>
        <div className='absolute w-full h-full bg-[#00000024] top-0 left-0'>
        <div className='max-w-[1400px] mx-auto flex items-end justify-end pb-32 lg:pb-48 px-4 lg:px-40 w-full h-full'>
      <div className='bg-[url(/Union.png)] h-[15rem] w-[350px] bg-contain bg-no-repeat py-10 flex items-center justify-center flex-col px-10'>
      <p className='text-xs'>if you are sending an enquiry pls ensure to indicate the vessel name, buying entity, grade & specs of product, date range and quantity range in metric tones.</p>
      <button onClick={handlepopup} aria-label="Pop up send enquery" className='bg-[#05363B] text-white text-base px-5 py-2 lg:mt-4 mt-2 rounded-md'>Okay</button>
      </div>
      </div>
    </div>
    </div>
    )}
    
    </div>
  )
}
