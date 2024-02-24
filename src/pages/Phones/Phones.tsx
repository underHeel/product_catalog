import React, { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
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
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [sortBy, setSortBy] = useState('Newest');
  const dispatch = useAppDispatch();
  const { phones, loading, error } = useAppSelector((state) => state.phones);

  const pageCount = Math.ceil(phones.length / itemsPerPage);

  useEffect(() => {
    dispatch(phonesActions.fetchPhones());
  }, [dispatch]);

  const handleSortSelect = (selectedOption: string) => {
    setSortBy(selectedOption);
  };

  const handleItemSelect = (selectedOption: string) => {
    if (selectedOption === 'all') {
      setItemsPerPage(phones.length);
    } else {
      setItemsPerPage(+selectedOption);
    }
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
              options={SORT_BY}
              onSelect={(selectedOption) => handleSortSelect(selectedOption)}
            />
          </div>
          <div className={styles.itemsPerPage}>
            <Dropdown
              description="Items on page"
              options={ITEMS_PER_PAGE}
              onSelect={(selectedOption) => handleItemSelect(selectedOption)}
            />
          </div>
        </div>
        <PaginatedStore
          pageCount={pageCount}
          itemsPerPage={itemsPerPage}
          sortBy={sortBy}
        />
      </div>
    </div>
  );
};
