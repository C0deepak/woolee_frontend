'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { useAuth } from '@/context/authContext';
import Loader from '@/components/Loader';

const ProcessorRegister = () => {
    const { isLoggedIn, user, login } = useAuth();
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        factory_name: '',
        phone: '',
        pincode: '',
        district: '',
        state: '',
        labour_count: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!isLoggedIn) {
            console.log('Login to access the feature!')
            return;
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${user.token}`,
            },
        };
        setIsLoading(true)
        try {
            const response = await axios.post('https://woolee-backend.vercel.app/api/processors', formData, config);
            console.log('Registration as a producer successful', response.data.message);
            const userData = {
                ...user,
                role: 'processor'
            }
            login(userData)
            setIsLoading(false)
        } catch (error) {
            console.error('Registration as a producer failed', error);
            setIsLoading(false)
        }
    };

    const fetchDetails = () => {
        if (formData.pincode === '') {
            console.log('Enter Pincode');
            return;
        } else {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`https://api.postalpincode.in/pincode/${formData.pincode}`);
                    console.log(response)
                    if (response.data && response.data.length > 0) {
                        const updatedFormData = {
                            ...formData,
                            state: response?.data[0].PostOffice[0].State,
                            district: response?.data[0].PostOffice[0].District
                        };

                        setFormData(updatedFormData);
                    } else {
                        console.log('Error 1')
                    }
                } catch (error) {
                    console.log('Error 2')
                }
            };

            fetchData();
        }
    }

    return (
        <div className='flex w-full relative font-poppins'>
            {isLoading && (<Loader />)}
            <div className='w-1/3 min-h-screen bg-zinc-900'></div>
            <div className='w-2/3 min-h-screen'></div>

            <div className='absolute top-1/2 left-1/2 w-3/4 shadow-xl -translate-x-1/2 -translate-y-1/2 flex'>
                <div className='w-[30%]'>
                    <img src="/img/bg.webp" className='w-full grayscale' alt="" />
                </div>
                <div className='w-[70%] flex flex-col gap-8 p-8'>
                    <div className='w-full flex flex-col'>
                        <div className='font-semibold text-2xl'>Register as Processor</div>
                        <div className='font-medium text-zinc-400'>Create an account as a wool processor.</div>
                    </div>

                    <div className='w-full flex flex-col gap-6'>
                        <div className='flex gap-8 w-full'>
                            <div className='flex flex-col gap-1 text-sm w-1/2'>
                                <label className='font-medium'>Factory Name</label>
                                <input type='text' name="factory_name" value={formData.factory_name} onChange={handleChange} placeholder='Wools Farma' className='outline-none border-b-[1px] border-zinc-400 p-1' />
                            </div>
                            <div className='flex flex-col gap-1 text-sm w-1/2'>
                                <label className='font-medium'>Phone</label>
                                <input type='text' name="phone" value={formData.phone} onChange={handleChange} placeholder='1234567890' className='outline-none border-b-[1px] border-zinc-400 p-1' />
                            </div>
                        </div>

                        <div className='flex gap-8 w-full'>
                            <div className='flex flex-col gap-1 text-sm w-1/2'>
                                <label className='font-medium'>Pincode</label>
                                <input type='text' name="pincode" value={formData.pincode} onChange={handleChange} placeholder='201301' className='outline-none border-b-[1px] border-zinc-400 p-1' />
                                <button className='text-zinc-900 font-bold' onClick={fetchDetails}>Fetch Details</button>
                            </div>
                            <div className='flex flex-col gap-1 text-sm w-1/2'>
                                <label className='font-medium'>District</label>
                                <input type='text' name="district" value={formData.district} disabled placeholder='Noida' className='outline-none border-b-[1px] border-zinc-400 p-1' />
                            </div>
                        </div>
                        <div className='flex gap-8 w-full'>
                            <div className='flex flex-col gap-1 text-sm w-1/2'>
                                <label className='font-medium'>State</label>
                                <input type='text' name="state" value={formData.state} disabled placeholder='Utter Pradesh' className='outline-none border-b-[1px] border-zinc-400 p-1' />
                            </div>
                            <div className='flex flex-col gap-1 text-sm w-1/2'>
                                <label className='font-medium'>Labout Count</label>
                                <input type='text' name="labour_count" value={formData.labour_count} onChange={handleChange} placeholder='54' className='outline-none border-b-[1px] border-zinc-400 p-1' />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <button className='text-sm bg-zinc-900 text-white rounded-full py-2 px-5 max-w-fit' onClick={handleSubmit}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessorRegister