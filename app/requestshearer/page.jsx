'use client'
import Loader from '@/components/Loader'
import ShearerCard from '@/components/cards/ShearerCard'
import { useAuth } from '@/context/authContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RequestShearer = () => {
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [shearer, setShearer] = useState([])
    useEffect(() => {
        setIsLoading(true)
        const fetchShearer = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${user.token}`,
                },
            };
            try {
                const response = await axios.get('https://woolee-backend.vercel.app/api/shearers', config);
                setShearer(response.data.data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false)
            }
        };
        fetchShearer();
    }, []);

    return (
        <div className='w-full min-h-screen flex flex-col items-center gap-8 font-poppins'>
            {isLoading && <Loader />}
            <div className='w-full flex px-8 pt-20 pb-4 text-xl font-bold bg-zinc-800 text-zinc-100'>
                Get all Shearers listed Here
            </div>
            <div className='flex flex-wrap gap-8'>
                {shearer?.map((shearer) => (
                    <ShearerCard key={shearer.id} shearer={shearer}/>
                ))}
            </div>
        </div>
    )
}

export default RequestShearer