'use client'
import { useAuth } from '@/context/authContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoCloseCircleSharp } from 'react-icons/io5'
import Loader from '../Loader'

const SaleModal1 = ({ closeModal }) => {
    const { user } = useAuth()
    const [batch, setBatch] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        batch: '',
        price: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setIsLoading(true)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${user.token}`,
            },
        };
        try {
            const response = await axios.post(`https://woolee-backend.vercel.app/api/${user.role}/stores`, formData, config);
            console.log('Product Added successfully', response.data.message);
            setIsLoading(false)
            closeModal()
        } catch (error) {
            console.error('Product Not Added - failed', error);
            setIsLoading(false)
        }
    };

    useEffect(() => {
        setIsLoading(true)
        const fetchBatch = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${user.token}`,
                },
            };
            try {
                const response = await axios.get(`https://woolee-backend.vercel.app/api/${user.role}/mybatch`, config);
                setBatch(response.data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false)
            }
        };
        fetchBatch();
    }, []);


    return (
        <div className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-40 bg-zinc-500/[0.5]'>
            {isLoading && (<Loader />)}
            <div className='relative w-[600px] max-h-[90%] flex flex-col gap-8 p-8 m-auto shadow bg-white z-40 overflow-y-auto'>
                <div onClick={closeModal} className='absolute right-2 top-2 cursor-pointer'><IoCloseCircleSharp size={26} /></div>
                <div className='w-full flex flex-col'>
                    <div className='font-semibold text-2xl'>Add Product</div>
                    <div className='font-medium text-zinc-400'>Products added here will be seen in the marketplace and your for sale tab in shop page.</div>
                </div>

                <div className='w-full flex flex-col gap-6'>
                    <div className='flex gap-8 w-full'>
                        <div className='flex flex-col gap-1 text-sm w-1/2'>
                            <label className='font-medium'>Wool Type</label>
                            <select
                                name="batch"
                                value={formData.batch}
                                onChange={handleChange}
                                className='outline-none border-b-[1px] border-zinc-400 p-1'
                            >
                                <option value="" disabled>Select Type</option>
                                {batch?.map((option, index) => (
                                    <option key={index} value={option.id}>Id:{option.id} - {option.type}</option>
                                ))}
                            </select>
                        </div>
                        <div className='flex flex-col gap-1 text-sm w-1/2'>
                            <label className='font-medium'>Price (per Kg)</label>
                            <input type='text' name="price" value={formData.price} onChange={handleChange} placeholder='985' className='outline-none border-b-[1px] border-zinc-400 p-1' />
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

export default SaleModal1