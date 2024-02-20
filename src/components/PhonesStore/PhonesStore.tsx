import { useState, useEffect } from 'react';
import { Phone } from 'src/types/Phone';
import { getPhones } from '../../api/phones';
import { PhonesList } from '../PhonesList/PhonesList';
import { PaginateLine } from '../PaginateLine/PaginateLine';
import { IconButton } from '../ui/buttons/IconButton';
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon';
import styles from './PhonesStore.module.scss';

export const PhonesStore = () => {
  const [products, setProducts] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16);

  useEffect(() => {
    setIsLoading(true);
    getPhones().then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  const lastProductIndex = currentPage * itemsPerPage;
  const firstProductIndex = lastProductIndex - itemsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => setCurrentPage((prev) => prev + 1);

  return (
    <>
      <div className={styles.main}>
        <PhonesList phones={currentProducts} loading={isLoading} />
      </div>
      <PaginateLine
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        currentPage={currentPage}
        paginate={paginate}
      />
      <IconButton onClick={nextPage}>
        <ArrowRightIcon />
      </IconButton>
    </>
  );
};
