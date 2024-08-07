'use client'
import { useState } from 'react'
import { useCart } from '@/app/layout'
import { useEffect } from 'react'

export default function Slug({ params }) {
    const { addToCart } = useCart()
    const [pin, setPin] = useState()
    const [service, setService] = useState()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    `/api/getproducts`
                );
                const data = await response.json();
                const filteredProducts = data.products.filter(
                    (product) => product.slug === params.slug
                );
                setProduct(filteredProducts[0]);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const checkAvailablity = async () => {
        let pins = await fetch(`/api/pincode`)
        pins = await pins.json()
        if (pins.includes(parseInt(pin))) {
            setService(true)
        }
        else {
            setService(false)
        }
    }

    const onChange = (e) => {
        setPin(e.target.value)
    }

    const handleAddToCart = () => {
        if (product) {
            addToCart(product.name, params.slug, product.price, 1, product.size, product.color);
            window.location.reload();
        }
    };

    return (
        <>
            <div className="pt-32">
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="md:grid grid-cols-3 m-auto">
                            <div className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-[35rem] block" src={product.image} />
                            </div>
                            <div className="col-span-2 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-400 tracking-widest">Vintage Vortex</h2>
                                <h1 className="text-gray-200 text-3xl title-font font-medium mb-1">
                                    {product.name} ({product.size}/{product.color})
                                </h1>
                                <div className="flex mb-4">
                                    <span className="flex items-center">
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <span className="text-gray-400 ml-3">4 Reviews</span>
                                    </span>
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                        <a className="text-gray-400">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="text-gray-400">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="text-gray-400">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                                <p className="leading-relaxed text-gray-300">
                                    {product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum optio quos minus velit repudiandae, saepe recusandae, iusto nemo perferendis quia voluptates consequuntur officiis. Excepturi!
                                </p>
                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                    <div className="flex">
                                        <span className="mr-3 text-gray-300">Color</span>
                                        <button className={`border-2 border-gray-300 ${product.color === 'black' || product.color === 'white' ? `bg-${product.color}` : `bg-${product.color}-500`} rounded-full w-6 h-6 focus:outline-none`}></button>
                                    </div>
                                    <div className="flex ml-6 items-center">
                                        <span className="mr-3 text-gray-300">
                                            Size
                                        </span>
                                        <div className="relative">
                                            <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                                <option>
                                                    {
                                                        product.size
                                                    }
                                                </option>
                                            </select>
                                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <span className="title-font font-medium text-2xl text-gray-300">
                                        ₹{product.price}
                                    </span>
                                    <button onClick={handleAddToCart} className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded">Add to Cart</button>
                                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-900 ml-4">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className='mt-4'>
                                    <label className="mb-2 text-xs font-medium text-gray-300">Check Availablity</label>
                                    <div className="flex space-x-4">
                                        <input onChange={onChange} type="text" className="block w-40 p-2 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Enter your Pincode" required />
                                        <button onClick={checkAvailablity} className="right-2.5 bottom-2.5 text-white bg-pink-500 hover:bg-pink-700 font-medium rounded-lg text-sm px-4 py-2">Check</button>
                                    </div>

                                    {!service && service != null && <div div className="text-xs text-red-700 mt-1">
                                        Sorry, this product is not available in your area.
                                    </div>}

                                    {service && service != null && <div className="text-xs text-green-700 mt-1">
                                        Hurray! This product is available in your area.
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div >
                </section >
            </div >
        </>
    )
}