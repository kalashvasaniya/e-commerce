"use client"
import React, { useState } from "react";

const Page = () => {
  const countries = ["China", "Russia", "UK"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");

  const changeText = (e) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };

  return (
    <>
      <div className="pt-52 pb-8">
        <h1 className="text-4xl font-bold text-white text-center">Check Out</h1>
      </div>

      <div className="md:grid md:grid-cols-2 px-6">

        <div className="">
          <div className="grid grid-cols-2 bg-gray-500 rounded-3xl p-4 max-w-xl m-auto mb-6">
            <div className="flex flex-col justify-start space-y-4">
              <p className="text-xl md:text-2xl leading-normal font-mono font-bold text-gray-100">Logitech K251</p>
              <p className="text-base font-semibold leading-none text-gray-300">$520.00</p>
            </div>
            <div className="">
              <img className="rounded-3xl p-4 w-full h-56 object-cover object-top hover:scale-105 transition ease-in delay-300" src="https://m.media-amazon.com/images/I/61xFiBw2fNL._UY879_.jpg" alt="headphones" />
            </div>
          </div>
        </div>


        <div className="max-w-xl min-w-max m-auto">
          {/* payment area  */}
          <div className="p-8 bg-gray-100 flex flex-col rounded-3xl">

            <div className="mt-8">
              <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Email" required/>
            </div>

            <label className="mt-8 text-base leading-4 text-gray-800">Card details</label>
            <div className="mt-2 flex-col">
              <div>
                <input className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="0000 1234 6549 15151" required/>
              </div>
              <div className="flex-row flex">
                <input className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="MM/YY" required/>
                <input className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="CVC" required/>
              </div>
            </div>

            <label className="mt-8 text-base leading-4 text-gray-800">Country or region</label>
            <div className="mt-2 flex-col">
              <div className="relative">
                <button className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white" type="email">
                  {country}
                </button>
                <svg onClick={() => setMenu(!menu)} className={"transform  cursor-pointer absolute top-4 right-4 " + (menu ? "rotate-180" : "")} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="#27272A" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className={"mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " + (menu ? "block" : "hidden")}>
                  {countries.map((country) => (
                    <div key={country} className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2" onClick={changeText}>
                      {country}
                    </div>
                  ))}
                </div>
              </div>
              <input className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="ZIP" />
            </div>

            <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
              <div>
                <p className="text-base leading-4">Pay $54652</p>
              </div>
            </button>
          </div >
        </div>
      </div>
    </>
  );
};

export default Page;
