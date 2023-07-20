import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Float = () => {
    return (
        <>
            <div id="marketing-banner" tabindex="-1" className="mt-32 fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-1 -translate-x-1/2 border rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6 bg-gray-800 border-gray-600">
                <div className="flex items-start mb-3 md:items-center flex-row md:mb-0 space-x-2 mr-4 md:space-x-8">
                    <Link href={'/home'} className="items-center space-x-4 hidden md:flex">
                        <Image className='rounded-full' src={'/Logo1.png'} alt="kalash" width={40} height={40} />
                        <span className="self-center text-sm font-semibold whitespace-nowrap text-pink-500">Vintage Vortex</span>
                    </Link>
                    <p className="text-sm font-normal text-gray-200">Welcome to <span className='underline underline-offset-2 decoration-pink-500'>Vintage Vortex</span> E-commerce store. </p>
                </div>
                <div className="flex items-center flex-shrink-0">
                    <Link href={'/user/login'} className="px-5 py-2 mr-2 m-1 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">Login</Link>
                    <button data-dismiss-target="#marketing-banner" type="button" className="absolute top-2.5 right-2.5 md:relative md:top-auto md:right-auto flex-shrink-0 inline-flex justify-center items-center text-gray-400  rounded-lg text-sm p-1.5 hover:bg-gray-600 hover:text-white">
                        <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close banner</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Float
