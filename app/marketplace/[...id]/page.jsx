import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

const ProductDetail = () => {
  return (
    <div  className='min-h-screen pt-20 px-10'>
      <div className='flex justify-end'>

     <div className='flex justify-around gap-1 items-center py-1 px-6 h-8 rounded-3xl border-2 border-zinc-950' >
                    <button className='w-fit text-zinc-950 '>Add to cart</button>
                    <FiShoppingCart />
                </div>
      </div>
      <div className='flex flex-col gap-10  border-b-2 max-h-[300px] justify-center px-4 py-4'>
        <div className='font-semibold text-base text-zinc-800'>BATCH DETAILS</div>
        <div className='flex gap-20'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Name</div>
              <div className='text-zinc-900 font-medium'>Pashmina Wool</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm' >Color</div>
              <div className='text-zinc-900 font-medium'>Faded White</div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Type</div>
              <div className='text-zinc-900 font-medium'>Angoor Wool</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Thickness</div>
              <div className='text-zinc-900 font-medium'>55 mm</div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Production Date</div>
              <div className='text-zinc-900 font-medium'>12-10-2023</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Softness</div>
              <div className='text-zinc-900 font-medium'>Ethereal</div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Quantity</div>
              <div className='text-zinc-900 font-medium'>100 kg</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>Price</div>
              <div className='text-zinc-900 font-medium'>&#8377; 110/kg</div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex flex-col gap-10  border-b-2 max-h-[300px] justify-center px-4 py-4'>
        <div className='font-semibold text-base text-zinc-800'>PRODUCER DETAILS</div>
        <div className='flex gap-20'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'> Farm Name</div>
              <div className='text-zinc-900 font-medium'>Woolee Farm</div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>District</div>
              <div className='text-zinc-900 font-medium'>East Singhbhum</div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-1'>
              <div className=' text-zinc-700 text-sm'>State </div>
              <div className='text-zinc-900 font-medium'>Jharkhand</div>
            </div>
          </div>
        </div>
      </div>




      <section className="dark:bg-zinc-500 dark:text-zinc-100 mt-4 mb-4">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-zinc-100">
					<h3 className="text-3xl font-semibold">Pashmina Wool</h3>
					<span className="text-sm font-bold tracki uppercase dark:text-zinc-400">Angura Wool</span>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-2 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-zinc-700">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-zinc-100">
						<h3 className="text-xl font-semibold tracki">Donec porta enim vel </h3>
						<time className="text-xs tracki uppercase dark:text-zinc-400">Dec 2020</time>
						<p className="mt-3">Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-zinc-100">
						<h3 className="text-xl font-semibold tracki">Aliquam sit amet nunc ut</h3>
						<time className="text-xs tracki uppercase dark:text-zinc-400">Jul 2019</time>
						<p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-zinc-100">
						<h3 className="text-xl font-semibold tracki">Pellentesque habitant morbi</h3>
						<time className="text-xs tracki uppercase dark:text-zinc-400">Jan 2016</time>
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