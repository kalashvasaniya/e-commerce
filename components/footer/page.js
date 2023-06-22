import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <hr class="border-gray-300" />
            <footer class="bg-black text-white">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <Link href={'/home'} class="flex items-center">
                                <Image src={'/Logo1.png'} alt="kalash" width={60} height={60} />
                                <span className="self-center text-xl font-semibold whitespace-nowrap text-pink-500">Vintage Vortex</span>
                            </Link>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">Resources</h2>
                                <ul class="text-gray-500 font-medium">
                                    <li class="mb-4">
                                        <a href="https://flowbite.com/" class="hover:text-pink-500">Flowbite</a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindcss.com/" class="hover:text-pink-500">Tailwind CSS</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">Follow us</h2>
                                <ul class="text-gray-500 font-medium">
                                    <li class="mb-4">
                                        <a href="https://github.com/themesberg/flowbite" class="hover:text-pink-500 ">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/4eeurUVvTy" class="hover:text-pink-500">Discord</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">Legal</h2>
                                <ul class="text-gray-500 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:text-pink-500">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:text-pink-500">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

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
