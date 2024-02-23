/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-console */
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { Phone } from 'src/types/Phone';
import './swiper/ProductPhotoSwiper.scss';

type Props = {
  phone: Phone;
};

export const PhotosBlock: React.FC<Props> = ({ phone }) => {
  const [autoplayOff, setAutoplayOff] = useState(true);
  const [bigSwiper, setBigSwiper] = useState<any>();
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
          autoplay={autoplayOff}
          thumbs={{ swiper: bigSwiper }}
          slidesPerView={1}
          modules={[Autoplay, Thumbs, FreeMode, Navigation]}
          onClick={(swiper) => {
            if (autoplayOff) {
              setAutoplayOff(false);
            } else {
              swiper.slideNext();
            }
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
          modules={[Autoplay, Thumbs, FreeMode, Navigation]}
          loop={true}
          spaceBetween={6}
          slidesPerView={5}
          direction={isScreenGreaterThan640px() ? 'vertical' : 'horizontal'}
          freeMode={true}
          onClick={(swiper) => {
            setBigSwiper(swiper);
            setAutoplayOff(false);
          }}
          watchSlidesProgress={true}
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
