'use client'
import { useAuth } from '@/context/authContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoCloseCircleSharp } from 'react-icons/io5'
import Loader from '../Loader'

const InventoryModal1 = ({ closeModal }) => {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [allProducers, setAllProducers] = useState([])
  useEffect(() => {
    setIsLoading(true)
    const fetchAllProducers = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${user.token}`,
        },
      };
      try {
        const response = await axios.get(`https://woolee-backend-riosumit.vercel.app/api/producers`, config);
        setAllProducers(response.data.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false)
      }
    };
    fetchAllProducers();
  }, []);

  const [formData, setFormData] = useState({
    type: '',
    quantity: '',
    softness: '',
    quality_certificate_link: '',
    thickness: '',
    color: '',
    producers: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'producers') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        producers: [...prevFormData.producers, value],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
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
      const response = await axios.post(`https://woolee-backend-riosumit.vercel.app/api/${user.role}/batches`, formData, config);
      console.log('Batch Added successfully', response.data.message);
      setIsLoading(false)
      closeModal()
    } catch (error) {
      console.error('Batch Not Added - failed', error);
      setIsLoading(false)
    }
  };

  const softnessOptions = [
    { value: 'Plush', description: 'Luxuriously soft' },
    { value: 'Sumptuous', description: 'Rich and extravagant' },
    { value: 'Ethereal', description: 'Delicate and heavenly' },
    { value: 'Opulent', description: 'Superior quality' },
    { value: 'Velvet-Soft', description: 'Smooth like velvet' },
    { value: 'Silken', description: 'Silky smooth' },
    { value: 'Cashmere-Like', description: 'Comparable to cashmere' },
    { value: 'Whisper-Soft', description: 'Soft as a whisper' },
    { value: 'Satin-Touch', description: 'Smooth like satin' },
    { value: 'Lustrous Softness', description: 'Soft with a subtle sheen' }
  ];

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
              <label className='font-medium'>Type (Wool name)</label>
              <input type='text' name="type" value={formData.type} onChange={handleChange} placeholder='Pashmina (Cashmere)' className='outline-none border-b-[1px] border-zinc-400 p-1' />
            </div>
            <div className='flex flex-col gap-1 text-sm w-1/2'>
              <label className='font-medium'>Quantity (Kg)</label>
              <input type='text' name="quantity" value={formData.quantity} onChange={handleChange} placeholder='23' className='outline-none border-b-[1px] border-zinc-400 p-1' />
            </div>
          </div>


          <div className='flex gap-8 w-full'>
            <div className='flex flex-col gap-1 text-sm w-1/2'>
              <label className='font-medium'>Softness</label>
              <select
                name="softness"
                value={formData.softness}
                onChange={handleChange}
                className='outline-none border-b-[1px] border-zinc-400 p-1'
              >
                <option value="" disabled>Select Softness</option>
                {softnessOptions.map((option, index) => (
                  <option key={index} value={option.value}>{option.value} - {option.description}</option>
                ))}
              </select>
            </div>
            <div className='flex flex-col gap-1 text-sm w-1/2'>
              <label className='font-medium'>Quality Certificate Link</label>
              <input type='text' name="quality_certificate_link" value={formData.quality_certificate_link} onChange={handleChange} placeholder='In Farm' className='outline-none border-b-[1px] border-zinc-400 p-1' />
            </div>
          </div>
          <div className='flex gap-8 w-full'>
            <div className='flex flex-col gap-1 text-sm w-1/2'>
              <label className='font-medium'>Thickness (in mm)</label>
              <input type='text' name="thickness" value={formData.thickness} onChange={handleChange} placeholder='95' className='outline-none border-b-[1px] border-zinc-400 p-1' />
            </div>
            <div className='flex flex-col gap-1 text-sm w-1/2'>
              <label className='font-medium'>Colour</label>
              <input type='text' name="color" value={formData.color} onChange={handleChange} placeholder='snow white' className='outline-none border-b-[1px] border-zinc-400 p-1' />
            </div>
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex flex-col gap-1 text-sm w-1/2'>
              <label className='font-medium'>Add Producers</label>
              <select
                name="producers"
                value={formData.producers} // Display the array of selected producer IDs
                onChange={handleChange}
                className='outline-none border-b-[1px] border-zinc-400 p-1'
              >
                <option value="" disabled>Select a producer</option>
                {allProducers?.map((producer) => (
                  <option key={producer?.id} value={producer?.id} className='text-sm'>
                    {producer?.id} - {producer?.farm_name}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex flex-wrap gap-2'>
              {formData?.producers?.map((p, i) => (
                <div key={i} className='bg-zinc-200 py-.5 px-4 rounded-full'>{p}</div>
              ))}
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

export default InventoryModal1