'use client'
import Loader from '@/components/Loader'
import BannerSlider from '@/components/Slider/BannerSlider'
import ServiceCard from '@/components/cards/ServiceCard'
import { useAuth } from '@/context/authContext'
import ServiceData from '@/utils/ServiceData'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiSettings } from 'react-icons/fi'

const Service = () => {
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [services, setServices] = useState([])

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${user.token}`,
                },
            };
            try {
                const response = await axios.get('https://woolee-backend.vercel.app/api/processor/services', config);
                setServices(response.data.data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false)
            }
        };
        fetchData();
    }, []);

    const woolServices = [
        {
            "name": "Scouring",
            "description": "Thorough cleaning of raw wool through scouring, removing grease and impurities.",
            "image": "https://2.bp.blogspot.com/-bjB3ToiQ-Rk/VJLrFiZHbZI/AAAAAAAAAss/Q6-hQqitAqU/s1600/scour1.jpg"
        },
        {
            "name": "Carding",
            "description": "The carding process aligns and cleans wool fibers, preparing them for spinning.",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNKqPyC1XSj_V2a5z8m2amsrETemcXSkFOw&usqp=CAU"
        },
        {
            "name": "Dyeing",
            "description": "Expert dyeing services add vibrant and appealing colors to wool products.",
            "image": "https://img.freepik.com/premium-photo/textile-dyeing-factory-generative-ai_547471-1074.jpg"
        },
        {
            "name": "Blending",
            "description": "Artful blending of different wool fibers to create unique textures and properties.",
            "image": "https://img.freepik.com/premium-photo/this-abstract-textile-background-boasts-variety-colorful-eyecatching-fabric-textures-that-blend-together-seamlessly-form-cohesive-visually-stunning-composition-generated-by-ai_727385-2388.jpg"
        },
        {
            "name": "Yarn Spinning",
            "description": "Precision spinning of wool fibers into yarn for various applications.",
            "image": "https://t4.ftcdn.net/jpg/06/43/71/75/360_F_643717507_qerYRGvJD1lrSPIFZuygOxlaLoWzf6jf.jpg"
        },
        {
            "name": "Weaving",
            "description": "Skillful weaving to create high-quality textiles using processed wool yarns.",
            "image": "https://img.freepik.com/free-photo/woven-wool-rug-with-vibrant-multi-colored-pattern-generative-ai_188544-33298.jpg"
        },
    ]

    const handleServiceRequest = async (service) => {
        setIsLoading(true)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${user.token}`,
            },
        };
        try {
            const response = await axios.post('https://woolee-backend.vercel.app/api/producer/service/request',
                {
                    producer: user.id,
                    service: service.id,
                },
                config);
            alert('Service Requested Successfully')
            setIsLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false)
        }
    }

    return (
        <div className='font-poppins'>
            {isLoading && (<Loader />)}
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
                    {woolServices?.map((service, id) => (
                        <ServiceCard key={id} service={service} />
                    ))}
                </div>
            </div>
            <div className='p-10'>
                <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'><FiSettings /> Services Marketplace</div>
                <div className='flex flex-wrap py-10 gap-8'>
                    {services?.map((service, id) => (
                        <div key={id} className='flex zinc-200 text-zinc-900 flex-col gap-1 p-4 shadow-lg'>
                            <div className='text-zinc-900'>Processor Id : {service?.processor}</div>
                            <div className='text-zinc-900'>{service?.name}</div>
                            <div className='text-zinc-600 text-sm'>{service?.price}</div>
                            <div className='bg-zinc-900 text-zinc-100 rounded-full text-sm px-8 py-1 cursor-pointer' onClick={() => handleServiceRequest(service)}>Request Service</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service