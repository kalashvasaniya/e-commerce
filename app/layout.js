import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar/page'
import Footer from '../components/footer/page'
import Float from '@/components/float/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vintage Vortex',
  description: 'E-Commerce Website for users!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        <div className="bg-black ">
          <Navbar />
          <Float />
          <Footer />
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  )
}
