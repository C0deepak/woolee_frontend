import React from 'react'

const ProductCard = () => {
    return (
        <div className='flex flex-col shadow-lg min-w-[380px] gap-3 p-4 font-poppins text-sm bg-white'>
            <div className='text-zinc-950 font-semibold'>Pashmina Wool (Cashmere)</div>

            <div className='flex  gap-[0.8rem] text-zinc-400 text-xs'>
                <div className='flex gap-[0.2rem]'>
                    <div> <img src="/img/certified.jpeg" alt="" className='w-4 h-4 rounded-full' /></div>
                    <div>A+ Certified</div>
                </div>
                <div>Posted - 12hrs ago</div>
            </div>

            <div className='flex  gap-[1.5rem]'>
                <div className='flex flex-col'>
                    <div className='text-zinc-950 font-bold'><span>&#8377;</span>6194/Kg</div>
                    <div className=' text-zinc-400 text-xs'>Price</div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-zinc-950 font-bold'>120 kg</div>
                    <div className=' text-zinc-400 text-xs'>Quantity</div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex gap-[0.2rem]'>
                        <div>
                            <img src="/img/avatar.png" alt="" className='w-6 h-6 rounded-full border-2 border-zinc-950' />
                        </div>
                        <div className='text-zinc-950 font-bold'>Arjun Reddy</div>
                    </div>
                    <div className=' text-zinc-400 text-xs'>Verified Seller</div>
                </div>
            </div>

            <div className='text-zinc-950 text-xs font-medium'>Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolorum. dolor sit amet consectetur adipisicing elit. Molestias, nisi!</div>
            <div className='flex justify-center' >
                <button className='w-fit py-1 px-8 bg-zinc-950 h-8 text-zinc-100 rounded-3xl hover:bg-zinc-800 hover:text-zinc-100'>See more</button>
            </div>
        </div>
    )
}

export default ProductCard