"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar/page'
import Footer from '../components/footer/page'
import Float from '@/components/float/page'
import { useState } from 'react'
import { useEffect } from 'react'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Vintage Vortex',
  description: 'E-Commerce Website for users!',
}

export function useCart() {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({ value: null });


  useEffect(() => {
    const cart = localStorage.getItem('cart');
    const token = localStorage.getItem('token')
    const storedSubTotal = localStorage.getItem('subTotal');
    try {
      if (cart, storedSubTotal) {
        setCart(JSON.parse(cart));
        setSubTotal(parseFloat(storedSubTotal));
      }
    } catch (error) {
      localStorage.clear();
    }
    try {
      if (token) {
        setUser({ value: token });
      }
    }
    catch (error) {
      localStorage.clear();
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setUser({ value: null })
  }

  const saveCart = (cart, subTotal) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('subTotal', subTotal.toString());
  };

  const addToCart = (id, name, price, quantity = 1, size, color) => {
    if (cart[id]) {
      cart[id].quantity += quantity;
    } else {
      cart[id] = { id, name, price, quantity, size, color };
    }
    setCart({ ...cart });
    setSubTotal(subTotal + price * quantity);
    saveCart(cart, subTotal + price * quantity);
  };

  const clearCart = () => {
    setCart({});
    setSubTotal(0);
    saveCart({}, 0);
    window.location.reload();
  };

  const removeFromCart = (id, name, price, quantity = 1, size = 'M', color = 'black') => {
    if (cart[id]) {
      cart[id].quantity -= quantity;
    } else {
      cart[id] = { id, name, price, quantity, size, color };
    }
    setCart({ ...cart });
    setSubTotal(subTotal - price * quantity);
    saveCart(cart, subTotal - price * quantity);
  };

  return { logout, user, cart, subTotal, addToCart, clearCart, removeFromCart };
}

export default function RootLayout({ children }) {

  const { logout, user, cart, subTotal, addToCart, clearCart, removeFromCart } = useCart();
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        <div className="bg-black ">
          <Analytics />
          <Navbar logout={logout} user={user} cart={cart} subTotal={subTotal} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} />
          <Float />
          <Footer />
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  )
}