import React from 'react'
import Image from 'next/image'
import { PiDotsThreeCircleVerticalDuotone } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa6";

const EduCard = () => {
    return (
        <div className='flex flex-col border-gray-400 border-2 w-2/4 '>
            <div className='flex justify-between mt-2'>
                <div className='flex ml-3'>
                    <div className='rounded-full'>
                        <Image src='/img/thread.jpeg' alt="....." width={40} height={40} className='border-black border-2 rounded-full' />
                    </div>
                    <div className='ml-3 font-semibold text-sm'>
                        Ministry of Textile
                    </div>
                </div>
                <div className='text-gray-400 text-sm mr-3'>
                    Aug 9
                </div>
            </div>

            <div className='ml-3 font-bold mt-2 text-lg'>Improving Wool Farming</div>

            <div className='flex m-3 text-justify'>
                <div className='font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam non tempore accusantium totam deserunt incidunt recusandae sunt beatae.</div>
                <div className='w-5/8'>
                    <Image src='/img/thread.jpeg' alt="....." width={600} height={600} className='rounded-xl ml-2' />
                </div>
            </div>

            <div className='flex justify-between ml-3'>
                <div className='text-gray-400 text-sm font-medium'>12 min read</div>
                <div className='flex px-4 py-2'>
                    <div className='px-2 '>
                        <FaRegBookmark size={25} />
                    </div>
                    <div className='border-black'>
                        <PiDotsThreeCircleVerticalDuotone size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EduCard