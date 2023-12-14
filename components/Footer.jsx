import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div class=" bg-zinc-900 font-poppins">
      <div class="max-w-2xl mx-auto text-white py-10">
        <div class="text-center">
          <h3 class="text-3xl mb-3"> Download Woolee App </h3>
          <p> Let's make wool the trend! </p>
          <div class="flex justify-center my-10">
            <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8" />
              <div class="text-left ml-3">
                <p class='text-xs text-gray-200'>Download on </p>
                <p class="text-sm md:text-base"> Google Play Store </p>
              </div>
            </div>
            <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8" />
              <div class="text-left ml-3">
                <p class='text-xs text-gray-200'>Download on </p>
                <p class="text-sm md:text-base"> Apple Store </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Team Xentrix, 2022-23. </p>
          <div class="order-1 md:order-2">
            <Link href='/' class="px-2">Home</ Link>
            <Link href='/marketplace' class="px-2 border-l">Marketplace</ Link>
            <Link href='/' class="px-2 border-l">Resources</ Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer