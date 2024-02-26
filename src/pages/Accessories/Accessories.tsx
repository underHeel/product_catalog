/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Category } from '../../types/Category';
import { ErrorComponent } from '../../components/ErrorComponent';
import * as accessoriesActions from '../../redux/slices/accessoriesSlice';
import errorImg from '/img/errorImage.png';
import noProductImg from '/img/no_product.png';

import styles from './Accessories.module.scss';

export const Accessories: React.FC = () => {
  const dispatch = useAppDispatch();
  const { accessories, error } = useAppSelector((state) => state.accessories);
  const category = Category.accessories;

  useEffect(() => {
    dispatch(accessoriesActions.fetchAccessories());
  }, []);

  if (error) {
    return <ErrorComponent image={errorImg} errorMessage={error} />;
  }

  if (accessories.length === 0) {
    return (
      <div className={styles.wrapper}>
        <ErrorComponent image={noProductImg} errorMessage="No products there" />
      </div>
    );
  }

  return (
    <ProductsList title="Tablets" category={category} products={accessories} />
  );
};
