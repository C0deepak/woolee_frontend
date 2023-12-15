import ProductSaleCard1 from '@/components/cards/ProductSaleCard1'
import React from 'react'
import { IoMdSearch } from 'react-icons/io'

const Sale = () => {
  return (
    <div className='flex flex-col items-center gap-8'>
      <div className='flex justify-center'>
        <div className='flex gap-2 w-96 text-zinc-900 text-sm rounded-3xl px-4 py-1.5 border-2 border-zinc-900'>
          <IoMdSearch className='' size={25} color='zinc-900' />
          <input type="search" placeholder="Search for product..." className='block w-full focus:outline-none placeholder:text-zinc-700 text-zinc-900' />
        </div>
      </div>
      <div className='flex flex-wrap gap-8'>
        <ProductSaleCard1 />
        <ProductSaleCard1 />
        <ProductSaleCard1 />
        <ProductSaleCard1 />
        <ProductSaleCard1 />
        <ProductSaleCard1 />
      </div>
    </div>
  )
}

export default Sale