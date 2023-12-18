import React from 'react'

const SoldCard = () => {
    return (
        <div className="flex hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="text-center w-1/12 font-semibold text-xs">26d54891O</div>
            <div className="text-center w-1/12 font-semibold text-xs">26d54891O</div>
            <div className="text-center w-1/12 font-semibold text-xs">26d54891O</div>
            <div className="flex w-2/12 flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Pashmina Wool(Cashmere)</span>
                <span className="text-zinc-600 text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</span>
            </div>
            <div className="flex w-2/12 flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Anup Paswan</span>
                <span className="text-zinc-700 text-xs">anup@gmail.com</span>
                <span className="text-zinc-500 text-xs">310435, Nirwa, Delhi</span>
            </div>
            <div className="text-center w-1/12 font-semibold text-sm">120Kg</div>
            <div className="text-center w-1/12 font-semibold text-sm">12-08-2023</div>
            <div className="text-center w-2/12 font-semibold text-sm">In-transit</div>
            <div className="text-center w-1/12 font-semibold text-sm">$ 400.00</div>
        </div>
    )
}

export default SoldCard