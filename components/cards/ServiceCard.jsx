import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

const ServiceCard = () => {
    return (
        <div className='flex gap-20 justify-center flex-wrap font-poppins'>
            <div className='flex flex-col shadow-lg w-[360px] gap-[0.6rem] p-4'>
                <div className='font-bold text-base'>Blending</div>
                <div className='flex justify-center w-full '>
                    < img src='/img/services.jpeg' alt="....." className='rounded-lg w-full h-[150px]' />
                </div>
                <div className='text-zinc-950 text-xs font-medium'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque hic nesciunt provident similique corporis a? Tenetur fugit ducimus consectetur fugiat?
                </div>
                <div className='flex items-center justify-center gap-8 bg-zinc-950 rounded-3xl hover:bg-zinc-800 hover:text-zinc-100 py-1.5 font-light'>
                    <div><button className='text-zinc-100'>Get Services </button>  </div>
                    <div><FaRegArrowAltCircleRight className='text-zinc-100' /></div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard