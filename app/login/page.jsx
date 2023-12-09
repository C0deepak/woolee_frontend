import React from 'react'
const page = () => {
  return (
    <div>
    <div className='flex justify-center h-screen items-center flex-col'>
      <div className='shadow-xl px-5 py-10'>
        <div className='mb-6'>
        <h1 className='font-bold text-2xl font-poppins'>Login</h1>
        <h3 className='text-gray-600 text-sm'>Login to your account</h3>
        </div>
        <form action="">
          <div className='flex flex-col space-y-1'>

            <label className='font-semibold'>Email Id</label>
            <p><input type='email' name='email' id='email' placeholder='Example@gmail.com' className='border-b-2 mb-2'/></p>
            <label className='font-semibold'>Password</label>
            <p><input type='password' name='password' id='password' placeholder='........' className='border-b-2 mb-2'/></p>
          </div>
          <div className='flex items-center justify-center'>
            <button className=' bg-black text-white rounded-3xl py-1.5 px-5 mt-7'>Sign in</button>
          </div>
        </form>
      </div>
      <div className='text-sm mt-16'>
       <p>Don't have an account? <a href='' className='font-bold'>Sign up</a></p>
      </div>
      </div>
    </div>
  )
}

export default page
