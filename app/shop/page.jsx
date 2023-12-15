'use client'
import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import Sale from './Sale'
import Sold from './Sold'
import Inventory from './Inventory'
import AddProduct from './AddProduct'

const Shop = () => {
  const [shop, setShop] = useState('sale')
  return (
    <div className='min-h-screen flex flex-col w-full font-poppins gap-4'>
      <div className='pt-16 bg-zinc-900 flex justify-between text-zinc-500'>
        <div className={`flex gap-2 items-center justify-center p-2 w-1/4 cursor-pointer ${shop === 'sale' && 'text-zinc-300 border-b-4 border-zinc-600'}`} onClick={() => setShop('sale')}>For Sale Products</div>
        <div className={`flex gap-2 items-center justify-center p-2 w-1/4 cursor-pointer ${shop === 'sold' && 'text-zinc-300 border-b-4 border-zinc-600'}`} onClick={() => setShop('sold')}>Sold Products</div>
        <div className={`flex gap-2 items-center justify-center p-2 w-1/4 cursor-pointer ${shop === 'inventory' && 'text-zinc-300 border-b-4 border-zinc-600'}`} onClick={() => setShop('inventory')}>Inventory</div>
        <div className={`flex gap-2 items-center justify-center p-2 w-1/4 cursor-pointer ${shop === 'add' && 'text-zinc-300 border-b-4 border-zinc-600'}`} onClick={() => setShop('add')}>Add Product</div>
      </div>
      <div className='px-10 py-4'>
        {shop === 'sale' && (<Sale />)}
        {shop === 'sold' && (<Sold />)}
        {shop === 'inventory' && (<Inventory />)}
        {shop === 'add' && (<AddProduct />)}
      </div>
    </div>
  )
}

export default Shop