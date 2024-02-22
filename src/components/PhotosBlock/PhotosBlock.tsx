/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-console */
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { Phone } from 'src/types/Phone';
import styles from './PhotosBlock.module.scss';
import './swiper/ProductPhotoSwiper.scss';

type Props = {
  phone: Phone;
};

export const PhotosBlock: React.FC<Props> = ({ phone }) => {
  const [autoplayOff, setAutoplayOff] = useState(true);
  const [bigSwiper, setBigSwiper] = useState<Swiper | null>(null);

  const inputRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  console.log(bigSwiper);

  return (
    <div className={styles.pictureContainer}>
      <div className={styles.pictureMain}>
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
          className="mySwiper2"
        >
          {phone.images.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} alt="Slide" className="img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.picturePortfolio}>
        <Swiper
          modules={[Autoplay, Thumbs, FreeMode, Navigation]}
          loop={true}
          spaceBetween={6}
          slidesPerView={5}
          freeMode={true}
          onClick={(swiper) => {
            setBigSwiper(swiper);
          }}
          watchSlidesProgress={true}
          className="mySwiperPhoto"
        >
          {phone.images.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} alt="Slide" className="img" ref={inputRef} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
