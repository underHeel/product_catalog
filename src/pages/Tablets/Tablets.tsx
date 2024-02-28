/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Category } from '../../types/Category';
import { ErrorPage } from '../../components/ErrorPage';
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
    return <ErrorPage image={errorImg} errorMessage={error} />;
  }

  if (tablets.length === 0) {
    return <ErrorPage image={noProductImg} errorMessage="No products there" />;
  }

  return (
    <>
      <Breadcrumbs />
      <ProductsList title="Tablets" category={category} products={tablets} />
    </>
  );
};
