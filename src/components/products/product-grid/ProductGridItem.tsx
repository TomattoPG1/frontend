"use client";

import Image from "next/image";
import Link from "next/link";

import { Product } from "@/interfaces";
import { useState } from "react";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <div className="w-64 border rounded-md">
    <img
      src={`/products/${displayImage}`}
      alt={product.title}
      className="w-full h-40 object-cover"
      onMouseEnter={() => setDisplayImage(product.images[1])}
      onMouseLeave={() => setDisplayImage(product.images[0])}
    />
    <div className="p-4">
      <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
        <Link href={`/product/${product.slug}`} className="hover:text-blue-600">
          {product.title}
        </Link>
      </h5>
      <p>${product.price}</p>
      <a href={`/product/${product.slug}`} className="bg-customRed hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">
        Read more
      </a>
    </div>
  </div>
  );
};
