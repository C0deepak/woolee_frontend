import React from 'react'

const InventoryCard = () => {
    return (
        <div className='flex gap-20 justify-center flex-wrap mt-20 font-poppins'>
            <div className='flex flex-col border-zinc-600 border-2 w-80 h-48 gap-[0.6rem] px-2 py-2'>
                <div className='text-zinc-950 font-semibold'>Pashmina Wool (Cashmere)</div>
                <div className='text-zinc-400 text-xs'>Batch #12A16YA</div>

                <div className='flex  justify-between gap-[0.8rem] text-zinc-400 text-xs'>
                    <div className='flex gap-[0.2rem]'>
                        <div> <img src="/img/certified.jpeg" alt="" className='w-4 h-4 rounded-full' /></div>
                        <div>A+ Certified</div>
                    </div>
                    <div><span>Production Date - </span> <span>12hrs ago</span></div>
                </div>
                <div className='flex  gap-[1.5rem]'>
                    <div className='flex flex-col'>
                        <div className='text-zinc-950 font-bold'>120 kg</div>
                        <div className=' text-zinc-400 text-xs'>Quantity</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-zinc-950 font-bold'>Lightly Soft</div>
                        <div className=' text-zinc-400 text-xs'>Softness</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-zinc-950 font-bold'>91mm</div>
                        <div className=' text-zinc-400 text-xs'>Thickness</div>
                    </div>
                </div>
                <div className='flex  gap-[1.5rem]'>
                    <div className='flex flex-col'>
                        <div className='text-zinc-950 font-bold'>Off White</div>
                        <div className=' text-zinc-400 text-xs'>Colour</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-zinc-950 font-bold'>In Farm</div>
                        <div className=' text-zinc-400 text-xs'>Location</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InventoryCard