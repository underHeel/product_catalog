import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { useEffect, useState } from 'react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { DetailedProduct } from 'src/types/DetailedProduct';
import './swiper/ProductPhotoSwiper.scss';

type Props = {
  product: DetailedProduct;
};

export const PhotosBlock: React.FC<Props> = ({ product }) => {
  const [bigSwiper, setBigSwiper] = useState<SwiperClass>();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isScreenGreaterThan640px = () => {
    return window.innerWidth > 639;
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="mySwiperWrapper">
      <div className="mySwiperPicture">
        <Swiper
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          thumbs={{ swiper: bigSwiper }}
          slidesPerView={1}
          modules={[Autoplay, Thumbs, FreeMode, Navigation]}
          onClick={(swiper) => {
            swiper.slideNext();
          }}
          className="mySwiperPicture"
        >
          {product.images.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} alt="Slide" className="img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mySwiperPhotos">
        <Swiper
          modules={[Thumbs]}
          spaceBetween={6}
          slidesPerView={5}
          updateOnWindowResize
          direction={isScreenGreaterThan640px() ? 'vertical' : 'horizontal'}
          freeMode
          watchSlidesProgress
          onClick={(swiper) => {
            setBigSwiper(swiper);
          }}
          className="mySwiperPhotos"
        >
          {product.images.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} alt="Slide" className="img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
