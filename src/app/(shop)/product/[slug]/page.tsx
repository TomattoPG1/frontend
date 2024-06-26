import React, { useState, useRef } from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { Product } from '@/interfaces';
import { titleFont } from '@/config/fonts';
import {
  ProductMobileSlideshow,
  ProductSlideshow,
  StockLabel,
} from '@/components';
import { getProductBySlug } from '@/actions';
import { AddToCart } from './ui/AddToCart';
import TabsComponent from './ui/TabsComponent';
import SlugLayout from './slugLayout';

export const revalidate = 604800; // 7 días

const productosRecomendados: Product[] = [
  // Tus productos recomendados van aquí
];

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug;
  const product = await getProductBySlug(slug);

  return {
    title: product?.title ?? 'Producto no encontrado',
    description: product?.description ?? '',
    openGraph: {
      title: product?.title ?? 'Producto no encontrado',
      description: product?.description ?? '',
      images: [`/products/${product?.images[1]}`],
    },
  };
}

export default async function ProductBySlugPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <SlugLayout>
      <div className="w-full justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-10">
          {/* Slideshow */}
          <div className="col-span-1 md:col-span-2">
            {/* Mobile Slideshow */}
            <ProductMobileSlideshow
              title={product.title}
              images={product.images}
              className="block md:hidden w-3/4 mx-auto"
            />

            {/* Desktop Slideshow */}
            <ProductSlideshow
              title={product.title}
              images={product.images}
              className="hidden md:block"
            />
          </div>

          {/* Detalles */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center"> {/* Ajuste para 60% del ancho */}
            <StockLabel slug={product.slug} />

            <h1 className={`${titleFont.className} antialiased font-bold text-lg md:text-2xl`}>
              {product.title}
            </h1>
            <div className="flex flex-col md:flex-row items-center my-2 md:my-4">
              <span className="text-lg md:text-xl text-red-500 line-through mr-2">
                ${product.price + product.price}
              </span>
              <span className="text-xl md:text-2xl text-green-500">${product.price}</span>
              <span className="mt-2 md:mt-0 ml-0 md:ml-2 p-1 bg-yellow-300 text-sm rounded">
                50% OFF
              </span>
            </div>

            <AddToCart product={product} />
          </div>
        </div>

        {/* Recommended Products Section */}
        <TabsComponent
          description={product.description}
          technicalSheet="Contenido de la Ficha Técnica"
          recommendations="Contenido de las Recomendaciones"
        />
      </div>
    </SlugLayout>
  );
}