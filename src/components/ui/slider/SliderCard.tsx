/* eslint-disable jsx-a11y/no-static-element-interactions */
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
          <div
            className={`${styles.arrowButton} prev-${id}`}
            onMouseDown={(event) => event.preventDefault()}
          >
            <ArrowLeftIcon fill="var(--color)" />
          </div>
          <div
            className={`${styles.arrowButton} next-${id}`}
            onMouseDown={(event) => event.preventDefault()}
          >
            <ArrowRightIcon fill="var(--color)" />
          </div>
        </div>
      </div>
      <div className={styles.swippeWrapper}>
        <Swiper
          navigation={{
            nextEl: `.next-${id}`,
            prevEl: `.prev-${id}`,
            disabledClass: styles.disabled,
          }}
          loop
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
    </div>
  );
};
