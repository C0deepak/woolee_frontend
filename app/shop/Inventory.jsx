'use client'
import Loader from '@/components/Loader'
import InventoryCard1 from '@/components/cards/InventoryCard1'
import InventoryCard2 from '@/components/cards/InventoryCard2'
import InventoryModal2 from '@/components/modals/InventoryModal2'
import InventoryModal1 from '@/components/modals/InventoryModal1'
import { useAuth } from '@/context/authContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiChevronDown, FiMapPin } from 'react-icons/fi'
import { IoMdSearch } from 'react-icons/io'

const Inventory = () => {
    const { user, isLoggedIn } = useAuth()
    const [openModal, setOpenModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [order, setOrder] = useState([])
    useEffect(() => {
        setIsLoading(true)
        const fetchOrder = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${user.token}`,
                },
            };
            try {
                const response = await axios.get(`https://woolee-backend.vercel.app/api/${user.role}/mybatch`, config);
                console.log(response.data)
                setOrder(response.data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching Orders:', error);
                setIsLoading(false)
            }
        };
        fetchOrder();
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
            {isLoggedIn && user?.role === 'collector' && (<div className='flex flex-wrap gap-8'>
                {order?.map((batch) => (
                    <InventoryCard1 key={batch.id} batch={batch} />
                ))}
            </div>)}

            {isLoggedIn && user?.role === 'processor' && (<div className='flex flex-wrap gap-8'>
                {order?.map((batch) => (
                    <InventoryCard2 key={batch.id} data={batch} />
                ))}
            </div>)}

            <div onClick={() => setOpenModal(true)} className='fixed bottom-2 right-2 px-8 py-2 bg-zinc-900 text-zinc-100 font-medium rounded-full text-sm border border-zinc-100 cursor-pointer'>Add Batch</div>

            {isLoggedIn && user?.role === 'collector' && openModal && <InventoryModal1 closeModal={() => setOpenModal(!openModal)} />}
            {isLoggedIn && user?.role === 'processor' && openModal && <InventoryModal2 closeModal={() => setOpenModal(!openModal)} />}
        </div>
    )
}

export default Inventory