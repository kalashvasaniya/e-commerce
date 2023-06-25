"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar/page'
import Footer from '../components/footer/page'
import Float from '@/components/float/page'
import { useState } from 'react'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Vintage Vortex',
  description: 'E-Commerce Website for users!',
}

export default function RootLayout({ children }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    try {
      if (cart) {
        setCart(JSON.parse(cart))
      }
    } catch (error) {
      localStorage.clear()
    }
  }, [])

  let saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  let addToCart = (id, name, price, quantity, size, color) => {
    if (cart[id]) {
      cart[id].quantity += quantity
    }
    else {
      cart[id] = { id, name, price, quantity, size, color }
    }
    setCart({ ...cart })
    setSubTotal(subTotal + price * quantity)
    saveCart(cart)
  }

  let clearCart = () => {
    setCart({})
    setSubTotal(0)
    saveCart({})
  }

  let removeFromCart = (id, name, price, quantity = 1, size = 'M', color = 'black') => {
    if (cart[id]) {
      cart[id].quantity -= quantity
    }
    else {
      cart[id] = { id, name, price, quantity, size, color }
    }
    setCart({ ...cart })
    setSubTotal(subTotal - price * quantity)
    saveCart(cart)
  }

  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        <div className="bg-black ">
          <Navbar cart={cart} subTotal={subTotal} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} />
          <Float />
          <Footer />
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  )
}