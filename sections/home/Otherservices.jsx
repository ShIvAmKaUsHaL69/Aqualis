import React from 'react'
import Bulletpoints from '../../components/Bulletpoints'

export default function Otherservices() {
  return (
    <div className='py-28 bg-[#1E7179] bg-[url(/servicesbg.jpeg)] bg-no-repeat bg-cover ' id='services'>
        <div className='max-w-[1280px] mx-auto w-full px-3 '>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
                <div className='w-full lg:w-1/2 text-white flex flex-col gap-8'>
                    <p className='text-4xl font-bold'>Other Services</p>
                    <Bulletpoints title='Ex-Wharf & Physical Supply Co-ordination' description='Facilitating bunker deliveries at Major Ports' color='white'/>
                    <Bulletpoints title='Contract Structuring & Negotiation' description='Advising on fuel purchasing contracts and supplier agreements' color='white'/>
                    <Bulletpoints title='Alternatives & Low Carbon Fuel Advisory' description='Supporting Clients in Transitioning to Biofuels, LNG and other sustainable options' color='white'/>
                    <Bulletpoints title='De Bunkering & Fuel Disposal Services' description='handling fuel offloading and disposal as per regulations' color='white'/>
                    <Bulletpoints title='Bunker Trader Representation' description='Acting as a local partner for overseas traders without regional offices.' color='white'/>
                </div>
                <div className='w-full lg:w-1/2 flex items-start lg:justify-end relative'>
                 <img src='/otherservices1.jpg' alt='services' className='rounded-lg w-full lg:w-auto'/>
                 <img src='/otherservices2.jpg' alt='services' className='absolute left-[20%] bottom-[20%] hidden lg:block'/>

                </div>
            </div>
        </div>
    </div>
  )
}
