/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ProductsList } from '../../components/ProductList/ProductsList';
import { Category } from '../../types/Category';
import { ErrorComponent } from '../../components/ErrorComponent';
import * as tabletsActions from '../../redux/slices/tabletsSlice';
import errorImg from '/img/errorImage.png';
import noProductImg from '/img/no_product.png';

import styles from './Tablets.module.scss';

export const Tablets: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tablets, loading, error } = useAppSelector((state) => state.tablets);
  const category = Category.tablets;

  useEffect(() => {
    dispatch(tabletsActions.fetchTablets());
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

  if (tablets.length === 0) {
    return (
      <ErrorComponent image={noProductImg} errorMessage="No products there" />
    );
  }

  return (
    <ProductsList title="Tablets" category={category} products={tablets} />
  );
};
