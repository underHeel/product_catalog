import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { useEffect, useState } from 'react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { DetailedProduct } from 'src/types/DetailedProduct';
import './swiper/ProductPhotoSwiper.scss';
import styles from './PhotosBlock.module.scss';

type Props = {
  product: DetailedProduct;
};

export const PhotosBlock: React.FC<Props> = ({ product }) => {
  const [bigSwiper, setBigSwiper] = useState<SwiperClass>();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 2000);

  const isScreenGreaterThan640px = () => {
    return window.innerWidth > 640;
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
      {loading && <div className={styles.skeletonSwiper} />}
      {!loading && (
        <>
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
        </>
      )}
    </div>
  );
};
