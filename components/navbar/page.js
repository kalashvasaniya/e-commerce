import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <>
            <nav className="bg-black fixed w-full z-20 top-0 left-0 border-b">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href={'/home'} className="flex items-center">
                        <Image src={'/Logo1.png'} alt="kalash" width={60} height={60} />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-pink-500">Vintage Vortex</span>
                    </Link>

                    {/* search section */}
                    <div className="flex md:order-2">
                        {/* <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-100 hover:ring-2 hover:ring-gray-200 rounded-lg text-sm p-2.5 mr-1" >
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Search</span>
                        </button> */}


                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-100" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm  text-gray-100 border border-gray-900 rounded-lg bg-gray-800" placeholder="Search..." />
                        </div>

                        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-100 rounded-lg md:hidden hover:ring-2 hover:ring-gray-200" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>

                    </div>

                    {/* Link section */}
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div className="relative mt-3 md:hidden">

                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-white border border-gray-900 rounded-lg bg-gray-800 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-black text-white">
                            <li>
                                <Link href={'/home'} className="block py-2 pl-3 pr-4 text-gray-400 hover:text-white rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href={'/about'} className="block py-2 pl-3 pr-4 text-gray-400 hover:text-white rounded md:bg-transparent md:p-0">About</Link>
                            </li>
                            <li>
                                <Link href={'/contact'} className="block py-2 pl-3 pr-4 text-gray-400 hover:text-white rounded md:bg-transparent md:p-0">Contact</Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <hr className='text-gray-100' />
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <Link href={'/home'} className="text-white hover:text-pink-500" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white hover:text-pink-500">Company</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white hover:text-pink-500">Team</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white hover:text-pink-500">Features</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
