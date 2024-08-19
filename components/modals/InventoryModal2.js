'use client'
import { useAuth } from '@/context/authContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoCloseCircleSharp } from 'react-icons/io5'
import Loader from '../Loader'

const InventoryModal2 = ({ closeModal }) => {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [allOrder, setAllOrder] = useState([])
  useEffect(() => {
    setIsLoading(true)
    const fetchAllOrders = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${user.token}`,
        },
      };
      try {
        const response = await axios.get(`https://woolee-backend.vercel.app/api/${user.role}/myorders`, config);
        setAllOrder(response.data.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false)
      }
    };
    fetchAllOrders();
  }, []);

  const [formData, setFormData] = useState({
    order: '',
    processed_quantity: '',
    cleanliness: '',
    texture: '',
    color: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${user.token}`,
      },
    };
    try {
      const response = await axios.post(`https://woolee-backend.vercel.app/api/${user.role}/batches`, formData, config);
      console.log('Batch Added successfully', response.data.message);
      setIsLoading(false)
      closeModal()
    } catch (error) {
      console.error('Batch Not Added - failed', error);
      setIsLoading(false)
    }
  };

  const textureOptions = [
    { "value": "Plush", "description": "Luxuriously soft, with a plush feel" },
    { "value": "Textured", "description": "Rich texture, providing depth and character" },
    { "value": "Smooth", "description": "Smooth and even texture" },
    { "value": "Coarse", "description": "Coarse texture, providing a rustic feel" },
    { "value": "Crisp", "description": "Crisp and clean texture" },
    { "value": "Fuzzy", "description": "Soft fuzziness, creating a warm and inviting feel" },
    { "value": "Silky", "description": "Silky texture, offering a smooth touch" },
    { "value": "Napped", "description": "Slightly napped texture for added comfort" },
    { "value": "Lofty", "description": "Lofty texture, providing a sense of volume" },
    { "value": "Ribbed", "description": "Ribbed texture, adding visual interest" }
  ]

  return (
    <div className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-40 bg-zinc-500/[0.5]'>
      {isLoading && (<Loader />)}
      <div className='relative w-[600px] max-h-[90%] flex flex-col gap-8 p-8 m-auto shadow bg-white z-40 overflow-y-auto'>
        <div onClick={closeModal} className='absolute right-2 top-2 cursor-pointer'><IoCloseCircleSharp size={26} /></div>
        <div className='w-full flex flex-col'>
          <div className='font-semibold text-2xl'>Add Batch</div>
          <div className='font-medium text-zinc-400'>Products added here will be the products that are in stocks and may be under process and your inventory tab in shop page.</div>
        </div>

        <div className='w-full flex flex-col gap-6'>
          <div className='flex gap-8 w-full'>
            <div className='flex flex-col gap-1 text-sm w-1/2'>
              <label className='font-medium'>Order Detail</label>
              <select
                name="order"
                value={formData.order}
                onChange={handleChange}
                className='outline-none border-b-[1px] border-zinc-400 p-1'
              >
                <option value="" disabled>Select Order</option>
                {allOrder.map((option, index) => (
                  <option key={index} value={option?.id}>Order Id : {option?.order_id}</option>
                ))}
              </select>
            </div>
            <div className='flex flex-col gap-1 text-sm w-1/2'>
              <label className='font-medium'>Processed Quantity (Kg)</label>
              <input type='text' name="processed_quantity" value={formData.processed_quantity} onChange={handleChange} placeholder='23' className='outline-none border-b-[1px] border-zinc-400 p-1' />
            </div>
          </div>


          <div className='flex gap-8 w-full'>
            <div className='flex flex-col gap-1 text-sm w-1/2'>
              <label className='font-medium'>Texture</label>
              <select
                name="texture"
                value={formData.texture}
                onChange={handleChange}
                className='outline-none border-b-[1px] border-zinc-400 p-1'
              >
                <option value="" disabled>Select Texture</option>
                {textureOptions.map((option, index) => (
                  <option key={index} value={option.value}>{option.value} - {option.description}</option>
                ))}
              </select>
            </div>
            <div className='flex flex-col gap-1 text-sm w-1/2'>
              <label className='font-medium'>cleanliness</label>
              <input type='text' name="cleanliness" value={formData.cleanliness} onChange={handleChange} placeholder='4.5' className='outline-none border-b-[1px] border-zinc-400 p-1' />
            </div>
          </div>
          <div className='flex gap-8 w-full'>
            <div className='flex flex-col gap-1 text-sm w-1/2'>
              <label className='font-medium'>colour</label>
              <input type='text' name="color" value={formData.color} onChange={handleChange} placeholder='snow white' className='outline-none border-b-[1px] border-zinc-400 p-1' />
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col gap-2'>
          <button className='text-sm bg-zinc-900 text-white rounded-full py-2 px-5 max-w-fit' onClick={handleSubmit}>Add Batch</button>
        </div>
      </div>
    </div>
  )
}

export default InventoryModal2