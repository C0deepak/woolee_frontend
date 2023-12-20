import Loader from '@/components/Loader'
import ProductSaleCard1 from '@/components/cards/ProductSaleCard1'
import ProductSaleCard2 from '@/components/cards/ProductSaleCard2'
import SaleModal1 from '@/components/modals/SaleModal1'
import SaleModal2 from '@/components/modals/SaleModal2'
import { useAuth } from '@/context/authContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoMdSearch } from 'react-icons/io'

const Sale = () => {
  const { user, isLoggedIn } = useAuth()
  const [openModal, setOpenModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [store, setStore] = useState([])

  useEffect(() => {
    setIsLoading(true)
    const fetchStore = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${user.token}`,
        },
      };
      try {
        const response = await axios.get(`https://woolee-backend-riosumit.vercel.app/api/${user.role}/mystore`, config);
        console.log(response.data)
        setStore(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false)
      }
    };
    fetchStore();
  }, []);
  return (
    <div className='flex flex-col items-center gap-8'>
      {isLoading && <Loader />}
      <div className='flex justify-center'>
        <div className='flex gap-2 w-96 text-zinc-900 text-sm rounded-3xl px-4 py-1.5 border-2 border-zinc-900'>
          <IoMdSearch className='' size={25} color='zinc-900' />
          <input type="search" placeholder="Search for product..." className='block w-full focus:outline-none placeholder:text-zinc-700 text-zinc-900' />
        </div>
      </div>
      {isLoggedIn && user?.role === 'collector' && (<div className='flex flex-wrap gap-8'>
        {store?.map((product) => (
          <ProductSaleCard1 key={product.id} product={product} />
        ))}
      </div>)}

      {isLoggedIn && user?.role === 'processor' && (<div className='flex flex-wrap gap-8'>
        {store?.map((product) => (
          <ProductSaleCard2 key={product.id} data={product} />
        ))}
      </div>)}
      <div onClick={() => setOpenModal(true)} className='fixed bottom-2 right-2 px-8 py-2 bg-zinc-900 text-zinc-100 font-medium rounded-full text-sm border border-zinc-100 cursor-pointer'>Add Product</div>

      {isLoggedIn && user?.role === 'collector' && openModal && <SaleModal1 closeModal={() => setOpenModal(!openModal)} />}
      {isLoggedIn && user?.role === 'processor' && openModal && <SaleModal2 closeModal={() => setOpenModal(!openModal)} />}
    </div>
  )
}

export default Sale