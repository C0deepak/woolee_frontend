'use client'
import { useAuth } from '@/context/authContext'
import React from 'react'
import { GiMoneyStack, GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi'
import { SiWebmoney } from 'react-icons/si'

const Profile = () => {
  const { isLoggedIn, user } = useAuth()
  return (
    <div className='flex flex-col gap-4 font-poppins'>
      <div className='bg-zinc-900 pt-20 px-10 pb-4'>
        <div className='font-extrabold text-xl uppercase text-zinc-400'>Hello {user?.name}</div>
        <div className='text-zinc-100 font-medium'>We are happy to see your progress!</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 px-10 py-4 gap-4">
        <div className="bg-zinc-800 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-zinc-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white text-zinc-800 rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <GiTakeMyMoney size={30} />
          </div>
          <div className="text-right">
            <p className="text-2xl">24</p>
            <p>For Sale</p>
          </div>
        </div>
        <div className="bg-zinc-800 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-zinc-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white text-zinc-800 rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <GiMoneyStack size={30} />
          </div>
          <div className="text-right">
            <p className="text-2xl">34</p>
            <p>Sold Items</p>
          </div>
        </div>
        <div className="bg-zinc-800 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-zinc-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white text-zinc-800 rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <GiReceiveMoney size={30} />
          </div>
          <div className="text-right">
            <p className="text-2xl">$31,257</p>
            <p>Sales</p>
          </div>
        </div>
        <div className="bg-zinc-800 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-zinc-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white text-zinc-800 rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <SiWebmoney size={30} />
          </div>
          <div className="text-right">
            <p className="text-2xl">67</p>
            <p>In Inventory</p>
          </div>
        </div>
        <div className="bg-zinc-800 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-zinc-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white text-zinc-800 rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <GiPayMoney size={30} />
          </div>
          <div className="text-right">
            <p className="text-2xl">$23,780</p>
            <p>Asset</p>
          </div>
        </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 className="text-zinc-800 text-sm mt-3 mb-6 font-bold uppercase">
            User Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-zinc-800 text-xs font-bold mb-2" htmlfor="grid-password">
                  Username
                </label>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-zinc-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="lucky.jesse" />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-zinc-800 text-xs font-bold mb-2" htmlfor="grid-password">
                  Email address
                </label>
                <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-zinc-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="jesse@example.com" />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-zinc-800 text-xs font-bold mb-2" htmlfor="grid-password">
                  First Name
                </label>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-zinc-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Lucky" />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-zinc-800 text-xs font-bold mb-2" htmlfor="grid-password">
                  Last Name
                </label>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-zinc-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Jesse" />
              </div>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Contact Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-zinc-800 text-xs font-bold mb-2" htmlfor="grid-password">
                  Address
                </label>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-zinc-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-zinc-800 text-xs font-bold mb-2" htmlfor="grid-password">
                  City
                </label>
                <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-zinc-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="New York" />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-zinc-800 text-xs font-bold mb-2" htmlfor="grid-password">
                  Country
                </label>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-zinc-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="United States" />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-zinc-800 text-xs font-bold mb-2" htmlfor="grid-password">
                  Postal Code
                </label>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-zinc-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Postal Code" />
              </div>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            About Me
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-zinc-800 text-xs font-bold mb-2" htmlfor="grid-password">
                  About me
                </label>
                <textarea type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-zinc-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"> A beautiful UI Kit and Admin for JavaScript &amp; Tailwind CSS. It is Freeand Open Source.</textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile