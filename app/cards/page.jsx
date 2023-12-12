import React from 'react'
import Image from 'next/image'
import wool2 from '../images/wool2.jpeg'
import {FaStar} from 'react-icons/fa';

const page = () => {
  return (
    <div className='flex'>
      <div className='border-2 border-gray-300 rounded-md w-44 h-54 flex flex-col justify-evenly'>
            <div className='flex justify-center h-32 mt-2'>
                <Image src={wool2}  alt="....."width={200} height={100} className='rounded'/>
            </div>
            <div>
                <div className='flex'>
                    <div className='flex mt-2'>
                        {[...Array(5)].map(star=>{
                        return(
                            <FaStar size={20} color='#FFD700'/>
                         )
                        })}
                    </div>
                    <div className='px-2 py-1'>
                    324
                    </div>
                </div>
            <div>Yarn</div>
            <div className='font-semibold'>$ 2,300</div>
        </div>
      </div>
    </div>
  )
}

export default page
