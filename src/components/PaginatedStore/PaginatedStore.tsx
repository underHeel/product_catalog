import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Product } from 'src/types/Product';
import { Items } from '../PaginatedItems/PaginatedItems';
import { getPhones } from '../../api/phones';
import styles from './PaginatedStore.module.scss';
import { ArrowLeftIcon } from '../ui/icons/ArrowLeftIcon';
import { IconButton } from '../ui/buttons/IconButton';
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon';

interface Props {
  itemsPerPage: number;
}

export const PaginatedStore: React.FC<Props> = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState<Product[] | []>([]);

  useEffect(() => {
    getPhones().then((data) => {
      setItems(data);
    });
  }, []);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />

      <div className={styles.paginateWrapper}>
        <ReactPaginate
          breakLabel={<IconButton onClick={() => {}}>...</IconButton>}
          nextLabel={
            <IconButton onClick={() => {}}>
              <ArrowRightIcon />
            </IconButton>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={
            <IconButton onClick={() => {}}>
              <ArrowLeftIcon />
            </IconButton>
          }
          pageClassName={styles.buttons}
          renderOnZeroPageCount={null}
          className={styles.line}
          pageLinkClassName={styles.links}
          activeLinkClassName={styles.activeButton}
        />
      </div>
    </>
  );
};
