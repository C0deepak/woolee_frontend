import Link from 'next/link'
import React from 'react'

const ProductCard1 = ({ product }) => {
    return (
        <div className='flex flex-col shadow-lg max-w-[400px] min-w-[400px] gap-3 p-4 font-poppins text-sm bg-white'>
            <div className='text-zinc-950 font-semibold'>{product?.batch?.type}</div>

            <div className='flex  gap-[0.8rem] text-zinc-400 text-xs'>
                <div className='flex gap-[0.2rem]'>
                    <div> <img src="/img/c2.jpeg" alt="" className='w-4 h-4 rounded-full' /></div>
                    <div>A+ Certified</div>
                </div>
            </div>

            <div className='flex  gap-[1.5rem]'>
                <div className='flex flex-col'>
                    <div className='text-zinc-950 font-bold'><span>&#8377;</span>{product?.price}/Kg</div>
                    <div className=' text-zinc-400 text-xs'>Price</div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-zinc-950 font-bold'>{product?.batch?.quantity} kg</div>
                    <div className=' text-zinc-400 text-xs'>Quantity</div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex gap-[0.2rem]'>
                        <div>
                            <img src="/img/avatar.png" alt="" className='w-6 h-6 rounded-full border-2 border-zinc-950' />
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-zinc-950 font-bold'>{product?.collector?.user?.first_name} </div>
                            <div className=' text-zinc-400 text-xs'>Collector Name</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-zinc-950 text-xs font-medium flex gap-1'><div>Certification Link : </div><div>{product?.batch?.quality_certificate_link}</div></div>
            <Link className='flex justify-center' href={`/marketplace/${product?.id}`} >
                <button className='w-fit py-1 px-8 bg-zinc-950 h-8 text-zinc-100 rounded-3xl hover:bg-zinc-800 hover:text-zinc-100'>See more</button>
            </Link>
        </div>
    )
}

export default ProductCard1