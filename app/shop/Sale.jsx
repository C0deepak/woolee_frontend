import ProductSaleCard1 from '@/components/cards/ProductSaleCard1'
import SaleModal from '@/components/modals/SaleModal'
import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io'

const Sale = () => {
  const[openModal, setOpenModal] = useState(false)
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
      <div onClick={() => setOpenModal(true)} className='fixed bottom-2 right-2 px-8 py-2 bg-zinc-900 text-zinc-100 font-medium rounded-full text-sm border border-zinc-100 cursor-pointer'>Add Product</div>

      {openModal && <SaleModal closeModal={() => setOpenModal(!openModal)}/>}
    </div>
  )
}

export default Sale