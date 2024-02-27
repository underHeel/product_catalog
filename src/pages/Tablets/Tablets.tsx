/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Category } from '../../types/Category';
import { ErrorComponent } from '../../components/ErrorComponent';
import * as tabletsActions from '../../redux/slices/tabletsSlice';
import errorImg from '/img/errorImage.png';
import noProductImg from '/img/no_product.png';

export const Tablets: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tablets, error } = useAppSelector((state) => state.tablets);
  const category = Category.tablets;

  useEffect(() => {
    dispatch(tabletsActions.fetchTablets());
  }, []);

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
