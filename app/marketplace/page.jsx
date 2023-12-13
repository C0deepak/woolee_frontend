import React from 'react'
import { IoMdSearch } from "react-icons/io"
import { GiWool } from "react-icons/gi";
import ProductCard from '@/components/cards/ProductCard';
const page = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div className='bg-zinc-800 px-0 h-44'>

            <div className='mt-20 flex justify-center'>
            <div className='flex gap-2 w-96 text-zinc-100 text-sm rounded-3xl p-2.5 border-2 border-zinc-400'>
             <IoMdSearch className='' size={25} color='zinc'/>
            <input type="search" placeholder="Search" className='block w-full focus:outline-none placeholder:text-zinc-400 text-zinc-100 bg-zinc-800 '/>
            </div>
            </div>
            </div>

      <div className='flex flex-col gap-10 px-8'>
        <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'>Product categories</div>
        <div className='text-zinc-300 bg-zinc-800 w-44 rounded-2xl h-8  flex  items-center justify-center'>Based On Type</div>
        <div className='flex gap-10'>

        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>Virgin Wool</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>Merino Wool</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>Cashmere</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>Mohair</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>Alpaca Wool</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>Llama Wool</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>Vicuna</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>Qiviut Wool</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>Camel Wool</div>
        </div>
        
        </div>




        {/* again */}
        <div className='text-zinc-300 bg-zinc-800 w-44 rounded-2xl h-8  flex  items-center justify-center'>Based On Fabric</div>
        <div className='flex gap-10'>

        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>Boiled Wool</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>Felted Wool</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>Wool Fleece</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center  hover:bg-zinc-300 '>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>Loden Fleece</div>
        </div>
        
        </div>
      </div>

      {/* Exclusive offers section */}
      <div className='flex flex-col gap-10 px-8'>
            <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'>Exclusive Offers</div>
            <div></div>
        </div>


      {/* Trending Now Section */}
        <div className='flex flex-col px-8'>
        <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'>Trending Now</div>
        <div className='flex gap-8 overflow-x-auto py-8 scrollbar'>
        {Array(6)
        .fill(true)
        .map((item, index) => (
          <ProductCard key={index} />
          ))}
        
        </div>
        </div>

        {/* just for you section */}

        <div className='flex flex-col gap-10 px-8'>
            <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'>Just for You</div>
            <div></div>
        </div>



        
    </div>
    
  )
}

export default page
