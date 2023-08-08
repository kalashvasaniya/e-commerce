import React from 'react'
import Image from 'next/image'

const Home = () => {
    // src={'/Logo1.png'}
    return (
        <>
            <div className="bg-black text-white h-screen pt-32 mb-20">
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap">
                        <div class="flex w-full mb-20 flex-wrap">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-100 lg:w-1/3 lg:mb-0 mb-4">Vintage Vortex (E-Commerce)</h1>
                            <p class="lg:pl-6 lg:w-2/3 mx-auto text-gray-400 leading-relaxed text-base">"Vintage Vortex enables online buying and selling, expanding markets, increasing convenience, and streamlining transactions for businesses and consumers worldwide"</p>
                        </div>
                        <div class="flex flex-wrap md:-m-2 -m-1">
                            <div class="flex flex-wrap w-1/2">
                                <div class="md:p-2 p-1 w-1/2">
                                    <Image width={500} height={300} alt="gallery" class="w-full object-cover h-full object-center block" src={'/2.png'} />
                                </div>
                                <div class="md:p-2 p-1 w-1/2">
                                    <Image width={501} height={301} alt="gallery" class="w-full object-cover h-full object-center block" src={'/3.png'} />
                                </div>
                                <div class="md:p-2 p-1 w-full">
                                    <Image width={600} height={360} alt="gallery" class="w-full h-full object-cover object-center block" src={'/5.png'} />
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/2">
                                <div class="md:p-2 p-1 w-full">
                                    <Image width={601} height={361} alt="gallery" class="w-full h-full object-cover object-center block" src={'/6.png'} />
                                </div>
                                <div class="md:p-2 p-1 w-1/2">
                                    <Image width={502} height={302} alt="gallery" class="w-full object-cover h-full object-center block" src={'/7.png'} />
                                </div>
                                <div class="md:p-2 p-1 w-1/2">
                                    <Image width={503} height={303} alt="gallery" class="w-full object-cover h-full object-center block" src={'/4.png'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
