/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SORT_BY } from '../../constants/selectsData';
import { ErrorPage } from '../../components/ErrorPage';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Category } from '../../types/Category';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as productsActions from '../../redux/slices/productsSlice';
import errorImg from '/img/errorImage.png';

export const Phones: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const {
    products: { productsList, totalCount },

    error,
  } = useAppSelector((state) => state.products);
  const category = Category.phones;

  const sort = searchParams.get('sort') || SORT_BY[0].value;

  const currentPage = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1;

  const perPage = searchParams.get('perPage')
    ? Number(searchParams.get('perPage'))
    : totalCount;

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

  if (error) {
    return <ErrorPage image={errorImg} errorMessage={error} />;
  }

  return (
    <>
      <Breadcrumbs />
      <ProductsList
        title="Mobile phones"
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
