import React, { useEffect } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as phonesActions from '../../features/phones';

export const Phones: React.FC = () => {
  const dispatch = useAppDispatch();
  const { phones, loading, error } = useAppSelector((state) => state.phones);

  useEffect(() => {
    dispatch(phonesActions.init());
  }, [dispatch]);

  if (loading) {
    return <p>Loadig...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <>{!!phones.length && <ProductCard phone={phones[0]} />}</>;
};
