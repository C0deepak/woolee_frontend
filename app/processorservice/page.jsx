'use client'
import Loader from '@/components/Loader'
import AddServiceModal from '@/components/modals/AddServiceModal'
import { useAuth } from '@/context/authContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProcessorService = () => {
    const [openModal, setOpenModal] = useState(false)
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [myServices, setMyServices] = useState([])
    const [requestedServices, setRequestedServices] = useState([])
    useEffect(() => {
        setIsLoading(true)
        const fetchMyServices = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${user.token}`,
                },
            };
            try {
                const response = await axios.get(`https://woolee-backend.vercel.app/api/processor/myservices`, config);
                console.log(response.data.data)
                setMyServices(response.data.data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false)
            }
        };
        const fetchRequestedServices = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${user.token}`,
                },
            };
            try {
                const response = await axios.get(`https://woolee-backend.vercel.app/api/processor/service/requests`, config);
                setRequestedServices(response.data.data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false)
            }
        };
        fetchRequestedServices();
        fetchMyServices();
    }, []);

    return (
        <div className='font-poppins min-h-screen'>
            {isLoading && <Loader />}
            <div className='h-[18vh] bg-zinc-800 text-2xl font-bold text-zinc-100 px-8 pt-16'>
                Services You Provide and services requested to Section
            </div>
            <div className='px-8 py-4 flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                        <h2 className='font-medium text-xl'>Services you provide</h2>
                        <div className='bg-zinc-800 text-zinc-100 rounded-full px-8 py-1 cursor-pointer' onClick={() => setOpenModal(true)}>Add a service</div>
                    </div>
                    <div className='flex gap-4'>
                        {myServices?.map((service, id) => (
                            <div className='px-8 py-2 rounded bg-zinc-200 text-zinc-800' key={id}>{service.name} - {service.price}/Kg</div>
                        ))}
                    </div>
                </div>
                <hr />
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                        <h2 className='font-medium text-xl'>Services Requested to you</h2>
                    </div>
                    <div className='flex'>
                        {requestedServices?.map((service, id) => (
                            <div className='px-8 py-1 rounded' key={id}>Grading - 2678/Kg</div>
                        ))}
                    </div>
                </div>
            </div>

            {openModal && (<AddServiceModal closeModal={() => setOpenModal(!openModal)} />)}
        </div>
    )
}

export default ProcessorService