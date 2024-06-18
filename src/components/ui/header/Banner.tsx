import React from 'react';
import Link from 'next/link';
import { Product } from '@/interfaces';

interface Props {
  product: Product;
}

const Banner = ({ product }: Props) => {
  return (
    <div className="relative flex flex-row  items-center justify-between p-20 bg-gradient-radial from-customRed to-lighter w-full ">
      <div className="flex flex-col items-start z-10 ">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-gray-500 line-through">Antes: ${product.price + product.price * 0.5}</p>
        <p className="text-2xl font-semibold text-red-600">${product.price}</p>
        <Link href={`/product/${product.slug}`}>
          <span className="px-4 py-2 mt-4 text-white bg-red-600 rounded-full cursor-pointer hover:bg-red-700">
            ¡Lo quiero!
          </span>
        </Link>


      </div>
      <div className="absolute top-20 right-20 p-2 text-white bg-pink-600 rounded-full">
        50% Ahora
      </div>
      <div className="w-full md:w-1/3">
        <div className="flex-shrink-0">
          <img src={product.images[0]} alt={product.title} className="object-cover h-64 " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
