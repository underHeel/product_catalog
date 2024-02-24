/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-console */
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { useEffect, useState } from 'react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { Phone } from 'src/types/Phone';
import './swiper/ProductPhotoSwiper.scss';

type Props = {
  phone: Phone;
};

export const PhotosBlock: React.FC<Props> = ({ phone }) => {
  const [bigSwiper, setBigSwiper] = useState<SwiperClass>();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      <div className="mySwiperPicture">
        <Swiper
          loop={true}
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
          {phone.images.map((image) => (
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
          updateOnWindowResize={true}
          direction={isScreenGreaterThan640px() ? 'vertical' : 'horizontal'}
          freeMode={true}
          watchSlidesProgress={true}
          onClick={(swiper) => {
            setBigSwiper(swiper);
          }}
          className="mySwiperPhotos"
        >
          {phone.images.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} alt="Slide" className="img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
