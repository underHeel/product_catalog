/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { Category } from '../../types/Category';
import { ProductsList } from '../../components/ProductList/ProductsList';
import { ErrorComponent } from '../../components/ErrorComponent';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as phonesActions from '../../redux/slices/phonesSlice';
import errorImg from '/img/errorImage.png';
import noProductImg from '/img/no_product.png';

import styles from './Phones.module.scss';

export const Phones: React.FC = () => {
  const dispatch = useAppDispatch();
  const { phones, loading, error } = useAppSelector((state) => state.phones);
  const category = Category.phones;

  useEffect(() => {
    dispatch(phonesActions.fetchPhones());
  }, []);

  if (loading) {
    return (
      <BallTriangle
        height={150}
        width={150}
        radius={5}
        color="var(--accent-color)"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass={styles.loaderWrapper}
        visible
      />
    );
  }

  if (error) {
    return <ErrorComponent image={errorImg} errorMessage={error} />;
  }

  if (phones.length === 0) {
    return (
      <ErrorComponent image={noProductImg} errorMessage="No products there" />
    );
  }

  return (
    <ProductsList title="Mobile phones" category={category} products={phones} />
  );
};
