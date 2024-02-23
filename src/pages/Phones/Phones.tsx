import React, { useEffect } from 'react';
import { PaginatedStore } from '../../components/PaginatedStore';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as phonesActions from '../../redux/slices/phonesSlice';

import styles from './Phones.module.scss';

export const Phones: React.FC = () => {
  const dispatch = useAppDispatch();
  const { phones, loading, error } = useAppSelector((state) => state.phones);

  useEffect(() => {
    dispatch(phonesActions.fetchPhones());
  }, [dispatch]);

  if (loading) {
    return <p>Loadig...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Mobile phones</h1>
      <PaginatedStore itemsPerPage={12} items={phones} />
    </div>
  );
};
