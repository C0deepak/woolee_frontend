'use client'
import Loader from '@/components/Loader'
import InventoryCard from '@/components/cards/InventoryCard'
import InventoryModal from '@/components/modals/InventoryModal'
import { useAuth } from '@/context/authContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiChevronDown, FiMapPin } from 'react-icons/fi'
import { IoMdSearch } from 'react-icons/io'

const Inventory = () => {
    const { user } = useAuth()
    const [openModal, setOpenModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [inventory, setInventory] = useState([])
    useEffect(() => {
        setIsLoading(true)
        const fetchInventory = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${user.token}`,
                },
            };
            try {
                const response = await axios.get('https://woolee-backend-riosumit.vercel.app/api/batch/search', config);
                setInventory(response.data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false)
            }
        };
        fetchInventory();
    }, []);
    return (
        <div className='flex flex-col gap-8'>
            {isLoading && (<Loader />)}
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
                {inventory?.map((batch) => (
                    <InventoryCard key={batch.id} batch={batch} />
                ))}
            </div>

            <div onClick={() => setOpenModal(true)} className='fixed bottom-2 right-2 px-8 py-2 bg-zinc-900 text-zinc-100 font-medium rounded-full text-sm border border-zinc-100 cursor-pointer'>Add Batch</div>

            {openModal && <InventoryModal closeModal={() => setOpenModal(!openModal)} />}
        </div>
    )
}

export default Inventory