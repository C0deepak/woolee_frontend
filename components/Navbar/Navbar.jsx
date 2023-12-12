'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { FiUser, FiLogOut, FiBookOpen, FiChevronDown, FiChevronUp, FiLogIn } from 'react-icons/fi'

const Navbar = () => {
    const [openPages, setOpenPages] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)

    return (
        <nav className='border-b-[1px] flex items-center justify-between font-poppins py-2 px-4 fixed top-0 left-0 w-full z-10'>
            <div>
                <img src="/img/logo.jpeg" alt="" className='w-8 h-8' />
            </div>
            <div className='flex items-center gap-6 text-sm font-medium'>
                <Link href='/' className='text-zinc-600 hover:text-zinc-900'>Home</Link>
                <div className='relative'>
                    <Link href='/' className='text-zinc-600 hover:text-zinc-900 flex items-center gap-1' onClick={() => setOpenPages(!openPages)}>Pages {openPages ? <FiChevronUp /> : <FiChevronDown />}</Link>

                    {openPages && (
                        <div className='absolute shadow w-[380px] top-8 right-0 flex gap-1 z-20 bg-white text-sm p-1'>
                            <div>
                                <img src="/img/bg.webp" alt="" className='w-32' />
                            </div>
                            <div className='flex flex-col divide-y divide-zinc-200'>
                                <div className='px-2 py-1.5 cursor-pointer flex flex-col gap-1 hover:bg-zinc-100'>
                                    <div className='flex items-center gap-1 text-zinc-900 font-medium text-sm'><img src="/img/farmer.png" alt="" className='w-5 h-5' /> Producers</div>
                                    <div className='text-zinc-900 text-[10px] leading-3 w-full'>producers are the farmers who produces wools...</div>
                                </div>
                                <div className='px-2 py-1.5 cursor-pointer flex flex-col gap-1 hover:bg-zinc-100'>
                                    <div className='flex items-center gap-1 text-zinc-900 font-medium text-sm'><img src="/img/processor.png" alt="" className='w-5 h-5' /> Processors</div>
                                    <div className='text-zinc-900 text-[10px] leading-3 w-full'>producers are the farmers who produces wools...</div>
                                </div>
                                <div className='px-2 py-1.5 cursor-pointer flex flex-col gap-1 hover:bg-zinc-100'>
                                    <div className='flex items-center gap-1 text-zinc-900 font-medium text-sm'><img src="/img/buyer.png" alt="" className='w-5 h-5' /> Buyers</div>
                                    <div className='text-zinc-900 text-[10px] leading-3 w-full'>producers are the farmers who produces wools...</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Link href='/' className='text-zinc-600 hover:text-zinc-900'>Marketplace</Link>
                <Link href='/' className='text-zinc-600 hover:text-zinc-900'>Resources</Link>
            </div>
            {/* <div className='relative'>
                <img src="/img/avatar.png" alt="" className='w-10 h-10 rounded-full cursor-pointer' onClick={() => setOpenProfile(!openProfile)}/>

                {openProfile && (
                    <div className='absolute shadow w-[200px] top-full right-2 flex flex-col z-20 bg-white text-sm divide-y divide-zinc-200'>
                        <div className='px-2 py-1.5'>
                            <div className='font-medium'>Alexa Amazon</div>
                            <div className='text-[10px] text-zinc-500 flex items-center gap-1'><GoDotFill />Member since 2003</div>
                        </div>
                        <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiUser /> Profile</div>
                        <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBookOpen />Privacy Policy</div>
                        <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiLogOut />Logout</div>
                    </div>
                )}
            </div> */}
            <Link href='/login' className='border-2 border-zinc-700 cursor-pointer rounded-full w-8 h-8 flex items-center justify-center'><FiLogIn /></Link>
        </nav>
    )
}

export default Navbar