import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import { getPhones } from '../../api/phones';
import { Product } from '../../types/Product';
import styles from './PaginatedStore.module.scss';
import { ArrowLeftIcon } from '../ui/icons/ArrowLeftIcon';
import { IconButton } from '../ui/buttons/IconButton';
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon';
import { ProductCard } from '../ProductCard';

interface Props {
  pageCount: number;
  itemsPerPage: number;
  sortBy: string;
}

export const PaginatedStore: React.FC<Props> = ({
  pageCount,
  itemsPerPage,
  sortBy,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [phones, setPhones] = useState<Product[]>([]);

  const currentPage = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1;

  useEffect(() => {
    getPhones(currentPage, itemsPerPage, sortBy).then(setPhones);
  }, [currentPage, itemsPerPage, sortBy]);

  const handlePageClick = (event: { selected: number }) => {
    const selectedPage = event.selected + 1;
    const newSearchParams = new URLSearchParams(searchParams);

    if (selectedPage !== 1) {
      newSearchParams.set('page', String(selectedPage));
    } else {
      newSearchParams.delete('page');
      // window.history.replaceState(
      //   null,
      //   '',
      //   `${window.location.pathname}${newSearchParams.toString()}`,
      // );
    }

    setSearchParams(newSearchParams);
  };

  return (
    <>
      <div className={styles.cardsList}>
        {phones.map((phone) => (
          <div className={styles.cardWrapper} key={phone.id}>
            <ProductCard product={phone} />
          </div>
        ))}
      </div>

      <div className={styles.paginateWrapper}>
        <ReactPaginate
          breakLabel={<IconButton>...</IconButton>}
          nextLabel={
            <IconButton isDisabled={currentPage === pageCount}>
              <ArrowRightIcon fill="var(--color)" />
            </IconButton>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel={
            <IconButton isDisabled={currentPage === 1}>
              <ArrowLeftIcon fill="var(--color)" />
            </IconButton>
          }
          initialPage={currentPage - 1}
          pageClassName={styles.buttons}
          renderOnZeroPageCount={null}
          className={styles.line}
          pageLinkClassName={styles.links}
          activeLinkClassName={styles.activeButton}
          marginPagesDisplayed={2}
        />
      </div>
    </>
  );
};
