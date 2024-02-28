/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useAppSelector } from '../../../redux/hooks';
import { Product } from '../../../types/Product';
import { ArrowLeftIcon } from '../icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';
import { ProductCard } from '../../ProductCard/ProductCard';
import { CardSkeleton } from '../skeletons/CardSkeleton';
import { IconButton } from '../buttons/IconButton';
import 'swiper/css';
import styles from './SliderCard.module.scss';

interface Props {
  title: string;
  items: Product[];
  id: number;
  loading?: boolean;
}

export const SliderCard: React.FC<Props> = ({ title, items, id, loading }) => {
  const { loading: phonesLoading } = useAppSelector((state) => state.phones);

  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.buttons}>
          <div
            className={`${styles.arrowButton} prev-${id}`}
            onMouseDown={(event) => event.preventDefault()}
          >
            <IconButton>
              <ArrowLeftIcon fill="var(--color)" />
            </IconButton>
          </div>
          <div
            className={`${styles.arrowButton} next-${id}`}
            onMouseDown={(event) => event.preventDefault()}
          >
            <IconButton>
              <ArrowRightIcon fill="var(--color)" />
            </IconButton>
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
          {(loading || phonesLoading) &&
            [...Array(10)].map(() => (
              <SwiperSlide className={styles.slider} key={uuidv4()}>
                <CardSkeleton />
              </SwiperSlide>
            ))}
          {!loading &&
            !phonesLoading &&
            items.map((item) => (
              <SwiperSlide key={item.id} className={styles.slider}>
                <ProductCard product={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
