'use client'
import Loader from '@/components/Loader';
import { useAuth } from '@/context/authContext';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";

const ProductDetail = (props) => {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [productDetail, setProductDetail] = useState()
  useEffect(() => {
    const slug = props.params.id;
    console.log(slug)
    const fetchProductDetail = async () => {
      setIsLoading(true);
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${user.token}`,
        },
      };
      try {
        const { data } = await axios.get(`https://woolee-backend-riosumit.vercel.app/api/processed_wool/${slug}`, config);
        setProductDetail(data.data);
        setLoading(false);
      } catch (error) {
        console.log('Error in fetching Product Detail');
        setIsLoading(false)
      }
    };
    fetchProductDetail();
  }, []);

  return (
    <div className='min-h-screen font-poppins'>
      {isLoading && (<Loader />)}
      <div className='px-8 h-[20vh] bg-zinc-800 pt-20 flex justify-between items-center'>
        <div className=' font-bold text-2xl text-zinc-100'>{productDetail?.processedbatch?.batch?.type}(Processed)</div>
        <div className='flex justify-around gap-1 items-center py-1 px-6 h-8 rounded-3xl border-2 border-zinc-100 text-zinc-100'>
          <button className='w-fit'>Buy Now</button>
          <FiShoppingCart />
        </div>
      </div>

      <div className=' flex flex-col gap-4  border-b-2 max-h-[300px] justify-center px-8 py-8'>
        <div className='font-semibold text-base text-zinc-800'>PROCESSOR DETAILS</div>
        <div className='flex gap-20'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'> Factory Name</div>
              <div className='text-zinc-900 font-medium'>{productDetail?.processedbatch?.processor?.factory_name}</div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>District</div>
              <div className='text-zinc-900 font-medium'>{productDetail?.processedbatch?.processor?.district}</div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>State </div>
              <div className='text-zinc-900 font-medium'>{productDetail?.processedbatch?.processor?.state}</div>
            </div>
          </div>
        </div>
      </div>

      <div className=' flex flex-col gap-4  border-b-2 max-h-[300px] justify-center px-8 py-8'>
        <div className='font-semibold text-base text-zinc-800'>PROCESSING DETAILS</div>
          <div className='flex gap-20'>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-1'>
                <div className=' text-zinc-700 text-sm'> Cleanliness</div>
                <div className='text-zinc-900 font-medium'>{productDetail?.processedbatch?.cleanliness}/5</div>
              </div>
            </div>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-1'>
                <div className=' text-zinc-700 text-sm'> Color</div>
                <div className='text-zinc-900 font-medium'>{productDetail?.processedbatch?.color}</div>
              </div>
            </div>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-1'>
                <div className=' text-zinc-700 text-sm'>Processed Quantity </div>
                <div className='text-zinc-900 font-medium'>{productDetail?.processedbatch?.processed_quantity} Kg</div>
              </div>
            </div>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-1'>
                <div className=' text-zinc-700 text-sm'>Texture </div>
                <div className='text-zinc-900 font-medium'>{productDetail?.processedbatch?.texture}</div>
              </div>
            </div>
          </div>
      </div>

      <div className=' flex flex-col gap-4 border-b-2 justify-center px-8 py-8'>
        <div className='font-semibold text-base text-zinc-800'>BATCH DETAILS</div>
        <div className='flex gap-20'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Name</div>
              <div className='text-zinc-900 font-medium'>{productDetail?.processedbatch?.batch?.type}(Processed)</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm' >Color</div>
              <div className='text-zinc-900 font-medium'>{productDetail?.processedbatch?.batch?.color}</div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Thickness</div>
              <div className='text-zinc-900 font-medium'>{productDetail?.processedbatch?.batch?.thickness} mm</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Softness</div>
              <div className='text-zinc-900 font-medium'>{productDetail?.processedbatch?.batch?.softness}</div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Raw Quantity</div>
              <div className='text-zinc-900 font-medium'>{productDetail?.processedbatch?.batch?.quantity} kg</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Price</div>
              <div className='text-zinc-900 font-medium'>&#8377; {productDetail?.price}/kg</div>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className=' text-zinc-700 text-sm'>Quality Certification Link</div>
            <a href={productDetail?.processedbatch?.batch?.quality_certificate_link} className='text-zinc-900 font-medium underline'>{productDetail?.processedbatch?.batch?.quality_certificate_link}</a>
          </div>
        </div>
      </div>

      <div className=' flex flex-col gap-4  border-b-2 max-h-[300px] justify-center px-8 py-8'>
        <div className='font-semibold text-base text-zinc-800'>PRODUCER DETAILS</div>
        {productDetail?.processedbatch?.batch?.producers?.map((producer) => (
          <div className='flex gap-20' key={producer?.id}>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-1'>
                <div className=' text-zinc-700 text-sm'> Farm Name</div>
                <div className='text-zinc-900 font-medium'>{producer?.farm_name}</div>
              </div>
            </div>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-1'>
                <div className=' text-zinc-700 text-sm'>District</div>
                <div className='text-zinc-900 font-medium'>{producer?.district}</div>
              </div>
            </div>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-1'>
                <div className=' text-zinc-700 text-sm'>State </div>
                <div className='text-zinc-900 font-medium'>{producer?.state}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="px-8 bg-zinc-700 text-zinc-100 mt-4 mb-4">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-zinc-100">
                <h3 className="text-xl font-semibold">Processing Details</h3>
                <span className="text-sm font-bold uppercase text-zinc-400">{productDetail?.batch?.type}</span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-zinc-100">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-zinc-100">
                  <h3 className="text-xl font-semibold">Carded</h3>
                  <time className="text-xs uppercase text-zinc-400">17-12-2023</time>
                  <p className="mt-3">Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-zinc-100">
                  <h3 className="text-xl font-semibold">Spinned</h3>
                  <time className="text-xs uppercase text-zinc-400">18-12-2023</time>
                  <p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-zinc-100">
                  <h3 className="text-xl font-semibold">Dyed</h3>
                  <time className="text-xs uppercase text-zinc-400">19-12-2023</time>
                  <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail