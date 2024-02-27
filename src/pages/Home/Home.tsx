import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Category } from '../../components/Category';
import { SliderCard } from '../../components/ui/slider/SliderCard';
import { TopSlider } from '../../components/TopSlider';
import * as phonesActions from '../../redux/slices/phonesSlice';
import * as tabletActions from '../../redux/slices/tabletsSlice';
import * as accessoriesActions from '../../redux/slices/accessoriesSlice';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { phones, error } = useAppSelector((state) => state.phones);

  useEffect(() => {
    dispatch(phonesActions.fetchPhones());
    dispatch(tabletActions.fetchTablets());
    dispatch(accessoriesActions.fetchAccessories());
  }, [dispatch]);

  const brandNewModels = [...phones]
    .sort((a, b) => b.year - a.year)
    .slice(0, 10);

  const hotPrices = phones
    .filter(({ price, fullPrice }) => fullPrice - price >= 100)
    .sort((a, b) => b.price - a.price);

  return (
    <>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
      <TopSlider />
      {!error && (
        <div className={styles.sliderWrapper}>
          <SliderCard title="Brand new models" items={brandNewModels} id={1} />
        </div>
      )}
      <div className={styles.сategoryWrapper}>
        <Category />
      </div>
      {!error && (
        <div className={styles.sliderWrapper}>
          <SliderCard title="Hot Prices" items={hotPrices} id={2} />
        </div>
      )}
    </>
  );
};
