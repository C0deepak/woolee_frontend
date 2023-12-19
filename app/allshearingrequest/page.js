'use client'
import Loader from '@/components/Loader'
import RequestedShearerCard from '@/components/cards/RequestedShearerCard'
import { useAuth } from '@/context/authContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllShearingRequest = () => {
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
        const response = await axios.get('https://woolee-backend-riosumit.vercel.app/api/shearer/request', config);
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
        Get Your Shearing Orders
      </div>
      <div className='w-full px-8 flex flex-wrap gap-4'>
        {requestedShearing?.map((request) => (
          <RequestedShearerCard key={request.id} request={request} />
        ))}
      </div>
    </div>
  )
}

export default AllShearingRequest