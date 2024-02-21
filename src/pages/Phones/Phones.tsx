import React, { useEffect } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as phonesActions from '../../redux/slices/phonesSlice';

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
    <>
      {!!phones.length &&
        phones.map((phone) => <ProductCard phone={phone} key={phone.id} />)}
    </>
  );
};
