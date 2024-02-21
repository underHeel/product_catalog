/* eslint-disable no-console */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './PhotosBlock.module.scss';

export const PhotosBlock = () => {
  // const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => {
          setInterval(() => {
            swiper.slideTo(swiper.activeIndex + 1);
          }, 2000);
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
  );
};
