import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import RequestShearingModal from '../modals/RequestShearingModal'

const ShearerCard = ({ shearer }) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className='flex flex-col shadow-lg  min-w-[380px] gap-2 max-w-[450px] p-4 font-poppins text-sm bg-white'>
            <div className='flex flex-col text-zinc-400'>
                <div className='text-zinc-950 font-semibold'>{shearer?.shearing_company}</div>
                <div className='font-semibold text-xs'>Experience - {shearer?.experience_years}</div>
            </div>
            <div className='flex flex-col gap-[.4rem]'>
                <div className='font-medium'>Contact Details</div>
                <div className='text-zinc-700 flex flex-col'>
                    <div>Phone: {shearer?.phone}</div>
                    <div>Pincode: {shearer?.pincode}</div>
                    <div>District: {shearer?.district}</div>
                    <div>State: {shearer?.state}</div>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex justify-around gap-1 items-center py-1 px-6 h-8 rounded-3xl border-2 border-zinc-950' onClick={() => setOpenModal(true)}>
                    <button className='w-fit text-zinc-950'>Request Shearing</button>
                    <FiShoppingCart />
                </div>
            </div>

            {openModal && (<RequestShearingModal closeModal={() => setOpenModal(!openModal)} id={shearer?.id}/>)}
        </div>
    )
}

export default ShearerCard