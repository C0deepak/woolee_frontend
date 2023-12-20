import React from 'react'

const SoldCard = ({item}) => {
    return (
        <div className="flex hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="text-center w-1/12 font-semibold text-xs">{item?.store?.id}</div>
            <div className="text-center w-1/12 font-semibold text-xs">{item?.store?.batch?.id}</div>
            <div className="text-center w-1/12 font-semibold text-xs">{item?.order_id}</div>
            <div className="flex w-2/12 flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{item?.store?.batch?.type}</span>
                <span className="text-zinc-600 text-xs">{item?.store?.batch?.quality_certificate_link}</span>
            </div>
            <div className="flex w-2/12 flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{item?.customer?.factory_name}</span>
                <span className="text-zinc-700 text-xs">{item?.customer?.phone}</span>
                <span className="text-zinc-500 text-xs">{item?.customer?.district}, {item?.customer?.state}</span>
            </div>
            <div className="text-center w-1/12 font-semibold text-sm">{item?.quantity}Kg</div>
            <div className="text-center w-1/12 font-semibold text-sm">12-08-2023</div>
            <div className="text-center w-2/12 font-semibold text-sm">In-transit</div>
            <div className="text-center w-1/12 font-semibold text-sm">{item?.total_price}</div>
        </div>
    )
}

export default SoldCard