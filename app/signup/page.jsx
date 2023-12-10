import React from 'react'
import Image from 'next/image'
import logo from '../images/sheep.jpeg'
const page = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <Image src={logo}  alt="....."width={90} height={90} className='mt-4'/>
      </div>
      <div className='flex h-screen items-center flex-col'>
      <div className='shadow-xl px-5 py-5'>
        <div className='mb-2'>
        <h1 className='font-bold text-2xl font-poppins'>Sign up</h1>
        <h3 className='text-gray-600 text-sm'>Create a new account</h3>
        </div>
        <form action="">
          <div className='flex flex-col space-y-1'>

            <label className='font-semibold'>Name</label>
            <p><input type='text' name='username' id='username' placeholder='Your name' className='border-b-2 mb-2'/></p>
            <label className='font-semibold'>Email Id</label>
            <p><input type='email' name='email' id='email' placeholder='Example@gmail.com' className='border-b-2 mb-2'/></p>
            <label className='font-semibold'>Password</label>
            <p><input type='password' name='password' id='password' placeholder='........' className='border-b-2 mb-2'/></p>
            <label className='font-semibold'>Confirm password</label>
            <p><input type='password' name='confirm_password' id='confirm_password' placeholder='........' className='border-b-2'/></p>
          </div>
          <div className='flex items-center justify-center'>
            <button className=' bg-black text-white rounded-3xl py-1.5 px-5 mt-7'>Create Account</button>
          </div>
        </form>
      </div>
      <div className='text-sm mt-16'>
       <p>Have an account? <a href='' className='font-bold'>login</a></p>
      </div>
      </div>
    </div>
  )
}

export default page