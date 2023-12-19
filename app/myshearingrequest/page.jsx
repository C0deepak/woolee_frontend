'use client'
import Loader from '@/components/Loader'
import MyRequestedShearerCard from '@/components/cards/MyRequestedShearerCard'
import { useAuth } from '@/context/authContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MyShearingRequest = () => {
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [requestedShearing, setRequestedShearing] = useState([])
    useEffect(() => {
        setIsLoading(true)
        const fetchMyShearingRequest = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${user.token}`,
                },
            };
            try {
                const response = await axios.get('https://woolee-backend-riosumit.vercel.app/api/myrequest', config);
                console.log(response.data)
                setRequestedShearing(response.data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false)
            }
        };
        fetchMyShearingRequest();
    }, []);

    return (
        <div className='w-full min-h-screen flex flex-col items-center gap-8 font-poppins'>
            {isLoading && <Loader />}
            <div className='w-full flex px-8 pt-20 pb-4 text-xl font-bold bg-zinc-800 text-zinc-100'>
                Get Your Requested Shearerings listed Here
            </div>
            <div className='flex flex-wrap gap-8'>
                {/* {requestedShearing?.map((shearer) => (
                    <MyRequestedShearerCard key={shearer.id} shearer={shearer} />
                ))} */}
                <MyRequestedShearerCard />
            </div>
        </div>
    )
}

export default MyShearingRequest