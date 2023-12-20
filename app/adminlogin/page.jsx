'use client'
import Loader from '@/components/Loader';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const AdminLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { push } = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setIsLoading(true)
        if (formData.email.trim() === '' || formData.password.trim() === '') {
            alert('Username or password must not be empty!');
            setIsLoading(false);
            return;
        }
        if (formData.email !== 'admin@gmail.com' || formData.password !== 'admin@123') {
            alert('Username or password Not valid!')
            setIsLoading(false)
            return
        }
        setIsLoading(false)
        push('/admin');
    };
    return (
        <div className='h-screen w-screen flex items-center justify-center font-poppins'>
            {isLoading && <Loader />}
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

                <div onClick={handleSubmit} className='bg-zinc-800 text-zinc-100 text-sm px-8 max-w-fit py-2 rounded-full cursor-pointer'>Login</div>
            </div>
        </div>
    )
}

export default AdminLogin