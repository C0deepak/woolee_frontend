'use client'
import ProductSaleCard1 from '@/components/cards/ProductSaleCard1'
import SoldCard from '@/components/cards/SoldCard'
import { useAuth } from '@/context/authContext'
import axios from 'axios'
import React, { useEffect } from 'react'
import { IoMdSearch } from 'react-icons/io'

const Sold = () => {
    const { user } = useAuth()
    useEffect(() => {
        const fetchData = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${user.token}`,
                },
            };
            try {
                const response = await axios.get('https://woolee-backend-riosumit.vercel.app/api/orders', config);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='flex flex-col'>
            <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/12">Store_id</h3>
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/12">Batch_id</h3>
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/12">Order_id</h3>
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/12">Product Details</h3>
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/12">Customer Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/12 text-center">Quantity</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/12 text-center">Date</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/12 text-center">Status</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/12 text-center">Total</h3>
            </div>
            <div>
                <SoldCard />
                <SoldCard />
                <SoldCard />
                <SoldCard />
            </div>
        </div>
    )
}

export default Sold