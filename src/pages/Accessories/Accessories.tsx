/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';
import { SORT_BY } from '../../constants/selectsData';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Category } from '../../types/Category';
import { ErrorPage } from '../../components/ErrorPage';
import * as productsActions from '../../redux/slices/productsSlice';
import errorImg from '/img/errorImage.png';
import noProductImg from '/img/no_product.png';

import styles from './Accessories.module.scss';

export const Accessories: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const {
    products: { productsList, totalCount },
    loading: apiLoading,
    error,
  } = useAppSelector((state) => state.products);
  const category = Category.accessories;

  const sort = searchParams.get('sort') || SORT_BY[0].value;

  const currentPage = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1;

  const perPage = searchParams.get('perPage')
    ? Number(searchParams.get('perPage'))
    : totalCount;

  setTimeout(() => setLoading(false), 1000);

  const handleSortSelect = (selectedOption: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set('sort', selectedOption);
    setSearchParams(newSearchParams);
  };

  const handleItemSelect = (selectedOption: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (selectedOption !== 'all') {
      newSearchParams.set('perPage', selectedOption);
    } else {
      newSearchParams.delete('perPage');
    }

    if (searchParams.get('page')) {
      newSearchParams.delete('page');
    }

    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (!searchParams.get('sort') && !searchParams.get('perPage')) {
      const newSearchParams = new URLSearchParams(searchParams);

      newSearchParams.set('sort', SORT_BY[0].value);
      setSearchParams(newSearchParams);
    }
  }, []);

  useEffect(() => {
    dispatch(
      productsActions.fetchProducts({
        category,
        perPage,
        currentPage,
        sort,
      }),
    );
  }, [category, perPage, currentPage, sort]);

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

  if (totalCount === 0) {
    return <ErrorPage image={noProductImg} errorMessage="No products there" />;
  }

  return (
    <>
      <Breadcrumbs />
      <ProductsList
        title="Accessories"
        products={productsList}
        searchParams={searchParams}
        onSort={handleSortSelect}
        onPerPage={handleItemSelect}
        currentPage={currentPage}
        perPage={perPage}
      />
    </>
  );
};
