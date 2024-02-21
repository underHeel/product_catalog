/* eslint-disable no-console */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowLeftIcon } from '../icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';
import 'swiper/css';
import styles from './SliderCard.module.scss';

export const SliderCard: React.FC = () => {
  return (
    <div>
      <div className={styles.sectionsTitle}>
        <h2>
          Brand new
          <br />
          models
        </h2>
        <div className={styles.buttons}>
          <div className={`${styles.arrowButton} ${styles.disabled}`}>
            <ArrowLeftIcon fill="#0F0F11" />
          </div>
          <div className={styles.arrowButton}>
            <ArrowRightIcon fill="#0F0F11" />
          </div>
        </div>
      </div>

      <Swiper
        spaceBetween={16}
        slidesPerView={3}
        breakpoints={{
          639: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};
