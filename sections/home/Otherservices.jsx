import React from 'react'
import Bulletpoints from '../../components/Bulletpoints'

export default function Otherservices() {
  return (
    <div className='items-center flex bg-[#1E7179] min-h-[100vh] bg-[url(/servicesbg.jpeg)] bg-center py-10 lg:py-0 bg-no-repeat bg-cover ' id='services'>
        <div className='max-w-[1400px] mx-auto w-full px-3 '>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
                <div className='w-full lg:w-1/2 text-white flex flex-col gap-6'>
                    <p className='text-4xl font-bold'>Other Services</p>
                    <Bulletpoints title='Ex-Wharf & Physical Supply Co-ordination' description='Facilitating bunker deliveries at Major Ports' color='white'/>
                    <Bulletpoints title='Contract Structuring & Negotiation' description='Advising on fuel purchasing contracts and supplier agreements' color='white'/>
                    <Bulletpoints title='Alternatives & Low Carbon Fuel Advisory' description='Supporting Clients in Transitioning to Biofuels, LNG and other sustainable options' color='white'/>
                    <Bulletpoints title='De Bunkering & Fuel Disposal Services' description='handling fuel offloading and disposal as per regulations' color='white'/>
                    <Bulletpoints title='Bunker Trader Representation' description='Acting as a local partner for overseas traders without regional offices.' color='white'/>
                </div>
                <div className='w-full lg:w-1/2 flex items-start flex-col md:flex-row lg:justify-end py-2 gap-5 relative'>
                 <img src='/otherservices.png' alt='services' className='rounded-lg w-full lg:w-auto h-auto md:h-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}
