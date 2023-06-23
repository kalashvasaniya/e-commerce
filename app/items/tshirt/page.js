import React from 'react'
import Link from 'next/link'

const Tshirt = () => {
  return (
    <>
      <div className="bg-black text-white pt-52">
        <h1 className="text-5xl text-center font-semibold underline underline-offset-4">T-shirt</h1>
        <section class="text-gray-600 body-font">
          <div class="container px-12 md:px-5 py-12 mx-auto">
            <div class="grid text sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 -m-4 gap-12">

              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link href={'/product/kalash'} class="block relative h-80 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-top w-full h-full block" src="https://m.media-amazon.com/images/I/61xFiBw2fNL._UY879_.jpg" />
                </Link>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-200 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 text-blue-500">$16.00</p>
                </div>
              </div>

              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-80 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-top w-full h-full block" src="https://m.media-amazon.com/images/I/61xFiBw2fNL._UY879_.jpg" />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-200 title-font text-lg font-medium">Shooting Stars</h2>
                  <p class="mt-1 text-blue-500">$21.15</p>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-80 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-top w-full h-full block" src="https://m.media-amazon.com/images/I/61xFiBw2fNL._UY879_.jpg" />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-200 title-font text-lg font-medium">Neptune</h2>
                  <p class="mt-1 text-blue-500">$12.00</p>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-80 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-top w-full h-full block" src="https://m.media-amazon.com/images/I/61xFiBw2fNL._UY879_.jpg" />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-200 title-font text-lg font-medium">The 400 Blows</h2>
                  <p class="mt-1 text-blue-500">$18.40</p>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-80 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-top w-full h-full block" src="https://m.media-amazon.com/images/I/61xFiBw2fNL._UY879_.jpg" />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-200 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1 text-blue-500">$16.00</p>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-80 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-top w-full h-full block" src="https://m.media-amazon.com/images/I/61xFiBw2fNL._UY879_.jpg" />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-200 title-font text-lg font-medium">Shooting Stars</h2>
                  <p class="mt-1 text-blue-500">$21.15</p>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-80 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-centtoper w-full h-full block" src="https://m.media-amazon.com/images/I/61xFiBw2fNL._UY879_.jpg" />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-200 title-font text-lg font-medium">Neptune</h2>
                  <p class="mt-1 text-blue-500">$12.00</p>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-80 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-top w-full h-full block" src="https://m.media-amazon.com/images/I/61xFiBw2fNL._UY879_.jpg" />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-200 title-font text-lg font-medium">The 400 Blows</h2>
                  <p class="mt-1 text-blue-500">$18.40</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Tshirt
