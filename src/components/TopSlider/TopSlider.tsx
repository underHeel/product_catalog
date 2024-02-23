import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './TopSlider.module.scss';
import { ArrowLeftIcon } from '../ui/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon';
import Banner from '../../../public/img/top-slide-banner.png';

export const TopSlider: React.FC = () => {
  return (
    <Swiper
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      spaceBetween={0}
      loop
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: `.${styles['next-top-slide']}`,
        prevEl: `.${styles['prev-top-slide']}`,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className={styles.mySwiper}
    >
      <SwiperSlide className={styles.slide}>
        <img src={Banner} alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <img src={Banner} alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <img src={Banner} alt="" />
      </SwiperSlide>
      <div className={`${styles.icons} ${styles['prev-top-slide']}`}>
        <ArrowLeftIcon fill="white" />
      </div>
      <div className={`${styles.icons} ${styles['next-top-slide']}`}>
        <ArrowRightIcon fill="white" />
      </div>
    </Swiper>
  );
};
