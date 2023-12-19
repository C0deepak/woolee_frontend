'use client'
import React, { useEffect, useState } from 'react'
import { IoMdSearch } from "react-icons/io"
import { GiWool } from "react-icons/gi";
import ProductCard1 from '@/components/cards/ProductCard1';
import ProductCard2 from '@/components/cards/ProductCard2';
import OfferData from '@/utils/OfferData';
import BannerSlider from '@/components/Slider/BannerSlider';
import { FiGift } from 'react-icons/fi';
import { LuFlame } from 'react-icons/lu';
import { TbMoodHeart } from 'react-icons/tb';
import Loader from '@/components/Loader';
import axios from 'axios';

const Marketplace = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [marketPlace1, setMarketPlace1] = useState([])
    const [marketPlace2, setMarketPlace2] = useState([])

    useEffect(() => {
        setIsLoading(true)
        const fetchMarketplace = async () => {
            try {
                const response = await axios.get('https://woolee-backend-riosumit.vercel.app/api/market');
                const result = await response.data.data.stores;

                // Split the data into two arrays based on odd and even indices
                const newArray1 = result.filter((_, index) => index % 2 === 0);
                const newArray2 = result.filter((_, index) => index % 2 !== 0);

                // Set the state for the two arrays
                setMarketPlace1(newArray1);
                setMarketPlace2(newArray2);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching Marketplace:', error);
                setIsLoading(false)
            }
        };

        fetchMarketplace();
    }, []);

    return (
        <div className='flex flex-col gap-10 font-poppins'>
            {isLoading && (<Loader />)}
            <div className='bg-zinc-800 pb-8'>
                <div className='mt-20 flex justify-center'>
                    <div className='flex items-center gap-2 w-96 text-zinc-100 text-sm rounded-3xl px-4 py-1.5 border-2 border-zinc-400'>
                        <IoMdSearch className='' size={25} color='zinc' />
                        <input type="search" placeholder="Search" className='block w-full focus:outline-none placeholder:text-zinc-400 text-zinc-100 bg-zinc-800' />
                    </div>
                </div>
            </div>

            {/* <div className='flex flex-col gap-10 px-8'>
                <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'>Product categories</div>
                <div className='text-zinc-300 bg-zinc-800 w-48 rounded-2xl h-8  flex  items-center justify-center'>Based On Type</div>
                <div className='flex gap-10'>

                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Virgin Wool</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Merino Wool</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Cashmere</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Mohair</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Alpaca Wool</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Llama Wool</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Vicuna</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Qiviut Wool</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Camel Wool</div>
                    </div>

                </div>


                <div className='text-zinc-300 bg-zinc-800 w-48 rounded-2xl h-8  flex  items-center justify-center'>Based On Fabric</div>
                <div className='flex gap-10'>

                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Boiled Wool</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Felted Wool</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Wool Fleece</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center  hover:bg-zinc-300 '>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Loden Fleece</div>
                    </div>

                </div>
                
                <div className='text-zinc-300 bg-zinc-800 w-48 rounded-2xl h-8  flex  items-center justify-center'>Based On Processing</div>
                <div className='flex gap-10'>

                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Cleaned Wool</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Carded Wool</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Dyed Wool</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center  hover:bg-zinc-300 '>
                            <GiWool size={50} />
                        </div>
                        <div className='text-sm text-zinc-700 font-normal'>Polished Wool</div>
                    </div>

                </div>
            </div> */}

            {/* Exclusive offers section */}
            <div className='flex flex-col px-8'>
                <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'><FiGift /> Exclusive Offers</div>
                <div className='py-8'><BannerSlider data={OfferData} /></div>
            </div>

            {/* Trending Now Section */}
            <div className='flex flex-col px-8'>
                <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'><LuFlame /> Trending Now</div>
                <div className='flex gap-8 overflow-x-auto py-8 scrollbar'>
                    {marketPlace1?.map((product) => (
                        <ProductCard1 key={product.id} product={product} />
                    ))}
                </div>
            </div>

            {/* just for you section */}
            <div className='flex flex-col px-8'>
                <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'><TbMoodHeart /> Just for You</div>
                <div className='flex gap-8 overflow-x-auto py-8 scrollbar'>
                    {marketPlace2?.map((product) => (
                        <ProductCard2 key={product.id} product={product} />
                    ))}
                </div>
            </div>

        </div>

    )
}

export default Marketplace
