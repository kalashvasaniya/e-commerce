'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { useCart } from '@/app/layout'


const Navbar = () => {
    const { cart, subTotal, addToCart, clearCart, removeFromCart } = useCart()
    const toggleCart = () => {
        if (ref.current.classList.contains('-translate-x-full')) {
            ref.current.classList.remove('-translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('-translate-x-full')
        }
    }
    const ref = useRef();
    return (
        <>
            <nav className="bg-black fixed w-full z-20 top-0 left-0 border-b">

                {/* top navbar */}
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href={'/home'} className="flex items-center">
                        <Image src={'/Logo1.png'} alt="kalash" width={60} height={60} />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-pink-500">Vintage Vortex</span>
                    </Link>

                    <div className="md:order-4 inline-flex">

                        {/* side navbar  */}
                        <div onClick={toggleCart} className="md:block hidden">
                            <button type="button" className="relative items-center p-2 text-sm font-medium text-center group bg-white rounded-full hover:scale-110">
                                <svg className='w-6 h-6' viewBox="0 0 1024 1024">
                                    <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" /></svg>
                                <span className="sr-only">Notifications</span>
                                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2">
                                    {Object.keys(cart).reduce((acc, key) => acc + cart[key].quantity, 0)}
                                </div>
                            </button>

                            <div ref={ref} onClick={toggleCart} class="absolute top-0 left-0 z-60 w-96 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-gray-800" tabindex="-1">
                                <h5 class="text-base font-semibold uppercase text-gray-200">shopping cart</h5>
                                <button onClick={toggleCart} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center" >
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    <span class="sr-only">Close menu</span>
                                </button>

                                <hr class="my-3" />

                                <div class="py-4 overflow-y-auto">
                                    <ul class="space-y-2 font-medium">

                                        {Object.keys(cart).length === 0 &&
                                            <div class="flex justify-center p-2 text-gray-200 rounded-lg">
                                                <span class="underline-offset-4 underline font-mono">
                                                    Cart is empty!
                                                </span>
                                            </div>
                                        }

                                        {Object.keys(cart).map((key) => {
                                            return (
                                                <li key={key} className='grid grid-cols-2'>
                                                    <div class="flex items-center p-2 text-gray-200 rounded-lg">
                                                        <span class="underline-offset-4 underline font-mono truncate">
                                                            {cart[key].name}
                                                        </span>
                                                    </div>

                                                    <div className="flex space-x-3 justify-center">
                                                        <div className="bg-black text-white flex items-center my-4 px-2 rounded-full">
                                                            <button onClick={() => removeFromCart(cart[key].id, cart[key].name, cart[key].price, 1, cart[key].size, cart[key].color)} className="text-gray-200 font-mono">-</button>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <span className="text-gray-200 font-mono">{cart[key].quantity}</span>
                                                        </div>
                                                        <div className="bg-black text-white flex items-center my-4 px-2 rounded-full">
                                                            <button onClick={() => addToCart(cart[key].id, cart[key].name, cart[key].price, 1, cart[key].size, cart[key].color)} className="text-gray-200 font-mono">+</button>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div className="">
                                    <span className="text-gray-200 font-mono">Subtotal: ${subTotal.toFixed(2)}</span><br />
                                </div>

                                {/* Buttons */}
                                <div class="flex space-x-4 mt-16 justify-center">
                                    <button onClick={clearCart} class="right-2.5 bottom-2.5 text-white bg-pink-500 hover:bg-pink-700 font-medium rounded-lg text-sm px-4 py-2">Clear Cart</button>
                                    <Link href={'/checkout'}>
                                        <button class="right-2.5 bottom-2.5 text-white bg-pink-500 hover:bg-pink-700 font-medium rounded-lg text-sm px-4 py-2">Checkout</button>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        {/* Profile icon  */}
                        <div className="md:block hidden pl-6">

                            <Image src={'/logo.jpeg'} width={100} height={100} id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer hover:scale-110" alt="User dropdown" />

                            <div id="userDropdown" className="z-10 hidden divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-600">
                                <div className="px-4 py-3 text-sm text-white">
                                    <div>kalash vasaniya</div>
                                    <div className="font-medium truncate">kalash@gmail.com</div>
                                </div>
                                <div className="py-1">
                                    <button className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200">Logout</button>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* search section */}
                    <div className="flex md:order-2">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-100 hover:ring-2 hover:ring-gray-200 rounded-lg text-sm p-2.5 mr-1" >
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Search</span>
                        </button>


                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-100" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm  text-gray-100 border border-gray-900 rounded-lg bg-gray-800" placeholder="Search..." />
                        </div>

                        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-100 rounded-lg md:hidden hover:ring-2 hover:ring-gray-200" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>

                    </div>

                    {/* Link section */}
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div className="relative mt-3 md:hidden">

                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-white border border-gray-900 rounded-lg bg-gray-800 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-black text-white">
                            <li>
                                <Link href={'/home'} className="block py-2 pl-3 pr-4 text-gray-400 hover:text-white rounded md:bg-transparent md:p-0 focus:text-white active:text-white" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href={'/about'} className="block py-2 pl-3 pr-4 text-gray-400 hover:text-white rounded md:bg-transparent md:p-0 focus:text-white active:text-white">About</Link>
                            </li>
                            <li>
                                <Link href={'/contact'} className="block py-2 pl-3 pr-4 text-gray-400 hover:text-white rounded md:bg-transparent md:p-0 focus:text-white active:text-white">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className='text-gray-100' />
                {/* second top navbar */}
                <div className="max-w-lg px-4 py-3 mx-auto align-middle">
                    <div className="flex items-center">

                        <ul className="flex flex-row font-medium mt-0 mr-6 text-sm overflow-auto space-x-10 no-scrollbar">
                            <li>
                                <Link href={'/items/tshirt'} className="text-white hover:text-pink-500 focus:text-pink-500 active:text-pink-500">Tshirt</Link>
                            </li>
                            <li>
                                <Link href={'/items/jeans'} className="text-white hover:text-pink-500 focus:text-pink-500 active:text-pink-500">Jeans</Link>
                            </li>
                            <li>
                                <Link href={'/items/hoodies'} className="text-white hover:text-pink-500 focus:text-pink-500 active:text-pink-500">Hoodies</Link>
                            </li>
                            <li>
                                <Link href={'/items/shoes'} className="text-white hover:text-pink-500 focus:text-pink-500 active:text-pink-500">Shoes</Link>
                            </li>
                            <li>
                                <Link href={'/items/caps'} className="text-white hover:text-pink-500 focus:text-pink-500 active:text-pink-500">Caps</Link>
                            </li>
                            <li>
                                <Link href={'/items/socks'} className="text-white hover:text-pink-500 focus:text-pink-500 active:text-pink-500">Socks</Link>
                            </li>
                        </ul>
                        <div className="md:hidden">&gt;</div>
                    </div>
                </div>

            </nav >

            {/* bottom navbar */}
            < nav className='md:hidden' >
                <div className="fixed z-50 w-full h-16 max-w-xs -translate-x-1/2 bg-gray-800 rounded-full bottom-4 left-1/2">
                    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                        <Link href={'/'} data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-l-full group">
                            <svg className="w-6 h-6 mb-1 text-gray-400 group-hover:text-pink-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                            </svg>
                            <span className="sr-only">Home</span>
                        </Link>
                        <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Home
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>


                        <Link href={'/'} data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">
                            <svg className="w-6 h-6 text-gray-400 group-hover:text-pink-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Search</span>
                        </Link>
                        <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Search
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>



                        <div className="flex items-center justify-center">
                            <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium group bg-white rounded-full">
                                <svg className="w-6 h-6 text-blue-600 group-hover:text-pink-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"></path>
                                </svg>
                                <span className="sr-only">New item</span>
                            </button>
                        </div>
                        <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                            Create new item
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>


                        <Link href={'/checkout'} data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 group">
                            <button type="button" className="relative items-center p-2 text-sm font-medium text-center group bg-white rounded-full">
                                <svg className='w-6 h-6 text-gray-400 group-hover:text-pink-500' viewBox="0 0 1024 1024">
                                    <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" /></svg>
                                <span className="sr-only">Notifications</span>
                                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2">{Object.keys(cart).reduce((acc, key) => acc + cart[key].quantity, 0)}</div>
                            </button>
                            <span className="sr-only">Cart</span>
                        </Link>
                        <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Cart
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>


                        <Link href={'/'} data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-r-full group">
                            <svg className="w-6 h-6 mb-1 text-gray-400 group-hover:text-pink-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
                            </svg>
                            <span className="sr-only">Profile</span>
                        </Link>
                        <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Profile
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>


                    </div>
                </div>
            </ nav>
        </>
    )
}

export default Navbar