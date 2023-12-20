import React, { useState } from 'react'
import Loader from '../Loader'
import { IoCloseCircleSharp } from 'react-icons/io5'
import axios from 'axios'
import { useAuth } from '@/context/authContext'

const AddServiceModal = ({closeModal}) => {
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        price: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
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
            const response = await axios.post(`https://woolee-backend-riosumit.vercel.app/api/processor/services`, formData, config);
            console.log('Batch Added successfully', response.data.message);
            setIsLoading(false)
            closeModal()
        } catch (error) {
            console.error('Batch Not Added - failed', error);
            setIsLoading(false)
        }
    };
    const serviceOptions = [
        { "service": "Wool Cleaning", "description": "Professional cleaning to remove impurities and dirt from raw wool." },
        { "service": "Carding", "description": "Carding process to align and clean wool fibers, preparing them for spinning." },
        { "service": "Spinning", "description": "Spinning wool fibers into yarn, creating a strong and cohesive thread." },
        { "service": "Dyeing", "description": "Coloring wool with high-quality dyes to achieve vibrant and long-lasting colors." },
        { "service": "Weaving", "description": "Expert weaving to create various textile products using processed wool yarns." },
        { "service": "Knitting", "description": "Skillful knitting to produce soft and warm woolen garments and accessories." },
        { "service": "Felting", "description": "Felting process to create dense and durable wool fabrics for various applications." },
        { "service": "Blending", "description": "Blending different wool fibers to achieve unique textures and qualities." },
    ]
    return (
        <div className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-40 bg-zinc-500/[0.5]'>
            {isLoading && (<Loader />)}
            <div className='relative w-[600px] max-h-[90%] flex flex-col gap-8 p-8 m-auto shadow bg-white z-40 overflow-y-auto'>
                <div onClick={closeModal} className='absolute right-2 top-2 cursor-pointer'><IoCloseCircleSharp size={26} /></div>
                <div className='w-full flex flex-col'>
                    <div className='font-semibold text-2xl'>Add Services</div>
                    <div className='font-medium text-zinc-400'>You can add any service and act as a service provider for any particular section</div>
                </div>

                <div className='w-full flex flex-col gap-6'>
                    <div className='flex gap-8 w-full'>
                        <div className='flex flex-col gap-1 text-sm w-1/2'>
                            <label className='font-medium'>Name</label>
                            <select
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className='outline-none border-b-[1px] border-zinc-400 p-1'
                            >
                                <option value="" disabled>Select Service Name</option>
                                {serviceOptions.map((option, index) => (
                                    <option key={index} value={option.service}>{option.service} - {option.description}</option>
                                ))}
                            </select>
                        </div>
                        <div className='flex flex-col gap-1 text-sm w-1/2'>
                            <label className='font-medium'>Price per Kg</label>
                            <input type='text' name="price" value={formData.price} onChange={handleChange} placeholder='654' className='outline-none border-b-[1px] border-zinc-400 p-1' />
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-2'>
                    <button className='text-sm bg-zinc-900 text-white rounded-full py-2 px-5 max-w-fit' onClick={handleSubmit}>Add Service</button>
                </div>
            </div>
        </div>
    )
}

export default AddServiceModal