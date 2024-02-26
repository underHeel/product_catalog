/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Category } from '../../types/Category';
import { ErrorComponent } from '../../components/ErrorComponent';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as phonesActions from '../../redux/slices/phonesSlice';
import styles from './Phones.module.scss';
import errorImg from '/img/errorImage.png';
import noProductImg from '/img/no_product.png';

export const Phones: React.FC = () => {
  const dispatch = useAppDispatch();
  const { phones, error } = useAppSelector((state) => state.phones);
  const category = Category.phones;

  useEffect(() => {
    dispatch(phonesActions.fetchPhones());
  }, []);

  if (error) {
    return <ErrorComponent image={errorImg} errorMessage={error} />;
  }

  if (phones.length === 0) {
    return (
      <div className={styles.wrapper}>
        <ErrorComponent image={noProductImg} errorMessage="No products there" />
      </div>
    );
  }

  return (
    <ProductsList title="Mobile phones" category={category} products={phones} />
  );
};
