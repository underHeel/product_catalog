import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import { Category } from '../../types/Category';
import { getProducts } from '../../api/products';
import { Product } from '../../types/Product';
import styles from './PaginatedStore.module.scss';
import { ArrowLeftIcon } from '../ui/icons/ArrowLeftIcon';
import { IconButton } from '../ui/buttons/IconButton';
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon';
import { ProductCard } from '../ProductCard';
import { CardSkeleton } from '../CardSkeleton/CardSkeleton';

interface Props {
  category: Category;
  pageCount: number;
  itemsPerPage: number;
  sortBy: string;
}

export const PaginatedStore: React.FC<Props> = ({
  category,
  pageCount,
  itemsPerPage,
  sortBy,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [phones, setPhones] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const currentPage = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getProducts(category, currentPage, itemsPerPage, sortBy)
        .then(setPhones)
        .finally(() => setLoading(false));
    }, 1000);
  }, [category, currentPage, itemsPerPage, sortBy]);

  const handlePageClick = (event: { selected: number }) => {
    const selectedPage = event.selected + 1;
    const newSearchParams = new URLSearchParams(searchParams);

    if (selectedPage > 1) {
      newSearchParams.set('page', String(selectedPage));
      setSearchParams(newSearchParams);
    } else if (selectedPage === 1 && newSearchParams.get('page')) {
      newSearchParams.delete('page');
      setSearchParams(newSearchParams);
    }
  };

  return (
    <>
      <div className={styles.cardsList}>
        {loading &&
          [...Array(itemsPerPage)].map(() => (
            <div className={styles.cardWrapper} key={uuidv4()}>
              <CardSkeleton />
            </div>
          ))}
        {!loading &&
          phones.map((phone) => (
            <div className={styles.cardWrapper} key={phone.id}>
              <ProductCard product={phone} />
            </div>
          ))}
      </div>

      {!loading && (
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
            forcePage={currentPage - 1}
            pageClassName={styles.buttons}
            renderOnZeroPageCount={null}
            className={styles.line}
            pageLinkClassName={styles.links}
            activeLinkClassName={styles.activeButton}
            marginPagesDisplayed={2}
          />
        </div>
      )}
    </>
  );
};
