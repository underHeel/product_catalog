/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-console */
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { Phone } from 'src/types/Phone';
import './swiper/ProductPhotoSwiper.scss';

type Props = {
  phone: Phone;
};

export const PhotosBlock: React.FC<Props> = ({ phone }) => {
  const [autoplayOff, setAutoplayOff] = useState(true);
  const [bigSwiper, setBigSwiper] = useState<Swiper | null>(null);

  const isScreenGreaterThan640px = () => {
    return window.innerWidth > 640;
  };

  return (
    <div className="mySwiperWrapper">
      <div className="mySwiperPicture">
        <Swiper
          loop={true}
          autoplay={autoplayOff}
          thumbs={{ swiper: bigSwiper }}
          slidesPerView={1}
          onSlideChange={() => {
            console.log('slide change');
          }}
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
