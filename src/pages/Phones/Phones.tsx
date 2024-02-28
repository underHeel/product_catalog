/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { ErrorPage } from '../../components/ErrorPage';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Category } from '../../types/Category';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as phonesActions from '../../redux/slices/phonesSlice';
import errorImg from '/img/errorImage.png';
import noProductImg from '/img/no_product.png';
import styles from './Phones.module.scss';

export const Phones: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const {
    phones,
    loading: apiLoading,
    error,
  } = useAppSelector((state) => state.phones);
  const category = Category.phones;

  setTimeout(() => setLoading(false), 1000);

  useEffect(() => {
    dispatch(phonesActions.fetchPhones());
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

  if (phones.length === 0) {
    return <ErrorPage image={noProductImg} errorMessage="No products there" />;
  }

  return (
    <>
      <Breadcrumbs />
      <ProductsList
        title="Mobile phones"
        category={category}
        products={phones}
      />
    </>
  );
};
