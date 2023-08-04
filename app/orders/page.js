"use client"
import React from 'react'
import { useCart } from '../layout'

const orders = () => {
    const { cart, subTotal } = useCart()
    return (
        <>
            <div className="pt-52 pb-8">
                <h1 className="text-4xl font-bold text-white text-center">My Orders</h1>
            </div>

            <section className="">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-col">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-pink-500 tracking-widest">Vintage Vortex</h2>
                            <div className="flex mb-4">
                                <a className="flex-grow text-green-500 py-3 text-lg">Confirm your order!</a>
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
                                <span className="title-font font-medium text-2xl text-gray-200">Total Payment <span className='text-green-500'>
                                    ₹{subTotal.toFixed(2)}
                                </span> For <span className='text-green-500'>
                                        {Object.keys(cart).reduce((acc, key) => acc + cart[key].quantity, 0)}
                                    </span> Items</span>
                                <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded">Confirm Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default orders
