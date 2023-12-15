import InventoryCard from '@/components/cards/InventoryCard'
import React from 'react'
import { FiChevronDown, FiMapPin } from 'react-icons/fi'
import { IoMdSearch } from 'react-icons/io'

const Inventory = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex justify-center gap-8'>
                <div className='flex gap-2 w-96 items-center text-zinc-900 text-sm rounded-3xl px-4 py-1.5 border-2 border-zinc-900'>
                    <IoMdSearch className='' size={25} color='zinc-900' />
                    <input type="search" placeholder="Search for product..." className='block w-full focus:outline-none placeholder:text-zinc-700 text-zinc-900' />
                </div>

                <div className='flex gap-2 items-center w-fit text-zinc-900 text-sm rounded-3xl px-4 py-1.5 border-2 border-zinc-900'>
                    <FiMapPin className='' size={18} color='zinc-900' />
                    <div>Filter By Process</div>
                    <FiChevronDown className='' size={20} color='zinc-900' />
                </div>
            </div>
            <div className='flex flex-wrap gap-8'>
                <InventoryCard />
                <InventoryCard />
                <InventoryCard />
                <InventoryCard />
                <InventoryCard />
                <InventoryCard />
            </div>
        </div>
    )
}

export default Inventory