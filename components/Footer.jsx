import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=" bg-zinc-900 font-poppins">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3"> Download Woolee App </h3>
          <p> Let's make wool the trend! </p>
          <div className="flex justify-center my-10">
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
              <div className="text-left ml-3">
                <p className='text-xs text-gray-200'>Download on </p>
                <p className="text-sm md:text-base"> Google Play Store </p>
              </div>
            </div>
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
              <div className="text-left ml-3">
                <p className='text-xs text-gray-200'>Download on </p>
                <p className="text-sm md:text-base"> Apple Store </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Team Xentrix, 2022-23. </p>
          <div className="order-1 md:order-2">
            <Link href='/' className="px-2">Home</ Link>
            <Link href='/marketplace' className="px-2 border-l">Marketplace</ Link>
            <Link href='/' className="px-2 border-l">Resources</ Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer