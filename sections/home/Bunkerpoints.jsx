import React from 'react'
import Bulletpoints from '../../components/Bulletpoints'
import Link from 'next/link'
import Enquerypopup from '../../components/Enquerypopup'

export default function Bunkerpoints() {
  return (
    <div className='py-20 lg:pt-32 bg-[url(/bunkingprocess.png)] relative'>
        <div className='max-w-[1280px] mx-auto w-full flex flex-col lg:flex-row px-3 items-center'>
            <div className='lg:w-1/2 w-full'>
                <img src='/cargoshipsailing.jpg' className='w-full lg:w-auto' alt='cargo-ship-sailing'/>
            </div>
            <div className='lg:w-1/2 w-full'>
                <div className='flex flex-col gap-5 mt-10 lg:mt-0 items-start'>
                    <Bulletpoints title='Bunker Procurement' description=' We operate on a transparent bunker broking model, ensuring clarity and trust in every transaction. Our expertise allows us to tailor fuel procurement solutions to meet diverse operational needs, securing reliable, compliant, and cost-effective bunkers while navigating market dynamics efficiently. '/>
                    <Bulletpoints title='Bunker Risk Management' description=' We provide strategies to mitigate market volatility, helping clients manage fuel price fluctuations and secure cost-effective solutions.' />
                    <Bulletpoints title='Bunkers Claims Handling' description=' We provide expertise and advice on operational and technical issues, specializing in document analysis and efficient claim resolution for fair commercial settlements.' />
                    <Bulletpoints title='Bunkers Surveying & Agency' description=' We offer reliable, vetted surveyors and agents for direct appointment by owners or manage the process on their behalf for seamless operations.' />
                    <Bulletpoints title='Bunker Fuel Procurement Solutions' description=' A dedicated fuel procurement solutions tailored exclusively to our clients’ requirements. Acting as a trusted partner, we take on the responsibility of managing the fuel procurement process end-to-end, ensuring access to reliable, compliant, and cost-effective bunkers.' />
                </div>
                <Enquerypopup />
            </div>
        </div>
    </div>
  )
}
