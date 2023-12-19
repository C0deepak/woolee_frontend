'use client'
import { useAuth } from '@/context/authContext'
import axios from 'axios'
import React, { useState } from 'react'
import { IoCloseCircleSharp } from 'react-icons/io5'
import Loader from '../Loader'

const RequestShearingModal = ({closeModal, id}) => {
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        shearer: id,
        producer_address: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleShearingRequest = async () => {
        setIsLoading(true)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${user.token}`,
            },
        };
        try {
            const response = await axios.post('https://woolee-backend-riosumit.vercel.app/api/shearing_requests', formData, config);
            console.log('Shearing Request successfully', response.data.message);
            setIsLoading(false)
            closeModal()
        } catch (error) {
            console.error('Shearing Request failed', error);
            setIsLoading(false)
        }
    };

    return (
        <div className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-40 bg-zinc-500/[0.5]'>
            {isLoading && <Loader />}
            <div className='relative w-[600px] max-h-[90%] flex flex-col gap-8 p-8 m-auto shadow bg-white z-40 overflow-y-auto'>
                <div onClick={closeModal} className='absolute right-2 top-2 cursor-pointer'><IoCloseCircleSharp size={26} /></div>
                <div className='w-full flex flex-col'>
                    <div className='font-semibold text-2xl'>Request Shearing</div>
                    <div className='font-medium text-zinc-400'>Wools are requested for shearing, you can view them in your orders.</div>
                </div>

                <div className='w-full flex flex-col gap-6'>
                    <div className='flex gap-8 w-full'>
                        <div className='flex flex-col gap-1 text-sm w-1/2'>
                            <label className='font-medium'>Shearer Id</label>
                            <input type='text' name="shearer" value={formData.shearer} disabled className='outline-none border-b-[1px] border-zinc-400 p-1' />
                        </div>
                        <div className='flex flex-col gap-1 text-sm w-1/2'>
                            <label className='font-medium'>Your Address</label>
                            <input type='text' name="producer_address" value={formData.producer_address} onChange={handleChange} placeholder='H.No-35, GH-Road, Nawi Mumbai, Maharastra' className='outline-none border-b-[1px] border-zinc-400 p-1' />
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-2'>
                    <button className='text-sm bg-zinc-900 text-white rounded-full py-2 px-5 max-w-fit' onClick={handleShearingRequest}>Request Service</button>
                </div>
            </div>
        </div>
    )
}

export default RequestShearingModal