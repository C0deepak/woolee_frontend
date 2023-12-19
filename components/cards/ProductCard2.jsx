import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

const ProductCard2 = () => {
    return (
        <div className='flex flex-col shadow-lg max-w-[420px] gap-3 p-4 font-poppins text-sm bg-white'>
            <div className='text-zinc-950 font-semibold'>Pashmina Wool (Cashmere)</div>

            <div className='flex  gap-[0.8rem] text-zinc-400 text-xs'>
                <div className='flex gap-[0.2rem]'>
                    <div> <img src="/img/c2.jpeg" alt="" className='w-4 h-4 rounded-full' /></div>
                    <div>A+ Certified</div>
                </div>
                <div>Posted - 12hrs ago</div>
            </div>
            <div className='flex gap-[1.2rem]'>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'><span>&#8377;</span>6194/Kg</div>
                    <div className=' text-zinc-400 text-xs'>Price</div>
                </div>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'>91mm</div>
                    <div className=' text-zinc-400 text-xs'>Thickness</div>
                </div>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'>Off White</div>
                    <div className=' text-zinc-400 text-xs'>Colour</div>
                </div>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'>Lightly Soft</div>
                    <div className=' text-zinc-400 text-xs'>Softness</div>
                </div>
            </div>
            <div className='text-zinc-950 text-xs font-medium'>Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolorum. dolor sit amet consectetur adipisicing elit. Molestias, nisi!</div>
            <div className='flex justify-between'>
                <div className='flex justify-around gap-1 items-center py-1 px-6 h-8 rounded-3xl border-2 border-zinc-950' >
                    <button className='w-fit text-zinc-950 '>Add to cart</button>
                    <FiShoppingCart />
                </div>
                <div className='flex justify-center' >
                    <button className='w-fit py-1 px-6 bg-zinc-950 h-8 text-zinc-100 rounded-3xl hover:text-zinc-100'>See more...</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard2
