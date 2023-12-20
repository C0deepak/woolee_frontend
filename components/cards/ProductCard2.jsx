import Link from 'next/link';
import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

const ProductCard2 = ({ product }) => {
    return (
        <div className='flex flex-col shadow-lg max-w-[450px] gap-3 p-4 font-poppins text-sm bg-white'>
            <div className='flex flex-col'>
                <div className='text-zinc-950 font-semibold'>{product?.processedbatch?.batch?.type}</div>
                <div className='text-zinc-950 font-medium text-xs text-zinc-700'>{product?.processedbatch?.type}</div>
            </div>

            <div className='flex  gap-[0.8rem] text-zinc-400 text-xs'>
                <div className='flex gap-[0.2rem]'>
                    <div> <img src="/img/c2.jpeg" alt="" className='w-4 h-4 rounded-full' /></div>
                    <div>A+ Certified</div>
                </div>
            </div>
            <div className='flex gap-[1.2rem]'>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'><span>&#8377;</span>{product?.price}/Kg</div>
                    <div className=' text-zinc-400 text-xs'>Price</div>
                </div>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'>{product?.processedbatch?.texture}</div>
                    <div className=' text-zinc-400 text-xs'>Texture</div>
                </div>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'>{product?.processedbatch?.batch?.color}</div>
                    <div className=' text-zinc-400 text-xs'>Colour</div>
                </div>
                <div className='flex flex-col rounded-lg px-2 py-1 bg-zinc-100'>
                    <div className='text-zinc-950 font-semibold text-xs'>{product?.processedbatch?.batch?.softness}</div>
                    <div className=' text-zinc-400 text-xs'>Softness</div>
                </div>
            </div>
            <div className='text-zinc-950 text-xs font-medium flex gap-1'><div>Certification Link : </div><a href={product?.processedbatch?.batch?.quality_certificate_link} className='text-zinc-900 underline'>{product?.processedbatch?.batch?.quality_certificate_link}</a></div>
            <div className='flex justify-between'>
                <Link href={`/marketplace/processedwool/${product?.id}`} className='flex justify-center' >
                    <button className='w-fit py-1 px-6 bg-zinc-950 h-8 text-zinc-100 rounded-3xl hover:text-zinc-100'>See more...</button>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard2
