import React from 'react'

const RequestedShearerCard = ({request}) => {
  return (
    <div className='w-full flex justify-between items-center p-4 shadow-md'>
      <div className='w-1/6 flex gap-1 flex-col'>
        <div className='uppercase text-sm text-zinc-700'>Producer_id</div>
        <div>{request?.producer}</div>
      </div>
      <div className='w-3/6 flex gap-1 flex-col'>
        <div className='uppercase text-sm text-zinc-700'>Producer_Address</div>
        <div>{request?.producer_address}</div>
      </div>
      <div className='w-1/6 flex gap-1 flex-col'>
        <div className='uppercase text-sm text-zinc-700'>Status</div>
        <div>{request?.status}</div>
      </div>
      <div className='flex gap-1 flex-col'>
        <div className='text-sm text-zinc-100 bg-zinc-800 px-4 py-2 rounded-full cursor-pointer'>Accept</div>
      </div>
    </div>
  )
}

export default RequestedShearerCard