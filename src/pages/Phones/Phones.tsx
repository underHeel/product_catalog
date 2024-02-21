import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { ProductCard } from 'src/components/ProductCard';
import * as phonesActions from '../../features/phones';

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

  return <>{!!phones.length && <ProductCard phone={phones[0]} />}</>;
};
