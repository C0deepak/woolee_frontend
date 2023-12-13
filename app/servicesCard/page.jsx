import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const page = () => {
  return (
    <div className='flex gap-20 justify-center flex-wrap mt-20'>
      <div className='flex flex-col border-zinc-600 border-2 w-72 h-72 gap-[0.6rem] px-2 py-2'>
            <div className='font-bold text-base'>Blending</div>
            <div className='flex justify-center'>
            < img src='/img/services.jpeg' alt="....." className='rounded-lg w-[400px] h-[150px]' />
            </div>
            <div className='text-zinc-950 text-xs font-medium'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque hic nesciunt provident similique corporis a? Tenetur fugit ducimus consectetur fugiat?
            </div>
            <div className='flex bg-zinc-950 rounded-3xl hover:bg-zinc-800 hover:text-zinc-100 px-20 font-light'>
                <div><button className=' py-1 h-8 text-zinc-100'>Get Services </button>  </div>
                <div><FaRegArrowAltCircleRight className='text-zinc-100 mt-2 ml-1'/></div>
            </div>
       </div>
    </div>
    
  )
}

export default page
