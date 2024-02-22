/* eslint-disable no-console */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from 'src/types/Product';
import { Navigation } from 'swiper/modules';
import { ArrowLeftIcon } from '../icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';
import 'swiper/css';
import styles from './SliderCard.module.scss';
import { ProductCard } from '../../ProductCard/ProductCard';

interface Props {
  title: string;
  items: Product[];
  id: number;
}

export const SliderCard: React.FC<Props> = ({ title, items, id }) => {
  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.buttons}>
          <div className={`${styles.arrowButton} prev-${id}`}>
            <ArrowLeftIcon fill="#0F0F11" />
          </div>
          <div className={`${styles.arrowButton} next-${id}`}>
            <ArrowRightIcon fill="#0F0F11" />
          </div>
        </div>
      </div>

      <Swiper
        navigation={{
          nextEl: `.next-${id}`,
          prevEl: `.prev-${id}`,
          disabledClass: styles.disabled,
        }}
        modules={[Navigation]}
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 'auto',
          },
          640: {
            slidesPerView: 'auto',
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className={styles.slider}>
            <ProductCard product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
