import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <footer class="bg-black text-white">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

                    <hr class="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 hidden md:block" />

                    <div class="sm:flex sm:items-center sm:justify-between ">
                        <div class="hidden md:block">
                            <p class="text-base text-white border-l-2">
                                <span class="ml-4 font-semibold">
                                    <a href="https://github.com/kalashvasaniya/kalashvasaniya.github.io/blob/main/LICENSE"
                                        target="_blank">
                                        © 2023 Vintage Vortex — All Rights Reserved
                                    </a>
                                </span>
                            </p>
                        </div>

                        <div class="hidden md:block">
                            <p class="text-base text-white">
                                <button>
                                    <span
                                        class="font-semibold rounded-md bg-pink-600 p-2 md:p-3 transition ease-linear delay-150 duration-300 hover:bg-pink-700">
                                        <a href="https://6z236yooyhh.typeform.com/to/WP5J4BH1" target="_blank">
                                            Feedback
                                        </a>
                                    </span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
