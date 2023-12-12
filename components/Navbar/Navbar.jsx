import Link from 'next/link'
import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { FiUser, FiLogOut, FiBookOpen } from 'react-icons/fi'

const Navbar = () => {
    return (
        <nav className='border-b-[1px] flex items-center justify-between font-poppins py-2 px-4 fixed top-0 left-0 w-full z-10'>
            <div>
                <img src="/img/logo.jpeg" alt="" className='w-8 h-8' />
            </div>
            <div className='flex items-center gap-6 text-sm font-medium'>
                <Link href='/' className='text-zinc-600 hover:text-zinc-900'>Home</Link>
                <Link href='/' className='text-zinc-600 hover:text-zinc-900'>Pages</Link>
                <Link href='/' className='text-zinc-600 hover:text-zinc-900'>Marketplace</Link>
                <Link href='/' className='text-zinc-600 hover:text-zinc-900'>Resources</Link>
            </div>
            <div className='relative'>
                <img src="/img/avatar.png" alt="" className='w-10 h-10 rounded-full' />

                <div className='absolute shadow w-[200px] top-full right-2 flex flex-col z-20 bg-white text-sm divide-y divide-zinc-200'>
                    <div className='px-2 py-1.5'>
                        <div className='font-medium cursor-pointer'>Alexa Amazon</div>
                        <div className='text-[10px] text-zinc-500 cursor-pointer flex items-center gap-1'><GoDotFill />Member since 2003</div>
                    </div>
                    <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiUser /> Profile</div>
                    <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBookOpen />Privacy Policy</div>
                    <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiLogOut  />Logout</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar