/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-console */
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './PhotosBlock.module.scss';

export const PhotosBlock = () => {
  const [offAutoplay, setOffAutoplay] = useState(true);

  return (
    <>
      <div className={styles.wrapper}>
        <Swiper
          modules={[Autoplay]}
          autoplay={offAutoplay}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => {
            console.log(swiper);
          }}
          onClick={(swiper) => {
            if (offAutoplay) {
              setOffAutoplay(false);
            }

            return swiper.activeIndex < 6
              ? swiper.slideTo(swiper.activeIndex + 1)
              : swiper.slideTo(swiper.activeIndex - 1);
          }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.wrapperPortfolio}>
        <Swiper
          loop={true}
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => {
            console.log(swiper.a11y);
          }}
          onClick={(swiper) => swiper.slideTo(swiper.activeIndex + 1)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
