import React from 'react'
import Image from 'next/image'

const Home = () => {
    // src={'/Logo1.png'}
    return (
        <>
            <div className="bg-black text-white h-screen pt-32 mb-20">
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap">
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
