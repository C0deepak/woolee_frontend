import React from 'react'
import { IoMdSearch } from "react-icons/io"
import { GiWool } from "react-icons/gi";
import ProductCard from '@/components/cards/ProductCard';
const page = () => {
  return (
    <div className='flex flex-col gap-10 px-8'>

    <div className='mt-20 flex justify-center'>
      <div className='flex gap-2 w-96 border border-zinc-300 text-zinc-900 text-sm rounded-3xl p-2.5'>
        <IoMdSearch className='' size={25}/>
      <input type="search" placeholder="Search" className='block w-full focus:outline-none placeholder:text-zinc-400 text-zinc-900'/>
  </div>
      </div>

      <div className='flex flex-col gap-10'>
        <div className='text-2xl text-zinc-950 font-medium border-b-2 border-zinc-500'>Product categories</div>
        <div className='text-zinc-300 bg-zinc-800 w-44 rounded-2xl h-8  flex  items-center justify-center'>Based On Type</div>
        <div className='flex gap-10'>

        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>VIRGIN WOOL</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>MERINO WOOL</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>CASHMERE</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>MOHAIR</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>ALPACA WOOL</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>LLAMA WOOL</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>VICUÑA</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>QIVIUT WOOL</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>CAMEL WOOL</div>
        </div>
        
        </div>




        {/* again */}
        <div className='text-zinc-300 bg-zinc-800 w-44 rounded-2xl h-8  flex  items-center justify-center'>Based On Fabric</div>
        <div className='flex gap-10'>

        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>BOILED WOOL</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>FELTED WOOL</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center hover:bg-zinc-300'>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>WOOL FLEECE</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <div className=' bg-zinc-100 w-16 h-16 rounded-full flex  justify-center items-center  hover:bg-zinc-300 '>
            <GiWool size={50}/>
            </div>
            <div className='text-sm text-zinc-700 font-normal'>LODEN FLEECE</div>
        </div>
        
        </div>
      </div>

      {/* Exclusive offers section */}
        <div>

      <div className='text-2xl text-zinc-950 font-medium'>
        Exclusive Offers
      </div>
        </div>


      {/* Trending Now Section */}
        <div className='flex flex-col gap-10'>
        <div className='text-2xl text-zinc-950 font-medium'>Trending Now</div>
        <div className='w-96'>
            <ProductCard/>
        </div>
        </div>
    </div>
    
  )
}

export default page
