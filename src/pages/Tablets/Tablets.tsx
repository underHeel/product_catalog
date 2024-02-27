/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Category } from '../../types/Category';
import { ErrorComponent } from '../../components/ErrorComponent';
import * as tabletsActions from '../../redux/slices/tabletsSlice';
import errorImg from '/img/errorImage.png';
import noProductImg from '/img/no_product.png';

import styles from './Tablets.module.scss';

export const Tablets: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const {
    tablets,
    loading: apiLoading,
    error,
  } = useAppSelector((state) => state.tablets);
  const category = Category.tablets;

  setTimeout(() => setLoading(false), 1000);

  useEffect(() => {
    dispatch(tabletsActions.fetchTablets());
  }, []);

  if (loading || apiLoading) {
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

  if (tablets.length === 0) {
    return (
      <ErrorComponent image={noProductImg} errorMessage="No products there" />
    );
  }

  return (
    <ProductsList title="Tablets" category={category} products={tablets} />
  );
};
