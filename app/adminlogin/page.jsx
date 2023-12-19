'use client'
import axios from 'axios';
import React, { useState } from 'react'

const AdminLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            const response = await axios.post('https://woolee-backend-riosumit.vercel.app/api/login', formData);
            console.log('Login successful', response.data.message);
            login(response.data.user);
            setIsLoading(false)
        } catch (error) {
            console.error('Login failed', error);
            setIsLoading(false)
        }
    };
    return (
        <div className='h-screen w-screen flex items-center justify-center font-poppins'>
            <div className='shadow-md p-8 flex flex-col gap-4 w-[500px]'>
                <div className='flex flex-col gap-1'>
                    <div className='text-2xl text-zinc-800 font-bold'>Login as Admin</div>
                    <div className='text-zinc-500'>Login as a Super Admin</div>
                </div>

                <div className='w-full flex flex-col gap-6'>
                    <div className='flex flex-col gap-1 text-sm'>
                        <label className='font-medium'>Email Id</label>
                        <input type='email' name="email" value={formData.email} onChange={handleChange} placeholder='alexa@gmail.com' className='outline-none border-b-[1px] border-zinc-400 p-1' />
                    </div>
                    <div className='flex flex-col gap-1 text-sm'>
                        <label className='font-medium'>Password</label>
                        <input type='password' name="password" value={formData.password} onChange={handleChange} placeholder='*********' className='outline-none border-b-[1px] border-zinc-400 p-1' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin