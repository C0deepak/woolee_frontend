import React from 'react'

const page = () => {
  return (
    <div className='shadow-2xl w-11/12'>
      <div className='flex gap-56 px-5 text-zinc-500'>
        <div>PRODUCT DETAILS</div>
        <div className=''>QUANTITY</div>
        <div>PRICE</div>
        <div>TOTAL</div>
      </div>
      
      <div className='flex gap-48 group hover:bg-zinc-200  w-11/12 h-40 px-5'>
        <div className='flex gap-4'>
            <div className='flex items-center'> < img src='/img/services.jpeg' alt="....." className='rounded-lg w-[180px] h-[150px]' /></div>
            <div className='flex flex-col justify-center gap-2 '>
                <div className='font-semibold'>Pashmina</div>
                <div className=' text-red-500'>Cashmere</div>
                <div className='text-zinc-400'>Remove</div>
            </div>
        </div>

        <div className='flex gap-2 items-center justify-center'>
            <div>-</div>
            <div className='item-no w-4 flex justify-center group-hover:bg-white bg-zinc-200'>1</div>
            <div>+</div>
        </div>

        <div className='flex items-center'>
            <div>$400.00</div>
        </div>
        <div className='flex items-center'>$400.00</div>
      </div>


    </div>
  )
}

export default page
