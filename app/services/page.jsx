import BannerSlider from '@/components/Slider/BannerSlider'
import ServiceCard from '@/components/cards/ServiceCard'
import ServiceData from '@/utils/ServiceData'
import React from 'react'
import { FiSettings } from 'react-icons/fi'

const Service = () => {
    return (
        <div>
            <div className='absolute top-0 left-0 min-h-[50vh] w-full bg-zinc-800 z-0'></div>

            <div className='pt-24 relative flex flex-col'>
                <div className='font-extrabold text-2xl px-4 uppercase text-zinc-600 leading-tight'>Services we <span className='text-white'>provide</span></div>
                <div className='py-8 flex flex-col gap-4'>
                    <div><BannerSlider data={ServiceData} /></div>
                </div>
            </div>
            <div className='p-10'>
                <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'><FiSettings /> Explore Our Services</div>
                <div className='flex flex-wrap py-10 gap-8'>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>
        </div>
    )
}

export default Service