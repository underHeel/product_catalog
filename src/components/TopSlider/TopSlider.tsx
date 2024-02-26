/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeftIcon } from '../ui/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import accesBanner from '/img/banner-accessories.png';
import phonesBanner from '/img/banner-phones.png';
import tabletsBanner from '/img/banner-tablets.png';
import styles from './TopSlider.module.scss';

export const TopSlider: React.FC = () => {
  return (
    <Swiper
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      spaceBetween={30}
      loop
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: `.${styles['next-top-slide']}`,
        prevEl: `.${styles['prev-top-slide']}`,
      }}
      effect="fade"
      speed={1500}
      modules={[Pagination, Navigation, Autoplay]}
      className={styles.mySwiper}
    >
      <SwiperSlide className={styles.slide}>
        <img src={phonesBanner} alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <img src={tabletsBanner} alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <img src={accesBanner} alt="" />
      </SwiperSlide>
      <div
        className={`${styles.icons} ${styles['prev-top-slide']}`}
        onMouseDown={(event) => event.preventDefault()}
      >
        <ArrowLeftIcon fill="#0F0F11" />
      </div>
      <div
        className={`${styles.icons} ${styles['next-top-slide']}`}
        onMouseDown={(event) => event.preventDefault()}
      >
        <ArrowRightIcon fill="#0F0F11" />
      </div>
    </Swiper>
  );
};
