/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '../ui/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import topSlide from '/img/top-slide-banner.png';
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
      {[...Array(3)].map(() => (
        <SwiperSlide className={styles.slide} key={uuidv4()}>
          <Link to="product/apple-iphone-14-pro-128gb-spaceblack">
            <img src={topSlide} alt="" />
          </Link>
        </SwiperSlide>
      ))}
      <div
        className={`${styles.icons} ${styles['prev-top-slide']}`}
        onMouseDown={(event) => event.preventDefault()}
      >
        <ArrowLeftIcon fill="var(--accent-color)" />
      </div>
      <div
        className={`${styles.icons} ${styles['next-top-slide']}`}
        onMouseDown={(event) => event.preventDefault()}
      >
        <ArrowRightIcon fill="var(--accent-color)" />
      </div>
    </Swiper>
  );
};
