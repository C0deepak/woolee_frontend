import React from 'react'
import { FiEdit3 } from 'react-icons/fi'

const InventoryCard2 = ({ data }) => {
    return (
        <div className='flex flex-col shadow-lg w-[380px] gap-3 p-4 font-poppins text-sm bg-white'>
            <div className='text-zinc-950 font-semibold uppercase'>{data?.batch?.type}</div>
            <div className='text-zinc-500 font-medium text-xs'>{data?.batch?.qr_code}</div>

            <div className='flex  gap-[0.8rem] text-zinc-400 text-xs'>
                <div className='flex gap-[0.2rem]'>
                    <div> <img src="/img/c2.jpeg" alt="" className='w-4 h-4 rounded-full' /></div>
                    <div>A+ Certified</div>
                </div>
            </div>
            <div>Batch Details</div>
            <div className='flex gap-[1.2rem] flex-wrap'>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'>{data?.batch?.thickness} mm</div>
                    <div className=' text-zinc-400 text-xs'>Thickness</div>
                </div>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'>{data?.batch?.color}</div>
                    <div className=' text-zinc-400 text-xs'>Colour</div>
                </div>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'>{data?.batch?.softness}</div>
                    <div className=' text-zinc-400 text-xs'>Softness</div>
                </div>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'>{data?.batch?.quantity} Kg</div>
                    <div className=' text-zinc-400 text-xs'>Quantity</div>
                </div>
            </div>
            <div>Processing Details</div>
            <div className='flex gap-[1.2rem] flex-wrap'>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'>{data?.texture} </div>
                    <div className=' text-zinc-400 text-xs'>Texture</div>
                </div>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'>{data?.cleanliness}</div>
                    <div className=' text-zinc-400 text-xs'>Cleanliness</div>
                </div>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'>{data?.color}</div>
                    <div className=' text-zinc-400 text-xs'>Colour</div>
                </div>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'>{data?.processed_quantity} Kg</div>
                    <div className=' text-zinc-400 text-xs'>Quantity</div>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex justify-around gap-1 items-center py-1 px-6 h-8 rounded-3xl border-2 border-zinc-950' >
                    <button className='w-fit text-zinc-950 '>Edit</button>
                    <FiEdit3 />
                </div>
                <div className='flex justify-center' >
                    <button className='w-fit py-1 px-6 bg-zinc-950 h-8 text-zinc-100 rounded-3xl hover:text-zinc-100'>See more...</button>
                </div>
            </div>
        </div>
    )
}

export default InventoryCard2