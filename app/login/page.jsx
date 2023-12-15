'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { useAuth } from '@/context/authContext';

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {

    try {
      const response = await axios.post('https://woolee-backend-riosumit.vercel.app/api/login', formData);
      console.log('Login successful', response.data.message);
      login(response.data.user);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className='flex w-full relative font-poppins'>
      <div className='w-1/3 min-h-screen bg-zinc-900'></div>
      <div className='w-2/3 min-h-screen'></div>

      <div className='absolute top-1/2 left-1/2 w-3/4 shadow-xl -translate-x-1/2 -translate-y-1/2 flex'>
        <div className='w-[30%]'>
          <img src="/img/bg.webp" className='w-full grayscale' alt="" />
        </div>
        <div className='w-[70%] flex flex-col gap-8 p-8'>
          <div className='w-full flex flex-col'>
            <div className='font-semibold text-2xl'>Login</div>
            <div className='font-medium text-zinc-400'>Login to your account</div>
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

          <div className='w-full flex flex-col gap-2'>
            <button className='text-sm bg-zinc-900 text-white rounded-full py-2 px-5 max-w-fit' onClick={handleSubmit}>Login</button>
            <div className='text-xs'>New user ? <Link href='/producer-register' className='font-bold'>Register</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
