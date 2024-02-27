/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Category } from '../../types/Category';
import { ErrorComponent } from '../../components/ErrorComponent';
import * as accessoriesActions from '../../redux/slices/accessoriesSlice';
import errorImg from '/img/errorImage.png';
import noProductImg from '/img/no_product.png';

import styles from './Accessories.module.scss';

export const Accessories: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const {
    accessories,
    loading: apiLoading,
    error,
  } = useAppSelector((state) => state.accessories);
  const category = Category.accessories;

  setTimeout(() => setLoading(false), 1000);

  useEffect(() => {
    dispatch(accessoriesActions.fetchAccessories());
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

  if (accessories.length === 0) {
    return (
      <ErrorComponent image={noProductImg} errorMessage="No products there" />
    );
  }

  return (
    <ProductsList
      title="Accessories"
      category={category}
      products={accessories}
    />
  );
};
