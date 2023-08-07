"use client"
import React from 'react'
import { useCart } from '../layout'
import Head from 'next/head'
import Script from 'next/script'

export default function page() {
  const { cart, addToCart, removeFromCart, subTotal } = useCart()

  const initiatePayment = async () => {
    let oid = Math.floor(Math.random() * Date.now())

    const data = { cart, subTotal, oid, email: "email" }

    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    let txnRes = await a.json()
    console.log(txnRes)
    let txnToken = txnRes.txnToken

    function onScriptLoad() {
      var config = {
        "root": "",
        "flow": "DEFAULT",
        "data": {
          "orderId": req.body.oid, /* update order id */
          "token": txnToken, /* update token value */
          "tokenType": "TXN_TOKEN",
          "amount": subTotal /* update amount */
        },
        "handler": {
          "notifyMerchant": function (eventName, data) {
            console.log("notifyMerchant handler function called");
            console.log("eventName => ", eventName);
            console.log("data => ", data);
          }
        }
      };
      // initialze configuration using init method
      window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
        // after successfully updating configuration, invoke JS Checkout
        window.Paytm.CheckoutJS.invoke();
      }).catch(function onError(error) {
        console.log("error => ", error);
      });
    }
  }

  return (
    <>
      <div className="pt-52 pb-8">
        <h1 className="text-4xl font-bold text-white text-center">Check Out</h1>
      </div>

      <div className="md:grid md:grid-cols-2 px-6">

        <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" /></Head>
        <Script type="application/javascript" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} crossorigin="anonymous"></Script>

        <div className="">
          <div className="md:grid md:grid-cols-2 flex flex-col bg-gray-500 rounded-3xl p-4 max-w-xl m-auto mb-6">
            <div className="flex flex-col justify-start space-y-4">
              <p className="text-xl md:text-2xl leading-normal font-mono underline-offset-2 underline font-bold text-gray-100 px-1">
                {Object.keys(cart).map((key) => {
                  return (
                    <div key={key}>
                      {cart[key].name} ({cart[key].size}/{cart[key].color})
                    </div>
                  )
                })}
              </p>
              <p className="text-base font-semibold leading-none text-white">
                <span className="text-black font-mono">Price: </span>
                <span className="text-black font-mono">
                  ₹{subTotal.toFixed(2)}
                </span>
              </p>


              <div className="p-2 overflow-y-auto">
                <div className="py-4 overflow-y-auto">
                  <ul className="space-y-2 font-medium">

                    {Object.keys(cart).length === 0 &&
                      <div div className="flex justify-center p-2 text-gray-200 rounded-lg">
                        <span className="underline-offset-4 underline font-mono">
                          Cart is empty!
                        </span>
                      </div>
                    }

                    {Object.keys(cart).map((key) => {
                      return (
                        <li key={key} className='md:grid md:grid-cols-2 flex flex-row justify-start'>
                          {cart[key].quantity > 0 && (
                            <div className="flex flex-row truncate items-center p-2 text-gray-200 rounded-lg">
                              <span className="underline-offset-4 underline font-mono">
                                {cart[key].name}
                              </span>
                            </div>
                          )}

                          {cart[key].quantity > 0 && (
                            <div className="flex space-x-3 justify-center">
                              <div className="bg-black text-white flex items-center my-4 px-2 rounded-full">
                                <button onClick={() => removeFromCart(cart[key].id, cart[key].name, cart[key].price, 1, cart[key].size, cart[key].color, window.location.reload())} className="text-gray-200 font-mono">-</button>
                              </div>
                              <div className="flex items-center">
                                <span className="text-gray-200 font-mono">{cart[key].quantity}</span>
                              </div>
                              <div className="bg-black text-white flex items-center my-4 px-2 rounded-full">
                                <button onClick={() => addToCart(cart[key].id, cart[key].name, cart[key].price, 1, cart[key].size, cart[key].color, window.location.reload())} className="text-gray-200 font-mono">+</button>
                              </div>
                            </div>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* img of product  */}
            <div className="">
              {Object.keys(cart).map((key) => (
                <img key={key} className="rounded-xl w-full h-56 object-cover object-top hover:scale-105 transition ease-in delay-300" src={`${cart[key].image}`} alt={cart[key].name} />
              ))}
            </div>

          </div>
        </div >


        {/* payment area  */}
        <div className="p-8 bg-gray-200 flex flex-col rounded-3xl" >

          <form>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="name" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="tel" pattern="[0-9]{10}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label htmlFor="tel" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number...</label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="City" pattern='[A-Za-z]{1,32}' name="City" id="City" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label htmlFor="City" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="Pincode" pattern='[0-9]{6}' name="Pincode" id="Pincode" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label htmlFor="Pincode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pincode</label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <textarea type="address" name="address" id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
              <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
            </div>

            <button onClick={initiatePayment} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Proceed To Pay ₹{subTotal.toFixed(2)}
            </button>
          </form>

        </div >
      </div >

    </>
  )
};