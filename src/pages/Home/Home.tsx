import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles/swiper/Swiper.scss';

export const Home: React.FC = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://s3-alpha-sig.figma.com/img/7d29/6526/af22f754728ae4cdd11e8cf94439d598?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~HnA7MQXmU0XClL4dvwOfUroAepS64Wc8AP84llx9nkf1MYPjlLFRaz267UhUszGg6Bmpq-jsXVBq6q9FBy1IkvEuhvcSgcFoqu4WcOU3d~ZOCMklBTUSnUxh0IiYHcxlnbTMtwrqn5qHDGIdmSK0mJVrsaX3rsfY~1L~NqaaQ1fE49RbwrlksRBQQxvQ0YTRy4swJEw800V6cWYqrKPvEde1~rvZxI51AKIi2iCO41lMw6SQ8PdeS7NvQ4Uf2w3-anbdSuL4iEmAvSOJCKm2OmFGM6RqEZZlkjLlSssGi0-pIJimLXxyWLjFo~nVdf1~WoLyNgattbdp-~EmhuIQ__"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://s3-alpha-sig.figma.com/img/7d29/6526/af22f754728ae4cdd11e8cf94439d598?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~HnA7MQXmU0XClL4dvwOfUroAepS64Wc8AP84llx9nkf1MYPjlLFRaz267UhUszGg6Bmpq-jsXVBq6q9FBy1IkvEuhvcSgcFoqu4WcOU3d~ZOCMklBTUSnUxh0IiYHcxlnbTMtwrqn5qHDGIdmSK0mJVrsaX3rsfY~1L~NqaaQ1fE49RbwrlksRBQQxvQ0YTRy4swJEw800V6cWYqrKPvEde1~rvZxI51AKIi2iCO41lMw6SQ8PdeS7NvQ4Uf2w3-anbdSuL4iEmAvSOJCKm2OmFGM6RqEZZlkjLlSssGi0-pIJimLXxyWLjFo~nVdf1~WoLyNgattbdp-~EmhuIQ__"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://s3-alpha-sig.figma.com/img/7d29/6526/af22f754728ae4cdd11e8cf94439d598?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~HnA7MQXmU0XClL4dvwOfUroAepS64Wc8AP84llx9nkf1MYPjlLFRaz267UhUszGg6Bmpq-jsXVBq6q9FBy1IkvEuhvcSgcFoqu4WcOU3d~ZOCMklBTUSnUxh0IiYHcxlnbTMtwrqn5qHDGIdmSK0mJVrsaX3rsfY~1L~NqaaQ1fE49RbwrlksRBQQxvQ0YTRy4swJEw800V6cWYqrKPvEde1~rvZxI51AKIi2iCO41lMw6SQ8PdeS7NvQ4Uf2w3-anbdSuL4iEmAvSOJCKm2OmFGM6RqEZZlkjLlSssGi0-pIJimLXxyWLjFo~nVdf1~WoLyNgattbdp-~EmhuIQ__"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};
