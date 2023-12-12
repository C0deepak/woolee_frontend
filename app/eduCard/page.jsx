import React from 'react'
import Image from 'next/image'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa6";

const page = () => {
    return (
        <div className='flex flex-col shadow-lg gap-2 p-4 w-[420px] font-poppins text-sm'>

            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img src='/img/avatar.png' alt="....." className='w-8 h-8 border-zinc-900 border-2 rounded-full' />
                    <div className='flex flex-col text-xs'>
                        <div className='font-semibold'>Ministry of Textile</div>
                        <div className='text-gray-400 text-xs'>Aug 9</div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-6 h-6 flex items-center justify-center border border-zinc-900 rounded-full cursor-pointer hover:bg-zinc-200'><FaRegBookmark /></div>
                    <div className='w-6 h-6 flex items-center justify-center border border-zinc-900 rounded-full cursor-pointer hover:bg-zinc-200'><BiDotsVerticalRounded /></div>
                </div>
            </div>

            <div className='flex flex-col gap-1'>
                <div className='font-bold text-lg'>Improving Wool Farming</div>
                <div className='flex items-center gap-2'>
                    <div className='font-medium text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam non tempore accusantium totam deserunt incidunt recusandae sunt beatae.</div>
                    <img src='/img/wool.jpg' alt="....." className='rounded-lg w-[140px]' />
                </div>
            </div>
        </div>
    )
}

export default page
