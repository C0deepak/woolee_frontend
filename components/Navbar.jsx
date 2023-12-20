'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { FiUser, FiLogOut, FiBookOpen, FiChevronDown, FiChevronUp, FiLogIn, FiBookmark, FiSettings, FiBriefcase, FiBox } from 'react-icons/fi'
import { MdOutlineDesignServices, MdShoppingCartCheckout } from 'react-icons/md'
import { BsShop } from 'react-icons/bs'
import { useAuth } from '@/context/authContext'
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const path = usePathname();
    const { isLoggedIn, logout, user } = useAuth()
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
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setOpenProfile(false)
    }, [path])


    return (
        <nav className={`flex items-center justify-between font-poppins py-3 px-4 fixed top-0 left-0 w-full z-10 ${scrolling && 'bg-zinc-900/[.7] shadow-lg backdrop-blur'}`}>
            <div>
                <img src="/img/logow.png" alt="" className='w-10 h-10' />
            </div>
            <div className='flex items-center gap-6 font-medium text-sm'>
                <Link href='/' className='text-zinc-400 hover:text-zinc-200'>Home</Link>
                <Link href='/marketplace' className='text-zinc-400 hover:text-zinc-200'>Marketplace</Link>
                <Link href='/' className='text-zinc-400 hover:text-zinc-200'>Resources</Link>
            </div>
            {isLoggedIn && (
                <div className='relative'>
                    <img src="/img/avatar.png" alt="" className='w-10 h-10 rounded-full cursor-pointer' onClick={() => setOpenProfile(!openProfile)} />

                    {openProfile && user.role === 'producer' && (
                        <div className='absolute shadow w-[200px] top-full right-2 flex flex-col z-20 bg-white divide-y divide-zinc-200 text-sm'>
                            <div className='px-2 py-1.5'>
                                <div className='font-medium'>{user.name}</div>
                                <div className='text-[10px] text-zinc-500 flex items-center gap-1'><GoDotFill />{user.email}</div>
                            </div>
                            <Link href='/requestshearer' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiSettings /> Request Shearing</Link>
                            {/* <Link href='/myshearingrequest' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><MdShoppingCartCheckout /> My Orders</Link> */}
                            <Link href='/privacy' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBookOpen /> Privacy Policy</Link>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2' onClick={logout}><FiLogOut /> Logout</div>
                        </div>
                    )}

                    {openProfile && user.role === 'shearer' && (
                        <div className='absolute shadow w-[200px] top-full right-2 flex flex-col z-20 bg-white divide-y divide-zinc-200 text-sm'>
                            <div className='px-2 py-1.5'>
                                <div className='font-medium'>{user.name}</div>
                                <div className='text-[10px] text-zinc-500 flex items-center gap-1'><GoDotFill />{user.email}</div>
                            </div>
                            <Link href='/allshearingrequest' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBriefcase /> Requested Shearings</Link>
                            <Link href='/privacy' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBookOpen /> Privacy Policy</Link>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2' onClick={logout}><FiLogOut /> Logout</div>
                        </div>
                    )}

                    {openProfile && user.role === 'collector' && (
                        <div className='absolute shadow w-[200px] top-full right-2 flex flex-col z-20 bg-white divide-y divide-zinc-200 text-sm'>
                            <div className='px-2 py-1.5'>
                                <div className='font-medium'>{user.name}</div>
                                <div className='text-[10px] text-zinc-500 flex items-center gap-1'><GoDotFill />{user.email}</div>
                            </div>
                            <Link href='/shop' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBox /> Shop</Link>
                            <Link href='/privacy' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBookOpen /> Privacy Policy</Link>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2' onClick={logout}><FiLogOut /> Logout</div>
                        </div>
                    )}

                    {openProfile && user.role === 'processor' && (
                        <div className='absolute shadow w-[200px] top-full right-2 flex flex-col z-20 bg-white divide-y divide-zinc-200 text-sm'>
                            <div className='px-2 py-1.5'>
                                <div className='font-medium'>{user.name}</div>
                                <div className='text-[10px] text-zinc-500 flex items-center gap-1'><GoDotFill />{user.email}</div>
                            </div>
                            <Link href='/shop' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBox /> Shop</Link>
                            {/* <Link href='/shop' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><MdShoppingCartCheckout /> My Orders</Link> */}
                            <Link href='/privacy' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBookOpen /> Privacy Policy</Link>
                            <div className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2' onClick={logout}><FiLogOut /> Logout</div>
                        </div>
                    )}

                    {openProfile && user.role === 'user' && (
                        <div className='absolute shadow w-[200px] top-full right-2 flex flex-col z-20 bg-white divide-y divide-zinc-200 text-sm'>
                            <div className='px-2 py-1.5'>
                                <div className='font-medium'>{user.name}</div>
                                <div className='text-[10px] text-zinc-500 flex items-center gap-1'><GoDotFill />{user.email}</div>
                            </div>
                            <Link href='/profile' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiUser /> Profile</Link>
                            <Link href='/profile' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><MdShoppingCartCheckout /> My Orders</Link>
                            <Link href='/privacy' className='text-zinc-600 hover:text-zinc-900 px-2 py-1.5 cursor-pointer flex items-center gap-2'><FiBookOpen />Privacy Policy</Link>
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