import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Banner from './Banner';
import { Product } from '@/interfaces';

const HeaderImage = () => {
  const products: Product[] = [
    {
      id: '1',
      description: 'Chaqueta de Mezclilla Artística',
      images: ['/products/imagenBanner.svg'],
      inStock: 10,
      price: 99.99,
      sizes: ['S', 'M', 'L'],
      slug: 'chaqueta-mezclilla-artistica',
      tags: ['chaqueta', 'mezclilla', 'artistica'],
      title: 'Chaqueta de Mezclilla Artística',
      gender: 'jackets',
    },
    // Agrega más productos si es necesario

    /* {
      id: '2',
      description: 'Mug moderno con diseño de calavera',
      images: ['/products/imagenBannerC.png'],
      // public\products\imagenBanner.png.png
      inStock: 10,
      price: 7.99,
      sizes: ['S', 'M', 'L'],
      slug: 'Mug-moderno-calavera',
      tags: ['Mug','moderno', 'calavera'],
      title: 'Mug moderno con diseño de calavera',
      gender: 'pottery',
    }, */
  ];

  return (

   
    <div className="swiper-container" >
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        loop
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Banner product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  
  );
};

export default HeaderImage;