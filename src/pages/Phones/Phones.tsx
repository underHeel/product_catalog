/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';
import { ITEMS_PER_PAGE, SORT_BY } from '../../constants/selectsData';
import { Dropdown } from '../../components/ui/dropdowns/Dropdown';
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent';
import { PaginatedStore } from '../../components/PaginatedStore';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as phonesActions from '../../redux/slices/phonesSlice';
import errorImg from '/img/errorImage.png';
import noProductImg from '/img/no_product.png';

import styles from './Phones.module.scss';

export const Phones: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { phones, loading, error } = useAppSelector((state) => state.phones);

  const sort = searchParams.get('sort') || SORT_BY[0].value;
  const perPage =
    (searchParams.get('perPage') && Number(searchParams.get('perPage'))) ||
    +ITEMS_PER_PAGE[0].value;

  const pageCount = Math.ceil(phones.length / perPage);

  useEffect(() => {
    dispatch(phonesActions.fetchPhones());
  }, []);

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

    setSearchParams(newSearchParams);
  };

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
      <div className={styles.catalogWrapper}>
        <h1 className={styles.title}>Mobile phones</h1>
        <p className={styles.subTitle}>{`${phones.length} models`}</p>
        <div className={styles.dropdownsWrapper}>
          <div className={styles.sortBy}>
            <Dropdown
              description="Sort by"
              value={sort}
              options={SORT_BY}
              onSelect={(selectedOption) => handleSortSelect(selectedOption)}
            />
          </div>
          <div className={styles.itemsPerPage}>
            <Dropdown
              description="Items on page"
              value={ITEMS_PER_PAGE[0].value}
              options={ITEMS_PER_PAGE}
              onSelect={(selectedOption) => handleItemSelect(selectedOption)}
            />
          </div>
        </div>
        <PaginatedStore
          pageCount={pageCount}
          itemsPerPage={perPage}
          sortBy={sort}
        />
      </div>
    </div>
  );
};
