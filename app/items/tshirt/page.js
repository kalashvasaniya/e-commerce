"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Tshirt = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getproducts');
        const data = await response.json();
        const filteredProducts = data.products.filter(product => product.category === 'tshirt');
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="bg-black text-white pt-52">
        <h1 className="text-5xl text-center font-semibold underline underline-offset-4">T-shirt</h1>
        <section className="text-gray-600 body-font">
          <div className="container px-12 md:px-5 py-12 mx-auto">
            {products.length === 0 ? (
              <p className="text-center text-gray-400">Nothing is available at the moment.</p>
            ) : (
              <div className="grid text sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 -m-4 gap-12">
                {products.map((product) => (
                  <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <Link href={`/product/${product.slug}`} className="block relative h-80 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-top w-full h-full block hover:scale-110 transition ease-in delay-300"
                        src={product.image}
                      />
                    </Link>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                      <h2 className="text-gray-200 title-font text-lg font-medium">{product.name}</h2>
                      <p className="mt-1 text-blue-500">₹{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Tshirt;
