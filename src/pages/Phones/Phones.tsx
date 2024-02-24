import React, { useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent';
import { PaginatedStore } from '../../components/PaginatedStore';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as phonesActions from '../../redux/slices/phonesSlice';
import errorImg from '../../../public/img/errorImage.png';
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
    <div className={styles.container}>
      <h1>Mobile phones</h1>
      <PaginatedStore itemsPerPage={12} items={phones} />
    </div>
  );
};
