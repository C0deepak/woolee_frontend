'use client'
import React, { useState } from 'react'
import { IoCloseCircleSharp } from 'react-icons/io5'

const SaleModal = ({ closeModal }) => {
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
        try {
            const response = await axios.post('https://woolee-backend-riosumit.vercel.app/api/processors', formData);
            console.log('Registration successful', response.data.message);
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-50 bg-zinc-500/[0.5]'>
            <div className='relative w-[600px] max-h-[90%] flex flex-col gap-8 p-8 m-auto shadow bg-white z-50 overflow-y-auto'>
                <div onClick={closeModal} className='absolute right-2 top-2 cursor-pointer'><IoCloseCircleSharp size={26}/></div>
                <div className='w-full flex flex-col'>
                    <div className='font-semibold text-2xl'>Add Product</div>
                    <div className='font-medium text-zinc-400'>Products added here will be seen in the marketplace and your for sale tab in shop page.</div>
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
                    <button className='text-sm bg-zinc-900 text-white rounded-full py-2 px-5 max-w-fit' onClick={handleSubmit}>Add Product</button>
                </div>
            </div>
        </div>
    )
}

export default SaleModal