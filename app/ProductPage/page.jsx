import React from 'react'
import { GrView } from "react-icons/gr";

const page = () => {
  return (
    <div className='min-h-screen pt-20'>
      <div className=' flex flex-col gap-4 justify-center px-4 py-4'>
        <div className='text-3xl font-semibold text-zinc-800 border-b-4'>Raw Wool</div>
        <div className='font-semibold text-base text-zinc-800 px-8'>BATCH DETAILS</div>
        <div className='flex gap-20 px-8'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Name</div>
              <div className='text-zinc-900 font-medium'>Pashmina Wool</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm' >Color</div>
              <div className='text-zinc-900 font-medium'>White</div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Softness</div>
              <div className='text-zinc-900 font-medium'>Smooth</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Thickness</div>
              <div className='text-zinc-900 font-medium'>4.50 mm</div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Quantity</div>
              <div className='text-zinc-900 font-medium'>100 kg</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Price</div>
              <div className='text-zinc-900 font-medium'>&#8377;1000.00</div>
            </div>
          </div>
         
        </div>
        <div className='px-8'>
        <div className='flex  text-zinc-600 hover:text-zinc-900 border-2 rounded-xl w-60 justify-between items-center p-2'>
            <a href="https://example.com/quality-certificate.pdf" target='_blank' className=''>Quality Certificate</a>
            <GrView/>
        </div>

        </div>

        <div className='font-semibold text-base text-zinc-800 mt-10 px-8'>PRODUCER DETAILS</div>
        <div className='flex gap-20 px-8'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Farm Name</div>
              <div className='text-zinc-900 font-medium'>Sunny Farm</div>
            </div>
            
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>District</div>
              <div className='text-zinc-900 font-medium'>Pune</div>
            </div>
            
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>State</div>
              <div className='text-zinc-900 font-medium'>Maharashtra</div>
            </div>
            
          </div>
          
         
        </div>
        <div className='font-semibold text-base text-zinc-800 mt-5 px-8'>COLLECTOR DETAILS</div>
        <div className='flex gap-20 px-8'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Name</div>
              <div className='text-zinc-900 font-medium'>Siri Apple</div>
            </div>
            
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>District</div>
              <div className='text-zinc-900 font-medium'>Pune</div>
            </div>
            
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>State</div>
              <div className='text-zinc-900 font-medium'>Maharashtra</div>
            </div>
            
          </div>
          
         
        </div>


        {/* Processed Wool details */}

        <div className='text-3xl font-semibold text-zinc-800 border-b-4 mt-10 px-8'>PROCESSED WOOL</div>
        <div className='font-semibold text-base text-zinc-800 px-8'>BATCH DETAILS</div>
        <div className='flex gap-20 px-8'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Name</div>
              <div className='text-zinc-900 font-medium'>Pashmina Wool</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm' >Color</div>
              <div className='text-zinc-900 font-medium'>White</div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Raw Quantity</div>
              <div className='text-zinc-900 font-medium'>100 kg</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Quantity Available</div>
              <div className='text-zinc-900 font-medium'>80 kg</div>
            </div>
            
          </div>
          <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Thickness</div>
              <div className='text-zinc-900 font-medium'>4.50 mm</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Processed Quantity</div>
              <div className='text-zinc-900 font-medium'>80 Kg</div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Cleanliness</div>
              <div className='text-zinc-900 font-medium'>4.50</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Texture</div>
              <div className='text-zinc-900 font-medium'>Fine</div>
            </div>
          </div>
         
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Production date</div>
              <div className='text-zinc-900 font-medium'>20-12-2023</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Price</div>
              <div className='text-zinc-900 font-medium'>&#8377;1500.00</div>
            </div>
           
          </div>
         
        </div>

        <div className='font-semibold text-base text-zinc-800 mt-10 px-8'>FACTORY DETAILS</div>
        <div className='flex gap-20 px-8'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Factory Name</div>
              <div className='text-zinc-900 font-medium'>Sunny Farm</div>
            </div>
            
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>District</div>
              <div className='text-zinc-900 font-medium'>Pune</div>
            </div>
            
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>State</div>
              <div className='text-zinc-900 font-medium'>Maharashtra</div>
            </div>
            
          </div>
          
         
        </div>
        <div className='font-semibold text-base text-zinc-800 mt-10 px-8'>PROCESSOR DETAILS</div>
        <div className='flex gap-20 px-8'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Farm Name</div>
              <div className='text-zinc-900 font-medium'>Wool Processing Co.</div>
            </div>
            
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>District</div>
              <div className='text-zinc-900 font-medium'>Pune</div>
            </div>
            
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>State</div>
              <div className='text-zinc-900 font-medium'>Maharashtra</div>
            </div>
            
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Sheep Count</div>
              <div className='text-zinc-900 font-medium'>25</div>
            </div>
            
          </div>
          
          
         
        </div>
        
    </div>
    </div>
  )
}

export default page
