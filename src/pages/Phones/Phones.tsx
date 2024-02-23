import React, { useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent';
import { PaginatedStore } from '../../components/PaginatedStore';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as phonesActions from '../../redux/slices/phonesSlice';
import notFoundImg from '/img/404.png';
import noProductImg from '../../../public/img/no_product.png';

import styles from './Phones.module.scss';

export const Phones: React.FC = () => {
  const dispatch = useAppDispatch();
  const { phones, loading, error } = useAppSelector((state) => state.phones);

  useEffect(() => {
    dispatch(phonesActions.fetchPhones());
  }, [dispatch]);

  if (loading) {
    return (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#f86800"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass={styles.loaderWrapper}
        visible
      />
    );
  }

  if (error) {
    return <ErrorComponent image={notFoundImg} errorMessage={error} />;
  }

  if (phones.length === 0) {
    return (
      <ErrorComponent image={noProductImg} errorMessage="No products there" />
    );
  }

  return (
    <div className={styles.container}>
      <h1>Mobile phones</h1>
      <PaginatedStore itemsPerPage={12} items={phones} />
    </div>
  );
};
