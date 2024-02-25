import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { SliderCard } from '../../components/ui/slider/SliderCard';
import { ItemOptions } from '../../components/ItemOptions/ItemOptions';
import { ItemAbout } from '../../components/ItemAbout';
import { ItemSpech } from '../../components/ItemSpec';
import * as phonesActions from '../../redux/slices/phonesSlice';
import styles from './ProductPage.module.scss';

export const ProductPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { phones } = useAppSelector((state) => state.phones);

  useEffect(() => {
    dispatch(phonesActions.fetchPhones());
  }, [dispatch]);

  const brandNewModels = [...phones]
    .sort((a, b) => b.year - a.year)
    .slice(0, 10);

  return (
    <div className={styles.wrapper}>
      <ItemOptions />
      <div className={styles.container}>
        <ItemAbout />
        <ItemSpech />
      </div>
      <SliderCard title="You may also like" items={brandNewModels} id={1} />
    </div>
  );
};
