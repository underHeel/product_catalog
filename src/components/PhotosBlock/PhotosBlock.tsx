import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './PhotosBlock.module.scss';

export const PhotosBlock = () => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => 'slide change'}
        // eslint-disable-next-line no-console
        onSwiper={(swiper) => console.log(swiper)}
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
  );
};
