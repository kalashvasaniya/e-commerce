"use client"
import React from 'react'
import { useCart } from '../layout'
import Image from 'next/image'
import { useEffect } from 'react'

const Order = () => {
    const { cart, subTotal } = useCart()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
          window.location.href = '/user/login'
        }
      })
      

    return (
        <>
            <div className="pt-52 pb-8">
                <h1 className="text-4xl font-bold text-white text-center underline underline-offset-4 ">Order</h1>
            </div>

            <section className="">
                <div className="container px-5 mx-auto">
                    <div className="md:grid md:grid-cols-2 flex flex-col">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-pink-500 tracking-widest">Vintage Vortex</h2>
                            <h1 className="text-gray-300 text-3xl title-font font-medium mb-4">Order ID: #693969</h1>
                            <div className="flex mb-4">
                                <a className="flex-grow text-green-500 py-2 text-lg px-1">Your order has been successfully placed!</a>
                            </div>
                            <div className="grid grid-cols-3 py-3">
                                <span className="text-red-500 truncate underline underline-offset-2">Product</span>
                                <span className="ml-auto text-red-500 truncate underline underline-offset-2">Total</span>
                                <span className="ml-auto text-red-500 truncate underline underline-offset-2">Quantity</span>
                            </div>
                            {Object.keys(cart).map((key) => {
                                return (

                                    <div div key={key} className="border-gray-500" >
                                        {cart[key].quantity > 0 ? (
                                            <div className="grid grid-cols-3 border-t py-2">
                                                <span className="text-gray-100">{cart[key].name} ({cart[key].size}/{cart[key].color})</span>
                                                <span className="ml-auto text-gray-300">₹{(cart[key].price * cart[key].quantity).toFixed(2)}</span>
                                                <span className="ml-auto text-gray-300">{cart[key].quantity}</span>
                                            </div>
                                        ) : null}
                                    </div>
                                )
                            })}
                            <hr />
                            <div className="flex pt-4">
                                <span className="title-font font-medium text-2xl text-gray-200">You Pay <span className='text-green-500'>
                                    ₹{subTotal.toFixed(2)}
                                </span> For <span className='text-green-500'>
                                        {Object.keys(cart).reduce((acc, key) => acc + cart[key].quantity, 0)}
                                    </span> Items</span>
                                <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded">Track Order</button>
                            </div>
                        </div>
                        <div className='m-auto'>
                            <Image height={400} width={200} alt="ecommerce" className="object-cover object-center ring-2 ring-white rounded-full" src={'/Logo1.png'} />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Order
