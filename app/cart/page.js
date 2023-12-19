import CartCard from '@/components/cards/CartCard'
import Link from 'next/link'
import React from 'react'

const Cart = () => {
    return (
        <div className="container mx-auto mt-10 font-poppins">
            <div className='absolute top-0 left-0 min-h-[20vh] w-full bg-zinc-800 z-0'></div>
            <div className="relative flex shadow-md my-10">
                <div className="w-3/4 px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl text-zinc-300">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl text-zinc-300">3 Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                    </div>
                    <CartCard />

                    <Link href='/marketplace' className="flex font-semibold text-zinc-700 text-sm mt-10">
                        <svg className="fill-current mr-2 text-zinc-700 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Continue Shopping
                    </Link>
                </div>

                <div id="summary" className="w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8 text-zinc-300">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items 3</span>
                        <span className="font-semibold text-sm">590$</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                    </div>
                    <button className="bg-slate-800 hover:bg-slate-900 px-5 py-2 text-sm text-white uppercase">Apply</button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>$600</span>
                        </div>
                        <button className="bg-zinc-800 font-semibold hover:bg-zinc-900 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart