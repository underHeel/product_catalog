/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Product } from 'src/types/Product';
import { useAppSelector } from '../../redux/hooks';
import { ITEMS_PER_PAGE, SORT_BY } from '../../constants/selectsData';
import { Dropdown } from '../ui/dropdowns/Dropdown';
import { PaginatedStore } from '../PaginatedStore';
import styles from './ProductsList.module.scss';

interface Props {
  title: string;
  products: Product[];
  searchParams: any;
  currentPage: number;
  perPage: number;
  onSort: (selectedOption: string) => void;
  onPerPage: (selectedOption: string) => void;
}

export const ProductsList: React.FC<Props> = ({
  title,
  products,
  searchParams,
  currentPage,
  perPage,
  onSort,
  onPerPage,
}) => {
  const {
    loading,
    products: { totalCount },
  } = useAppSelector((state) => state.products);

  const sort = searchParams.get('sort') || SORT_BY[0].value;
  const itemsPerPage = searchParams.get('perPage') || ITEMS_PER_PAGE[3].value;
  const pageCount = Math.ceil(totalCount / perPage);

  return (
    <div className={styles.container}>
      <div className={styles.catalogWrapper}>
        <h1 className={styles.title}>{title}</h1>
        {loading ? (
          <div className={styles.subTitleLoading} />
        ) : (
          <p className={styles.subTitle}>{`${totalCount} models`}</p>
        )}
        <div className={styles.dropdownsWrapper}>
          <div className={styles.sortBy}>
            <Dropdown
              description="Sort by"
              value={sort}
              options={SORT_BY}
              onSelect={(selectedOption) => onSort(selectedOption)}
            />
          </div>
          <div className={styles.itemsPerPage}>
            <Dropdown
              description="Items on page"
              value={itemsPerPage}
              options={ITEMS_PER_PAGE}
              onSelect={(selectedOption) => onPerPage(selectedOption)}
            />
          </div>
        </div>
        <PaginatedStore
          pageCount={pageCount}
          products={products}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};
