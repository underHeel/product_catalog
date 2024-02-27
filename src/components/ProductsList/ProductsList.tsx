import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Category } from '../../types/Category';
import { ITEMS_PER_PAGE, SORT_BY } from '../../constants/selectsData';
import { Product } from '../../types/Product';
import { Dropdown } from '../ui/dropdowns/Dropdown';
import { PaginatedStore } from '../PaginatedStore';
import styles from './ProductsList.module.scss';

interface Props {
  title: string;
  category: Category;
  products: Product[];
}

export const ProductsList: React.FC<Props> = ({
  title,
  category,
  products,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') || SORT_BY[0].value;
  const itemsPerPage = searchParams.get('perPage') || ITEMS_PER_PAGE[3].value;

  function getProductsPerPage() {
    if (searchParams.get('perPage')) {
      return Number(searchParams.get('perPage'));
    }

    return products.length;
  }

  useEffect(() => {
    if (!searchParams.get('sort') && !searchParams.get('perPage')) {
      const newSearchParams = new URLSearchParams(searchParams);

      newSearchParams.set('sort', SORT_BY[0].value);
      setSearchParams(newSearchParams);
    }
  }, []);

  const perPage = getProductsPerPage();
  const pageCount = Math.ceil(products.length / perPage);

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

  return (
    <div className={styles.container}>
      <div className={styles.catalogWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subTitle}>{`${products.length} models`}</p>
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
              value={itemsPerPage}
              options={ITEMS_PER_PAGE}
              onSelect={(selectedOption) => handleItemSelect(selectedOption)}
            />
          </div>
        </div>
        <PaginatedStore
          category={category}
          pageCount={pageCount}
          itemsPerPage={perPage}
          sortBy={sort}
        />
      </div>
    </div>
  );
};
