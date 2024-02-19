import { useState, useEffect } from 'react';
import { Phone } from 'src/types/Phone';
import { getPhones } from '../api/phones';
import styles from './PhonesPage.module.scss';
import { PhonePage } from './PhonesList/PhonesList';
import { Paginate } from './Paginate/Paginate';

export const GetPagination = () => {
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

  return (
    <>
      <div className={styles.main}>
        <PhonePage phones={currentProducts} loading={isLoading} />
      </div>
      <Paginate
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        paginate={paginate}
      />
    </>
  );
};
