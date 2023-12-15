'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { FiUser, FiLogOut, FiBookOpen, FiChevronDown, FiChevronUp, FiLogIn, FiBookmark } from 'react-icons/fi'
import { MdOutlineDesignServices, MdShoppingCartCheckout } from 'react-icons/md'
import { BsShop } from 'react-icons/bs'
import { useAuth } from '@/context/authContext'

const Navbar = () => {
    const { isLoggedIn, logout, user } = useAuth()
    const [openPages, setOpenPages] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`flex items-center justify-between font-poppins py-3 px-4 fixed top-0 left-0 w-full z-10 ${scrolling && 'bg-zinc-900/[.7] shadow-lg backdrop-blur'}`}>
            <div>
                <img src="/img/logow.png" alt="" className='w-10 h-10' />
            </div>
            <div className='flex items-center gap-6 font-medium text-sm'>
                <Link href='/' className='text-zinc-400 hover:text-zinc-200'>Home</Link>
                <div className='relative'>
                    <div className='cursor-pointer text-zinc-400 hover:text-zinc-200 flex items-center gap-1' onClick={() => setOpenPages(!openPages)}>Pages {openPages ? <FiChevronUp /> : <FiChevronDown />}</div>

                    {openPages && (
                        <div className='absolute shadow w-[380px] top-8 right-0 flex gap-1 z-20 bg-white p-1'>
                            <div>
                                <img src="/img/bg.webp" alt="" className='w-32' />
                            </div>
                            <div className='flex flex-col divide-y divide-zinc-200'>
                                <div className='px-2 py-1.5 cursor-pointer flex flex-col gap-1 hover:bg-zinc-100'>
                                    <div className='flex items-center gap-1 text-zinc-900 font-medium'><img src="/img/farmer.png" alt="" className='w-5 h-5' /> Producers</div>
                                    <div className='text-zinc-900 text-[10px] leading-3 w-full'>producers are the farmers who produces wools...</div>
                                </div>
                                <div className='px-2 py-1.5 cursor-pointer flex flex-col gap-1 hover:bg-zinc-100'>
                                    <div className='flex items-center gap-1 text-zinc-900 font-medium'><img src="/img/processor.png" alt="" className='w-5 h-5' /> Processors</div>
                                    <div className='text-zinc-900 text-[10px] leading-3 w-full'>producers are the farmers who produces wools...</div>
                                </div>
                                <div className='px-2 py-1.5 cursor-pointer flex flex-col gap-1 hover:bg-zinc-100'>
                                    <div className='flex items-center gap-1 text-zinc-900 font-medium'><img src="/img/buyer.png" alt="" className='w-5 h-5' /> Buyers</div>
                                    <div className='text-zinc-900 text-[10px] leading-3 w-full'>producers are the farmers who produces wools...</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Link href='/marketplace' className='text-zinc-400 hover:text-zinc-200'>Marketplace</Link>
                <Link href='/' className='text-zinc-400 hover:text-zinc-200'>Resources</Link>
            </div>
            {isLoggedIn && (
                <div className='relative'>
                    <img src="/img/avatar.png" alt="" className='w-10 h-10 rounded-full cursor-pointer' onClick={() => setOpenProfile(!openProfile)} />

                    {openProfile && user.role === 'user' && (
                        <div className='absolute shadow w-[200px] top-full right-2 flex flex-col z-20 bg-white divide-y divide-zinc-200 text-sm'>
                            <div className='px-2 py-1.5'>
                                <div className='font-medium'>{user.name}</div>
                                <div className='text-[10px] text-zinc-500 flex items-center gap-1'><GoDotFill />{user.email}</div>
                            </div>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiUser /> Profile</div>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBookOpen />Privacy Policy</div>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2' onClick={logout}><FiLogOut />Logout</div>
                        </div>
                    )}

                    {openProfile && user.role === 'producer' && (
                        <div className='absolute shadow w-[200px] top-full right-2 flex flex-col z-20 bg-white divide-y divide-zinc-200 text-sm'>
                            <div className='px-2 py-1.5'>
                                <div className='font-medium'>{user.name}</div>
                                <div className='text-[10px] text-zinc-500 flex items-center gap-1'><GoDotFill />{user.email}</div>
                            </div>
                            <Link href='/profile' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiUser /> Profile</Link>
                            <Link href='/shop' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><BsShop /> Shop</Link>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><MdOutlineDesignServices />Request Services</div>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><MdShoppingCartCheckout />Cart</div>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBookmark />Bookmarks</div>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBookOpen />Privacy Policy</div>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2' onClick={logout}><FiLogOut />Logout</div>
                        </div>
                    )}

                    {openProfile && user.role === 'processor' && (
                        <div className='absolute shadow w-[200px] top-full right-2 flex flex-col z-20 bg-white divide-y divide-zinc-200 text-sm'>
                            <div className='px-2 py-1.5'>
                                <div className='font-medium'>{user.name}</div>
                                <div className='text-[10px] text-zinc-500 flex items-center gap-1'><GoDotFill />{user.email}</div>
                            </div>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiUser /> Profile</div>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBookOpen />Shop(Add item, inventory)</div>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBookOpen />Privacy Policy</div>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2' onClick={logout}><FiLogOut />Logout</div>
                        </div>
                    )}
                </div>
            )}
            {!isLoggedIn && (<Link href='/login' className='cursor-pointer rounded-full w-8 h-8 flex items-center justify-center text-zinc-900 bg-zinc-200'><FiLogIn /></Link>)}
        </nav>
    )
}

export default Navbar